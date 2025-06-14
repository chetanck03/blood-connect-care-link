
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Shield, Users, MapPin, MessageCircle, Phone } from "lucide-react";
import Login from "@/components/Login";
import Home from "@/components/Home";
import PatientRegistration from "@/components/PatientRegistration";
import DonorRegistration from "@/components/DonorRegistration";
import Maps from "@/components/Maps";
import ContactUs from "@/components/ContactUs";

const Index = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const renderCurrentPage = () => {
    if (!isLoggedIn && currentPage === 'login') {
      return <Login onLogin={handleLogin} />;
    }

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
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-medical-dark">
      {renderCurrentPage()}
    </div>
  );
};

export default Index;
