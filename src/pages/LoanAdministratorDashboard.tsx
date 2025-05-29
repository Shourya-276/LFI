
import React from "react";
import LoanAdministratorLayout from "../components/LoanAdministratorLayout";
import { Card } from "@/components/ui/card";

const LoanAdministratorDashboard = () => {
  const stats = [
    {
      title: "Sanctions Approved",
      value: "₹50,00,000",
      icon: "🎯",
      bgColor: "bg-white",
      textColor: "text-gray-900"
    },
    {
      title: "Total Leads Received",
      value: "120",
      icon: "👥",
      bgColor: "bg-white",
      textColor: "text-gray-900"
    },
    {
      title: "Leads Converted",
      value: "30",
      icon: "✅",
      bgColor: "bg-white",
      textColor: "text-gray-900"
    },
    {
      title: "Total Disbursement",
      value: "₹35,00,000",
      icon: "💰",
      bgColor: "bg-white",
      textColor: "text-gray-900"
    },
    {
      title: "Pending Approvals",
      value: "₹35,00,000",
      icon: "⏳",
      bgColor: "bg-white",
      textColor: "text-gray-900"
    },
    {
      title: "Target vs Achievement",
      value: "70% Complete",
      icon: "📊",
      bgColor: "bg-white",
      textColor: "text-gray-900"
    }
  ];

  const recentLeads = [
    {
      leadName: "Rajesh Sharma",
      status: "Approved",
      statusColor: "text-green-600 bg-green-100",
      contact: "9876543210",
      loanType: "Home Loan"
    },
    {
      leadName: "Priya Mehta",
      status: "Pending",
      statusColor: "text-yellow-600 bg-yellow-100",
      contact: "8765432109",
      loanType: "Personal Loan"
    },
    {
      leadName: "Priya Mehta",
      status: "Pending",
      statusColor: "text-yellow-600 bg-yellow-100",
      contact: "8765432109",
      loanType: "Personal Loan"
    },
    {
      leadName: "Anil Gupta",
      status: "Rejected",
      statusColor: "text-red-600 bg-red-100",
      contact: "7654321098",
      loanType: "Business Loan"
    },
    {
      leadName: "Neha Verma",
      status: "Approved",
      statusColor: "text-green-600 bg-green-100",
      contact: "6543210987",
      loanType: "Home Loan"
    },
    {
      leadName: "Anil Gupta",
      status: "Rejected",
      statusColor: "text-red-600 bg-red-100",
      contact: "7654321098",
      loanType: "Business Loan"
    }
  ];

  return (
    <LoanAdministratorLayout>
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className={`${stat.bgColor} border border-gray-200 dark:border-gray-700 p-6 relative`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.title}</p>
                  <p className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</p>
                </div>
                <div className="text-2xl">{stat.icon}</div>
                <button className="absolute top-4 right-4 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  →
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Leads Table */}
        <Card className="bg-white dark:bg-gray-800 p-6">
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
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{lead.leadName}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${lead.statusColor}`}>
                        {lead.status === "Approved" && "✓"} {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{lead.contact}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{lead.loanType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </LoanAdministratorLayout>
  );
};

export default LoanAdministratorDashboard;
