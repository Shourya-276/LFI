
import React, { useState } from "react";
import LoanAdministratorLayout from "../components/LoanAdministratorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Filter } from "lucide-react";
import { toast } from "sonner";

const LoanAdministratorReports = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  const bankWiseData = [
    { bankName: "HDFC Bank", applications: "450", approved: "380", amount: "₹125.5 Cr" },
    { bankName: "ICICI Bank", applications: "320", approved: "290", amount: "₹98.2 Cr" },
    { bankName: "SBI", applications: "680", approved: "520", amount: "₹210.8 Cr" },
    { bankName: "Axis Bank", applications: "210", approved: "185", amount: "₹65.3 Cr" },
    { bankName: "Kotak Bank", applications: "180", approved: "155", amount: "₹52.1 Cr" },
    { bankName: "PNB", applications: "290", approved: "240", amount: "₹78.9 Cr" }
  ];

  const loanTypeData = [
    { type: "Home Loan", applications: "850", approved: "720", percentage: "84.7%" },
    { type: "Personal Loan", applications: "650", approved: "580", percentage: "89.2%" },
    { type: "Car Loan", applications: "380", approved: "340", percentage: "89.5%" },
    { type: "Business Loan", applications: "250", approved: "190", percentage: "76.0%" }
  ];

  const handleExport = (reportType: string) => {
    toast.success(`Exporting ${reportType} report...`);
  };

  return (
    <LoanAdministratorLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Reports & Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400">Comprehensive loan performance insights</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-6">
          <Button
            onClick={() => setActiveTab("monthly")}
            variant={activeTab === "monthly" ? "default" : "outline"}
            className={activeTab === "monthly" ? "bg-brand-purple" : ""}
          >
            Monthly
          </Button>
          <Button
            onClick={() => setActiveTab("quarterly")}
            variant={activeTab === "quarterly" ? "default" : "outline"}
            className={activeTab === "quarterly" ? "bg-brand-purple" : ""}
          >
            Quarterly
          </Button>
          <Button
            onClick={() => setActiveTab("yearly")}
            variant={activeTab === "yearly" ? "default" : "outline"}
            className={activeTab === "yearly" ? "bg-brand-purple" : ""}
          >
            Yearly
          </Button>
          <div className="ml-auto flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="outline" onClick={() => handleExport('Summary')} className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Total Applications</p>
                <p className="text-2xl font-bold text-blue-600">2,847</p>
                <p className="text-xs text-green-600">↗ +12.5%</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Approval Rate</p>
                <p className="text-2xl font-bold text-green-600">82.3%</p>
                <p className="text-xs text-green-600">↗ +2.1%</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Total Disbursed</p>
                <p className="text-2xl font-bold text-purple-600">₹630.8 Cr</p>
                <p className="text-xs text-green-600">↗ +18.3%</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Average Processing</p>
                <p className="text-2xl font-bold text-orange-600">7.2 days</p>
                <p className="text-xs text-green-600">↗ -1.2 days</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Performance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Performance Chart Visualization</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bank-wise Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Bank-wise Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 text-sm font-medium text-gray-600">Bank</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600">Applications</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600">Approved</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bankWiseData.map((bank, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 text-sm text-gray-900 dark:text-gray-100">{bank.bankName}</td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{bank.applications}</td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{bank.approved}</td>
                        <td className="py-3 text-sm font-medium text-brand-purple">{bank.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Loan Type Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Loan Type Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {loanTypeData.map((loan, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{loan.type}</h4>
                      <span className="text-sm font-medium text-green-600">{loan.percentage}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>Applications: {loan.applications}</span>
                      <span>Approved: {loan.approved}</span>
                    </div>
                    <div className="mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-brand-purple h-2 rounded-full" 
                        style={{ width: loan.percentage }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Export Section */}
        <Card>
          <CardHeader>
            <CardTitle>Export Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                variant="outline" 
                onClick={() => handleExport('Bank Performance')}
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Bank Performance Report
              </Button>
              <Button 
                variant="outline" 
                onClick={() => handleExport('Loan Analysis')}
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Loan Type Analysis
              </Button>
              <Button 
                variant="outline" 
                onClick={() => handleExport('Monthly Summary')}
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Monthly Summary
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </LoanAdministratorLayout>
  );
};

export default LoanAdministratorReports;
