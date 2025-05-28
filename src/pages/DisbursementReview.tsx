
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const DisbursementReview = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [searchTerm, setSearchTerm] = useState("");

  const pendingData = [
    { leadId: "#13123", leadName: "Rahul Sharma", bankName: "HDFC", status: "Completed", paymentAmount: "₹12,20,000", utrNumber: "#121483838" },
    { leadId: "#13123", leadName: "Rahul Sharma", bankName: "HDFC", status: "Completed", paymentAmount: "₹12,20,000", utrNumber: "#121483838" },
    { leadId: "#13123", leadName: "Rahul Sharma", bankName: "HDFC", status: "Completed", paymentAmount: "₹12,20,000", utrNumber: "#121483838" },
    { leadId: "#13123", leadName: "Rahul Sharma", bankName: "HDFC", status: "Under Review", paymentAmount: "₹15,50,000", utrNumber: "Pending" },
    { leadId: "#13124", leadName: "Priya Mehta", bankName: "SBI", status: "Under Review", paymentAmount: "₹8,75,000", utrNumber: "Pending" },
    { leadId: "#13125", leadName: "Anil Kumar", bankName: "ICICI", status: "Under Review", paymentAmount: "₹20,00,000", utrNumber: "Pending" },
    { leadId: "#13126", leadName: "Sunita Devi", bankName: "Axis", status: "Under Review", paymentAmount: "₹6,25,000", utrNumber: "Pending" },
    { leadId: "#13127", leadName: "Rajesh Singh", bankName: "PNB", status: "Under Review", paymentAmount: "₹18,90,000", utrNumber: "Pending" }
  ];

  const completedData = [
    { leadId: "#13123", leadName: "Rahul Sharma", bankName: "HDFC", status: "Completed", paymentAmount: "₹12,20,000", utrNumber: "#121483838", dateTime: "13 Mar 2024, 12:20 PM" },
    { leadId: "#13123", leadName: "Rahul Sharma", bankName: "HDFC", status: "Completed", paymentAmount: "₹12,20,000", utrNumber: "#121483838", dateTime: "13 Mar 2024, 12:20 PM" },
    { leadId: "#13123", leadName: "Rahul Sharma", bankName: "HDFC", status: "Completed", paymentAmount: "₹12,20,000", utrNumber: "#121483838", dateTime: "13 Mar 2024, 12:20 PM" }
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

          {/* Table with ScrollArea */}
          <ScrollArea className="h-[400px] w-full border rounded-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="sticky top-0 bg-white dark:bg-gray-800 z-10">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead ID</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Bank Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Payment amount</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                      {activeTab === "pending" ? "UTR Number" : "UTR Number"}
                    </th>
                    {activeTab === "completed" && (
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Date & Time</th>
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
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            item.status === "Completed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" :
                            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          }`}>
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
                        <td className="px-6 py-4 text-sm">
                          <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.paymentAmount}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.utrNumber}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.dateTime}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </ScrollArea>
        </div>
      </div>
    </Layout>
  );
};

export default DisbursementReview;
