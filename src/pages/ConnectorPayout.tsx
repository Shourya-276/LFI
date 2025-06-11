
import React, { useState } from "react";
import ConnectorLayout from "../components/ConnectorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ConnectorPayout = () => {
  const [activeTab, setActiveTab] = useState("payout");

  const payoutData = [
    { leadNumber: "#1", name: "Priya Mehta", loanType: "HL", loanAmount: "₹3,00,000" },
    { leadNumber: "#2", name: "Rajesh Sharma", loanType: "HL", loanAmount: "₹2,00,000" },
    { leadNumber: "#3", name: "Anil Gupta", loanType: "HL", loanAmount: "₹7,00,000" },
    { leadNumber: "#4", name: "Rajesh Sharma", loanType: "HL", loanAmount: "₹8,00,000" },
    { leadNumber: "#5", name: "Priya Mehta", loanType: "HL", loanAmount: "₹10,00,000" },
    { leadNumber: "#6", name: "Priya Mehta", loanType: "HL", loanAmount: "₹22,00,000" },
    { leadNumber: "#7", name: "Neha Verma", loanType: "HL", loanAmount: "₹5,00,000" },
    { leadNumber: "#8", name: "Priya Mehta", loanType: "HL", loanAmount: "₹5,00,000" },
    { leadNumber: "#9", name: "Anil Gupta", loanType: "HL", loanAmount: "₹5,00,000" },
  ];

  return (
    <ConnectorLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-xl">Payout Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-indigo-600">Lead Number</th>
                    <th className="text-left py-4 px-4 font-semibold text-indigo-600">Name</th>
                    <th className="text-left py-4 px-4 font-semibold text-indigo-600">Loan type</th>
                    <th className="text-left py-4 px-4 font-semibold text-indigo-600">Loan Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {payoutData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="py-4 px-4">{item.leadNumber}</td>
                      <td className="py-4 px-4">{item.name}</td>
                      <td className="py-4 px-4">{item.loanType}</td>
                      <td className="py-4 px-4 font-medium">{item.loanAmount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Summary Section */}
            <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Leads</p>
                  <p className="text-2xl font-bold text-indigo-600">{payoutData.length}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Loan Amount</p>
                  <p className="text-2xl font-bold text-green-600">₹67,00,000</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Average Loan Size</p>
                  <p className="text-2xl font-bold text-blue-600">₹7,44,444</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ConnectorLayout>
  );
};

export default ConnectorPayout;
