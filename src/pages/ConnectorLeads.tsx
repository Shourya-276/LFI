
import React, { useState } from "react";
import ConnectorLayout from "../components/ConnectorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Filter, X } from "lucide-react";

const ConnectorLeads = () => {
  const [activeTab, setActiveTab] = useState("leads");
  const [isAddLeadOpen, setIsAddLeadOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [newLead, setNewLead] = useState({
    name: "",
    mobile: "",
    email: ""
  });

  const leads = [
    { id: 1, leadNumber: "#1", date: "31|05|25", name: "Priya Mehta", loanType: "HL", bankName: "Sbi", status: "In process" },
    { id: 2, leadNumber: "#2", date: "1|05|25", name: "Rajesh Sharma", loanType: "HL", bankName: "Hdfc", status: "Pending" },
    { id: 3, leadNumber: "#3", date: "2|05|25", name: "Anil Gupta", loanType: "HL", bankName: "kotak", status: "In process" },
    { id: 4, leadNumber: "#4", date: "4|05|25", name: "Rajesh Sharma", loanType: "HL", bankName: "ICIC", status: "Pending" },
    { id: 5, leadNumber: "#5", date: "6|05|25", name: "Priya Mehta", loanType: "HL", bankName: "Sbi", status: "Pending" },
    { id: 6, leadNumber: "#6", date: "9|05|25", name: "Priya Mehta", loanType: "HL", bankName: "Hdfc", status: "Pending" },
    { id: 7, leadNumber: "#7", date: "10|05|25", name: "Neha Verma", loanType: "HL", bankName: "kotak", status: "In process" },
    { id: 8, leadNumber: "#8", date: "18|05|25", name: "Priya Mehta", loanType: "HL", bankName: "ICIC", status: "Pending" },
    { id: 9, leadNumber: "#9", date: "21|05|25", name: "Anil Gupta", loanType: "HL", bankName: "ICIC", status: "Rejected" },
  ];

  const handleCreateLead = () => {
    console.log("Creating lead:", newLead);
    setNewLead({ name: "", mobile: "", email: "" });
    setIsAddLeadOpen(false);
  };

  const handleStatusClick = (lead: any) => {
    setSelectedLead(lead);
    setIsStatusOpen(true);
  };

  const StatusProgressPopup = () => (
    <Dialog open={isStatusOpen} onOpenChange={setIsStatusOpen}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Track your loan progress in real-time.
            <Button variant="ghost" onClick={() => setIsStatusOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="text-center">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded">Processing...</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs mb-2">✓</div>
              <div className="text-sm font-medium">Done</div>
              <div className="text-xs text-gray-600">Stage 1</div>
            </div>
            
            <div className="h-1 flex-1 bg-blue-600 mx-2"></div>
            
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs mb-2">✓</div>
              <div className="text-sm font-medium text-green-600">Next Step</div>
              <div className="text-xs text-gray-600">Stage 2</div>
            </div>
            
            <div className="h-1 flex-1 bg-gray-300 mx-2"></div>
            
            <div className="text-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-xs mb-2"></div>
              <div className="text-sm font-medium text-green-600">Next Step</div>
              <div className="text-xs text-gray-600">Stage 3</div>
            </div>
            
            <div className="h-1 flex-1 bg-gray-300 mx-2"></div>
            
            <div className="text-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-xs mb-2"></div>
              <div className="text-sm font-medium text-green-600">Next Step</div>
              <div className="text-xs text-gray-600">Stage 4</div>
            </div>
            
            <div className="h-1 flex-1 bg-gray-300 mx-2"></div>
            
            <div className="text-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-xs mb-2"></div>
              <div className="text-sm font-medium text-green-600">Next Step</div>
              <div className="text-xs text-gray-600">Stage 5</div>
            </div>
            
            <div className="h-1 flex-1 bg-gray-300 mx-2"></div>
            
            <div className="text-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-xs mb-2">{'>'}</div>
              <div className="text-sm font-medium text-green-600">Final Step</div>
              <div className="text-xs text-gray-600">Stage 6</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <ConnectorLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="space-y-6">
        {/* Add Lead Button */}
        <div className="flex justify-center">
          <Dialog open={isAddLeadOpen} onOpenChange={setIsAddLeadOpen}>
            <DialogTrigger asChild>
              <Button className="bg-indigo-600 hover:bg-indigo-700 px-8">
                Add Lead
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  Create Lead
                  <Button variant="ghost" onClick={() => setIsAddLeadOpen(false)}>
                    <X className="w-4 h-4" />
                  </Button>
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="leadName">Lead Name</Label>
                    <Input
                      id="leadName"
                      placeholder="Enter Lead Name"
                      value={newLead.name}
                      onChange={(e) => setNewLead(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="leadMobile">Mobile Number.</Label>
                    <Input
                      id="leadMobile"
                      placeholder="Enter Lead Number"
                      value={newLead.mobile}
                      onChange={(e) => setNewLead(prev => ({ ...prev, mobile: e.target.value }))}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="leadEmail">Lead Email</Label>
                  <Input
                    id="leadEmail"
                    placeholder="Enter Lead Email"
                    value={newLead.email}
                    onChange={(e) => setNewLead(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                <div className="flex gap-2 pt-4">
                  <Button variant="outline" onClick={() => setNewLead({ name: "", mobile: "", email: "" })}>
                    Clear
                  </Button>
                  <Button onClick={handleCreateLead} className="bg-indigo-600 hover:bg-indigo-700">
                    Create Lead
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search by Lead Name, Lead ID"
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>

            {/* Status Filters */}
            <div className="flex gap-2 mb-6">
              <Button variant="outline" size="sm">Sanctioned</Button>
              <Button variant="outline" size="sm">Disbursed</Button>
              <Button variant="outline" size="sm">Pending</Button>
            </div>

            {/* Leads Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3">Lead Number</th>
                    <th className="text-left py-3">Date</th>
                    <th className="text-left py-3">Name</th>
                    <th className="text-left py-3">Loan type</th>
                    <th className="text-left py-3">Bank Name</th>
                    <th className="text-left py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="py-3">{lead.leadNumber}</td>
                      <td className="py-3">{lead.date}</td>
                      <td className="py-3">{lead.name}</td>
                      <td className="py-3">{lead.loanType}</td>
                      <td className="py-3">{lead.bankName}</td>
                      <td className="py-3">
                        <Button 
                          size="sm"
                          variant="outline"
                          onClick={() => handleStatusClick(lead)}
                          className={`${
                            lead.status === "In process" ? "text-green-600 border-green-600" :
                            lead.status === "Rejected" ? "text-red-600 border-red-600" :
                            "text-yellow-600 border-yellow-600"
                          }`}
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

        <StatusProgressPopup />
      </div>
    </ConnectorLayout>
  );
};

export default ConnectorLeads;
