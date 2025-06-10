
/**
 * CONNECTOR PAYOUT PAGE
 * 
 * This component displays the payout summary for connector users.
 * It shows all payout records in a scrollable table format
 * exactly as shown in the reference image.
 * 
 * USAGE:
 * - Accessible via /connector-payout route
 * - Used within ConnectorDashboard navigation
 */

import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import ConnectorLayout from "../components/ConnectorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ConnectorPayout = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("payout");

  // Check if user is authorized
  if (!user || user.role !== "connector") {
    return <Navigate to="/dashboard" />;
  }

  const payoutData = [
    { leadNumber: "#1", name: "Priya Mehta", loanType: "HL", loanAmount: "₹3,00,000" },
    { leadNumber: "#2", name: "Rajesh Sharma", loanType: "HL", loanAmount: "₹2,00,000" },
    { leadNumber: "#3", name: "Anil Gupta", loanType: "HL", loanAmount: "₹7,00,000" },
    { leadNumber: "#4", name: "Rajesh Sharma", loanType: "HL", loanAmount: "₹8,00,000" },
    { leadNumber: "#5", name: "Priya Mehta", loanType: "HL", loanAmount: "₹10,00,000" },
    { leadNumber: "#6", name: "Priya Mehta", loanType: "HL", loanAmount: "₹22,00,000" },
    { leadNumber: "#7", name: "Neha Verma", loanType: "HL", loanAmount: "₹5,00,000" },
    { leadNumber: "#6", name: "Priya Mehta", loanType: "HL", loanAmount: "₹5,00,000" },
    { leadNumber: "#8", name: "Anil Gupta", loanType: "HL", loanAmount: "₹5,00,000" },
  ];

  return (
    <ConnectorLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Payout Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Lead Number</th>
                    <th className="text-left py-3 px-4">Name</th>
                    <th className="text-left py-3 px-4">Loan type</th>
                    <th className="text-left py-3 px-4">Loan Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {payoutData.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{item.leadNumber}</td>
                      <td className="py-3 px-4">{item.name}</td>
                      <td className="py-3 px-4">{item.loanType}</td>
                      <td className="py-3 px-4 font-medium">{item.loanAmount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </ConnectorLayout>
  );
};

export default ConnectorPayout;
