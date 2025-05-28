
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
              <strong>Reporting Period:</strong> 15 Mar - 15 Apr 2025
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card className="p-4">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Sanctions</p>
                <p className="text-2xl font-bold">₹12.08 Cr</p>
              </div>
            </Card>
            
            <Card className="p-4">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Disbursements</p>
                <p className="text-2xl font-bold">₹102.12 Cr</p>
              </div>
            </Card>
            
            <Card className="p-4">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Sanctions</p>
                <p className="text-2xl font-bold">102</p>
              </div>
            </Card>
            
            <Card className="p-4">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 text-blue-600">Total Leads</p>
                <p className="text-2xl font-bold text-blue-600">130</p>
              </div>
            </Card>
          </div>

          {/* Achievement vs Target and Feedback */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Achievement vs Target</h3>
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3"
                      strokeDasharray="80, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">80%</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm">Achievement</span>
                  </div>
                  <span className="text-sm font-medium">₹45,00,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                    <span className="text-sm">Target</span>
                  </div>
                  <span className="text-sm font-medium">₹50,00,000</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Feedback & Reviews</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Avg. Rating</span>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-2">
                      {'★'.repeat(4)}{'☆'}
                    </div>
                    <span className="text-sm font-medium">32</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Videos Recorded</span>
                  <span className="text-sm font-medium">92</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Google Reviews</span>
                  <span className="text-sm font-medium">25</span>
                </div>
              </div>
              <Button variant="link" className="p-0 mt-4">
                View All Reviews
              </Button>
            </Card>
          </div>

          {/* Bank-Wise Report */}
          <Card className="p-6">
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
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Bank A</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">₹50 Cr</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">₹32 Cr</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">80%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Bank B</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">₹210 Cr</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">₹67 Cr</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">43%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Bank C</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">₹20 Cr</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">₹23 Cr</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center mt-4">
              <Button variant="link">Show More</Button>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default LoanCoordinatorReports;
