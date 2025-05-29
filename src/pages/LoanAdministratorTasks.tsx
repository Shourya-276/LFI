
import React, { useState } from "react";
import LoanAdministratorLayout from "../components/LoanAdministratorLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Plus, Repeat, UserCheck } from "lucide-react";

const LoanAdministratorTasks = () => {
  const [activeTab, setActiveTab] = useState("pending");

  const completedTasks = [
    {
      title: "UTR Confirmed for ₹2.5L",
      completedDate: "2 Apr, 3:45 PM",
      utrNumber: "UTR1234XXXX",
      icon: "✓",
      color: "green"
    },
    {
      title: "Google review collected from Aditi Sh...",
      completedDate: "2 Apr, 3:45 PM",
      description: "Confirm bank document upload status",
      icon: "✓",
      color: "green"
    },
    {
      title: "Loan appointment scheduled for Vipu...",
      completedDate: "1 Apr, 12:00 PM",
      location: "Location: Jalgaon",
      icon: "✓",
      color: "green"
    },
    {
      title: "Google review collected from Aditi Sh...",
      completedDate: "2 Apr, 3:45 PM",
      description: "Confirm bank document upload status",
      icon: "✓",
      color: "green"
    }
  ];

  const prebuiltTasks = [
    { title: "Call lead before appointment", icon: "★" },
    { title: "Upload signed loan documents", icon: "★" },
    { title: "Confirm disbursement UTR", icon: "★" }
  ];

  return (
    <LoanAdministratorLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tasks</h1>
        
        <Card className="bg-white dark:bg-gray-800 p-6">
          {/* Tabs and Filter */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab("pending")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "pending"
                    ? "bg-brand-purple text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setActiveTab("completed")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "completed"
                    ? "bg-brand-purple text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                Completed
              </button>
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </Button>
          </div>

          {/* Completed Tasks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {completedTasks.map((task, index) => (
              <Card key={index} className="p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${
                    task.color === "green" ? "bg-green-500" : "bg-blue-500"
                  }`}>
                    <span className="text-sm">{task.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">{task.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span className="mr-2">📅</span>
                      <span>{task.completedDate}</span>
                    </div>
                    {task.utrNumber && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">{task.utrNumber}</p>
                    )}
                    {task.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">{task.description}</p>
                    )}
                    {task.location && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">{task.location}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Show More Button */}
          <div className="flex justify-center mb-8">
            <Button variant="outline">Show More</Button>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="p-6 text-center border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Plus className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white">Create Task</h3>
            </Card>
            
            <Card className="p-6 text-center border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Repeat className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white">Prebuilt Tasks</h3>
            </Card>
            
            <Card className="p-6 text-center border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <UserCheck className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white">Assign Task</h3>
            </Card>
          </div>

          {/* Prebuilt Tasks Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Prebuilt Tasks</h3>
            <div className="space-y-3">
              {prebuiltTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{task.icon}</span>
                    <span className="text-gray-900 dark:text-white">{task.title}</span>
                  </div>
                  <button className="w-8 h-8 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center">
                    →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </LoanAdministratorLayout>
  );
};

export default LoanAdministratorTasks;
