
import React, { useState } from "react";
import LoanAdministratorLayout from "../components/LoanAdministratorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Download, CheckCircle, Clock } from "lucide-react";
import { toast } from "sonner";

const LoanAdministratorBankSanctions = () => {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const pendingSanctions = [
    {
      id: "BS001",
      applicantName: "Rajesh Kumar",
      bankName: "HDFC Bank",
      loanAmount: "₹25,00,000",
      loanType: "Home Loan",
      submittedDate: "2024-01-15",
      status: "Document Review"
    },
    {
      id: "BS002",
      applicantName: "Priya Sharma",
      bankName: "ICICI Bank",
      loanAmount: "₹5,00,000",
      loanType: "Personal Loan",
      submittedDate: "2024-01-14",
      status: "Credit Check"
    },
    {
      id: "BS003",
      applicantName: "Amit Patel",
      bankName: "SBI",
      loanAmount: "₹50,00,000",
      loanType: "Business Loan",
      submittedDate: "2024-01-13",
      status: "Awaiting Approval"
    }
  ];

  const completedSanctions = [
    {
      id: "BS100",
      applicantName: "Sunita Verma",
      bankName: "Axis Bank",
      loanAmount: "₹8,00,000",
      loanType: "Car Loan",
      sanctionDate: "2024-01-10",
      status: "Approved",
      sanctionLetter: "Available"
    },
    {
      id: "BS101",
      applicantName: "Vikram Singh",
      bankName: "HDFC Bank",
      loanAmount: "₹35,00,000",
      loanType: "Home Loan",
      sanctionDate: "2024-01-08",
      status: "Approved",
      sanctionLetter: "Available"
    },
    {
      id: "BS102",
      applicantName: "Neha Gupta",
      bankName: "ICICI Bank",
      loanAmount: "₹12,00,000",
      loanType: "Personal Loan",
      sanctionDate: "2024-01-05",
      status: "Rejected",
      sanctionLetter: "N/A"
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileNames = Array.from(files).map(file => file.name);
      setUploadedFiles(prev => [...prev, ...fileNames]);
      toast.success(`${fileNames.length} file(s) uploaded successfully`);
    }
  };

  const handleDownload = (sanctionId: string) => {
    toast.success(`Downloading sanction letter for ${sanctionId}`);
  };

  return (
    <LoanAdministratorLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Bank Sanctions</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage loan sanctions and approvals</p>
        </div>

        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="pending" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Pending
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Completed
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>File Upload</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-lg font-medium mb-2">Upload Sanction Documents</p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Drag and drop files here, or click to browse
                  </p>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                    accept=".pdf,.doc,.docx,.jpg,.png"
                  />
                  <label htmlFor="file-upload">
                    <Button variant="outline" className="cursor-pointer">
                      Choose Files
                    </Button>
                  </label>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Uploaded Files:</h4>
                    <ul className="space-y-1">
                      {uploadedFiles.map((fileName, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {fileName}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pending Sanctions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingSanctions.map((sanction) => (
                    <div key={sanction.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{sanction.applicantName}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {sanction.bankName} • {sanction.loanType} • {sanction.loanAmount}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500">
                            ID: {sanction.id} • Submitted: {sanction.submittedDate}
                          </p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-yellow-600 bg-yellow-100">
                          {sanction.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Completed Sanctions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {completedSanctions.map((sanction) => (
                    <div key={sanction.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{sanction.applicantName}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {sanction.bankName} • {sanction.loanType} • {sanction.loanAmount}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500">
                            ID: {sanction.id} • Sanctioned: {sanction.sanctionDate}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            sanction.status === 'Approved' 
                              ? 'text-green-600 bg-green-100' 
                              : 'text-red-600 bg-red-100'
                          }`}>
                            {sanction.status}
                          </span>
                          {sanction.sanctionLetter === 'Available' && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDownload(sanction.id)}
                              className="ml-2"
                            >
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </LoanAdministratorLayout>
  );
};

export default LoanAdministratorBankSanctions;
