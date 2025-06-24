import {  SignedIn, SignedOut,SignInButton, SignUpButton, useSignIn, useSignUp } from '@clerk/clerk-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Shield, Users, Award, Clock, MapPin, AlertCircle } from "lucide-react";
import { useEffect, useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import logo from '../components/img/logo.png';

interface ClerkAuthProps {
  onLogin: () => void;
}

const ClerkAuth = ({ onLogin }: ClerkAuthProps) => {
  const features = [
    {
      icon: Heart,
      title: "Blood Donation Network",
      description: "Connect with donors and patients in your area for life-saving blood donations"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of volunteers making a difference in healthcare"
    },
    {
      icon: MapPin,
      title: "Hospital Locator",
      description: "Find nearby hospitals and blood banks with real-time availability"
    },
    {
      icon: Award,
      title: "Reward System",
      description: "Earn reward coins for your donations and help others"
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Your medical data is protected with enterprise-grade security"
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency support for critical situations"
    }
  ];

  const { isLoaded: isSignInLoaded, signIn, setActive: setSignInActive } = useSignIn();
  const { isLoaded: isSignUpLoaded, signUp, setActive: setSignUpActive } = useSignUp();
  const [authError, setAuthError] = useState<string | null>(null);
  
  useEffect(() => {
    // Clear any auth errors when the component mounts
    setAuthError(null);
  }, []);

  return (
    <div className="min-h-screen bg-medical-dark">
      <SignedOut>
        <div className="min-h-screen flex flex-col items-center justify-center p-4 medical-gradient">
          <div className="w-full max-w-4xl animate-fade-in">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-6">
              <img src={logo} alt="Logo" className="h-16 w-16 rounded-full object-cover" />
                <span className="text-5xl font-bold text-white ml-3">B-Donor</span>
              </div>
              <p className="text-xl text-slate-300 mb-4">Connecting Lives, Saving Lives</p>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                Join our mission to revolutionize healthcare through voluntary blood donation. 
                Connect with donors, find hospitals, and save lives in your community.
              </p>
            </div>

            {/* Auth Card - Moved to top */}
            <Card className="bg-medical-dark-card/80 backdrop-blur-sm border-slate-700 glow-red max-w-md mx-auto mb-12">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl">Welcome to B-Donor</CardTitle>
                <CardDescription className="text-slate-300">
                  Sign in or create your account to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="signin" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-slate-800 mb-6">
                    <TabsTrigger value="signin" className="data-[state=active]:bg-medical-red">Sign In</TabsTrigger>
                    <TabsTrigger value="signup" className="data-[state=active]:bg-medical-blue">Sign Up</TabsTrigger>
                  </TabsList>
                  
                  {authError && (
                    <Alert variant="destructive" className="mb-4 bg-medical-red/20 border-medical-red">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Authentication Error</AlertTitle>
                      <AlertDescription>{authError}</AlertDescription>
                    </Alert>
                  )}
                  
                  <TabsContent value="signin" className="mt-0">
                    <SignInButton 
                      mode="modal"
                      afterSignInUrl="/"
                      redirectUrl="/"
                    >
                      <Button 
                        className="w-full bg-medical-red hover:bg-medical-red-dark transition-all duration-300 hover:glow-red text-lg py-3"
                        onClick={() => setAuthError(null)}
                      >
                        <Shield className="mr-2 h-5 w-5" />
                        Sign In to B-Donor
                      </Button>
                    </SignInButton>
                  </TabsContent>
                  
                  <TabsContent value="signup" className="mt-0">
                    <SignUpButton 
                      mode="modal"
                      afterSignUpUrl="/"
                      redirectUrl="/"
                    >
                      <Button 
                        className="w-full bg-medical-blue hover:bg-medical-blue/80 transition-all duration-300 hover:glow-blue text-lg py-3"
                        onClick={() => setAuthError(null)}
                      >
                        <Heart className="mr-2 h-5 w-5" />
                        Join B-Donor Today
                      </Button>
                    </SignUpButton>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-medical-dark-card/80 backdrop-blur-sm border-slate-700 hover:glow-blue transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="h-12 w-12 text-medical-blue mx-auto mb-4" />
                    <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                    <p className="text-slate-300 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* About Section */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose B-Donor?</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-slate-300 text-lg mb-6">
                  B-Donor is more than just a blood donation app - it's a community-driven platform that bridges the gap between those who need blood and those willing to donate. Our mission is to make healthcare more accessible and save lives through technology.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h3 className="text-medical-red font-bold text-2xl">10,000+</h3>
                    <p className="text-slate-300">Lives Saved</p>
                  </div>
                  <div>
                    <h3 className="text-medical-blue font-bold text-2xl">5,000+</h3>
                    <p className="text-slate-300">Active Donors</p>
                  </div>
                  <div>
                    <h3 className="text-medical-green font-bold text-2xl">24/7</h3>
                    <p className="text-slate-300">Emergency Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <Heart className="h-16 w-16 text-medical-red animate-pulse mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-4">Welcome to B-Donor!</h1>
            <p className="text-slate-300 mb-6">You're successfully signed in. Redirecting...</p>
            <Button 
              onClick={onLogin}
              className="bg-medical-blue hover:bg-medical-blue/80"
            >
              Continue to Dashboard
            </Button>
          </div>
        </div>
      </SignedIn>
    </div>
  );
};

export default ClerkAuth;
