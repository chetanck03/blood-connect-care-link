
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, MapPin, Phone, Clipboard, HeartPulse } from "lucide-react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
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
    <div className="min-h-screen bg-medical-dark p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 animate-fade-in">
        <div className="flex items-center">
          <Heart className="h-8 w-8 text-medical-red animate-pulse" />
          <span className="text-2xl font-bold text-white ml-2">B-Donor</span>
        </div>
        <div className="text-white text-sm">
          Welcome, User
        </div>
      </div>

      {/* Health Quote */}
      <Card className="mb-8 bg-gradient-to-r from-medical-red/20 to-medical-blue/20 border-slate-700 animate-fade-in">
        <CardContent className="p-6 text-center">
          <p className="text-white text-lg italic">"{healthQuotes[0]}"</p>
        </CardContent>
      </Card>

      {/* Main Navigation */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <Button
          onClick={() => onNavigate('patient-registration')}
          className="h-24 bg-medical-red hover:bg-medical-red-dark transition-all duration-300 hover:glow-red hover:scale-105"
        >
          <div className="text-center">
            <Clipboard className="h-8 w-8 mb-2 mx-auto" />
            <div>Patient Registration</div>
          </div>
        </Button>
        
        <Button
          onClick={() => onNavigate('donor-registration')}
          className="h-24 bg-medical-blue hover:bg-medical-blue/80 transition-all duration-300 hover:glow-blue hover:scale-105"
        >
          <div className="text-center">
            <HeartPulse className="h-8 w-8 mb-2 mx-auto" />
            <div>Donor Registration</div>
          </div>
        </Button>
        
        <Button
          onClick={() => onNavigate('maps')}
          className="h-24 bg-medical-green hover:bg-medical-green/80 transition-all duration-300 hover:scale-105"
        >
          <div className="text-center">
            <MapPin className="h-8 w-8 mb-2 mx-auto" />
            <div>Hospital Maps</div>
          </div>
        </Button>
        
        <Button
          onClick={() => onNavigate('contact')}
          className="h-24 bg-slate-700 hover:bg-slate-600 transition-all duration-300 hover:scale-105"
        >
          <div className="text-center">
            <Phone className="h-8 w-8 mb-2 mx-auto" />
            <div>Contact Us</div>
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
  );
};

export default Home;
