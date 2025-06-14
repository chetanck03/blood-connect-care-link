
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import ClerkAuth from "@/components/ClerkAuth";
import Home from "@/components/Home";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const navigate = useNavigate();

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  const handleNavigation = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <div className="min-h-screen bg-medical-dark">
      {!isSignedIn ? (
        <ClerkAuth onLogin={() => navigate('/')} />
      ) : (
        <Home onNavigate={handleNavigation} />
      )}
    </div>
  );
};

export default Index;
