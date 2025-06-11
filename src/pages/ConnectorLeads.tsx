
import React, { useState } from "react";
import ConnectorLayout from "../components/ConnectorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ConnectorLeads = () => {
  const [activeTab, setActiveTab] = useState("Sanctioned");
  const [isAddLeadOpen, setIsAddLeadOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [newLead, setNewLead] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const leads = [
    { id: "#1", date: "31|05|25", name: "Priya Mehta", type: "HL", bank: "Sbi", status: "In process" },
    { id: "#2", date: "1|05|25", name: "Rajesh Sharma", type: "HL", bank: "Hdfc", status: "Pending" },
    { id: "#3", date: "2|05|25", name: "Anil Gupta", type: "HL", bank: "kotak", status: "In process" },
    { id: "#4", date: "4|05|25", name: "Rajesh Sharma", type: "HL", bank: "ICIC", status: "Pending" },
    { id: "#5", date: "6|05|25", name: "Priya Mehta", type: "HL", bank: "Sbi", status: "Pending" },
    { id: "#6", date: "9|05|25", name: "Priya Mehta", type: "HL", bank: "Hdfc", status: "Pending" },
    { id: "#7", date: "10|05|25", name: "Neha Verma", type: "HL", bank: "kotak", status: "In process" },
    { id: "#8", date: "18|05|25", name: "Priya Mehta", type: "HL", bank: "ICIC", status: "Pending" },
    { id: "#9", date: "21|05|25", name: "Anil Gupta", type: "HL", bank: "ICIC", status: "Rejected" },
  ];

  const filteredLeads = leads.filter(lead =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddLead = () => {
    console.log("Adding new lead:", newLead);
    setNewLead({ name: "", email: "", mobile: "" });
    setIsAddLeadOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In process":
        return "bg-green-100 text-green-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Rejected":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <ConnectorLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-center">
          <Button
            onClick={() => setIsAddLeadOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
          >
            Add Lead
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center justify-between">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by Lead Name, Lead ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1 w-fit">
          {["Sanctioned", "Disbursed", "Pending"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Lead Number</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Loan type</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Bank Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-3 px-4 text-sm">{lead.id}</td>
                  <td className="py-3 px-4 text-sm">{lead.date}</td>
                  <td className="py-3 px-4 text-sm">{lead.name}</td>
                  <td className="py-3 px-4 text-sm">{lead.type}</td>
                  <td className="py-3 px-4 text-sm">{lead.bank}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs px-2 py-1 rounded ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Lead Modal */}
        <Dialog open={isAddLeadOpen} onOpenChange={setIsAddLeadOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Create Lead</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Lead Name</label>
                <Input
                  placeholder="Enter Lead Name..."
                  value={newLead.name}
                  onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <Input
                  placeholder="Enter Lead Number"
                  value={newLead.mobile}
                  onChange={(e) => setNewLead({ ...newLead, mobile: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Lead Email</label>
                <Input
                  placeholder="Enter Lead Email"
                  type="email"
                  value={newLead.email}
                  onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
                />
              </div>
              <div className="flex gap-2 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setIsAddLeadOpen(false)}
                  className="flex-1"
                >
                  Clear
                </Button>
                <Button
                  onClick={handleAddLead}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  Create Lead
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </ConnectorLayout>
  );
};

export default ConnectorLeads;
