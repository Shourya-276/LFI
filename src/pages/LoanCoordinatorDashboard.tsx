
import React from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";

const LoanCoordinatorDashboard = () => {
  const stats = [
    {
      title: "Sanctions Approved",
      value: "₹50,00,000",
      icon: "🎯",
      bgColor: "bg-red-50",
      textColor: "text-red-600"
    },
    {
      title: "Total Leads Received",
      value: "120",
      icon: "👥",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "Leads Converted",
      value: "30",
      icon: "✅",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      title: "Total Disbursement",
      value: "₹35,00,000",
      icon: "💰",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600"
    },
    {
      title: "Pending Approvals",
      value: "₹35,00,000",
      icon: "⏳",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      title: "Target vs Achievement",
      value: "70% Complete",
      icon: "📊",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    }
  ];

  const recentLeads = [
    { name: "Rajesh Sharma", status: "Approved", contact: "9876543210", loanType: "Home Loan" },
    { name: "Priya Mehta", status: "Pending", contact: "8765432109", loanType: "Personal Loan" },
    { name: "Priya Mehta", status: "Pending", contact: "8765432109", loanType: "Personal Loan" },
    { name: "Anil Gupta", status: "Rejected", contact: "7654321098", loanType: "Business Loan" },
    { name: "Neha Verma", status: "Approved", contact: "6543210987", loanType: "Home Loan" }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Loan Coordinator Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your leads and track performance</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.bgColor} border border-gray-200 dark:border-gray-700 rounded-lg p-6 relative`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.title}</p>
                  <p className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</p>
                </div>
                <div className="text-2xl">{stat.icon}</div>
              </div>
              <Button variant="ghost" size="sm" className="absolute top-4 right-4 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          ))}
        </div>

        {/* Recent Leads Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="border-b border-gray-200 dark:border-gray-700 p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Recent Leads</h2>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Contact</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Loan Type</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {recentLeads.map((lead, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{lead.name}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        lead.status === 'Approved' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                        lead.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                      }`}>
                        {lead.status === 'Approved' && '✅'} 
                        {lead.status === 'Pending' && '⏳'} 
                        {lead.status === 'Rejected' && '❌'} 
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{lead.contact}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{lead.loanType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoanCoordinatorDashboard;
