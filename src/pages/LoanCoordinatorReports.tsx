
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";

const LoanCoordinatorReports = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Loan Performance Reports</h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          {/* Tab Navigation */}
          <div className="flex gap-4 mb-6">
            <Button
              onClick={() => setActiveTab("monthly")}
              variant={activeTab === "monthly" ? "default" : "outline"}
            >
              Monthly
            </Button>
            <Button
              onClick={() => setActiveTab("quarterly")}
              variant={activeTab === "quarterly" ? "default" : "outline"}
            >
              Quarterly
            </Button>
            <Button
              onClick={() => setActiveTab("yearly")}
              variant={activeTab === "yearly" ? "default" : "outline"}
            >
              Yearly
            </Button>
            <Button variant="outline" className="ml-auto">
              <span className="mr-2">🔍</span> Filter
            </Button>
          </div>

          {/* Reporting Period */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Reporting Period: 15 Mar - 15 Apr 2025
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Sanctions</p>
              <p className="text-2xl font-bold">₹12.08 Cr</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Disbursements</p>
              <p className="text-2xl font-bold">₹102.12 Cr</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Pending Sanctions</p>
              <p className="text-2xl font-bold">102</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 text-blue-600">Total Leads</p>
              <p className="text-2xl font-bold text-blue-600">130</p>
            </div>
          </div>

          {/* Achievement vs Target and Feedback */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Achievement vs Target</h3>
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                    <circle cx="50" cy="50" r="40" stroke="#10b981" strokeWidth="8" fill="none"
                      strokeDasharray="251.2" strokeDashoffset="75.36" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">80%</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Achievement: ₹45,00,000</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-sm">Target: ₹50,00,000</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Feedback & Reviews</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Avg. Rating</span>
                  <span className="text-sm">Videos Recorded</span>
                  <span className="text-sm">Google Reviews</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-lg">⭐⭐⭐⭐⭐</span>
                    <span className="text-sm font-semibold">32</span>
                  </div>
                  <span className="text-lg font-semibold">92</span>
                  <span className="text-lg font-semibold">-</span>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View All Reviews
                </Button>
              </div>
            </div>
          </div>

          {/* Bank-Wise Report */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bank-Wise Sanction & Disbursement Report</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Bank Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Sanctions (₹ Cr)</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Disbursements (₹ Cr)</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">% Achieved</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">Bank A</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">₹50 Cr</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">₹32 Cr</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">80%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">Bank B</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">₹210 Cr</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">₹67 Cr</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">43%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">Bank C</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">₹20 Cr</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">₹23 Cr</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">20%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">Bank A</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">₹50 Cr</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">₹32 Cr</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">80%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">Bank B</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">₹210 Cr</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">₹67 Cr</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">43%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">Bank C</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">₹20 Cr</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">₹23 Cr</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Button variant="outline" className="mt-4">
              Show More
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoanCoordinatorReports;
