
import React, { useState } from "react";
import LoanAdministratorLayout from "../components/LoanAdministratorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Calendar, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { toast } from "sonner";

const LoanAdministratorTasks = () => {
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
    assignee: ""
  });

  const tasks = [
    {
      id: "TSK001",
      title: "Review loan application LA001",
      description: "Complete document verification and credit assessment for Rajesh Kumar's home loan application",
      priority: "High",
      priorityColor: "text-red-600 bg-red-100",
      dueDate: "2024-01-20",
      assignee: "Administrator",
      status: "In Progress",
      statusIcon: Clock,
      statusColor: "text-yellow-600"
    },
    {
      id: "TSK002",
      title: "Generate monthly disbursement report",
      description: "Compile and analyze disbursement data for January 2024",
      priority: "Medium",
      priorityColor: "text-yellow-600 bg-yellow-100",
      dueDate: "2024-01-25",
      assignee: "Administrator",
      status: "Pending",
      statusIcon: AlertCircle,
      statusColor: "text-orange-600"
    },
    {
      id: "TSK003",
      title: "Update bank sanction procedures",
      description: "Review and update standard operating procedures for bank sanctions",
      priority: "Low",
      priorityColor: "text-green-600 bg-green-100",
      dueDate: "2024-01-30",
      assignee: "Administrator",
      status: "Completed",
      statusIcon: CheckCircle,
      statusColor: "text-green-600"
    },
    {
      id: "TSK004",
      title: "Approve pending disbursements",
      description: "Review and approve 5 pending disbursement requests",
      priority: "High",
      priorityColor: "text-red-600 bg-red-100",
      dueDate: "2024-01-18",
      assignee: "Administrator",
      status: "In Progress",
      statusIcon: Clock,
      statusColor: "text-yellow-600"
    },
    {
      id: "TSK005",
      title: "Conduct quarterly performance review",
      description: "Analyze Q4 2023 performance metrics and prepare improvement strategies",
      priority: "Medium",
      priorityColor: "text-yellow-600 bg-yellow-100",
      dueDate: "2024-02-01",
      assignee: "Administrator",
      status: "Pending",
      statusIcon: AlertCircle,
      statusColor: "text-orange-600"
    }
  ];

  const handleCreateTask = () => {
    if (!newTask.title || !newTask.dueDate) {
      toast.error("Please fill in required fields");
      return;
    }
    toast.success("Task created successfully");
    setShowCreateTask(false);
    setNewTask({
      title: "",
      description: "",
      priority: "medium",
      dueDate: "",
      assignee: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTask(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const taskStats = [
    { label: "Total Tasks", value: "5", color: "text-blue-600" },
    { label: "In Progress", value: "2", color: "text-yellow-600" },
    { label: "Completed", value: "1", color: "text-green-600" },
    { label: "Pending", value: "2", color: "text-orange-600" }
  ];

  return (
    <LoanAdministratorLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Tasks Management</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage and track your administrative tasks</p>
          </div>
          <Button
            onClick={() => setShowCreateTask(!showCreateTask)}
            className="bg-brand-purple hover:bg-brand-purple/90"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Task
          </Button>
        </div>

        {/* Task Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {taskStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Create Task Form */}
        {showCreateTask && (
          <Card>
            <CardHeader>
              <CardTitle>Create New Task</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Task Title *</Label>
                  <Input
                    id="title"
                    name="title"
                    value={newTask.title}
                    onChange={handleInputChange}
                    placeholder="Enter task title"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <select
                    id="priority"
                    name="priority"
                    value={newTask.priority}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dueDate">Due Date *</Label>
                  <Input
                    id="dueDate"
                    name="dueDate"
                    type="date"
                    value={newTask.dueDate}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assignee">Assignee</Label>
                  <Input
                    id="assignee"
                    name="assignee"
                    value={newTask.assignee}
                    onChange={handleInputChange}
                    placeholder="Assign to"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  name="description"
                  value={newTask.description}
                  onChange={handleInputChange}
                  placeholder="Enter task description"
                  rows={3}
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>

              <div className="flex gap-2">
                <Button onClick={handleCreateTask} className="bg-brand-purple hover:bg-brand-purple/90">
                  Create Task
                </Button>
                <Button variant="outline" onClick={() => setShowCreateTask(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Tasks List */}
        <Card>
          <CardHeader>
            <CardTitle>All Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{task.title}</h4>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${task.priorityColor}`}>
                          {task.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{task.description}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Due: {task.dueDate}
                        </span>
                        <span>ID: {task.id}</span>
                        <span>Assignee: {task.assignee}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <task.statusIcon className={`h-4 w-4 ${task.statusColor}`} />
                      <span className={`text-sm font-medium ${task.statusColor}`}>
                        {task.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </LoanAdministratorLayout>
  );
};

export default LoanAdministratorTasks;
