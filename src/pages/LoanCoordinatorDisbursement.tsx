
import React, { useState } from "react";
import LoanCoordinatorLayout from "../components/LoanCoordinatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const LoanCoordinatorDisbursement = () => {
  const [activeTab, setActiveTab] = useState("pending");

  const pendingData = [
    {
      leadId: "#13123",
      leadName: "Rahul Sharma",
      bankName: "HDFC",
      status: "Completed",
      paymentAmount: "₹12,20,000",
      utrNumber: "#121483838"
    },
    {
      leadId: "#13123",
      leadName: "Rahul Sharma",
      bankName: "HDFC",
      status: "Completed",
      paymentAmount: "₹12,20,000",
      utrNumber: "#121483838"
    },
    {
      leadId: "#13123",
      leadName: "Rahul Sharma",
      bankName: "HDFC",
      status: "Completed",
      paymentAmount: "₹12,20,000",
      utrNumber: "#121483838"
    }
  ];

  const completedData = [
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

  const bottomTableData = [
    {
      leadId: "#13123",
      leadName: "Rahul Sharma",
      bankName: "HDFC",
      status: "Completed",
      paymentAmount: "₹12,20,000",
      utrNumber: "#121483838",
      dateTime: "13 Mar 2024, 12:20 PM"
    },
    {
      leadId: "#13123",
      leadName: "Rahul Sharma",
      bankName: "HDFC",
      status: "Completed",
      paymentAmount: "₹12,20,000",
      utrNumber: "#121483838",
      dateTime: "13 Mar 2024, 12:20 PM"
    },
    {
      leadId: "#13123",
      leadName: "Rahul Sharma",
      bankName: "HDFC",
      status: "Completed",
      paymentAmount: "₹12,20,000",
      utrNumber: "#121483838",
      dateTime: "13 Mar 2024, 12:20 PM"
    }
  ];

  return (
    <LoanCoordinatorLayout>
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
              className={activeTab === "pending" ? "bg-brand-purple" : ""}
            >
              Pending
            </Button>
            <Button
              onClick={() => setActiveTab("completed")}
              variant={activeTab === "completed" ? "default" : "outline"}
              className={activeTab === "completed" ? "bg-brand-purple" : ""}
            >
              Completed
            </Button>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <Input 
                placeholder="Search by Lead Name, Lead ID" 
                className="pl-10"
              />
              <svg 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {activeTab === "completed" && (
              <Button variant="outline" className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
                </svg>
                Filter
              </Button>
            )}
          </div>

          {/* Table */}
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  {activeTab === "pending" ? (
                    <>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead ID</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead Name</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Bank Name</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Payment amount</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">UTR Number</th>
                    </>
                  ) : (
                    <>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead ID</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead Name</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Bank Name</th>
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
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.status}</td>
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
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                        <Switch checked={item.hardCopy} className="data-[state=checked]:bg-green-500" />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.status}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-brand-purple h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>

          {/* Bottom Table */}
          <div className="mt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 relative">
                <Input 
                  placeholder="Search by Lead Name, Lead ID" 
                  className="pl-10"
                />
                <svg 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
                </svg>
                Filter
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead ID</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Bank Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Payment amount</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">UTR Number</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Date & Time</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {bottomTableData.map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{item.leadId}</td>
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{item.leadName}</td>
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{item.bankName}</td>
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{item.status}</td>
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{item.paymentAmount}</td>
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{item.utrNumber}</td>
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{item.dateTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </LoanCoordinatorLayout>
  );
};

export default LoanCoordinatorDisbursement;
