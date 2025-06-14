
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Shield, Users, Award, Clock, MapPin } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-medical-dark">
      <SignedOut>
        <div className="min-h-screen flex flex-col items-center justify-center p-4 medical-gradient">
          <div className="w-full max-w-4xl animate-fade-in">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Heart className="h-16 w-16 text-medical-red animate-pulse-glow" />
                <span className="text-5xl font-bold text-white ml-3">B-Donor</span>
              </div>
              <p className="text-xl text-slate-300 mb-4">Connecting Lives, Saving Lives</p>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Join our mission to revolutionize healthcare through voluntary blood donation. 
                Connect with donors, find hospitals, and save lives in your community.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

            {/* Auth Card */}
            <Card className="bg-medical-dark-card/80 backdrop-blur-sm border-slate-700 glow-red max-w-md mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-white">Get Started</CardTitle>
                <CardDescription className="text-slate-300">
                  Join thousands of lives savers today
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="signin" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-slate-800">
                    <TabsTrigger value="signin" className="data-[state=active]:bg-medical-red">Sign In</TabsTrigger>
                    <TabsTrigger value="signup" className="data-[state=active]:bg-medical-blue">Sign Up</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="signin" className="mt-6">
                    <SignInButton fallbackRedirectUrl="/" forceRedirectUrl="/">
                      <Button className="w-full bg-medical-red hover:bg-medical-red-dark transition-all duration-300 hover:glow-red">
                        <Shield className="mr-2 h-4 w-4" />
                        Sign In with Clerk
                      </Button>
                    </SignInButton>
                  </TabsContent>
                  
                  <TabsContent value="signup" className="mt-6">
                    <SignUpButton fallbackRedirectUrl="/" forceRedirectUrl="/">
                      <Button className="w-full bg-medical-blue hover:bg-medical-blue/80 transition-all duration-300 hover:glow-blue">
                        <Heart className="mr-2 h-4 w-4" />
                        Sign Up with Clerk
                      </Button>
                    </SignUpButton>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        {onLogin()}
      </SignedIn>
    </div>
  );
};

export default ClerkAuth;
