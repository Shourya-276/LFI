
import React from "react";
import ConnectorLayout from "../components/ConnectorLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ConnectorDashboard = () => {
  const performanceData = [
    { month: 'Jan', value: 80 },
    { month: 'Feb', value: 65 },
    { month: 'Mar', value: 45 },
    { month: 'Apr', value: 60 },
    { month: 'May', value: 85 },
    { month: 'Jun', value: 70 },
  ];

  const recentLeads = [
    { id: '#80', name: 'Priya Mehta', type: 'HL', bank: 'Sbi', converted: 'Yes' },
    { id: '#221', name: 'Rajesh Sharma', type: 'HL', bank: 'Hdfc', converted: 'No' },
    { id: '#140', name: 'Anil Gupta', type: 'HL', bank: 'kotak', converted: 'Yes' },
    { id: '#40', name: 'Rajesh Sharma', type: 'HL', bank: 'ICIC', converted: 'Pending' },
  ];

  return (
    <ConnectorLayout>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        {/* Performance Metrics */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Performance Metrics</h2>
            <p className="text-sm text-gray-600 mb-6">Month wise Overview</p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <p className="text-sm text-gray-600 mb-1">Leads Received</p>
                <p className="text-2xl font-bold">150</p>
                <p className="text-sm text-green-600">+20%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Leads Converted</p>
                <p className="text-2xl font-bold">75</p>
                <p className="text-sm text-green-600">+10%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Disbursement</p>
                <p className="text-2xl font-bold">₹50,000</p>
                <p className="text-sm text-green-600">+15%</p>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-2">Monthly Performance</h3>
              <p className="text-xs text-gray-500 mb-4">Performance Metrics</p>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#9CA3AF" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Recent Leads */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Recent Leads</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm flex items-center gap-2">
                Download 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 text-sm font-medium text-gray-600">Lead Number</th>
                    <th className="text-left py-2 text-sm font-medium text-gray-600">Name</th>
                    <th className="text-left py-2 text-sm font-medium text-gray-600">Loan type</th>
                    <th className="text-left py-2 text-sm font-medium text-gray-600">Bank Name</th>
                    <th className="text-left py-2 text-sm font-medium text-gray-600">Converted</th>
                  </tr>
                </thead>
                <tbody>
                  {recentLeads.map((lead, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-3 text-sm">{lead.id}</td>
                      <td className="py-3 text-sm">{lead.name}</td>
                      <td className="py-3 text-sm">{lead.type}</td>
                      <td className="py-3 text-sm">{lead.bank}</td>
                      <td className="py-3">
                        <span className={`text-xs px-2 py-1 rounded ${
                          lead.converted === 'Yes' ? 'bg-green-100 text-green-600' :
                          lead.converted === 'No' ? 'bg-red-100 text-red-600' :
                          'bg-yellow-100 text-yellow-600'
                        }`}>
                          {lead.converted}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ConnectorLayout>
  );
};

export default ConnectorDashboard;
