
import React, { useState } from "react";
import LoanAdministratorLayout from "../components/LoanAdministratorLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const LoanAdministratorReports = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  const statsData = [
    { title: "Total Sanctions", value: "₹12.08 Cr" },
    { title: "Total Disbursements", value: "₹102.12 Cr" },
    { title: "Pending Sanctions", value: "102" },
    { title: "Total Leads", value: "130" }
  ];

  const bankData = [
    { bankName: "Bank A", sanctions: "₹50 Cr", disbursements: "₹32 Cr", achieved: "80%" },
    { bankName: "Bank B", sanctions: "₹210 Cr", disbursements: "₹67 Cr", achieved: "43%" },
    { bankName: "Bank C", sanctions: "₹20 Cr", disbursements: "₹23 Cr", achieved: "20%" },
    { bankName: "Bank A", sanctions: "₹50 Cr", disbursements: "₹32 Cr", achieved: "80%" },
    { bankName: "Bank B", sanctions: "₹210 Cr", disbursements: "₹67 Cr", achieved: "43%" },
    { bankName: "Bank C", sanctions: "₹20 Cr", disbursements: "₹23 Cr", achieved: "20%" }
  ];

  return (
    <LoanAdministratorLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Loan Performance Reports</h1>
        
        <Card className="bg-white dark:bg-gray-800 p-6">
          {/* Tabs */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-4">
              {["monthly", "quarterly", "yearly"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg font-medium capitalize ${
                    activeTab === tab
                      ? "bg-brand-purple text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </Button>
          </div>

          {/* Reporting Period */}
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              <span className="font-bold">Reporting Period</span> 15 Mar - 15 Apr 2025
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.title}</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Achievement vs Target */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Achievement vs Target</h3>
              <div className="flex items-center justify-center h-48">
                <div className="relative w-32 h-32">
                  {/* Circular Progress */}
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-gray-200"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${80 * 3.14159} ${100 * 3.14159}`}
                      className="text-green-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-500">80%</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">Achievement</span>
                  <span className="ml-auto text-sm font-semibold">₹45,00,000</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                  <span className="text-sm">Target</span>
                  <span className="ml-auto text-sm font-semibold">₹50,00,000</span>
                </div>
              </div>
            </div>

            {/* Feedback & Reviews */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Feedback & Reviews</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Avg. Rating</span>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {"★★★★☆".split("").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Videos Recorded</span>
                  <span className="font-semibold">32</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Google Reviews</span>
                  <span className="font-semibold">92</span>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Reviews
                </Button>
              </div>
            </div>
          </div>

          {/* Bank-wise Table */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bank-Wise Sanction & Disbursement Report</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Bank Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Sanctions (₹ Cr)</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Disbursements (₹ Cr)</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">% Achieved</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {bankData.map((bank, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{bank.bankName}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{bank.sanctions}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{bank.disbursements}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{bank.achieved}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-6">
              <Button variant="outline">Show More</Button>
            </div>
          </div>
        </Card>
      </div>
    </LoanAdministratorLayout>
  );
};

export default LoanAdministratorReports;
