
import React from "react";
import ConnectorLayout from "../components/ConnectorLayout";

const ConnectorPayout = () => {
  const payoutData = [
    { id: "#1", name: "Priya Mehta", loanType: "HL", amount: "₹3,00,000" },
    { id: "#2", name: "Rajesh Sharma", loanType: "HL", amount: "₹2,00,000" },
    { id: "#3", name: "Anil Gupta", loanType: "HL", amount: "₹7,00,000" },
    { id: "#4", name: "Rajesh Sharma", loanType: "HL", amount: "₹8,00,000" },
    { id: "#5", name: "Priya Mehta", loanType: "HL", amount: "₹10,00,000" },
    { id: "#6", name: "Priya Mehta", loanType: "HL", amount: "₹22,00,000" },
    { id: "#7", name: "Neha Verma", loanType: "HL", amount: "₹5,00,000" },
    { id: "#8", name: "Priya Mehta", loanType: "HL", amount: "₹5,00,000" },
    { id: "#9", name: "Anil Gupta", loanType: "HL", amount: "₹5,00,000" },
  ];

  return (
    <ConnectorLayout>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-xl font-bold text-center mb-6">Payout Summary</h1>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Lead Number</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Loan type</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Loan Amount</th>
                </tr>
              </thead>
              <tbody>
                {payoutData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-3 px-4 text-sm">{item.id}</td>
                    <td className="py-3 px-4 text-sm">{item.name}</td>
                    <td className="py-3 px-4 text-sm">{item.loanType}</td>
                    <td className="py-3 px-4 text-sm font-medium">{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ConnectorLayout>
  );
};

export default ConnectorPayout;
