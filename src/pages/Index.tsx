
import { useState } from 'react';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import ClerkAuth from "@/components/ClerkAuth";
import Home from "@/components/Home";
import PatientRegistration from "@/components/PatientRegistration";
import DonorRegistration from "@/components/DonorRegistration";
import Maps from "@/components/Maps";
import ContactUs from "@/components/ContactUs";
import UserProfile from "@/components/UserProfile";

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'patient-registration':
        return <PatientRegistration onBack={() => setCurrentPage('home')} />;
      case 'donor-registration':
        return <DonorRegistration onBack={() => setCurrentPage('home')} />;
      case 'maps':
        return <Maps onBack={() => setCurrentPage('home')} />;
      case 'contact':
        return <ContactUs onBack={() => setCurrentPage('home')} />;
      case 'profile':
        return <UserProfile onBack={() => setCurrentPage('home')} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-medical-dark">
      <SignedOut>
        <ClerkAuth onLogin={() => setCurrentPage('home')} />
      </SignedOut>
      
      <SignedIn>
        {renderCurrentPage()}
      </SignedIn>
    </div>
  );
};

export default Index;
