
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Shield } from "lucide-react";

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [loginData, setLoginData] = useState({ phone: '', password: '' });
  const [signupData, setSignupData] = useState({ phone: '', password: '', confirmPassword: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', loginData);
    onLogin();
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup attempt:', signupData);
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 medical-gradient">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-12 w-12 text-medical-red animate-pulse-glow" />
            <span className="text-3xl font-bold text-white ml-2">B-Donor</span>
          </div>
          <p className="text-slate-300">Connecting Lives, Saving Lives</p>
        </div>

        <Card className="bg-medical-dark-card/80 backdrop-blur-sm border-slate-700 glow-red">
          <CardHeader className="text-center">
            <CardTitle className="text-white">Welcome to B-Donor</CardTitle>
            <CardDescription className="text-slate-300">
              Join our mission to save lives through blood donation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-slate-800">
                <TabsTrigger value="login" className="data-[state=active]:bg-medical-red">Login</TabsTrigger>
                <TabsTrigger value="signup" className="data-[state=active]:bg-medical-red">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-phone" className="text-white">Mobile Number</Label>
                    <Input
                      id="login-phone"
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={loginData.phone}
                      onChange={(e) => setLoginData({...loginData, phone: e.target.value})}
                      className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password" className="text-white">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-medical-red hover:bg-medical-red-dark transition-all duration-300 hover:glow-red"
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-phone" className="text-white">Mobile Number</Label>
                    <Input
                      id="signup-phone"
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={signupData.phone}
                      onChange={(e) => setSignupData({...signupData, phone: e.target.value})}
                      className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-white">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="Create a password"
                      value={signupData.password}
                      onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                      className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-white">Confirm Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      value={signupData.confirmPassword}
                      onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
                      className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-medical-blue hover:bg-medical-blue/80 transition-all duration-300 hover:glow-blue"
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Sign Up
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
