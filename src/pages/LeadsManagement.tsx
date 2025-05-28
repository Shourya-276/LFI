
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const LeadsManagement = () => {
  const [activeTab, setActiveTab] = useState("followup");
  const [searchTerm, setSearchTerm] = useState("");

  const followupLeads = [
    { name: "Rajesh Sharma", action: "Followup", contact: "9876543210", leadId: "#8232" },
    { name: "Priya Mehta", action: "Reject", contact: "7276543210", leadId: "#1232" },
    { name: "Priya Mehta", action: "Followup", contact: "8976543210", leadId: "#3232" },
    { name: "Anil Gupta", action: "Reject", contact: "7376543210", leadId: "#4232" },
    { name: "Neha Verma", action: "Followup", contact: "8276543210", leadId: "#2232" },
    { name: "Anil Gupta", action: "Reject", contact: "7876543210", leadId: "#7232" },
    { name: "Rajesh Sharma", action: "Followup", contact: "9076543210", leadId: "#8232" },
    { name: "Priya Mehta", action: "Followup", contact: "8876543210", leadId: "#3232" },
    { name: "Anil Gupta", action: "Followup", contact: "7676543210", leadId: "#7232" }
  ];

  const lfiSanctions = [
    { name: "Rajesh Sharma", bankName: "HDFC Bank", status: "Approved", leadId: "#8232" },
    { name: "Priya Mehta", bankName: "SBI", status: "Pending", leadId: "#1232" },
    { name: "Priya Mehta", bankName: "ICICI Bank", status: "Approved", leadId: "#3232" },
    { name: "Anil Gupta", bankName: "SBI", status: "Approved", leadId: "#4232" },
    { name: "Neha Verma", bankName: "ICICI Bank", status: "Pending", leadId: "#2232" },
    { name: "Anil Gupta", bankName: "HDFC Bank", status: "Rejected", leadId: "#7232" },
    { name: "Rajesh Sharma", bankName: "ICICI Bank", status: "9076543210", leadId: "#8232" },
    { name: "Priya Mehta", bankName: "SBI", status: "Approved", leadId: "#3232" },
    { name: "Anil Gupta", bankName: "ICICI Bank", status: "Rejected", leadId: "#7232" }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Leads Management</h1>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4">
          <Button
            onClick={() => setActiveTab("followup")}
            className={`${activeTab === "followup" ? "bg-brand-purple text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
          >
            <span className="mr-2">📞</span> Followup Leads
          </Button>
          <Button
            onClick={() => setActiveTab("lfi")}
            className={`${activeTab === "lfi" ? "bg-brand-purple text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
          >
            <span className="mr-2">📄</span> LFI Sanctions
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Search by Lead Name, Lead ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Button variant="outline">
              <span className="mr-2">🔍</span> Filter
            </Button>
          </div>

          {/* Status Tabs for Followup Leads */}
          {activeTab === "followup" && (
            <div className="flex gap-4 mb-6">
              <Button variant="outline" size="sm">Followed Up</Button>
              <Button variant="outline" size="sm">Completed</Button>
              <Button variant="outline" size="sm">Pending</Button>
            </div>
          )}

          {/* Status Tabs for LFI Sanctions */}
          {activeTab === "lfi" && (
            <div className="flex gap-4 mb-6">
              <Button variant="outline" size="sm">Sanctioned</Button>
              <Button variant="outline" size="sm">Approved</Button>
              <Button variant="outline" size="sm">Pending</Button>
            </div>
          )}

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    {activeTab === "followup" ? "Actions" : "Bank Name"}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    {activeTab === "followup" ? "Contact" : "Loan Status"}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead ID</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {activeTab === "followup" ? 
                  followupLeads.map((lead, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{lead.name}</td>
                      <td className="px-6 py-4 text-sm">
                        <Select>
                          <SelectTrigger className="w-32">
                            <SelectValue placeholder={lead.action} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="followup">Followup</SelectItem>
                            <SelectItem value="reject">Reject</SelectItem>
                            <SelectItem value="complete">Complete</SelectItem>
                          </SelectContent>
                        </Select>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{lead.contact}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{lead.leadId}</td>
                    </tr>
                  )) :
                  lfiSanctions.map((lead, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{lead.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{lead.bankName}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          lead.status === 'Approved' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                          lead.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                          'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{lead.leadId}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LeadsManagement;
