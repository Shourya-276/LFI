
import React, { useState } from "react";
import ConnectorLayout from "../components/ConnectorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ConnectorInvoice = () => {
  const [showTaxInvoice, setShowTaxInvoice] = useState(false);
  const [formData, setFormData] = useState({
    // Company Details
    companyName: "",
    address: "",
    gstNo: "",
    stateCode: "",
    panNo: "",
    
    // Billing Details
    customers: [{ name: "", amount: "" }, { name: "", amount: "" }],
    cgstRate: "9",
    sgstRate: "9",
    
    // Connector Details
    connectorName: "",
    connectorGstNo: "",
    connectorPanNo: "",
    bankName: "",
    bankAccountType: "",
    bankAccountNumber: "",
    ifscCode: "",
    branchName: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCustomerChange = (index: number, field: string, value: string) => {
    const updatedCustomers = [...formData.customers];
    updatedCustomers[index] = { ...updatedCustomers[index], [field]: value };
    setFormData(prev => ({ ...prev, customers: updatedCustomers }));
  };

  const addCustomer = () => {
    setFormData(prev => ({
      ...prev,
      customers: [...prev.customers, { name: "", amount: "" }]
    }));
  };

  const handleCreateInvoice = () => {
    setShowTaxInvoice(true);
  };

  if (showTaxInvoice) {
    return (
      <ConnectorLayout>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-2xl font-bold text-center mb-6">Tax Invoice</h1>
            
            {/* Company Details */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Company details:</h3>
              <p>Invoice No: [27482162]</p>
              <p>Date: [01/04/2024]</p>
              <p className="font-semibold">To,</p>
              <p>Loan For India</p>
              <p>g/806/906/9th Floor, Damji Shamji Corporate Square Ghatkopar East-77</p>
              <p>GST NO: [GST Number]</p>
              <p>PAN NO: [PAN Number]</p>
              <p>State Code: [State Code]</p>
            </div>

            {/* Invoice Table */}
            <div className="mb-6">
              <table className="w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-2 text-left">Sr. No</th>
                    <th className="border border-gray-300 p-2 text-left">Particulars</th>
                    <th className="border border-gray-300 p-2 text-left">Amount</th>
                    <th className="border border-gray-300 p-2 text-left">TAX</th>
                    <th className="border border-gray-300 p-2 text-left">Commission Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">#1</td>
                    <td className="border border-gray-300 p-2">
                      Payment Of<br />
                      1- Mr.Ajinkya Gosavi<br />
                      2- Ratnakar Gosavi
                    </td>
                    <td className="border border-gray-300 p-2">
                      ₹100000<br />
                      ₹100000
                    </td>
                    <td className="border border-gray-300 p-2">
                      ₹28,000<br />
                      ₹20,000
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2" colSpan={2}>Total amount</td>
                    <td className="border border-gray-300 p-2">₹200000</td>
                    <td className="border border-gray-300 p-2">₹48,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2" colSpan={2}>CGST @ 9%</td>
                    <td className="border border-gray-300 p-2">9%</td>
                    <td className="border border-gray-300 p-2">₹4320</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2" colSpan={2}>SGST @ 9%</td>
                    <td className="border border-gray-300 p-2">9%</td>
                    <td className="border border-gray-300 p-2">₹4320</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2" colSpan={3}>Total Payable</td>
                    <td className="border border-gray-300 p-2">₹56,640</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Connector Details */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Connector Details:</h3>
              <p>Cheque Favouring:Connector name</p>
              <p>Bank Name: [Bank Name]</p>
              <p>GST No: [Your GST Number]</p>
              <p>PAN No: [Your PAN Number]</p>
              <p>Account No: [Account Number]</p>
              <p>Account Type: [e.g. Current Account]</p>
              <p>IFSC Code: [IFSC Code]</p>
              <p>Branch Name: [Branch Name]</p>
            </div>

            <div className="flex gap-4">
              <Button 
                variant="outline"
                onClick={() => setShowTaxInvoice(false)}
              >
                Back to Form
              </Button>
              <Button className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download
              </Button>
            </div>
          </div>
        </div>
      </ConnectorLayout>
    );
  }

  return (
    <ConnectorLayout>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-xl font-semibold mb-6 text-center">Create Invoice</h1>

          <form className="space-y-6">
            {/* To Section */}
            <div>
              <h3 className="font-semibold mb-3">To,</h3>
              <h4 className="font-medium mb-3">Company Details:</h4>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name:</label>
                  <Input
                    placeholder="Company (open text field)"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address:</label>
                  <Input
                    placeholder="Company address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">GST NO:</label>
                  <Input
                    placeholder="Company GST Number"
                    value={formData.gstNo}
                    onChange={(e) => handleInputChange('gstNo', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State code:</label>
                  <Input
                    placeholder="State Code"
                    value={formData.stateCode}
                    onChange={(e) => handleInputChange('stateCode', e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">PAN NO:</label>
                <Input
                  placeholder="Company PAN Number"
                  value={formData.panNo}
                  onChange={(e) => handleInputChange('panNo', e.target.value)}
                  className="max-w-xs"
                />
              </div>
            </div>

            {/* Billing Details */}
            <div>
              <h4 className="font-medium mb-3">Billing Details:</h4>
              <div className="mb-3">
                <span className="text-sm font-medium text-gray-700">Customer Names:</span>
                <span className="text-xs text-gray-500 ml-1">(Can add multiple names)</span>
                <Button
                  type="button"
                  onClick={addCustomer}
                  className="ml-2 text-xs px-3 py-1 bg-blue-600 hover:bg-blue-700"
                >
                  Add Customer
                </Button>
              </div>

              {formData.customers.map((customer, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{index + 1}.</span>
                    <Input
                      placeholder="Customer"
                      value={customer.name}
                      onChange={(e) => handleCustomerChange(index, 'name', e.target.value)}
                    />
                    <span className="text-sm">→</span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Amount:</label>
                    <Input
                      placeholder="Customer amount"
                      value={customer.amount}
                      onChange={(e) => handleCustomerChange(index, 'amount', e.target.value)}
                    />
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-gray-700">CGST:</label>
                  <Input
                    value={formData.cgstRate}
                    onChange={(e) => handleInputChange('cgstRate', e.target.value)}
                    className="w-16"
                  />
                  <span className="text-sm">%</span>
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-gray-700">SGST:</label>
                  <Input
                    value={formData.sgstRate}
                    onChange={(e) => handleInputChange('sgstRate', e.target.value)}
                    className="w-16"
                  />
                  <span className="text-sm">%</span>
                </div>
              </div>
            </div>

            {/* From Section */}
            <div>
              <h3 className="font-semibold mb-3">From,</h3>
              <h4 className="font-medium mb-3">Connector Details:</h4>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Connector's Name:</label>
                  <Input
                    placeholder="Name"
                    value={formData.connectorName}
                    onChange={(e) => handleInputChange('connectorName', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name:</label>
                  <Input
                    placeholder="Bank Name"
                    value={formData.bankName}
                    onChange={(e) => handleInputChange('bankName', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">GST NO:</label>
                  <Input
                    placeholder="Company GST Number"
                    value={formData.connectorGstNo}
                    onChange={(e) => handleInputChange('connectorGstNo', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bank Account Type:</label>
                  <Input
                    placeholder="Type"
                    value={formData.bankAccountType}
                    onChange={(e) => handleInputChange('bankAccountType', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">PAN NO:</label>
                  <Input
                    placeholder="Company PAN Number"
                    value={formData.connectorPanNo}
                    onChange={(e) => handleInputChange('connectorPanNo', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bank Account number:</label>
                  <Input
                    placeholder="Acc Number"
                    value={formData.bankAccountNumber}
                    onChange={(e) => handleInputChange('bankAccountNumber', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">IFSC Code:</label>
                  <Input
                    placeholder="Code"
                    value={formData.ifscCode}
                    onChange={(e) => handleInputChange('ifscCode', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Branch Name:</label>
                  <Input
                    placeholder="Branch Name"
                    value={formData.branchName}
                    onChange={(e) => handleInputChange('branchName', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button variant="outline" type="button" className="flex-1">
                Clear
              </Button>
              <Button 
                type="button" 
                onClick={handleCreateInvoice}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                Create Invoice
              </Button>
            </div>
          </form>
        </div>
      </div>
    </ConnectorLayout>
  );
};

export default ConnectorInvoice;
