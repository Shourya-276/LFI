
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
      </div>
    </LoanCoordinatorLayout>
  );
};

export default LoanCoordinatorDashboard;
