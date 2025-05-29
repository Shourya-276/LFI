
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Search, Bell, Settings, Menu, X, User, Home, FileText, DollarSign, BarChart, CheckSquare, Building2, LogOut, HelpCircle } from "lucide-react";

interface LoanAdministratorLayoutProps {
  children: React.ReactNode;
}

interface NavLinkProps {
  to: string;
  icon: React.ElementType;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon: Icon, children, isActive = false }) => (
  <Link
    to={to}
    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
      isActive
        ? "bg-brand-purple text-white"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    }`}
  >
    <Icon className="w-5 h-5" />
    <span>{children}</span>
  </Link>
);

const LoanAdministratorLayout: React.FC<LoanAdministratorLayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navItems = [
    { to: "/loan-administrator-dashboard", icon: Home, label: "Home" },
    { to: "/loan-administrator-profile", icon: User, label: "My Profile" },
    { to: "/loan-administrator-bank-sanctions", icon: Building2, label: "Bank Sanctions" },
    { to: "/loan-administrator-disbursement", icon: DollarSign, label: "Disbursement" },
    { to: "/loan-administrator-reports", icon: BarChart, label: "Report" },
    { to: "/loan-administrator-tasks", icon: CheckSquare, label: "Task" },
  ];

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900 flex w-full">
      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-80 bg-white dark:bg-gray-800 shadow-lg transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col`}
      >
        {/* User Profile Section */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">John MK</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">+91 7588072877 ✓</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">johnmk102@gmail.com</p>
                <p className="text-sm text-green-600 font-medium">Loan Administrator ✓</p>
              </div>
            </div>
            <button className="lg:hidden" onClick={closeMobileMenu}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <button className="mt-3 text-sm text-brand-purple hover:underline">verify</button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              icon={item.icon}
              isActive={isActive(item.to)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom Navigation */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
          <NavLink to="/faq" icon={HelpCircle}>
            FAQ
          </NavLink>
          <button
            onClick={logout}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 w-full text-left transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>

        {/* AI Assistant Button */}
        <div className="p-4">
          <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white">
            <Settings className="w-4 h-4 mr-2" />
            AI Loan Assistant
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Top Navigation */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  className="lg:hidden"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <Menu className="w-6 h-6" />
                </button>
                <img 
                  src="/lovable-uploads/fa221462-754a-4d8b-ba2c-5c28aca42f6c.png"
                  alt="Loan for India"
                  className="h-8"
                />
              </div>

              <div className="flex-1 max-w-2xl mx-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search information"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {theme === "light" ? "🌙" : "☀️"}
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Bell className="w-5 h-5" />
                </button>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content - Full width now */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default LoanAdministratorLayout;
