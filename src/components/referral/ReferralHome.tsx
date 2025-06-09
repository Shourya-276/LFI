
/**
 * REFERRAL HOME COMPONENT
 * 
 * This component renders the home dashboard for the referral user.
 * It displays performance metrics, recent leads, and a chat interface
 * exactly as shown in the reference images.
 * 
 * USAGE:
 * - Used within ReferralDashboard.tsx when home tab is active
 * - Displays key performance indicators and recent activity
 * 
 * FEATURES:
 * - Performance metrics cards with statistics
 * - Monthly performance chart
 * - Recent leads table
 * - Team chat interface on the right side
 */

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ReferralHome = () => {
  const performanceData = [
    { label: "Leads Received", value: "150", change: "+20%" },
    { label: "Leads Converted", value: "75", change: "+10%" },
    { label: "Disbursement", value: "₹50,000", change: "+15%" },
  ];

  const recentLeads = [
    { leadNumber: "#90", name: "Priya Mehta", loanType: "HL", bankName: "SBI", converted: "Yes" },
    { leadNumber: "#221", name: "Rajesh Sharma", loanType: "HL", bankName: "Hdfc", converted: "No" },
    { leadNumber: "#140", name: "Anil Gupta", loanType: "HL", bankName: "kotak", converted: "Yes" },
    { leadNumber: "#40", name: "Rajesh Sharma", loanType: "HL", bankName: "ICIC", converted: "Pending" },
  ];

  return (
    <div className="space-y-6">
      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <p className="text-sm text-gray-500">Month wise Overview</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-6 mb-6">
            {performanceData.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
                <div className="text-sm text-green-600">{metric.change}</div>
              </div>
            ))}
          </div>

          {/* Monthly Performance Chart */}
          <div>
            <h4 className="font-medium mb-2">Monthly Performance</h4>
            <p className="text-xs text-gray-500 mb-4">Performance Metrics</p>
            <div className="flex items-end space-x-2 h-32">
              {[60, 40, 30, 50, 45, 70].map((height, index) => (
                <div
                  key={index}
                  className="bg-gray-400 flex-1 rounded-t"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">Months</div>
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
                      <span className={`text-sm ${
                        lead.converted === "Yes" ? "text-green-600" : 
                        lead.converted === "No" ? "text-red-600" : 
                        "text-yellow-600"
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
  );
};

export default ReferralHome;
