
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoanCoordinatorDisbursementReview = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [searchTerm, setSearchTerm] = useState("");

  const pendingData = [
    { leadId: "#13123", leadName: "Rahul Sharma", bankName: "HDFC", status: "Completed", paymentAmount: "₹12,20,000", utrNumber: "#121483838" },
    { leadId: "#13123", leadName: "Rahul Sharma", bankName: "HDFC", status: "Completed", paymentAmount: "₹12,20,000", utrNumber: "#121483838" },
    { leadId: "#13123", leadName: "Rahul Sharma", bankName: "HDFC", status: "Completed", paymentAmount: "₹12,20,000", utrNumber: "#121483838" }
  ];

  const completedData = [
    { leadId: "#13123", leadName: "Rahul Sharma", bankName: "HDFC", pendingDoc: "DOC1,DOC2", hardCopy: true, status: "Under Review" },
    { leadId: "#13123", leadName: "Rahul Sharma", bankName: "HDFC", pendingDoc: "DOC1,DOC2", hardCopy: true, status: "Under Review" },
    { leadId: "#13123", leadName: "Rahul Sharma", bankName: "HDFC", pendingDoc: "DOC1,DOC2", hardCopy: true, status: "Under Review" },
    { leadId: "#13123", leadName: "Rahul Sharma", bankName: "HDFC", pendingDoc: "DOC1,DOC2", hardCopy: true, status: "Under Review" },
    { leadId: "#13123", leadName: "Rahul Sharma", bankName: "HDFC", pendingDoc: "DOC1,DOC2", hardCopy: true, status: "Under Review" },
    { leadId: "#13123", leadName: "Rahul Sharma", bankName: "HDFC", pendingDoc: "DOC1,DOC2", hardCopy: true, status: "Under Review" }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Disbursement Review</h1>
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

          {/* Table with scroll */}
          <div className="overflow-x-auto max-h-96 overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="sticky top-0 bg-white dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead ID</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Bank Name</th>
                  {activeTab === "pending" ? (
                    <>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Payment Amount</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">UTR Number</th>
                    </>
                  ) : (
                    <>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Pending Doc</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Hard Copy</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {activeTab === "pending" ? 
                  pendingData.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadId}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadName}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.bankName}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.paymentAmount}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.utrNumber}</td>
                    </tr>
                  )) :
                  completedData.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadId}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadName}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.bankName}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.pendingDoc}</td>
                      <td className="px-6 py-4 text-sm">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.status}</td>
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

export default LoanCoordinatorDisbursementReview;
