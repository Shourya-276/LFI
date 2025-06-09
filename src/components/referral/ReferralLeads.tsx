
/**
 * REFERRAL LEADS COMPONENT
 * 
 * This component manages the lead viewing and creation functionality.
 * It includes a leads table with filters, search, and an "Add Lead" modal.
 * 
 * USAGE:
 * - Used within ReferralDashboard.tsx when leads tab is active
 * - Provides lead management interface
 */

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Filter } from "lucide-react";

const ReferralLeads = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("Sanctioned");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newLead, setNewLead] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const leads = [
    { id: "#1", date: "31 | 05 | 25", name: "Priya Mehta", loanType: "HL", bankName: "SBI", status: "In process" },
    { id: "#2", date: "1 | 06 | 25", name: "Rajesh Sharma", loanType: "HL", bankName: "Hdfc", status: "Pending" },
    { id: "#3", date: "2 | 05 | 25", name: "Anil Gupta", loanType: "HL", bankName: "kotak", status: "In process" },
    { id: "#4", date: "4 | 05 | 25", name: "Rajesh Sharma", loanType: "HL", bankName: "ICIC", status: "Pending" },
    { id: "#5", date: "6 | 05 | 25", name: "Priya Mehta", loanType: "HL", bankName: "SBI", status: "Pending" },
    { id: "#6", date: "9 | 05 | 25", name: "Priya Mehta", loanType: "HL", bankName: "Hdfc", status: "Pending" },
    { id: "#7", date: "10 | 05 | 25", name: "Neha Verma", loanType: "HL", bankName: "kotak", status: "In process" },
    { id: "#8", date: "18 | 05 | 25", name: "Priya Mehta", loanType: "HL", bankName: "ICIC", status: "Pending" },
    { id: "#9", date: "21 | 05 | 25", name: "Anil Gupta", loanType: "HL", bankName: "ICIC", status: "Rejected" },
  ];

  const filters = ["Sanctioned", "Approved", "Pending"];

  const handleCreateLead = () => {
    console.log("Creating lead:", newLead);
    setShowCreateModal(false);
    setNewLead({ name: "", mobile: "", email: "" });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">View Leads</h1>
        <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
          <DialogTrigger asChild>
            <Button className="bg-indigo-600 hover:bg-indigo-700">Add Lead</Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Create Lead</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
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
                  <Label htmlFor="mobile">Mobile Number.</Label>
                  <Input
                    id="mobile"
                    placeholder="Enter Lead Number"
                    value={newLead.mobile}
                    onChange={(e) => setNewLead(prev => ({ ...prev, mobile: e.target.value }))}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Lead Email</Label>
                <Input
                  id="email"
                  placeholder="Enter Lead Email"
                  value={newLead.email}
                  onChange={(e) => setNewLead(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div className="flex gap-2 pt-4">
                <Button variant="outline" onClick={() => setShowCreateModal(false)}>
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

      <Card>
        <CardContent className="p-6">
          {/* Search and Filter */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search by Lead Name, Lead ID"
                  className="pl-10 w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-4 mb-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeFilter === filter
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {filter}
              </button>
            ))}
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
                {leads.map((lead, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3">{lead.id}</td>
                    <td className="py-3">{lead.date}</td>
                    <td className="py-3">{lead.name}</td>
                    <td className="py-3">{lead.loanType}</td>
                    <td className="py-3">{lead.bankName}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded text-xs ${
                        lead.status === "In process" ? "bg-green-100 text-green-700" :
                        lead.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                        "bg-red-100 text-red-700"
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReferralLeads;
