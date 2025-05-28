
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const LoanCoordinatorTasks = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [showCreateForm, setShowCreateForm] = useState(false);

  const completedTasks = [
    {
      title: "UTR Confirmed for ₹2.5L",
      completedDate: "2 Apr, 3:45 PM",
      utrNo: "UTR1234XXXX",
      status: "Completed"
    },
    {
      title: "Google review collected from Aditi Sh...",
      completedDate: "2 Apr, 3:45 PM",
      description: "Confirm bank document upload status",
      status: "Completed"
    },
    {
      title: "Loan appointment scheduled for Vipu...",
      completedDate: "1 Apr, 12:00 PM",
      location: "Jalgaon",
      status: "Completed"
    },
    {
      title: "Google review collected from Aditi Sh...",
      completedDate: "2 Apr, 3:45 PM",
      description: "Confirm bank document upload status",
      status: "Completed"
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

        {!showCreateForm ? (
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
              <Button variant="outline" className="ml-auto">
                <span className="mr-2">🔍</span> Filter
              </Button>
            </div>

            {activeTab === "completed" && (
              <>
                {/* Completed Tasks Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {completedTasks.map((task, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-sm mb-1">{task.title}</h3>
                          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
                            <span>📅</span>
                            <span>Completed on: {task.completedDate}</span>
                          </div>
                          {task.utrNo && (
                            <p className="text-xs text-gray-600 dark:text-gray-400">UTR No: {task.utrNo}</p>
                          )}
                          {task.description && (
                            <p className="text-xs text-gray-600 dark:text-gray-400">{task.description}</p>
                          )}
                          {task.location && (
                            <p className="text-xs text-gray-600 dark:text-gray-400">Location: {task.location}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full">
                  Show More
                </Button>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <Button 
                    onClick={() => setShowCreateForm(true)}
                    variant="outline" 
                    className="flex flex-col items-center p-6 h-auto"
                  >
                    <span className="text-2xl mb-2">➕</span>
                    <span>Create Task</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center p-6 h-auto">
                    <span className="text-2xl mb-2">🔧</span>
                    <span>Prebuilt Tasks</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center p-6 h-auto">
                    <span className="text-2xl mb-2">👤</span>
                    <span>Assign Task</span>
                  </Button>
                </div>

                {/* Prebuilt Tasks */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Prebuilt Tasks</h3>
                  <div className="space-y-2">
                    {prebuiltTasks.map((task, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">⭐</span>
                          <span className="text-sm">{task}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <span className="text-lg">→</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            {/* Create Task Form */}
            <div className="flex items-center gap-4 mb-6">
              <Button 
                variant="ghost" 
                onClick={() => setShowCreateForm(false)}
                className="p-2"
              >
                ←
              </Button>
              <h2 className="text-xl font-semibold">Add New Task</h2>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Task Name</label>
                  <Input placeholder="Enter task name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Type of Task</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select task type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="call">Call</SelectItem>
                      <SelectItem value="document">Document Upload</SelectItem>
                      <SelectItem value="meeting">Meeting</SelectItem>
                      <SelectItem value="follow-up">Follow Up</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Assign To</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select assignee" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="self">Myself</SelectItem>
                      <SelectItem value="team1">Team Member 1</SelectItem>
                      <SelectItem value="team2">Team Member 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Date & Time</label>
                  <Input type="datetime-local" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Notes...</label>
                <Textarea placeholder="Add any additional notes" rows={4} />
              </div>

              <div className="flex gap-4 pt-4">
                <Button onClick={() => setShowCreateForm(false)}>
                  Create Task
                </Button>
                <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                  Clear
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default LoanCoordinatorTasks;
