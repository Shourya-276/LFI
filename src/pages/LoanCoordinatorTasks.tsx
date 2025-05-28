
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const LoanCoordinatorTasks = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [taskData, setTaskData] = useState({
    taskName: "",
    typeOfTask: "",
    assignTo: "",
    dateTime: "",
    notes: ""
  });

  const completedTasks = [
    {
      title: "UTR Confirmed for ₹2.5L",
      completedOn: "Completed on: 2 Apr, 3:45 PM",
      details: "UTR No: UTR1234XXXX"
    },
    {
      title: "Google review collected from Aditi Sh...",
      completedOn: "Completed on: 2 Apr, 3:45 PM",
      details: "Confirm bank document upload status"
    },
    {
      title: "Loan appointment scheduled for Vipu...",
      completedOn: "Completed on: 1 Apr, 12:00 PM",
      details: "Location: Jalgaon"
    },
    {
      title: "Google review collected from Aditi Sh...",
      completedOn: "Completed on: 2 Apr, 3:45 PM",
      details: "Confirm bank document upload status"
    }
  ];

  const prebuiltTasks = [
    "Call lead before appointment",
    "Upload signed loan documents",
    "Confirm disbursement UTR"
  ];

  const handleCreateTask = () => {
    toast.success("Task created successfully!");
    setShowCreateTask(false);
    setTaskData({
      taskName: "",
      typeOfTask: "",
      assignTo: "",
      dateTime: "",
      notes: ""
    });
  };

  const handleClear = () => {
    setTaskData({
      taskName: "",
      typeOfTask: "",
      assignTo: "",
      dateTime: "",
      notes: ""
    });
  };

  if (showCreateTask) {
    return (
      <Layout>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => setShowCreateTask(false)}
              className="p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Button>
            <h1 className="text-2xl font-bold">Add New Task</h1>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            {/* Completed Tasks Section */}
            <div className="mb-8">
              <div className="flex gap-4 mb-6">
                <Button variant="outline">Pending</Button>
                <Button variant="default">Completed</Button>
                <Button variant="outline" className="ml-auto">
                  <span className="mr-2">🔍</span> Filter
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {completedTasks.map((task, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm mb-1">{task.title}</h3>
                        <p className="text-xs text-gray-500 mb-1">{task.completedOn}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{task.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mb-8">
                <Button variant="outline">Show More</Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <p className="text-sm font-medium">Create Task</p>
              </div>
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <p className="text-sm font-medium">Prebuilt Tasks</p>
              </div>
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-sm font-medium">Assign Task</p>
              </div>
            </div>

            {/* Prebuilt Tasks */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Prebuilt Tasks</h3>
              <div className="space-y-3">
                {prebuiltTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                      <span className="text-sm">{task}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Create Task Form */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Task Name</label>
                  <Input
                    value={taskData.taskName}
                    onChange={(e) => setTaskData({...taskData, taskName: e.target.value})}
                    placeholder="Task Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Type of Task</label>
                  <Select value={taskData.typeOfTask} onValueChange={(value) => setTaskData({...taskData, typeOfTask: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Type of Task" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="call">Call</SelectItem>
                      <SelectItem value="document">Document</SelectItem>
                      <SelectItem value="meeting">Meeting</SelectItem>
                      <SelectItem value="follow-up">Follow-up</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Assign To</label>
                  <Select value={taskData.assignTo} onValueChange={(value) => setTaskData({...taskData, assignTo: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Assign To" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="me">Me</SelectItem>
                      <SelectItem value="team">Team</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Date & Time</label>
                  <Input
                    type="datetime-local"
                    value={taskData.dateTime}
                    onChange={(e) => setTaskData({...taskData, dateTime: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Notes...</label>
                <textarea
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none h-20"
                  value={taskData.notes}
                  onChange={(e) => setTaskData({...taskData, notes: e.target.value})}
                  placeholder="Notes..."
                />
              </div>

              <div className="flex justify-center gap-4 pt-4">
                <Button onClick={handleCreateTask} className="bg-brand-purple hover:bg-brand-purple/90">
                  Create Task
                </Button>
                <Button variant="outline" onClick={handleClear}>
                  Clear
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

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
            <Button variant="outline" className="ml-auto">
              <span className="mr-2">🔍</span> Filter
            </Button>
          </div>

          {/* Completed Tasks Grid */}
          {activeTab === "completed" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {completedTasks.map((task, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm mb-1">{task.title}</h3>
                        <p className="text-xs text-gray-500 mb-1">{task.completedOn}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{task.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mb-8">
                <Button variant="outline">Show More</Button>
              </div>
            </>
          )}

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div 
              className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
              onClick={() => setShowCreateTask(true)}
            >
              <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <p className="text-sm font-medium">Create Task</p>
            </div>
            <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <p className="text-sm font-medium">Prebuilt Tasks</p>
            </div>
            <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-sm font-medium">Assign Task</p>
            </div>
          </div>

          {/* Prebuilt Tasks */}
          <div>
            <h3 className="font-semibold mb-4">Prebuilt Tasks</h3>
            <div className="space-y-3">
              {prebuiltTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                    <span className="text-sm">{task}</span>
                  </div>
                  <Button variant="ghost" size="sm">
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

export default LoanCoordinatorTasks;
