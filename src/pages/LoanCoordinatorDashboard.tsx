
import React from "react";
import LoanCoordinatorLayout from "../components/LoanCoordinatorLayout";

const LoanCoordinatorDashboard = () => {
  const stats = [
    {
      title: "Sanctions Approved",
      value: "₹12.08 Cr",
      icon: "🎯",
      bgColor: "bg-red-50",
      textColor: "text-red-600"
    },
    {
      title: "Total Leads Received",
      value: "130",
      icon: "👥",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "Leads Converted",
      value: "102",
      icon: "✅",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      title: "Total Disbursement",
      value: "₹102.12 Cr",
      icon: "💰",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600"
    },
    {
      title: "Pending Sanctions",
      value: "102",
      icon: "⏳",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      title: "Total Leads",
      value: "130",
      icon: "📊",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    }
  ];

  const recentLeads = [
    {
      name: "Rajesh Sharma",
      status: "Approved",
      statusColor: "text-green-600 bg-green-100",
      contact: "9876543210",
      loanType: "Home Loan"
    },
    {
      name: "Priya Mehta",
      status: "Pending",
      statusColor: "text-yellow-600 bg-yellow-100",
      contact: "8765432109",
      loanType: "Personal Loan"
    },
    {
      name: "Priya Mehta",
      status: "Pending",
      statusColor: "text-yellow-600 bg-yellow-100",
      contact: "8765432109",
      loanType: "Personal Loan"
    },
    {
      name: "Anil Gupta",
      status: "Rejected",
      statusColor: "text-red-600 bg-red-100",
      contact: "7654321098",
      loanType: "Business Loan"
    },
    {
      name: "Neha Verma",
      status: "Approved",
      statusColor: "text-green-600 bg-green-100",
      contact: "6543210987",
      loanType: "Home Loan"
    }
  ];

  return (
    <LoanCoordinatorLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Loan Coordinator Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage loan processing and coordination</p>
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
            </div>
          ))}
        </div>

        {/* Recent Leads Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Leads</h2>
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
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${lead.statusColor}`}>
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
    </LoanCoordinatorLayout>
  );
};

export default LoanCoordinatorDashboard;
