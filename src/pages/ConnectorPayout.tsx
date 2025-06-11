
import React from "react";
import ConnectorLayout from "../components/ConnectorLayout";

const ConnectorPayout = () => {
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
    <ConnectorLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Payout Summary</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-medium text-blue-600">Lead Number</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-blue-600">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-blue-600">Loan type</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-blue-600">Loan Amount</th>
                </tr>
              </thead>
              <tbody>
                {payoutData.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">{item.leadNumber}</td>
                    <td className="py-3 px-4 text-sm">{item.name}</td>
                    <td className="py-3 px-4 text-sm">{item.loanType}</td>
                    <td className="py-3 px-4 text-sm font-medium">{item.loanAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 flex justify-center">
            <div className="w-32 h-1 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </ConnectorLayout>
  );
};

export default ConnectorPayout;
