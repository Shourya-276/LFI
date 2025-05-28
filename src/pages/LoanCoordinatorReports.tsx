
import React from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";

const LoanCoordinatorReports = () => {
  const stats = [
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
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Loan Performance Reports</h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          {/* Period Selection */}
          <div className="flex gap-4 mb-6">
            <Button variant="outline">Monthly</Button>
            <Button variant="outline">Quarterly</Button>
            <Button variant="outline">Yearly</Button>
            <Button variant="outline" className="ml-auto">
              <span className="mr-2">🔍</span> Filter
            </Button>
          </div>

          {/* Reporting Period */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">Reporting Period: 15 Mar - 15 Apr 2025</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.title}</p>
                <p className={`text-2xl font-bold ${index === 3 ? 'text-blue-600' : 'text-gray-900 dark:text-gray-100'}`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Achievement vs Target */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Achievement vs Target</h3>
              <div className="relative">
                <div className="w-32 h-32 mx-auto">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#10b981"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${80 * 2.51} ${(100 - 80) * 2.51}`}
                      strokeDashoffset="0"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">80%</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Achievement: ₹45,00,000</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm mt-1">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span>Target: ₹50,00,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Feedback & Reviews</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Avg. Rating</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm ml-1">32</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Videos Recorded</span>
                  <span className="text-sm font-medium">92</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Google Reviews</span>
                  <span className="text-sm font-medium">View All Reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bank-Wise Report */}
          <div>
            <h3 className="font-semibold mb-4">Bank-Wise Sanction & Disbursement Report</h3>
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
            <div className="mt-4 text-center">
              <Button variant="outline">Show More</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoanCoordinatorReports;
