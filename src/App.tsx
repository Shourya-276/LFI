
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LoanProvider } from "./contexts/LoanContext";

// Page imports
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import CheckEligibility from "./pages/CheckEligibility";
import ExploreLoanOffers from "./pages/ExploreLoanOffers";
import ApplyLoan from "./pages/ApplyLoan";
import DocumentUpload from "./pages/DocumentUpload";
import Disbursement from "./pages/Disbursement";
import NotFound from "./pages/NotFound";
import MyLoanApplications from "./pages/MyLoanApplications";
import Review from "./pages/Review";

const queryClient = new QueryClient();

// Protected route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-t-brand-purple border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <LoanProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                
                {/* Protected routes */}
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path="/check-eligibility" element={<ProtectedRoute><CheckEligibility /></ProtectedRoute>} />
                <Route path="/explore-loan-offers" element={<ProtectedRoute><ExploreLoanOffers /></ProtectedRoute>} />
                <Route path="/apply-loan" element={<ProtectedRoute><ApplyLoan /></ProtectedRoute>} />
                <Route path="/my-loan-applications" element={<ProtectedRoute><MyLoanApplications /></ProtectedRoute>} />
                <Route path="/document" element={<ProtectedRoute><DocumentUpload /></ProtectedRoute>} />
                <Route path="/disbursement" element={<ProtectedRoute><Disbursement /></ProtectedRoute>} />
                <Route path="/review" element={<ProtectedRoute><Review /></ProtectedRoute>} />
                
                {/* Catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </LoanProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
