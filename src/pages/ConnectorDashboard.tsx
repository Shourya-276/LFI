
import React from "react";
import ConnectorLayout from "../components/ConnectorLayout";

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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Metrics */}
        <div className="lg:col-span-2 space-y-6">
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
              
              <div className="flex items-end gap-2 h-40">
                {performanceData.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gray-400 rounded-t"
                      style={{ height: `${item.value}%` }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-2">{item.month}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 text-right mt-2">Months</p>
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

        {/* Right Sidebar - Team Chat */}
        <div className="bg-white rounded-lg p-4 shadow-sm h-fit">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">LFI</span>
              </div>
              <span className="font-medium">Loan for India Team</span>
            </div>
            <button>
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>

          <div className="space-y-3 mb-4 max-h-80 overflow-y-auto">
            <div className="bg-green-100 p-3 rounded text-sm">
              Hello, my loan is approved but not credited to my account yet. Can you check?
            </div>
            
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">P</span>
              </div>
              <div className="text-sm">
                <p className="font-medium">Priya sharma</p>
                <p>Hi Rohan, I'll check with the bank. Can you confirm your loan reference number?</p>
              </div>
            </div>

            <div className="bg-green-100 p-3 rounded text-sm">
              Sure! It's LOAN12345
            </div>

            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">P</span>
              </div>
              <div className="text-sm">
                <p className="font-medium">Priya Sharma</p>
                <p>Thanks! I've escalated your request to the manager. You'll get an update soon.</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">A</span>
              </div>
              <div className="text-sm">
                <p className="font-medium">Aman Verma (Manager)</p>
                <p>We checked with the bank, and the loan will be credited within 24 hours.</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">P</span>
              </div>
              <div className="text-sm">
                <p className="font-medium">Priya Sharma</p>
                <p>Your loan will be credited within 24 hours. Let me know if you need anything else!</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Type Something..."
              className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
            </button>
            <button className="p-2 bg-green-500 text-white rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </ConnectorLayout>
  );
};

export default ConnectorDashboard;
