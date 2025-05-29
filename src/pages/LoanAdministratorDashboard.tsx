
import React from "react";
import LoanAdministratorLayout from "../components/LoanAdministratorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LoanAdministratorDashboard = () => {
  const stats = [
    {
      title: "Total Applications",
      value: "2,847",
      icon: "📋",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "Approved Loans",
      value: "2,340",
      icon: "✅",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      title: "Pending Review",
      value: "287",
      icon: "⏳",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600"
    },
    {
      title: "Total Disbursed",
      value: "₹450.8 Cr",
      icon: "💰",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      title: "Active Banks",
      value: "45",
      icon: "🏦",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    },
    {
      title: "Monthly Target",
      value: "₹500 Cr",
      icon: "🎯",
      bgColor: "bg-red-50",
      textColor: "text-red-600"
    }
  ];

  const recentApplications = [
    {
      id: "LA001",
      applicantName: "Rajesh Kumar",
      loanType: "Home Loan",
      amount: "₹25,00,000",
      status: "Under Review",
      statusColor: "text-yellow-600 bg-yellow-100",
      submittedDate: "2024-01-15"
    },
    {
      id: "LA002",
      applicantName: "Priya Sharma",
      loanType: "Personal Loan",
      amount: "₹5,00,000",
      status: "Approved",
      statusColor: "text-green-600 bg-green-100",
      submittedDate: "2024-01-14"
    },
    {
      id: "LA003",
      applicantName: "Amit Patel",
      loanType: "Business Loan",
      amount: "₹50,00,000",
      status: "Documents Required",
      statusColor: "text-orange-600 bg-orange-100",
      submittedDate: "2024-01-13"
    },
    {
      id: "LA004",
      applicantName: "Sunita Verma",
      loanType: "Car Loan",
      amount: "₹8,00,000",
      status: "Approved",
      statusColor: "text-green-600 bg-green-100",
      submittedDate: "2024-01-12"
    },
    {
      id: "LA005",
      applicantName: "Vikram Singh",
      loanType: "Home Loan",
      amount: "₹35,00,000",
      status: "Rejected",
      statusColor: "text-red-600 bg-red-100",
      submittedDate: "2024-01-11"
    }
  ];

  const pendingTasks = [
    {
      task: "Review loan application LA001",
      priority: "High",
      dueDate: "Today",
      priorityColor: "text-red-600 bg-red-100"
    },
    {
      task: "Verify documents for LA003",
      priority: "Medium",
      dueDate: "Tomorrow",
      priorityColor: "text-yellow-600 bg-yellow-100"
    },
    {
      task: "Approve disbursement for LA002",
      priority: "High",
      dueDate: "Today",
      priorityColor: "text-red-600 bg-red-100"
    },
    {
      task: "Generate monthly report",
      priority: "Low",
      dueDate: "This Week",
      priorityColor: "text-green-600 bg-green-100"
    }
  ];

  return (
    <LoanAdministratorLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Administrator</h1>
          <p className="text-gray-600 dark:text-gray-400">Here's what's happening with your loan portfolio today</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className={`${stat.bgColor} border border-gray-200 dark:border-gray-700`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.title}</p>
                    <p className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</p>
                  </div>
                  <div className="text-2xl">{stat.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Applications */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Loan Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.map((application) => (
                  <div key={application.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">{application.applicantName}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{application.loanType} - {application.amount}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">ID: {application.id}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${application.statusColor}`}>
                        {application.status}
                      </span>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{application.submittedDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pending Tasks */}
          <Card>
            <CardHeader>
              <CardTitle>Pending Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">{task.task}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Due: {task.dueDate}</p>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${task.priorityColor}`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </LoanAdministratorLayout>
  );
};

export default LoanAdministratorDashboard;
