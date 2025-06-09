
/**
 * REFERRAL PAYOUT SUMMARY COMPONENT
 * 
 * This component displays the payout summary table with lead information
 * and corresponding loan amounts exactly as shown in the reference image.
 * 
 * USAGE:
 * - Used within ReferralDashboard.tsx when payout tab is active
 * - Shows financial summary of processed leads
 */

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ReferralPayoutSummary = () => {
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
  );
};

export default ReferralPayoutSummary;
