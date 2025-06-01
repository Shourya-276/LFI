
/**
 * SANCTIONS DATA TABLE COMPONENT
 * 
 * This file contains the data table component for displaying sanctions information.
 * It renders lead data with action buttons for document upload and status management.
 * 
 * USAGE:
 * - Imported and used in: LoanAdministratorBankSanctions.tsx
 * - Displays both pending and completed sanctions data
 * - Provides interactive elements for document management
 * 
 * FEATURES:
 * - Responsive table design for different screen sizes
 * - Dynamic action buttons based on sanction status
 * - Upload functionality for pending documents
 * - Status indicators with appropriate styling
 * 
 * DATA STRUCTURE:
 * - SanctionItem interface defines data shape
 * - Supports lead ID, name, bank, pending docs, and action status
 * 
 * DEPENDENCIES:
 * - Uses shadcn/ui components (Button, Badge)
 * - Uses Lucide React icons (Upload)
 * - Styled with Tailwind CSS for table layout
 * 
 * FUTURE ENHANCEMENTS:
 * - Actual document upload implementation
 * - Sorting and filtering capabilities
 * - Pagination for large datasets
 */

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload } from "lucide-react";

/**
 * Interface for sanctions table data structure
 * Defines the shape of data for both pending and completed sanctions
 */
interface SanctionItem {
  leadId: string;
  leadName: string;
  bankName: string;
  pendingDocs: string;
  action: string;
}

interface SanctionsDataTableProps {
  data: SanctionItem[];
}

/**
 * Data table component for displaying sanctions information
 * Renders lead data with action buttons for document upload
 * Responsive design with proper styling for different states
 */
const SanctionsDataTable: React.FC<SanctionsDataTableProps> = ({ data }) => {
  /**
   * Handles document upload action
   * Currently a placeholder - can be extended for actual upload functionality
   */
  const handleDocumentUpload = (leadId: string): void => {
    console.log(`Uploading documents for lead: ${leadId}`);
    // TODO: Implement actual document upload functionality
  };

  /**
   * Renders action button based on current status
   * Shows upload button for pending items, done badge for completed items
   */
  const renderActionButton = (item: SanctionItem) => {
    if (item.action === "upload") {
      return (
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center space-x-1"
          onClick={() => handleDocumentUpload(item.leadId)}
        >
          <Upload className="w-4 h-4" />
          <span>Upload</span>
        </Button>
      );
    } else {
      return (
        <Badge className="bg-green-100 text-green-800">
          ✓ Done
        </Badge>
      );
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead ID</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Lead Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Bank Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Pending Docs</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Upload Action</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadId}</td>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.leadName}</td>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.bankName}</td>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{item.pendingDocs}</td>
              <td className="px-6 py-4 text-sm">
                {renderActionButton(item)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SanctionsDataTable;
