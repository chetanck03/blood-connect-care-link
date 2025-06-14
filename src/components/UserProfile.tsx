
import { useState } from 'react';
import { UserButton, useUser } from '@clerk/clerk-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, User, Heart, Award, Clock, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface UserProfileProps {
  onBack: () => void;
}

const UserProfile = ({ onBack }: UserProfileProps) => {
  const { user } = useUser();
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/');
  };
  
  const stats = [
    { label: "Donations Made", value: "5", icon: Heart, color: "text-medical-red" },
    { label: "Lives Saved", value: "15", icon: User, color: "text-medical-blue" },
    { label: "Reward Coins", value: "250", icon: Award, color: "text-yellow-500" },
    { label: "Member Since", value: "2024", icon: Clock, color: "text-medical-green" }
  ];

  const recentActivity = [
    { date: "2024-06-10", activity: "Blood donation completed", location: "City Hospital" },
    { date: "2024-06-05", activity: "Registered as donor", location: "B-Donor App" },
    { date: "2024-06-01", activity: "Profile created", location: "B-Donor App" }
  ];

  return (
    <div className="min-h-screen bg-medical-dark p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div className="flex items-center">
            <Button
              onClick={handleBack}
              variant="ghost"
              className="text-white hover:bg-slate-800 mr-4"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center">
              <User className="h-6 w-6 text-medical-blue mr-2" />
              <h1 className="text-2xl font-bold text-white">My Profile</h1>
            </div>
          </div>
          <UserButton 
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "w-10 h-10"
              }
            }}
          />
        </div>

        {/* Profile Card */}
        <Card className="mb-8 bg-medical-dark-card border-slate-700 animate-fade-in">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-white text-2xl">
                  {user?.fullName || user?.firstName || "User"}
                </CardTitle>
                <CardDescription className="text-slate-300">
                  {user?.primaryEmailAddress?.emailAddress || "No email provided"}
                </CardDescription>
                <div className="flex items-center mt-2">
                  <Phone className="h-4 w-4 text-medical-green mr-2" />
                  <span className="text-slate-300">
                    {user?.primaryPhoneNumber?.phoneNumber || "No phone provided"}
                  </span>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-medical-dark-card border-slate-700 hover:glow-blue transition-all duration-300 animate-slide-in-right">
              <CardContent className="p-4 text-center">
                <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-slate-300 text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card className="bg-medical-dark-card border-slate-700 animate-slide-in-right">
          <CardHeader>
            <CardTitle className="text-white">Recent Activity</CardTitle>
            <CardDescription className="text-slate-300">
              Your latest actions and contributions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded-lg border-l-4 border-medical-blue">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-semibold">{activity.activity}</p>
                      <p className="text-slate-300 text-sm">{activity.location}</p>
                    </div>
                    <span className="text-slate-400 text-sm">{activity.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
