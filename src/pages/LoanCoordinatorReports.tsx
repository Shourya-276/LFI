
import React, { useState } from "react";
import LoanCoordinatorLayout from "../components/LoanCoordinatorLayout";
import { Button } from "@/components/ui/button";

const LoanCoordinatorReports = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  const bankWiseData = [
    { bankName: "Bank A", sanctions: "₹50 Cr", disbursements: "₹32 Cr", achieved: "80%" },
    { bankName: "Bank B", sanctions: "₹210 Cr", disbursements: "₹67 Cr", achieved: "43%" },
    { bankName: "Bank C", sanctions: "₹20 Cr", disbursements: "₹23 Cr", achieved: "20%" },
    { bankName: "Bank A", sanctions: "₹50 Cr", disbursements: "₹32 Cr", achieved: "80%" },
    { bankName: "Bank B", sanctions: "₹210 Cr", disbursements: "₹67 Cr", achieved: "43%" },
    { bankName: "Bank C", sanctions: "₹20 Cr", disbursements: "₹23 Cr", achieved: "20%" }
  ];

  return (
    <LoanCoordinatorLayout>
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
              className={activeTab === "monthly" ? "bg-brand-purple" : ""}
            >
              Monthly
            </Button>
            <Button
              onClick={() => setActiveTab("quarterly")}
              variant={activeTab === "quarterly" ? "default" : "outline"}
              className={activeTab === "quarterly" ? "bg-brand-purple" : ""}
            >
              Quarterly
            </Button>
            <Button
              onClick={() => setActiveTab("yearly")}
              variant={activeTab === "yearly" ? "default" : "outline"}
              className={activeTab === "yearly" ? "bg-brand-purple" : ""}
            >
              Yearly
            </Button>
            <div className="ml-auto">
              <Button variant="outline" className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
                </svg>
                Filter
              </Button>
            </div>
          </div>

          {/* Reporting Period */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">Reporting Period:</span> 15 Mar - 15 Apr 2025
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Sanctions</p>
              <p className="text-2xl font-bold">₹12.08 Cr</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Disbursements</p>
              <p className="text-2xl font-bold">₹102.12 Cr</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Pending Sanctions</p>
              <p className="text-2xl font-bold">102</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 text-blue-600 underline cursor-pointer">Total Leads</p>
              <p className="text-2xl font-bold">130</p>
            </div>
          </div>

          {/* Achievement vs Target and Feedback */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Achievement vs Target</h3>
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-300"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-green-500"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="80, 100"
                      strokeLinecap="round"
                      fill="transparent"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">80%</span>
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
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Avg. Rating</p>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400 text-lg">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                  <span className="text-2xl font-bold">32</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Videos Recorded</p>
                    <p className="text-xl font-bold">92</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Google Reviews</p>
                    <p className="text-xl font-bold">92</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
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
                    <th className="px-6 py-3 text-left text-sm font-medium text-blue-600">Bank Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-blue-600">Sanctions (₹ Cr)</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-blue-600">Disbursements (₹ Cr)</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-blue-600">% Achieved</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {bankWiseData.map((bank, index) => (
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
            <div className="mt-4 text-center">
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                Show More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LoanCoordinatorLayout>
  );
};

export default LoanCoordinatorReports;
