
/**
 * CONNECTOR INVOICE PAGE
 * 
 * This component handles invoice creation and display for connector users.
 * It includes a form for creating invoices and displays a tax invoice
 * format exactly as shown in the reference images.
 * 
 * USAGE:
 * - Accessible via /connector-invoice route
 * - Used within ConnectorDashboard navigation
 */

import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import ConnectorLayout from "../components/ConnectorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ConnectorInvoice = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("invoice");
  const [showInvoice, setShowInvoice] = useState(false);
  
  const [invoiceData, setInvoiceData] = useState({
    companyName: "",
    companyAddress: "",
    companyGstNumber: "",
    stateCode: "",
    companyPanNumber: "",
    customer1: "",
    customer1Amount: "",
    customer2: "",
    customer2Amount: "",
    cgst: "9",
    sgst: "9",
    connectorName: "",
    bankName: "",
    connectorGstNumber: "",
    bankAccountType: "",
    connectorPanNumber: "",
    accountNumber: "",
    ifscCode: "",
    branchName: "",
  });

  // Check if user is authorized
  if (!user || user.role !== "connector") {
    return <Navigate to="/dashboard" />;
  }

  const handleInputChange = (field: string, value: string) => {
    setInvoiceData(prev => ({ ...prev, [field]: value }));
  };

  const handleCreateInvoice = () => {
    setShowInvoice(true);
  };

  const handleDownload = () => {
    // Simple download implementation
    const element = document.createElement('a');
    const file = new Blob(['Tax Invoice Data'], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'tax-invoice.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (showInvoice) {
    const amount1 = parseFloat(invoiceData.customer1Amount) || 0;
    const amount2 = parseFloat(invoiceData.customer2Amount) || 0;
    const totalAmount = amount1 + amount2;
    const cgstAmount = (totalAmount * parseFloat(invoiceData.cgst)) / 100;
    const sgstAmount = (totalAmount * parseFloat(invoiceData.sgst)) / 100;
    const totalPayable = totalAmount + cgstAmount + sgstAmount;

    return (
      <ConnectorLayout activeTab={activeTab} setActiveTab={setActiveTab}>
        <div className="max-w-4xl">
          <div className="mb-4">
            <Button variant="outline" onClick={() => setShowInvoice(false)}>
              ← Back
            </Button>
          </div>

          <Card>
            <CardContent className="p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold">Tax Invoice</h1>
              </div>

              {/* Company Details */}
              <div className="mb-6">
                <h3 className="font-semibold">Company details:</h3>
                <div className="text-sm space-y-1">
                  <div>Invoice No: [127482162]</div>
                  <div>Date: [01/04/2004]</div>
                  <div>To,</div>
                  <div>Loan For India</div>
                  <div>B/905/906/8th Floor, Domji Shamji Corporate Square Ghatkopar East-77</div>
                  <div>GST No: [{invoiceData.companyGstNumber || "GST Number"}]</div>
                  <div>PAN No: [{invoiceData.companyPanNumber || "PAN Number"}]</div>
                  <div>State Code: [{invoiceData.stateCode || "State Code"}]</div>
                </div>
              </div>

              {/* Invoice Table */}
              <div className="mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Sr. No</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Particulars</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">TAX</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Commission Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">#1</td>
                      <td className="border border-gray-300 px-4 py-2">
                        Payment Of<br />
                        1-{invoiceData.customer1 || "Mr Ajinkya Gosavi"}<br />
                        2-{invoiceData.customer2 || "Ratnkar Gosavi"}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹{amount1.toLocaleString()}<br />
                        ₹{amount2.toLocaleString()}
                      </td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹{amount1.toLocaleString()}<br />
                        ₹{amount2.toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total amount</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">₹{totalAmount.toLocaleString()}</td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">₹{totalAmount.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2">CGST @ {invoiceData.cgst}%</td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2">{invoiceData.cgst}%</td>
                      <td className="border border-gray-300 px-4 py-2">₹{cgstAmount.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2">SGST @ {invoiceData.sgst}%</td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2">{invoiceData.sgst}%</td>
                      <td className="border border-gray-300 px-4 py-2">₹{sgstAmount.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Payable</td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">₹{totalPayable.toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Connector Details */}
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Connector Details,</h3>
                <div className="text-sm space-y-1">
                  <div>Cheque Favouring:Connector name</div>
                  <div>Bank Name: [{invoiceData.bankName || "Bank Name"}]</div>
                  <div>GST No: [{invoiceData.connectorGstNumber || "Your GST Number"}]</div>
                  <div>PAN No: [{invoiceData.connectorPanNumber || "Your PAN Number"}]</div>
                  <div>Account No: [{invoiceData.accountNumber || "Account Number"}]</div>
                  <div>Account Type: [{invoiceData.bankAccountType || "e.g., Current Account"}]</div>
                  <div>IFSC Code: [{invoiceData.ifscCode || "IFSC Code"}]</div>
                  <div>Branch Name: [{invoiceData.branchName || "Branch Name"}]</div>
                </div>
              </div>

              {/* Download Button */}
              <div className="mt-6 text-right">
                <Button onClick={handleDownload} className="bg-indigo-600 hover:bg-indigo-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </ConnectorLayout>
    );
  }

  return (
    <ConnectorLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Create Invoice</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* To Section */}
            <div>
              <h3 className="font-medium mb-3">To,</h3>
              <h4 className="font-medium mb-3">Company Details:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyName">Company Name:</Label>
                  <Input
                    id="companyName"
                    placeholder="Loan for India(Default)"
                    value={invoiceData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="companyAddress">Address:</Label>
                  <Input
                    id="companyAddress"
                    placeholder="Company Address"
                    value={invoiceData.companyAddress}
                    onChange={(e) => handleInputChange("companyAddress", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="companyGstNumber">GST NO:</Label>
                  <Input
                    id="companyGstNumber"
                    placeholder="Company GST number"
                    value={invoiceData.companyGstNumber}
                    onChange={(e) => handleInputChange("companyGstNumber", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="stateCode">State code-</Label>
                  <Input
                    id="stateCode"
                    placeholder="State Code"
                    value={invoiceData.stateCode}
                    onChange={(e) => handleInputChange("stateCode", e.target.value)}
                  />
                </div>
              </div>
              <div className="w-1/2 mt-4">
                <Label htmlFor="companyPanNumber">PAN NO:</Label>
                <Input
                  id="companyPanNumber"
                  placeholder="Company PAN number"
                  value={invoiceData.companyPanNumber}
                  onChange={(e) => handleInputChange("companyPanNumber", e.target.value)}
                />
              </div>
            </div>

            {/* Billing Details */}
            <div>
              <h4 className="font-medium mb-3">Billing Details:</h4>
              <p className="text-sm text-gray-600 mb-3">Customer Names:(can add multiple names)</p>
              <Button variant="outline" size="sm" className="mb-4">Add Customer</Button>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm">1.</span>
                  <Input
                    placeholder="1-Customer"
                    value={invoiceData.customer1}
                    onChange={(e) => handleInputChange("customer1", e.target.value)}
                    className="flex-1"
                  />
                  <span>→</span>
                  <Input
                    placeholder="1-Customer amount"
                    value={invoiceData.customer1Amount}
                    onChange={(e) => handleInputChange("customer1Amount", e.target.value)}
                    className="w-32"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">2.</span>
                  <Input
                    placeholder="2-Customer"
                    value={invoiceData.customer2}
                    onChange={(e) => handleInputChange("customer2", e.target.value)}
                    className="flex-1"
                  />
                  <span>→</span>
                  <Input
                    placeholder="2-Customer amount"
                    value={invoiceData.customer2Amount}
                    onChange={(e) => handleInputChange("customer2Amount", e.target.value)}
                    className="w-32"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Label>CGST :</Label>
                  <Input
                    value={invoiceData.cgst}
                    onChange={(e) => handleInputChange("cgst", e.target.value)}
                    className="w-16"
                  />
                  <span>%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Label>SGST :</Label>
                  <Input
                    value={invoiceData.sgst}
                    onChange={(e) => handleInputChange("sgst", e.target.value)}
                    className="w-16"
                  />
                  <span>%</span>
                </div>
              </div>
            </div>

            {/* From Section */}
            <div>
              <h4 className="font-medium mb-3">From,</h4>
              <h4 className="font-medium mb-3">Connector Details:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="connectorName">Connector's Name:</Label>
                  <Input
                    id="connectorName"
                    placeholder="Name"
                    value={invoiceData.connectorName}
                    onChange={(e) => handleInputChange("connectorName", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="bankName">Bank Name:</Label>
                  <Input
                    id="bankName"
                    placeholder="Bank Name"
                    value={invoiceData.bankName}
                    onChange={(e) => handleInputChange("bankName", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="connectorGstNumber">GST NO:</Label>
                  <Input
                    id="connectorGstNumber"
                    placeholder="Company GST number"
                    value={invoiceData.connectorGstNumber}
                    onChange={(e) => handleInputChange("connectorGstNumber", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="bankAccountType">Bank Account Type:</Label>
                  <Input
                    id="bankAccountType"
                    placeholder="Type"
                    value={invoiceData.bankAccountType}
                    onChange={(e) => handleInputChange("bankAccountType", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="connectorPanNumber">PAN NO:</Label>
                  <Input
                    id="connectorPanNumber"
                    placeholder="Company PAN number"
                    value={invoiceData.connectorPanNumber}
                    onChange={(e) => handleInputChange("connectorPanNumber", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="accountNumber">Bank Account number:</Label>
                  <Input
                    id="accountNumber"
                    placeholder="Acc Number"
                    value={invoiceData.accountNumber}
                    onChange={(e) => handleInputChange("accountNumber", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="ifscCode">IFSC Code:</Label>
                  <Input
                    id="ifscCode"
                    placeholder="IFSC"
                    value={invoiceData.ifscCode}
                    onChange={(e) => handleInputChange("ifscCode", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="branchName">Branch Name:</Label>
                  <Input
                    id="branchName"
                    placeholder="Branch Name"
                    value={invoiceData.branchName}
                    onChange={(e) => handleInputChange("branchName", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button variant="outline">Clear</Button>
              <Button onClick={handleCreateInvoice} className="bg-indigo-600 hover:bg-indigo-700">
                Create Invoice
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </ConnectorLayout>
  );
};

export default ConnectorInvoice;
