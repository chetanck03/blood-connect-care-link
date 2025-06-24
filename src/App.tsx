import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import LoadingScreen from "./components/LoadingScreen";
import UserProfile from "./components/UserProfile";
import PatientRegistration from "./components/PatientRegistration";
import DonorRegistration from "./components/DonorRegistration";
import Maps from "./components/Maps";
import ContactUs from "./components/ContactUs";
import PolicyPage from "./pages/PolicyPage"; // Import PolicyPage
import DownloadCertificate from "./pages/DownloadCertificate"; // Import DownloadCertificate

const queryClient = new QueryClient();

const AppContent = () => {
  const { isLoaded } = useAuth();
  
  if (!isLoaded) {
    return <LoadingScreen />;
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <UserProfile onBack={() => {}} />
          </ProtectedRoute>
        } />
        <Route path="/patient-registration" element={
          <ProtectedRoute>
            <PatientRegistration onBack={() => {}} />
          </ProtectedRoute>
        } />
        <Route path="/donor-registration" element={
          <ProtectedRoute>
            <DonorRegistration onBack={() => {}} />
          </ProtectedRoute>
        } />
        <Route path="/maps" element={
          <ProtectedRoute>
            <Maps onBack={() => {}} />
          </ProtectedRoute>
        } />
        <Route path="/contact" element={
          <ProtectedRoute>
            <ContactUs onBack={() => {}} />
          </ProtectedRoute>
        } />
        <Route path="/policy" element={<PolicyPage />} /> {/* Add route for PolicyPage */}
        <Route path="/download-certificate" element={<DownloadCertificate />} /> {/* Add route for DownloadCertificate */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
