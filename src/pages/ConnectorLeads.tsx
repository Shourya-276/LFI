
/**
 * CONNECTOR LEADS PAGE
 * 
 * This component handles lead management for connector users.
 * It includes the ability to add new leads and view existing leads
 * with status tracking exactly as shown in the reference images.
 * 
 * USAGE:
 * - Accessible via /connector-leads route
 * - Used within ConnectorDashboard navigation
 */

import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import ConnectorLayout from "../components/ConnectorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { X, Filter, Search } from "lucide-react";

const ConnectorLeads = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("leads");
  const [isAddLeadOpen, setIsAddLeadOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<any>(null);
  
  const [newLead, setNewLead] = useState({
    leadName: "",
    mobileNumber: "",
    leadEmail: "",
  });

  const [leads, setLeads] = useState([
    { id: "#1", date: "31|05|25", name: "Priya Mehta", loanType: "HL", bankName: "Sbi", status: "In process", stage: 2 },
    { id: "#2", date: "1|05|25", name: "Rajesh Sharma", loanType: "HL", bankName: "Hdfc", status: "Pending", stage: 1 },
    { id: "#3", date: "2|05|25", name: "Anil Gupta", loanType: "HL", bankName: "kotak", status: "In process", stage: 3 },
    { id: "#4", date: "4|05|25", name: "Rajesh Sharma", loanType: "HL", bankName: "ICIC", status: "Pending", stage: 1 },
    { id: "#5", date: "6|05|25", name: "Priya Mehta", loanType: "HL", bankName: "Sbi", status: "Pending", stage: 1 },
    { id: "#6", date: "9|05|25", name: "Priya Mehta", loanType: "HL", bankName: "Hdfc", status: "Pending", stage: 1 },
    { id: "#7", date: "10|05|25", name: "Neha Verma", loanType: "HL", bankName: "kotak", status: "In process", stage: 4 },
    { id: "#8", date: "18|05|25", name: "Priya Mehta", loanType: "HL", bankName: "ICIC", status: "Pending", stage: 1 },
    { id: "#8", date: "21|05|25", name: "Anil Gupta", loanType: "HL", bankName: "ICIC", status: "Rejected", stage: 0 },
  ]);

  // Check if user is authorized
  if (!user || user.role !== "connector") {
    return <Navigate to="/dashboard" />;
  }

  const handleAddLead = () => {
    const newLeadEntry = {
      id: `#${leads.length + 1}`,
      date: new Date().toLocaleDateString('en-GB').replace(/\//g, '|'),
      name: newLead.leadName,
      loanType: "HL",
      bankName: "Sbi",
      status: "Pending",
      stage: 1
    };
    
    setLeads([...leads, newLeadEntry]);
    setNewLead({ leadName: "", mobileNumber: "", leadEmail: "" });
    setIsAddLeadOpen(false);
  };

  const handleClearLead = () => {
    setNewLead({ leadName: "", mobileNumber: "", leadEmail: "" });
  };

  const handleStatusClick = (lead: any) => {
    setSelectedLead(lead);
    setIsStatusOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "in process":
        return "text-green-600";
      case "pending":
        return "text-yellow-600";
      case "rejected":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const StatusProgress = ({ stage }: { stage: number }) => {
    const stages = [
      { id: 1, label: "Stage 1", status: "Done" },
      { id: 2, label: "Stage 2", status: "Done" },
      { id: 3, label: "Stage 3", status: "Next Step" },
      { id: 4, label: "Stage 4", status: "Next Step" },
      { id: 5, label: "Stage 5", status: "Next Step" },
      { id: 6, label: "Stage 6", status: "Final Step" },
    ];

    return (
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-center">Track your loan progress in real-time.</h3>
        <div className="space-y-4">
          <div className="flex justify-center">
            <span className="bg-gray-200 px-4 py-1 rounded-full text-sm">Processing...</span>
          </div>
          <div className="flex justify-between items-center">
            {stages.map((stageItem, index) => (
              <div key={stageItem.id} className="flex flex-col items-center">
                <div className="flex items-center">
                  {index < stage ? (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">✓ Done</span>
                  ) : index === stage ? (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">✓ Next Step</span>
                  ) : (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">▷ Next Step</span>
                  )}
                </div>
                <div className="text-xs text-gray-600 mt-1">{stageItem.label}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4">
            {stages.map((_, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className={`w-4 h-4 rounded-full ${
                    index < stage ? 'bg-blue-600' : index === stage ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
                {index < stages.length - 1 && (
                  <div className={`h-0.5 w-16 ${index < stage ? 'bg-blue-600' : 'bg-gray-300'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <ConnectorLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="space-y-6">
        {/* Add Lead Button */}
        <div className="flex justify-center">
          <Dialog open={isAddLeadOpen} onOpenChange={setIsAddLeadOpen}>
            <DialogTrigger asChild>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2">
                Add Lead
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <div className="flex justify-between items-center">
                  <DialogTitle>Create Lead</DialogTitle>
                  <Button variant="ghost" size="sm" onClick={() => setIsAddLeadOpen(false)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="leadName">Lead Name</Label>
                    <Input
                      id="leadName"
                      placeholder="Enter Lead Name"
                      value={newLead.leadName}
                      onChange={(e) => setNewLead({...newLead, leadName: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobileNumber">Mobile Number.</Label>
                    <Input
                      id="mobileNumber"
                      placeholder="Enter Lead Number"
                      value={newLead.mobileNumber}
                      onChange={(e) => setNewLead({...newLead, mobileNumber: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="leadEmail">Lead Email</Label>
                  <Input
                    id="leadEmail"
                    placeholder="Enter Lead Email"
                    value={newLead.leadEmail}
                    onChange={(e) => setNewLead({...newLead, leadEmail: e.target.value})}
                  />
                </div>
                <div className="flex gap-2 pt-4">
                  <Button variant="outline" onClick={handleClearLead}>Clear</Button>
                  <Button onClick={handleAddLead} className="bg-indigo-600 hover:bg-indigo-700">
                    Create Lead
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search and Filter */}
        <div className="flex justify-between items-center">
          <div className="relative max-w-md flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search by Lead Name, Lead ID"
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="ml-4">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex gap-4">
          <Button variant="outline" className="border-indigo-600 text-indigo-600">Sanctioned</Button>
          <Button variant="outline">Disbursed</Button>
          <Button variant="outline">Pending</Button>
        </div>

        {/* Leads Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b">
                  <tr>
                    <th className="text-left py-4 px-6">Lead Number</th>
                    <th className="text-left py-4 px-6">Date</th>
                    <th className="text-left py-4 px-6">Name</th>
                    <th className="text-left py-4 px-6">Loan type</th>
                    <th className="text-left py-4 px-6">Bank Name</th>
                    <th className="text-left py-4 px-6">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-6">{lead.id}</td>
                      <td className="py-4 px-6">{lead.date}</td>
                      <td className="py-4 px-6">{lead.name}</td>
                      <td className="py-4 px-6">{lead.loanType}</td>
                      <td className="py-4 px-6">{lead.bankName}</td>
                      <td className="py-4 px-6">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className={getStatusColor(lead.status)}
                          onClick={() => handleStatusClick(lead)}
                        >
                          {lead.status}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Status Progress Dialog */}
        <Dialog open={isStatusOpen} onOpenChange={setIsStatusOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <div className="flex justify-between items-center">
                <DialogTitle></DialogTitle>
                <Button variant="ghost" size="sm" onClick={() => setIsStatusOpen(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </DialogHeader>
            {selectedLead && <StatusProgress stage={selectedLead.stage} />}
          </DialogContent>
        </Dialog>
      </div>
    </ConnectorLayout>
  );
};

export default ConnectorLeads;
