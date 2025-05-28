
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoanCoordinatorBankSanctions = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [searchTerm, setSearchTerm] = useState("");

  const pendingData = [
    { leadId: "#8232", leadName: "Rajesh Sharma", bankName: "HDFC Bank", pendingDocs: "KYC, Salary Slip", action: "Upload" },
    { leadId: "#1232", leadName: "Priya Mehta", bankName: "SBI", pendingDocs: "PAN Card, Income Proof", action: "Upload" },
    { leadId: "#4232", leadName: "Anil Gupta", bankName: "HDFC Bank", pendingDocs: "Salary Slip, Income Proof", action: "Upload" },
    { leadId: "#1232", leadName: "Priya Mehta", bankName: "SBI", pendingDocs: "PAN Card, Income Proof", action: "Upload" },
    { leadId: "#8232", leadName: "Rajesh Sharma", bankName: "HDFC Bank", pendingDocs: "KYC, Salary Slip", action: "Upload" },
    { leadId: "#4232", leadName: "Anil Gupta", bankName: "HDFC Bank", pendingDocs: "Salary Slip, Income Proof", action: "Upload" }
  ];

  const completedData = [
    { leadId: "#8232", leadName: "Rajesh Sharma", bankName: "HDFC Bank", sanctionDate: "13 Mar 2024", sanctionLetter: "View" },
    { leadId: "#8232", leadName: "Rajesh Sharma", bankName: "HDFC Bank", sanctionDate: "13 Mar 2024", sanctionLetter: "View" },
    { leadId: "#8232", leadName: "Rajesh Sharma", bankName: "HDFC Bank", sanctionDate: "13 Mar 2024", sanctionLetter: "View" }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Bank Sanctions</h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          {/* Tab Navigation */}
          <div className="flex gap-4 mb-6">
            <Button
              onClick={() => setActiveTab("pending")}
              variant={activeTab === "pending" ? "default" : "outline"}
            >
              Pending
            </Button>
            <Button
              onClick={() => setActiveTab("completed")}
              variant={activeTab === "completed" ? "default" : "outline"}
            >
              Completed
            </Button>
          </div>

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

          {/* Sub Tabs for Pending */}
          {activeTab === "pending" && (
            <div className="flex gap-4 mb-6">
              <Button variant="outline" size="sm">Uploaded</Button>
              <Button variant="outline" size="sm">Pending</Button>
            </div>
          )}

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead ID</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Bank Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    {activeTab === "pending" ? "Pending Docs" : "Sanction Date"}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    {activeTab === "pending" ? "Upload Action" : "Sanction Letter"}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {activeTab === "pending" ? 
                  pendingData.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadId}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadName}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.bankName}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.pendingDocs}</td>
                      <td className="px-6 py-4 text-sm">
                        <Button size="sm" variant="outline">
                          <span className="mr-1">📤</span> {item.action}
                        </Button>
                      </td>
                    </tr>
                  )) :
                  completedData.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadId}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadName}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.bankName}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.sanctionDate}</td>
                      <td className="px-6 py-4 text-sm">
                        <Button size="sm" variant="outline">
                          {item.sanctionLetter}
                        </Button>
                      </td>
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

export default LoanCoordinatorBankSanctions;
