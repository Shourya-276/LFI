
import React from "react";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface ReportsTabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

/**
 * Tab navigation component for Reports page
 * Handles switching between different reporting periods (monthly, quarterly, yearly)
 * Provides consistent navigation UI across the reports section
 */
const ReportsTabNavigation: React.FC<ReportsTabNavigationProps> = ({ activeTab, onTabChange }) => {
  const reportingPeriods = ["monthly", "quarterly", "yearly"];

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex space-x-4">
        {reportingPeriods.map((period) => (
          <button
            key={period}
            onClick={() => onTabChange(period)}
            className={`px-4 py-2 rounded-lg font-medium capitalize ${
              activeTab === period
                ? "bg-brand-purple text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            {period}
          </button>
        ))}
      </div>
      <Button variant="outline" className="flex items-center space-x-2">
        <Filter className="w-4 h-4" />
        <span>Filter</span>
      </Button>
    </div>
  );
};

export default ReportsTabNavigation;
