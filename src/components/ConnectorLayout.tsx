
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Bell, Settings, User, Home, Users, DollarSign, FileText, LogOut, Sun, Moon } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex w-full">
      {/* Sidebar */}
      <div className="w-72 bg-white dark:bg-gray-800 shadow-lg flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b dark:border-gray-700">
          <img 
            src="/lovable-uploads/fa221462-754a-4d8b-ba2c-5c28aca42f6c.png"
            alt="Loan for India"
            className="h-8"
          />
        </div>

        {/* User Info */}
        <div className="p-6 border-b bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold">
              C
            </div>
            <div>
              <div className="font-semibold dark:text-white">Connector</div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-gray-600 dark:text-gray-300">+91 7588072877 <span className="text-green-500">●</span></div>
            <div className="text-sm text-gray-600 dark:text-gray-300">amitthakur@gmail.com</div>
            <div className="text-sm">
              <span className="text-gray-600 dark:text-gray-300">Connector - Mumbai</span>
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
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-l-4 border-blue-700 dark:border-blue-300"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* AI Loan Assistant and Logout */}
        <div className="p-4 border-t dark:border-gray-700 space-y-2">
          <Button className="w-full bg-indigo-700 hover:bg-indigo-800 text-white">
            <Settings className="w-4 h-4 mr-2" />
            AI Loan Assistant
          </Button>
          <Button 
            variant="outline" 
            className="w-full text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:border-red-400 dark:hover:bg-red-900"
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
        <div className="bg-white dark:bg-gray-800 shadow-sm p-4 flex items-center justify-between border-b dark:border-gray-700">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search information"
                className="pl-10 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
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
