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
import SalesManagerDashboard from "./pages/SalesManagerDashboard";
import LoanCoordinatorDashboard from "./pages/LoanCoordinatorDashboard";
import Profile from "./pages/Profile";
import CheckEligibility from "./pages/CheckEligibility";
import SalesManagerCheckEligibility from "./pages/SalesManagerCheckEligibility";
import ExploreLoanOffers from "./pages/ExploreLoanOffers";
import ApplyLoan from "./pages/ApplyLoan";
import DocumentUpload from "./pages/DocumentUpload";
import Disbursement from "./pages/Disbursement";
import NotFound from "./pages/NotFound";
import MyLoanApplications from "./pages/MyLoanApplications";
import Review from "./pages/Review";
import LeadsManagement from "./pages/LeadsManagement";
import BankSanctions from "./pages/BankSanctions";
import DisbursementManagement from "./pages/DisbursementManagement";
import Reports from "./pages/Reports";
import Tasks from "./pages/Tasks";
import LoanCoordinatorReports from "./pages/LoanCoordinatorReports";
import LoanCoordinatorTasks from "./pages/LoanCoordinatorTasks";
import LoanCoordinatorDisbursementReview from "./pages/LoanCoordinatorDisbursementReview";

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

// Role-based dashboard wrapper
const DashboardWrapper = () => {
  const { user } = useAuth();
  
  if (user?.role === 'salesmanager') {
    return <SalesManagerDashboard />;
  }
  
  if (user?.role === 'loancoordinator') {
    return <LoanCoordinatorDashboard />;
  }
  
  return <Dashboard />;
};

// Role-based check eligibility wrapper
const CheckEligibilityWrapper = () => {
  const { user } = useAuth();
  
  if (user?.role === 'salesmanager') {
    return <SalesManagerCheckEligibility />;
  }
  
  return <CheckEligibility />;
};

// Role-based reports wrapper
const ReportsWrapper = () => {
  const { user } = useAuth();
  
  if (user?.role === 'loancoordinator') {
    return <LoanCoordinatorReports />;
  }
  
  return <Reports />;
};

// Role-based tasks wrapper
const TasksWrapper = () => {
  const { user } = useAuth();
  
  if (user?.role === 'loancoordinator') {
    return <LoanCoordinatorTasks />;
  }
  
  return <Tasks />;
};

// Role-based disbursement management wrapper
const DisbursementManagementWrapper = () => {
  const { user } = useAuth();
  
  if (user?.role === 'loancoordinator') {
    return <LoanCoordinatorDisbursementReview />;
  }
  
  return <DisbursementManagement />;
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
                <Route path="/dashboard" element={<ProtectedRoute><DashboardWrapper /></ProtectedRoute>} />
                <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path="/check-eligibility" element={<ProtectedRoute><CheckEligibilityWrapper /></ProtectedRoute>} />
                <Route path="/explore-loan-offers" element={<ProtectedRoute><ExploreLoanOffers /></ProtectedRoute>} />
                <Route path="/apply-loan" element={<ProtectedRoute><ApplyLoan /></ProtectedRoute>} />
                <Route path="/my-loan-applications" element={<ProtectedRoute><MyLoanApplications /></ProtectedRoute>} />
                <Route path="/document" element={<ProtectedRoute><DocumentUpload /></ProtectedRoute>} />
                <Route path="/disbursement" element={<ProtectedRoute><Disbursement /></ProtectedRoute>} />
                <Route path="/review" element={<ProtectedRoute><Review /></ProtectedRoute>} />
                
                {/* Multi-role routes */}
                <Route path="/leads" element={<ProtectedRoute><LeadsManagement /></ProtectedRoute>} />
                <Route path="/bank-sanctions" element={<ProtectedRoute><BankSanctions /></ProtectedRoute>} />
                <Route path="/disbursement-management" element={<ProtectedRoute><DisbursementManagementWrapper /></ProtectedRoute>} />
                <Route path="/reports" element={<ProtectedRoute><ReportsWrapper /></ProtectedRoute>} />
                <Route path="/tasks" element={<ProtectedRoute><TasksWrapper /></ProtectedRoute>} />
                
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
