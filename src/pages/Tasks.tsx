
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";

const Tasks = () => {
  const [activeTab, setActiveTab] = useState("pending");

  const pendingTasks = [
    {
      title: "Follow-up with Amit Rathi",
      due: "Due: 4 Apr, 11:00 AM",
      description: "Confirm bank document upload status",
      status: "urgent"
    },
    {
      title: "Collect address proof from Sachin Patil",
      due: "Due: 4 Apr, 11:00 AM", 
      description: "Confirm bank document upload status",
      status: "normal"
    },
    {
      title: "Schedule home visit for loan signing..",
      due: "Due: 4 Apr, 11:00 AM",
      description: "Confirm bank document upload status",
      status: "normal"
    },
    {
      title: "Collect address proof from Sachin Patil",
      due: "Due: 4 Apr, 11:00 AM",
      description: "Confirm bank document upload status",
      status: "urgent"
    }
  ];

  const completedTasks = [
    {
      title: "UTR Confirmed for ₹2.5L",
      completed: "Completed on: 2 Apr, 3:45 PM",
      description: "UTR No: UTR1234XXX",
      status: "completed"
    },
    {
      title: "Google review collected from Aditi Sh...",
      completed: "Completed on: 2 Apr, 3:45 PM",
      description: "Confirm bank document upload status",
      status: "completed"
    },
    {
      title: "Loan appointment scheduled for Vipu...",
      completed: "Completed: 1 Apr, 12:00 PM",
      description: "Location: Jalgaon",
      status: "completed"
    },
    {
      title: "Google review collected from Aditi Sh...",
      completed: "Completed on: 2 Apr, 3:45 PM",
      description: "Confirm bank document upload status",
      status: "completed"
    }
  ];

  const prebuiltTasks = [
    "Call lead before appointment",
    "Upload signed loan documents", 
    "Confirm disbursement UTR"
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Tasks</h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          {/* Tab Navigation */}
          <div className="flex gap-4 mb-6">
            <Button
              onClick={() => setActiveTab("pending")}
              variant={activeTab === "pending" ? "default" : "outline"}
            >
              Pending
            </Button>
            <Button
              onClick={() => setActiveTab("completed")}
              variant={activeTab === "completed" ? "default" : "outline"}
            >
              Completed
            </Button>
            <div className="ml-auto">
              <Button variant="outline">
                <span className="mr-2">🔍</span> Filter
              </Button>
            </div>
          </div>

          {/* Tasks List */}
          <div className="space-y-4 mb-8">
            {activeTab === "pending" ? 
              pendingTasks.map((task, index) => (
                <div key={index} className={`border rounded-lg p-4 ${task.status === 'urgent' ? 'border-red-200 bg-red-50 dark:bg-red-900/10' : 'border-gray-200 dark:border-gray-700'}`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-3 h-3 rounded-full mt-2 ${task.status === 'urgent' ? 'bg-red-500' : 'bg-green-500'}`}></div>
                    <div className="flex-1">
                      <h3 className="font-medium">{task.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{task.due}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{task.description}</p>
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" className="bg-brand-purple hover:bg-brand-purple/90">
                          Mark as Done
                        </Button>
                        <Button size="sm" variant="outline">
                          Reschedule
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )) :
              completedTasks.map((task, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <h3 className="font-medium">{task.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{task.completed}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{task.description}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          {/* Show More */}
          <div className="text-center mb-8">
            <Button variant="outline">Show More</Button>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="text-2xl mb-2">➕</div>
              <p className="font-medium">Create Task</p>
            </div>
            <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="text-2xl mb-2">🔧</div>
              <p className="font-medium">Prebuilt Tasks</p>
            </div>
            <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="text-2xl mb-2">👤</div>
              <p className="font-medium">Assign Task</p>
            </div>
          </div>

          {/* Prebuilt Tasks */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Prebuilt Tasks</h3>
            <div className="space-y-3">
              {prebuiltTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-orange-500">⭐</span>
                    <span>{task}</span>
                  </div>
                  <Button size="sm" variant="ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tasks;
