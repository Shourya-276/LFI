
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut, Home, User, Users, FileText, Receipt } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface ConnectorLayoutProps {
  children: React.ReactNode;
}

const ConnectorLayout: React.FC<ConnectorLayoutProps> = ({ children }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menuItems = [
    { icon: Home, label: "Home", path: "/connector-dashboard" },
    { icon: User, label: "My Profile", path: "/connector-profile" },
    { icon: Users, label: "View Leads", path: "/connector-leads" },
    { icon: FileText, label: "Payout Summary", path: "/connector-payout" },
    { icon: Receipt, label: "Invoice", path: "/connector-invoice" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <div>
              <p className="font-semibold">Connector</p>
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <p className="text-sm">+91 7588072877 <span className="w-2 h-2 bg-green-500 rounded-full inline-block ml-2"></span></p>
            <p className="text-sm">amitthakur@gmail.com</p>
            <span className="inline-block bg-red-100 text-red-600 text-xs px-2 py-1 rounded">verify</span>
            <p className="text-sm text-gray-600">Connector - Mumbai <span className="w-2 h-2 bg-green-500 rounded-full inline-block ml-2"></span></p>
          </div>

          <nav className="space-y-2 mb-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-colors ${
                    isActive 
                      ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600" 
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default ConnectorLayout;
