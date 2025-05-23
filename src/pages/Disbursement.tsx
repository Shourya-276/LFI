
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const Disbursement = () => {
  const [showRequestForm, setShowRequestForm] = useState(false);

  const handleRequestDisbursement = () => {
    toast.success("Disbursement request submitted successfully!");
    setShowRequestForm(false);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">Loan Disbursement Details</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Track and manage your loan disbursement</p>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          {!showRequestForm ? (
            <div className="space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h2 className="text-xl font-semibold mb-4">Disbursement Summary</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Loan Amount</p>
                    <p className="font-semibold text-lg">₹65,00,000</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Disbursed Amount</p>
                    <p className="font-semibold text-lg">₹0</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Balance Amount</p>
                    <p className="font-semibold text-lg">₹65,00,000</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Status</p>
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                      Pending
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Disbursement History</h2>
                
                {/* Empty state */}
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="h-16 w-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-lg mb-2">No disbursements yet</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">Your loan has been approved, but no disbursements have been made yet. Request your first disbursement below.</p>
                  <Button 
                    onClick={() => setShowRequestForm(true)}
                    className="bg-brand-purple hover:bg-brand-purple/90"
                  >
                    Request Disbursement
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Request Disbursement</h2>
                <Button variant="ghost" onClick={() => setShowRequestForm(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Available Amount</label>
                    <Input value="₹65,00,000" readOnly className="bg-gray-50 dark:bg-gray-800" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Request Amount</label>
                    <Input placeholder="Enter Amount" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Disbursement Purpose</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Purpose" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="booking">Booking Amount</SelectItem>
                        <SelectItem value="partial-payment">Partial Payment</SelectItem>
                        <SelectItem value="full-payment">Full Payment</SelectItem>
                        <SelectItem value="processing-fees">Processing Fees</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Disbursement Date</label>
                    <Input type="date" />
                  </div>
                  
                  <div className="col-span-full">
                    <label className="block text-sm font-medium mb-2">Bank Details</label>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Account Number" />
                      <Input placeholder="IFSC Code" />
                      <Input placeholder="Bank Name" />
                      <Input placeholder="Branch Name" />
                    </div>
                  </div>
                  
                  <div className="col-span-full">
                    <label className="block text-sm font-medium mb-2">Additional Notes</label>
                    <textarea
                      className="w-full min-h-[100px] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-brand-purple dark:focus:ring-offset-gray-900"
                      placeholder="Any specific instructions or requirements..."
                    ></textarea>
                  </div>
                </div>
                
                <div className="flex justify-end gap-4 pt-4">
                  <Button variant="outline" onClick={() => setShowRequestForm(false)}>Cancel</Button>
                  <Button onClick={handleRequestDisbursement} className="bg-brand-purple hover:bg-brand-purple/90">
                    Submit Request
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Disbursement;
