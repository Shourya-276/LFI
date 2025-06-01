
import React, { useState } from "react";
import LoanAdministratorLayout from "../components/LoanAdministratorLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Search, Filter } from "lucide-react";

/**
 * Interface for disbursement tracking data
 * Defines structure for both pending and completed disbursement records
 */
interface DisbursementRecord {
  leadId: string;
  leadName: string;
  bankName: string;
  pendingDoc?: string;
  hardCopy?: boolean;
  status?: string;
  paymentAmount?: string;
  utr?: string;
}

/**
 * Loan Administrator Disbursement Management Page
 * Handles tracking of loan disbursements in pending and completed states
 * Features toggle switches for hard copy document status and comprehensive data views
 */
const LoanAdministratorDisbursement: React.FC = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [searchTerm, setSearchTerm] = useState("");
  const [pendingRecords, setPendingRecords] = useState<DisbursementRecord[]>([
    {
      leadId: "#13123",
      leadName: "Rahul Sharma",
      bankName: "HDFC",
      pendingDoc: "DOC1,DOC2",
      hardCopy: true,
      status: "Under Review"
    },
    {
      leadId: "#13124",
      leadName: "Priya Singh",
      bankName: "SBI",
      pendingDoc: "DOC3,DOC4",
      hardCopy: false,
      status: "Under Review"
    },
    {
      leadId: "#13125",
      leadName: "Amit Kumar",
      bankName: "ICICI",
      pendingDoc: "DOC5,DOC6",
      hardCopy: true,
      status: "Under Review"
    }
  ]);

  /**
   * Sample data for completed disbursements
   * Shows final disbursement records with payment details
   */
  const completedRecords: DisbursementRecord[] = [
    {
      leadId: "#13120",
      leadName: "Rajesh Gupta",
      bankName: "HDFC",
      status: "Completed",
      paymentAmount: "₹12,20,000",
      utr: "UTR123456789"
    },
    {
      leadId: "#13121",
      leadName: "Neha Sharma",
      bankName: "SBI",
      status: "Completed",
      paymentAmount: "₹8,50,000",
      utr: "UTR987654321"
    },
    {
      leadId: "#13122",
      leadName: "Vikash Mehta",
      bankName: "ICICI",
      status: "Completed",
      paymentAmount: "₹15,75,000",
      utr: "UTR456789123"
    }
  ];

  /**
   * Handles tab switching between pending and completed disbursements
   */
  const handleTabChange = (tab: string): void => {
    setActiveTab(tab);
  };

  /**
   * Handles search input changes for filtering records
   */
  const handleSearchChange = (value: string): void => {
    setSearchTerm(value);
    // TODO: Implement search filtering logic
  };

  /**
   * Handles toggle switch changes for hard copy status
   * Updates the specific record's hard copy status in the state
   */
  const handleHardCopyToggle = (index: number, checked: boolean): void => {
    setPendingRecords(prev => 
      prev.map((record, i) => 
        i === index ? { ...record, hardCopy: checked } : record
      )
    );
  };

  /**
   * Renders the pending disbursements table with toggle switches
   * Includes hard copy status toggles and document tracking
   */
  const renderPendingTable = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead ID</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead Name</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Bank Name</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Pending Doc</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Hard Copy</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {pendingRecords.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadId}</td>
              <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadName}</td>
              <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-100">{item.bankName}</td>
              <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-100">{item.pendingDoc}</td>
              <td className="px-4 py-4">
                <Switch 
                  checked={item.hardCopy || false} 
                  onCheckedChange={(checked) => handleHardCopyToggle(index, checked)}
                  className="data-[state=checked]:bg-green-500"
                />
              </td>
              <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-100">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  /**
   * Renders the completed disbursements table with payment details
   * Shows final disbursement information including UTR numbers
   */
  const renderCompletedTable = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead ID</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead Name</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Bank Name</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Payment Amount</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">UTR</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {completedRecords.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadId}</td>
              <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadName}</td>
              <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-100">{item.bankName}</td>
              <td className="px-4 py-4 text-sm text-green-600 font-medium">{item.status}</td>
              <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-100 font-medium">{item.paymentAmount}</td>
              <td className="px-4 py-4 text-sm text-blue-600">{item.utr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <LoanAdministratorLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Disbursement Review</h1>
        
        <Card className="bg-white dark:bg-gray-800 p-6">
          {/* Tab Navigation */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => handleTabChange("pending")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === "pending"
                  ? "bg-brand-purple text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => handleTabChange("completed")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === "completed"
                  ? "bg-brand-purple text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              Completed
            </button>
          </div>

          {/* Search and Filter Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search by Lead Name, Lead ID"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </Button>
            </div>
          </div>

          {/* Content Tables */}
          {activeTab === "pending" ? renderPendingTable() : renderCompletedTable()}
          
          {/* Progress Indicator */}
          <div className="mt-8">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-brand-purple h-3 rounded-full" 
                style={{ width: activeTab === "pending" ? "70%" : "100%" }}
              ></div>
            </div>
          </div>
        </Card>
      </div>
    </LoanAdministratorLayout>
  );
};

export default LoanAdministratorDisbursement;
