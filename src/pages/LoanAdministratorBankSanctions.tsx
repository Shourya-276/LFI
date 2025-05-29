
import React, { useState } from "react";
import LoanAdministratorLayout from "../components/LoanAdministratorLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Upload, Download } from "lucide-react";

const LoanAdministratorBankSanctions = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [searchTerm, setSearchTerm] = useState("");

  const pendingData = [
    {
      leadId: "#8232",
      leadName: "Rajesh Sharma",
      bankName: "HDFC Bank",
      pendingDocs: "KYC, Salary Slip",
      action: "upload"
    },
    {
      leadId: "#1232",
      leadName: "Priya Mehta",
      bankName: "SBI",
      pendingDocs: "PAN Card, Income Proof",
      action: "upload"
    },
    {
      leadId: "#4232",
      leadName: "Anil Gupta",
      bankName: "HDFC Bank",
      pendingDocs: "Salary Slip, Income Proof",
      action: "done"
    },
    {
      leadId: "#1232",
      leadName: "Priya Mehta",
      bankName: "SBI",
      pendingDocs: "PAN Card, Income Proof",
      action: "upload"
    },
    {
      leadId: "#8232",
      leadName: "Rajesh Sharma",
      bankName: "HDFC Bank",
      pendingDocs: "KYC, Salary Slip",
      action: "upload"
    },
    {
      leadId: "#4232",
      leadName: "Anil Gupta",
      bankName: "HDFC Bank",
      pendingDocs: "Salary Slip, Income Proof",
      action: "done"
    }
  ];

  return (
    <LoanAdministratorLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Bank Sanctions</h1>
        
        <Card className="bg-white dark:bg-gray-800 p-6">
          {/* Tabs */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab("pending")}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === "pending"
                  ? "bg-brand-purple text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === "completed"
                  ? "bg-brand-purple text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Completed
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search by Lead Name, Lead ID"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </Button>
            </div>
          </div>

          {/* Status Tabs */}
          <div className="flex space-x-4 mb-6">
            <Badge variant="secondary" className="px-3 py-1">
              Uploaded
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              Pending
            </Badge>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead ID</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Bank Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Pending Docs</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Upload Action</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {pendingData.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadId}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadName}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.bankName}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.pendingDocs}</td>
                    <td className="px-6 py-4 text-sm">
                      {item.action === "upload" ? (
                        <Button variant="outline" size="sm" className="flex items-center space-x-1">
                          <Upload className="w-4 h-4" />
                          <span>Upload</span>
                        </Button>
                      ) : (
                        <Badge className="bg-green-100 text-green-800">
                          ✓ Done
                        </Badge>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </LoanAdministratorLayout>
  );
};

export default LoanAdministratorBankSanctions;
