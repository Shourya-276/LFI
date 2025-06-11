
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

  return (
    <ConnectorLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="space-y-6">
        {/* Performance Metrics Section */}
        <div className="space-y-6">
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
      </div>
    </ConnectorLayout>
  );
};

export default ConnectorDashboard;
