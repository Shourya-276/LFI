
/**
 * REFERRAL TAX INVOICE COMPONENT
 * 
 * This component displays the generated tax invoice in the exact format
 * shown in the reference image. It includes all company details, billing
 * information, and payment details.
 * 
 * USAGE:
 * - Used by ReferralInvoice.tsx to display the generated invoice
 * - Shows formatted tax invoice with all details
 */

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, History, ArrowLeft } from "lucide-react";

interface InvoiceData {
  companyName: string;
  address: string;
  gstNo: string;
  stateCode: string;
  panNo: string;
  customer1: string;
  amount1: string;
  customer2: string;
  amount2: string;
  cgst: string;
  sgst: string;
  connectorName: string;
  bankName: string;
  gstNumber: string;
  bankAccountType: string;
  panNumber: string;
  bankAccountNumber: string;
  ifscCode: string;
  branchName: string;
}

interface ReferralTaxInvoiceProps {
  invoiceData: InvoiceData;
  onBack: () => void;
  onViewHistory: () => void;
}

const ReferralTaxInvoice: React.FC<ReferralTaxInvoiceProps> = ({ invoiceData, onBack, onViewHistory }) => {
  const amount1 = parseFloat(invoiceData.amount1) || 0;
  const amount2 = parseFloat(invoiceData.amount2) || 0;
  const totalAmount = amount1 + amount2;
  const cgstAmount = (totalAmount * parseFloat(invoiceData.cgst)) / 100;
  const sgstAmount = (totalAmount * parseFloat(invoiceData.sgst)) / 100;
  const totalPayable = totalAmount + cgstAmount + sgstAmount;

  const currentDate = new Date().toLocaleDateString('en-GB');
  const invoiceNumber = `27${Math.floor(Math.random() * 1000000)}`;

  const handleDownload = () => {
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    // Get the invoice content
    const invoiceContent = document.getElementById('invoice-content');
    if (!invoiceContent) return;

    // Create the print document
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Tax Invoice - ${invoiceNumber}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { border: 1px solid #000; padding: 8px; text-align: left; }
            th { background-color: #f5f5f5; }
            .header { text-align: center; font-size: 24px; font-weight: bold; margin-bottom: 20px; }
            .company-details { margin-bottom: 20px; }
            .connector-details { margin-top: 30px; }
            @media print {
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          ${invoiceContent.innerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();

    // Save to localStorage for history
    saveInvoiceToHistory();
  };

  const saveInvoiceToHistory = () => {
    const invoice = {
      id: invoiceNumber,
      date: currentDate,
      data: invoiceData,
      totalAmount: totalPayable,
      createdAt: new Date().toISOString()
    };

    // Get existing invoices from localStorage
    const existingInvoices = JSON.parse(localStorage.getItem('invoiceHistory') || '[]');
    
    // Add new invoice
    existingInvoices.push(invoice);
    
    // Save back to localStorage
    localStorage.setItem('invoiceHistory', JSON.stringify(existingInvoices));
    
    console.log('Invoice saved to history:', invoice);
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-4 flex gap-2">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button variant="outline" onClick={onViewHistory}>
          <History className="w-4 h-4 mr-2" />
          View History
        </Button>
        <Button variant="outline" onClick={handleDownload}>
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>

      <Card>
        <CardContent className="p-8" id="invoice-content">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-center mb-2">Tax Invoice</h1>
            
            {/* Company Details */}
            <div className="mb-4">
              <h3 className="font-semibold">Company details:</h3>
              <div className="text-sm">
                <div>Invoice No: [{invoiceNumber}]</div>
                <div>Date: [{currentDate}]</div>
                <div>To,</div>
                <div>{invoiceData.companyName || "Loan For India"}</div>
                <div>{invoiceData.address || "B/905/906/8th Floor, Domji Shamji Corporate Square Ghatkopar East-77"}</div>
                <div>GST No: [{invoiceData.gstNo || "GST Number"}]</div>
                <div>PAN No: [{invoiceData.panNo || "PAN Number"}]</div>
                <div>State Code: [{invoiceData.stateCode || "State Code"}]</div>
              </div>
            </div>
          </div>

          {/* Invoice Details Table */}
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
                    {invoiceData.customer1 && `1-${invoiceData.customer1}`}<br />
                    {invoiceData.customer2 && `2-${invoiceData.customer2}`}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {amount1 > 0 && `₹${amount1.toLocaleString()}`}<br />
                    {amount2 > 0 && `₹${amount2.toLocaleString()}`}
                  </td>
                  <td className="border border-gray-300 px-4 py-2"></td>
                  <td className="border border-gray-300 px-4 py-2">
                    {amount1 > 0 && `₹${amount1.toLocaleString()}`}<br />
                    {amount2 > 0 && `₹${amount2.toLocaleString()}`}
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
            <h3 className="font-semibold mb-2">Connector Details:</h3>
            <div className="text-sm space-y-1">
              <div>Cheque Favouring/Connector name: {invoiceData.connectorName || "[Connector Name]"}</div>
              <div>Bank name: {invoiceData.bankName || "[Bank Name]"}</div>
              <div>GST No: {invoiceData.gstNumber || "[Your GST Number]"}</div>
              <div>PAN No: {invoiceData.panNumber || "[Your PAN Number]"}</div>
              <div>Account No: {invoiceData.bankAccountNumber || "[Account Number]"}</div>
              <div>Account Type: {invoiceData.bankAccountType || "[e.g., Current Account]"}</div>
              <div>IFSC Code: {invoiceData.ifscCode || "[IFSC Code]"}</div>
              <div>Branch Name: {invoiceData.branchName || "[Branch Name]"}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReferralTaxInvoice;
