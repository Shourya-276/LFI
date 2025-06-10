
/**
 * REFERRAL INVOICE HISTORY COMPONENT
 * 
 * This component displays the history of created invoices stored in localStorage.
 * In a production environment, this would fetch from a backend database.
 * 
 * USAGE:
 * - Used by ReferralInvoice.tsx to display invoice history
 * - Shows list of previously created invoices
 */

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Eye } from "lucide-react";

interface HistoricalInvoice {
  id: string;
  date: string;
  data: any;
  totalAmount: number;
  createdAt: string;
}

interface ReferralInvoiceHistoryProps {
  onBack: () => void;
  onViewInvoice: (invoiceData: any) => void;
}

const ReferralInvoiceHistory: React.FC<ReferralInvoiceHistoryProps> = ({ onBack, onViewInvoice }) => {
  const [invoices, setInvoices] = useState<HistoricalInvoice[]>([]);

  useEffect(() => {
    // Load invoices from localStorage
    const savedInvoices = JSON.parse(localStorage.getItem('invoiceHistory') || '[]');
    setInvoices(savedInvoices.reverse()); // Show newest first
  }, []);

  const handleDownloadInvoice = (invoice: HistoricalInvoice) => {
    // Create a temporary invoice view for download
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = generateInvoiceHTML(invoice);
    
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Tax Invoice - ${invoice.id}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { border: 1px solid #000; padding: 8px; text-align: left; }
            th { background-color: #f5f5f5; }
            .header { text-align: center; font-size: 24px; font-weight: bold; margin-bottom: 20px; }
          </style>
        </head>
        <body>
          ${tempDiv.innerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  const generateInvoiceHTML = (invoice: HistoricalInvoice) => {
    const amount1 = parseFloat(invoice.data.amount1) || 0;
    const amount2 = parseFloat(invoice.data.amount2) || 0;
    const totalAmount = amount1 + amount2;
    const cgstAmount = (totalAmount * parseFloat(invoice.data.cgst)) / 100;
    const sgstAmount = (totalAmount * parseFloat(invoice.data.sgst)) / 100;
    const totalPayable = totalAmount + cgstAmount + sgstAmount;

    return `
      <div class="header">Tax Invoice</div>
      <div>
        <h3>Company details:</h3>
        <div>Invoice No: [${invoice.id}]</div>
        <div>Date: [${invoice.date}]</div>
        <div>To, ${invoice.data.companyName || "Loan For India"}</div>
        <div>${invoice.data.address || "B/905/906/8th Floor, Domji Shamji Corporate Square Ghatkopar East-77"}</div>
        <div>GST No: [${invoice.data.gstNo || "GST Number"}]</div>
        <div>PAN No: [${invoice.data.panNo || "PAN Number"}]</div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Particulars</th>
            <th>Amount</th>
            <th>Commission Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1</td>
            <td>Payment Of<br/>${invoice.data.customer1}<br/>${invoice.data.customer2}</td>
            <td>₹${totalAmount.toLocaleString()}</td>
            <td>₹${totalAmount.toLocaleString()}</td>
          </tr>
          <tr>
            <td></td>
            <td>Total Payable</td>
            <td></td>
            <td>₹${totalPayable.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    `;
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-4">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Invoice
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Invoice History</CardTitle>
        </CardHeader>
        <CardContent>
          {invoices.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No invoices found. Create your first invoice to see it here.
            </div>
          ) : (
            <div className="space-y-4">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="border rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Invoice #{invoice.id}</div>
                    <div className="text-sm text-gray-600">
                      Created: {new Date(invoice.createdAt).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-600">
                      Total: ₹{invoice.totalAmount.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">
                      Company: {invoice.data.companyName || "Loan For India"}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onViewInvoice(invoice.data)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDownloadInvoice(invoice)}
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ReferralInvoiceHistory;
