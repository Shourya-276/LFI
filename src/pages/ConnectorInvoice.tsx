
import React, { useState } from "react";
import ConnectorLayout from "../components/ConnectorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download, Plus, ArrowRight } from "lucide-react";
import jsPDF from "jspdf";

const ConnectorInvoice = () => {
  const [activeTab, setActiveTab] = useState("invoice");
  const [showPreview, setShowPreview] = useState(false);
  const [customers, setCustomers] = useState([{ name: "", amount: "" }]);
  
  const [invoiceData, setInvoiceData] = useState({
    // Company Details
    companyName: "",
    companyAddress: "",
    gstNumber: "",
    panNumber: "",
    stateCode: "",
    
    // Connector Details
    connectorName: "",
    bankName: "",
    gstNo: "",
    panNo: "",
    accountNumber: "",
    accountType: "",
    ifscCode: "",
    branchName: "",
    
    // Tax Details
    cgst: "9",
    sgst: "9"
  });

  const addCustomer = () => {
    setCustomers([...customers, { name: "", amount: "" }]);
  };

  const updateCustomer = (index: number, field: string, value: string) => {
    const updated = customers.map((customer, i) => 
      i === index ? { ...customer, [field]: value } : customer
    );
    setCustomers(updated);
  };

  const calculateTotals = () => {
    const totalAmount = customers.reduce((sum, customer) => 
      sum + (parseFloat(customer.amount) || 0), 0
    );
    const cgstAmount = totalAmount * 0.09;
    const sgstAmount = totalAmount * 0.09;
    const totalPayable = totalAmount + cgstAmount + sgstAmount;
    
    return { totalAmount, cgstAmount, sgstAmount, totalPayable };
  };

  const generateInvoice = () => {
    setShowPreview(true);
  };

  const downloadInvoice = () => {
    const doc = new jsPDF();
    
    // Add invoice content
    doc.setFontSize(20);
    doc.text("Tax Invoice", 105, 20, { align: "center" });
    
    doc.setFontSize(12);
    doc.text("Company details:", 20, 40);
    doc.text(`Invoice No: [127482162]`, 20, 50);
    doc.text(`Date: [01/04/2004]`, 20, 60);
    doc.text("To,", 20, 70);
    doc.text("Loan For India", 20, 80);
    doc.text("B/905/906/9th Floor, Damji Shamji Corporate Square Ghatkopar East-77", 20, 90);
    
    const { totalAmount, cgstAmount, sgstAmount, totalPayable } = calculateTotals();
    
    doc.text(`Total amount: ₹${totalAmount.toFixed(2)}`, 20, 120);
    doc.text(`CGST @ 9%: ₹${cgstAmount.toFixed(2)}`, 20, 130);
    doc.text(`SGST @ 9%: ₹${sgstAmount.toFixed(2)}`, 20, 140);
    doc.text(`Total Payable: ₹${totalPayable.toFixed(2)}`, 20, 150);
    
    doc.save("invoice.pdf");
  };

  const { totalAmount, cgstAmount, sgstAmount, totalPayable } = calculateTotals();

  return (
    <ConnectorLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Create Invoice</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Company Details */}
            <div>
              <h3 className="font-semibold mb-4">To,<br />Company Details:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Company Name:</Label>
                  <Input 
                    placeholder="Loan for India(Default)"
                    value={invoiceData.companyName}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, companyName: e.target.value }))}
                  />
                </div>
                <div>
                  <Label>Address:</Label>
                  <Input 
                    placeholder="Company Address"
                    value={invoiceData.companyAddress}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, companyAddress: e.target.value }))}
                  />
                </div>
                <div>
                  <Label>GST NO:</Label>
                  <Input 
                    placeholder="Company GST number"
                    value={invoiceData.gstNumber}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, gstNumber: e.target.value }))}
                  />
                </div>
                <div>
                  <Label>State code-</Label>
                  <Input 
                    placeholder="State Code"
                    value={invoiceData.stateCode}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, stateCode: e.target.value }))}
                  />
                </div>
                <div>
                  <Label>PAN NO:</Label>
                  <Input 
                    placeholder="Company PAN number"
                    value={invoiceData.panNumber}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, panNumber: e.target.value }))}
                  />
                </div>
              </div>
            </div>

            {/* Billing Details */}
            <div>
              <h3 className="font-semibold mb-4">Billing Details:</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Label>Customer Names: (can add multiple names)</Label>
                    <Button 
                      type="button" 
                      size="sm" 
                      onClick={addCustomer}
                      className="bg-indigo-600 hover:bg-indigo-700"
                    >
                      Add Customer
                    </Button>
                  </div>
                  
                  {customers.map((customer, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                      <div className="flex items-center gap-2">
                        <span>{index + 1}. Customer</span>
                        <Input 
                          placeholder="Customer"
                          value={customer.name}
                          onChange={(e) => updateCustomer(index, "name", e.target.value)}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        <Input 
                          placeholder="Customer amount"
                          type="number"
                          value={customer.amount}
                          onChange={(e) => updateCustomer(index, "amount", e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>CGST:</Label>
                    <div className="flex items-center gap-2">
                      <Input 
                        value={invoiceData.cgst}
                        onChange={(e) => setInvoiceData(prev => ({ ...prev, cgst: e.target.value }))}
                        className="w-16"
                      />
                      <span>%</span>
                    </div>
                  </div>
                  <div>
                    <Label>SGST:</Label>
                    <div className="flex items-center gap-2">
                      <Input 
                        value={invoiceData.sgst}
                        onChange={(e) => setInvoiceData(prev => ({ ...prev, sgst: e.target.value }))}
                        className="w-16"
                      />
                      <span>%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector Details */}
            <div>
              <h3 className="font-semibold mb-4">From,<br />Connector Details:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Connector's Name:</Label>
                  <Input 
                    placeholder="Name"
                    value={invoiceData.connectorName}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, connectorName: e.target.value }))}
                  />
                </div>
                <div>
                  <Label>Bank Name:</Label>
                  <Input 
                    placeholder="Bank Name"
                    value={invoiceData.bankName}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, bankName: e.target.value }))}
                  />
                </div>
                <div>
                  <Label>GST NO:</Label>
                  <Input 
                    placeholder="Company GST number"
                    value={invoiceData.gstNo}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, gstNo: e.target.value }))}
                  />
                </div>
                <div>
                  <Label>Bank Account Type:</Label>
                  <Input 
                    placeholder="Type"
                    value={invoiceData.accountType}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, accountType: e.target.value }))}
                  />
                </div>
              </div>
            </div>

            <Button 
              onClick={generateInvoice}
              className="w-full bg-indigo-600 hover:bg-indigo-700"
            >
              Generate Invoice
            </Button>
          </CardContent>
        </Card>

        {/* Invoice Preview Dialog */}
        <Dialog open={showPreview} onOpenChange={setShowPreview}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-center">Tax Invoice</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4 p-4">
              <div className="text-sm space-y-2">
                <div><strong>Company details:</strong></div>
                <div>Invoice No: [127482162]</div>
                <div>Date: [01/04/2004]</div>
                <div><strong>To,</strong></div>
                <div>Loan For India</div>
                <div>B/905/906/9th Floor, Damji Shamji Corporate Square Ghatkopar East-77</div>
                <div>GST NO: [GST Number]</div>
                <div>PAN NO: [PAN Number]</div>
                <div>State Code: [State Code]</div>
              </div>

              <div className="border rounded">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-2 text-left">Sr. No</th>
                      <th className="p-2 text-left">Particulars</th>
                      <th className="p-2 text-left">Amount</th>
                      <th className="p-2 text-left">TAX</th>
                      <th className="p-2 text-left">Commission Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2">#1</td>
                      <td className="p-2">
                        Payment Of<br />
                        {customers.map((customer, index) => 
                          customer.name && (
                            <div key={index}>{index + 1}-{customer.name}</div>
                          )
                        )}
                      </td>
                      <td className="p-2">
                        {customers.map((customer, index) => 
                          customer.amount && (
                            <div key={index}>₹{parseFloat(customer.amount || "0").toLocaleString()}</div>
                          )
                        )}
                      </td>
                      <td className="p-2"></td>
                      <td className="p-2">
                        ₹{Math.round(totalAmount * 0.014).toLocaleString()}<br />
                        ₹{Math.round(totalAmount * 0.010).toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2"></td>
                      <td className="p-2"><strong>Total amount</strong></td>
                      <td className="p-2"><strong>₹{totalAmount.toLocaleString()}</strong></td>
                      <td className="p-2"></td>
                      <td className="p-2"><strong>₹{Math.round(totalAmount * 0.024).toLocaleString()}</strong></td>
                    </tr>
                    <tr>
                      <td className="p-2"></td>
                      <td className="p-2">CGST @ 9%</td>
                      <td className="p-2"></td>
                      <td className="p-2">9%</td>
                      <td className="p-2">₹{Math.round(cgstAmount).toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td className="p-2"></td>
                      <td className="p-2">SGST @ 9%</td>
                      <td className="p-2"></td>
                      <td className="p-2">9%</td>
                      <td className="p-2">₹{Math.round(sgstAmount).toLocaleString()}</td>
                    </tr>
                    <tr className="border-t-2">
                      <td className="p-2"></td>
                      <td className="p-2"><strong>Total Payable</strong></td>
                      <td className="p-2"></td>
                      <td className="p-2"></td>
                      <td className="p-2"><strong>₹{Math.round(totalPayable).toLocaleString()}</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-sm space-y-2">
                <div><strong>Connector Details,</strong></div>
                <div>Cheque Favouring: Connector name</div>
                <div>Bank Name: [Bank Name]</div>
                <div>GST No: [Your GST Number]</div>
                <div>PAN No: [Your PAN Number]</div>
                <div>Account No: [Account Number]</div>
                <div>Account Type: [e.g., Current Account]</div>
                <div>IFSC Code: [IFSC Code]</div>
                <div>Branch Name: [Branch Name]</div>
              </div>

              <div className="flex justify-center pt-4">
                <Button 
                  onClick={downloadInvoice}
                  className="bg-indigo-600 hover:bg-indigo-700 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </ConnectorLayout>
  );
};

export default ConnectorInvoice;
