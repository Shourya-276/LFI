
import React, { useState } from "react";
import LoanAdministratorLayout from "../components/LoanAdministratorLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

const LoanAdministratorDisbursement = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [searchTerm, setSearchTerm] = useState("");

  const pendingData = [
    {
      leadId: "#13123",
      leadName: "Rahul Sharma",
      bankName: "HDFC",
      pendingDoc: "DOC1,DOC2",
      hardCopy: true,
      status: "Under Review"
    },
    {
      leadId: "#13123",
      leadName: "Rahul Sharma",
      bankName: "HDFC",
      pendingDoc: "DOC1,DOC2",
      hardCopy: true,
      status: "Under Review"
    },
    {
      leadId: "#13123",
      leadName: "Rahul Sharma",
      bankName: "HDFC",
      pendingDoc: "DOC1,DOC2",
      hardCopy: true,
      status: "Under Review"
    },
    {
      leadId: "#13123",
      leadName: "Rahul Sharma",
      bankName: "HDFC",
      pendingDoc: "DOC1,DOC2",
      hardCopy: true,
      status: "Under Review"
    },
    {
      leadId: "#13123",
      leadName: "Rahul Sharma",
      bankName: "HDFC",
      pendingDoc: "DOC1,DOC2",
      hardCopy: true,
      status: "Under Review"
    },
    {
      leadId: "#13123",
      leadName: "Rahul Sharma",
      bankName: "HDFC",
      pendingDoc: "DOC1,DOC2",
      hardCopy: true,
      status: "Under Review"
    }
  ];

  const completedData = [
    {
      leadId: "#13123",
      leadName: "Rahul Sharma",
      bankName: "HDFC",
      status: "Completed",
      paymentAmount: "₹12,20,000",
      utr: "#"
    },
    {
      leadId: "#13123",
      leadName: "Rahul Sharma",
      bankName: "HDFC",
      status: "Completed",
      paymentAmount: "₹12,20,000",
      utr: "#"
    },
    {
      leadId: "#13123",
      leadName: "Rahul Sharma",
      bankName: "HDFC",
      status: "Completed",
      paymentAmount: "₹12,20,000",
      utr: "#"
    }
  ];

  return (
    <LoanAdministratorLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Disbursement Review</h1>
        
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
              {activeTab === "completed" ? "Complete" : "Completed"}
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

          {/* Pending Tab Content */}
          {activeTab === "pending" && (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead ID</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead Name</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Bank Name</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Pending Doc</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Hard Copy</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {pendingData.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadId}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadName}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.bankName}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.pendingDoc}</td>
                        <td className="px-6 py-4 text-sm">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">●</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-6">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-brand-purple h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
            </>
          )}

          {/* Completed Tab Content */}
          {activeTab === "completed" && (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead ID</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead Name</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Bank Name</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Payment amount</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">UTR</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {completedData.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadId}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadName}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.bankName}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.status}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.paymentAmount}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.utr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-6">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-brand-purple h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
            </>
          )}
        </Card>
      </div>
    </LoanAdministratorLayout>
  );
};

export default LoanAdministratorDisbursement;
