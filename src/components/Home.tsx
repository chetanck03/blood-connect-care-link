import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award,Heart,Users, MapPin, Phone, Clipboard, HeartPulse, User } from "lucide-react";
import { UserButton, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";
import logo from '../components/img/logo.png';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  const navigate = useNavigate();
  const { user } = useUser();
  const healthQuotes = [
    "Health is not about the weight you lose, but about the life you gain.",
    "Your body can stand almost anything. It's your mind you have to convince.",
    "Every drop of blood donated is a lifeline to someone in need.",
    "Be the reason someone believes in the goodness of people."
  ];

  const healthTips = [
    { title: "Stay Hydrated", desc: "Drink at least 8 glasses of water daily" },
    { title: "Exercise Regularly", desc: "30 minutes of activity keeps you healthy" },
    { title: "Eat Balanced Diet", desc: "Include fruits and vegetables in every meal" },
    { title: "Get Enough Sleep", desc: "7-8 hours of sleep is essential for recovery" }
  ];

  const healthNews = [
    { title: "New Blood Donation Drive Saves 200 Lives", desc: "Community comes together for emergency blood collection" },
    { title: "Mobile Health Apps Reduce Hospital Visits by 30%", desc: "Technology improving healthcare accessibility" },
    { title: "World Health Day: Focus on Blood Donation", desc: "WHO emphasizes importance of voluntary blood donation" }
  ];

  return (
    <div className="min-h-screen bg-medical-dark">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-medical-dark p-3 z-50 shadow-md">
        <div className="flex items-center justify-between animate-fade-in">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-12 rounded-full object-cover" />
            <span className="text-2xl font-bold text-white ml-2">B-Donor</span>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button
              onClick={() => navigate('/download-certificate')}
              variant="ghost"
              className="text-white hover:bg-slate-800 hidden md:flex"
            >
              Download Certificate
            </Button>
            <Button
              onClick={() => navigate('/download-certificate')}
              variant="ghost"
              className="text-white hover:bg-slate-800 md:hidden p-2"
              title="Download Certificate"
            >
              <Award className="h-5 w-5" />
            </Button>
            <Button
              onClick={() => navigate('/profile')}
              variant="ghost"
              className="text-white hover:bg-slate-800 hidden md:flex"
            >
              <User className="h-5 w-5 mr-2" />
              Profile
            </Button>
            <Button
              onClick={() => navigate('/profile')}
              variant="ghost"
              className="text-white hover:bg-slate-800 md:hidden p-2"
              title="Profile"
            >
              <User className="h-5 w-5" />
            </Button>
          <UserButton 
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "w-10 h-10"
              }
            }}
          />
          </div>
        </div>
      </div>

      {/* Main Content with Padding */}
      <div className=" p-4 pt-20 "> {/* Add top padding equal to header height */}
        {/* Health Quote */}
        <Card className="mb-4 md:mb-8 bg-gradient-to-r from-medical-red/20 to-medical-blue/20 border-slate-700 animate-fade-in">
          <CardContent className="p-4 md:p-6 text-center">
            <p className="text-white text-sm md:text-lg italic">"{healthQuotes[0]}"</p>
          </CardContent>
        </Card>

        {/* Main Navigation */}
        <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-8">
          <Button
            onClick={() => navigate('/patient-registration')}
            className="h-20 md:h-24 bg-medical-red hover:bg-medical-red-dark transition-all duration-300 hover:glow-red hover:scale-105 p-2 md:p-4"
          >
            <div className="text-center">
              <Clipboard className="h-6 w-6 md:h-8 md:w-8 mb-1 md:mb-2 mx-auto" />
              <div className="text-xs md:text-base">Patient Registration</div>
            </div>
          </Button>
          
          <Button
            onClick={() => navigate('/donor-registration')}
            className="h-20 md:h-24 bg-medical-blue hover:bg-medical-blue/80 transition-all duration-300 hover:glow-blue hover:scale-105 p-2 md:p-4"
          >
            <div className="text-center">
              <HeartPulse className="h-6 w-6 md:h-8 md:w-8 mb-1 md:mb-2 mx-auto" />
              <div className="text-xs md:text-base">Donor Registration</div>
            </div>
          </Button>
          
          <Button
            onClick={() => navigate('/maps')}
            className="h-20 md:h-24 bg-medical-green hover:bg-medical-green/80 transition-all duration-300 hover:scale-105 p-2 md:p-4"
          >
            <div className="text-center">
              <MapPin className="h-6 w-6 md:h-8 md:w-8 mb-1 md:mb-2 mx-auto" />
              <div className="text-xs md:text-base">Hospital Maps</div>
            </div>
          </Button>
          
          <Button
            onClick={() => onNavigate('contact')}
            className="h-20 md:h-24 bg-slate-700 hover:bg-slate-600 transition-all duration-300 hover:scale-105 p-2 md:p-4"
          >
            <div className="text-center">
              <Phone className="h-6 w-6 md:h-8 md:w-8 mb-1 md:mb-2 mx-auto" />
              <div className="text-xs md:text-base">Contact Us</div>
            </div>
          </Button>
        </div>

        {/* Health Tips */}
        <Card className="mb-6 bg-medical-dark-card border-slate-700 animate-slide-in-right">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Heart className="mr-2 h-5 w-5 text-medical-red" />
              Health Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {healthTips.map((tip, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition-colors">
                  <h4 className="text-white font-semibold">{tip.title}</h4>
                  <p className="text-slate-300 text-sm">{tip.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Health News */}
        <Card className="bg-medical-dark-card border-slate-700 animate-slide-in-right">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Users className="mr-2 h-5 w-5 text-medical-blue" />
              Health News
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {healthNews.map((news, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition-colors">
                  <h4 className="text-white font-semibold">{news.title}</h4>
                  <p className="text-slate-300 text-sm">{news.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
