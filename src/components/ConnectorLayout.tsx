
/**
 * CONNECTOR LAYOUT COMPONENT
 * 
 * This component provides the main layout structure for the connector dashboard.
 * It includes the header, sidebar navigation, and main content area designed
 * to match the reference images exactly.
 * 
 * USAGE:
 * - Used exclusively by ConnectorDashboard.tsx and related pages
 * - Wraps all connector dashboard content
 * - Provides navigation between different tabs
 * 
 * FEATURES:
 * - Sidebar with user info and navigation menu
 * - Header with search functionality and user actions
 * - Responsive design matching the reference images
 * - Tab-based navigation system
 */

import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Bell, Settings, User, Home, Users, DollarSign, FileText, LogOut, Sun, Moon, CreditCard } from "lucide-react";

interface ConnectorLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ConnectorLayout: React.FC<ConnectorLayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "profile", label: "My Profile", icon: User },
    { id: "leads", label: "View Leads", icon: Users },
    { id: "payout", label: "Payout Summary", icon: DollarSign },
    { id: "invoice", label: "Invoice", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex w-full">
      {/* Sidebar */}
      <div className="w-72 bg-white shadow-lg flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b">
          <img 
            src="/lovable-uploads/fa221462-754a-4d8b-ba2c-5c28aca42f6c.png"
            alt="Loan for India"
            className="h-8"
          />
        </div>

        {/* User Info */}
        <div className="p-6 border-b bg-gray-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              C
            </div>
            <div>
              <div className="font-semibold">Connector</div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-gray-600">+91 7588072877 <span className="text-green-500">●</span></div>
            <div className="text-sm text-gray-600">amitthakur@gmail.com</div>
            <div className="text-sm">
              <span className="text-gray-600">Connector - Mumbai</span>
              <span className="text-green-500 ml-2">●</span>
            </div>
            <Button variant="outline" size="sm" className="text-xs mt-2">
              verify
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? "bg-blue-100 text-blue-700 border-l-4 border-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* AI Loan Assistant and Logout */}
        <div className="p-4 border-t space-y-2">
          <Button className="w-full bg-indigo-700 hover:bg-indigo-800 text-white">
            <Settings className="w-4 h-4 mr-2" />
            AI Loan Assistant
          </Button>
          <Button 
            variant="outline" 
            className="w-full text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
            onClick={logout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-sm p-4 flex items-center justify-between border-b">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search information"
                className="pl-10 bg-gray-50 border-gray-200"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="sm">
              <Bell className="w-5 h-5" />
            </Button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 p-6 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ConnectorLayout;
