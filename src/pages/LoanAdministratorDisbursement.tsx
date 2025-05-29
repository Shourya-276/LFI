
import React from "react";
import LoanAdministratorLayout from "../components/LoanAdministratorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const LoanAdministratorDisbursement = () => {
  const pendingDisbursements = [
    {
      id: "DIS001",
      applicantName: "Sunita Verma",
      bankName: "Axis Bank",
      loanAmount: "₹8,00,000",
      loanType: "Car Loan",
      sanctionDate: "2024-01-10",
      action: "Approve Disbursement"
    },
    {
      id: "DIS002",
      applicantName: "Rajesh Kumar",
      bankName: "HDFC Bank",
      loanAmount: "₹25,00,000",
      loanType: "Home Loan",
      sanctionDate: "2024-01-12",
      action: "Verify Documents"
    },
    {
      id: "DIS003",
      applicantName: "Priya Sharma",
      bankName: "ICICI Bank",
      loanAmount: "₹5,00,000",
      loanType: "Personal Loan",
      sanctionDate: "2024-01-14",
      action: "Final Approval"
    }
  ];

  const completedDisbursements = [
    {
      id: "DIS100",
      applicantName: "Vikram Singh",
      bankName: "HDFC Bank",
      loanAmount: "₹35,00,000",
      loanType: "Home Loan",
      disbursementDate: "2024-01-08",
      status: "Disbursed",
      referenceNumber: "REF123456789"
    },
    {
      id: "DIS101",
      applicantName: "Amit Patel",
      bankName: "SBI",
      loanAmount: "₹50,00,000",
      loanType: "Business Loan",
      disbursementDate: "2024-01-05",
      status: "Disbursed",
      referenceNumber: "REF987654321"
    },
    {
      id: "DIS102",
      applicantName: "Neha Gupta",
      bankName: "ICICI Bank",
      loanAmount: "₹12,00,000",
      loanType: "Personal Loan",
      disbursementDate: "2024-01-03",
      status: "Failed",
      referenceNumber: "N/A"
    }
  ];

  const handleAction = (disbursementId: string, action: string) => {
    toast.success(`${action} initiated for ${disbursementId}`);
  };

  return (
    <LoanAdministratorLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Disbursement</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage loan disbursements and approvals</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pending Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-yellow-500" />
                Pending Disbursements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingDisbursements.map((disbursement) => (
                  <div key={disbursement.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">{disbursement.applicantName}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {disbursement.bankName} • {disbursement.loanType}
                        </p>
                        <p className="text-lg font-semibold text-brand-purple">
                          {disbursement.loanAmount}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                          ID: {disbursement.id} • Sanctioned: {disbursement.sanctionDate}
                        </p>
                      </div>
                      <Button
                        onClick={() => handleAction(disbursement.id, disbursement.action)}
                        className="w-full bg-brand-purple hover:bg-brand-purple/90"
                        size="sm"
                      >
                        {disbursement.action}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Completed Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Completed Disbursements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {completedDisbursements.map((disbursement) => (
                  <div key={disbursement.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">{disbursement.applicantName}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {disbursement.bankName} • {disbursement.loanType}
                        </p>
                        <p className="text-lg font-semibold text-brand-purple">
                          {disbursement.loanAmount}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                          ID: {disbursement.id} • Disbursed: {disbursement.disbursementDate}
                        </p>
                        {disbursement.referenceNumber !== 'N/A' && (
                          <p className="text-xs text-gray-600 dark:text-gray-300">
                            Ref: {disbursement.referenceNumber}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          disbursement.status === 'Disbursed' 
                            ? 'text-green-600 bg-green-100' 
                            : 'text-red-600 bg-red-100'
                        }`}>
                          {disbursement.status === 'Disbursed' ? (
                            <CheckCircle className="h-3 w-3 mr-1" />
                          ) : (
                            <AlertCircle className="h-3 w-3 mr-1" />
                          )}
                          {disbursement.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Total Disbursed</p>
                <p className="text-2xl font-bold text-green-600">₹455.8 Cr</p>
                <p className="text-xs text-gray-500">This Month</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Pending Amount</p>
                <p className="text-2xl font-bold text-yellow-600">₹38.0 Cr</p>
                <p className="text-xs text-gray-500">Awaiting Approval</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Success Rate</p>
                <p className="text-2xl font-bold text-blue-600">92.5%</p>
                <p className="text-xs text-gray-500">Last 30 Days</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </LoanAdministratorLayout>
  );
};

export default LoanAdministratorDisbursement;
