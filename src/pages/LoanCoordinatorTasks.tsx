
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const LoanCoordinatorTasks = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    type: "",
    assignee: "",
    dueDate: ""
  });

  const completedTasks = [
    {
      id: "#T001",
      title: "UTR Confirmed for ₹2.5L",
      description: "UTR No: UTR1234XXXX",
      completedDate: "2 Apr, 3:45 PM",
      status: "completed"
    },
    {
      id: "#T002", 
      title: "Google review collected from Aditi Sh...",
      description: "Confirm bank document upload status",
      completedDate: "2 Apr, 3:45 PM",
      status: "completed"
    },
    {
      id: "#T003",
      title: "Loan appointment scheduled for Vipu...",
      description: "Location: Jalgaon",
      completedDate: "1 Apr, 12:00 PM",
      status: "completed"
    },
    {
      id: "#T004",
      title: "Google review collected from Aditi Sh...",
      description: "Confirm bank document upload status", 
      completedDate: "2 Apr, 3:45 PM",
      status: "completed"
    }
  ];

  const prebuiltTasks = [
    "Call lead before appointment",
    "Upload signed loan documents", 
    "Confirm disbursement UTR"
  ];

  const handleCreateTask = () => {
    if (!newTask.title || !newTask.type) {
      toast.error("Please fill in required fields");
      return;
    }
    toast.success("Task created successfully!");
    setIsCreateTaskOpen(false);
    setNewTask({ title: "", description: "", type: "", assignee: "", dueDate: "" });
  };

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

          {activeTab === "completed" && (
            <>
              {/* Completed Tasks Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {completedTasks.map((task) => (
                  <div key={task.id} className="border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{task.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-xs text-gray-500">Completed on: {task.completedDate}</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-2">{task.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button variant="link">Show More</Button>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <Dialog open={isCreateTaskOpen} onOpenChange={setIsCreateTaskOpen}>
                  <DialogTrigger asChild>
                    <Button className="h-16 flex flex-col items-center justify-center gap-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Create Task
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" onClick={() => setIsCreateTaskOpen(false)}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </Button>
                          Add New Task
                        </div>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="taskName">Task Name</Label>
                        <Input
                          id="taskName"
                          value={newTask.title}
                          onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                          placeholder="Task Name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="taskType">Type of Task</Label>
                        <Select value={newTask.type} onValueChange={(value) => setNewTask({...newTask, type: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Type of Task" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="verification">Document Verification</SelectItem>
                            <SelectItem value="follow-up">Follow-up Call</SelectItem>
                            <SelectItem value="review">Application Review</SelectItem>
                            <SelectItem value="meeting">Client Meeting</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="assignTo">Assign To</Label>
                        <Select value={newTask.assignee} onValueChange={(value) => setNewTask({...newTask, assignee: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Assign To" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="john">John Doe</SelectItem>
                            <SelectItem value="jane">Jane Smith</SelectItem>
                            <SelectItem value="mike">Mike Johnson</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="dueDate">Date & Time</Label>
                        <Input
                          id="dueDate"
                          type="datetime-local"
                          value={newTask.dueDate}
                          onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="notes">Notes...</Label>
                        <Textarea
                          id="notes"
                          value={newTask.description}
                          onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                          placeholder="Notes..."
                          rows={3}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={handleCreateTask} className="flex-1">
                          Create Task
                        </Button>
                        <Button variant="outline" onClick={() => setNewTask({ title: "", description: "", type: "", assignee: "", dueDate: "" })} className="flex-1">
                          Clear
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button variant="outline" className="h-16 flex flex-col items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Prebuilt Tasks
                </Button>

                <Button variant="outline" className="h-16 flex flex-col items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Assign Task
                </Button>
              </div>

              {/* Prebuilt Tasks */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Prebuilt Tasks</h3>
                <div className="space-y-2">
                  {prebuiltTasks.map((task, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <span className="text-sm">{task}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default LoanCoordinatorTasks;
