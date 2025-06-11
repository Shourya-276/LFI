
import React, { useState } from "react";
import ConnectorLayout from "../components/ConnectorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const ConnectorDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  const performanceData = [
    { month: "Jan", value: 120 },
    { month: "Feb", value: 98 },
    { month: "Mar", value: 86 },
    { month: "Apr", value: 99 },
    { month: "May", value: 85 },
    { month: "Jun", value: 105 },
    { month: "Jul", value: 89 },
  ];

  const recentLeads = [
    { leadNumber: "#90", name: "Priya Mehta", loanType: "HL", bankName: "Sbi", converted: "Yes" },
    { leadNumber: "#221", name: "Rajesh Sharma", loanType: "HL", bankName: "Hdfc", converted: "No" },
    { leadNumber: "#140", name: "Anil Gupta", loanType: "HL", bankName: "kotak", converted: "Yes" },
    { leadNumber: "#40", name: "Rajesh Sharma", loanType: "HL", bankName: "ICIC", converted: "Pending" },
  ];

  const chatMessages = [
    {
      name: "Priya Sharma",
      message: "Hello, my loan is approved but not credited to my account yet. Can you check?",
      time: "10:30 AM"
    },
    {
      name: "Priya Sharma", 
      message: "Hi Rohan, I'll check with the bank. Can you confirm your loan reference number?",
      time: "10:32 AM"
    },
    {
      name: "Priya Sharma",
      message: "Sure! It's LOAN12345",
      time: "10:35 AM"
    },
    {
      name: "Aman Verma (Manager)",
      message: "We checked with the bank, and the loan will be credited within 24 hours.",
      time: "10:40 AM"
    },
    {
      name: "Priya Sharma",
      message: "Your loan will be credited within 24 hours. Let me know if you need anything else!",
      time: "10:45 AM"
    }
  ];

  return (
    <ConnectorLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="space-y-6">
        {/* Performance Metrics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance Cards */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Performance Metrics</CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400">Month-wise Overview</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Leads Received</p>
                    <p className="text-2xl font-bold">150</p>
                    <p className="text-sm text-green-600">+20%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Leads Converted</p>
                    <p className="text-2xl font-bold">75</p>
                    <p className="text-sm text-green-600">+10%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Disbursement</p>
                    <p className="text-2xl font-bold">₹50,000</p>
                    <p className="text-sm text-green-600">+15%</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Monthly Performance</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Performance Metrics</p>
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Bar dataKey="value" fill="#6366f1" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Leads */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Leads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Lead Number</th>
                        <th className="text-left py-2">Name</th>
                        <th className="text-left py-2">Loan type</th>
                        <th className="text-left py-2">Bank Name</th>
                        <th className="text-left py-2">Converted</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentLeads.map((lead, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-2">{lead.leadNumber}</td>
                          <td className="py-2">{lead.name}</td>
                          <td className="py-2">{lead.loanType}</td>
                          <td className="py-2">{lead.bankName}</td>
                          <td className="py-2">
                            <span className={`px-2 py-1 rounded text-xs ${
                              lead.converted === "Yes" ? "bg-green-100 text-green-700" :
                              lead.converted === "No" ? "bg-red-100 text-red-700" :
                              "bg-yellow-100 text-yellow-700"
                            }`}>
                              {lead.converted}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Section */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">LFI</span>
                  </div>
                  <div>
                    <p className="font-semibold">Loan for India Team</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {chatMessages.map((message, index) => (
                    <div key={index} className={`p-3 rounded-lg ${
                      message.name.includes("Manager") ? "bg-purple-100 dark:bg-purple-900" :
                      message.name === "Priya Sharma" && message.message.includes("Hi Rohan") ? "bg-blue-100 dark:bg-blue-900" :
                      "bg-green-100 dark:bg-green-900"
                    }`}>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center">
                          <span className="text-xs text-white">{message.name.charAt(0)}</span>
                        </div>
                        <span className="text-sm font-medium">{message.name}</span>
                      </div>
                      <p className="text-sm">{message.message}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <input 
                    type="text" 
                    placeholder="Type Something.." 
                    className="flex-1 px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700"
                  />
                  <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    →
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ConnectorLayout>
  );
};

export default ConnectorDashboard;
