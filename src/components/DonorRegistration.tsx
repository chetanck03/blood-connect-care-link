
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, HeartPulse, Gift } from "lucide-react";

interface DonorRegistrationProps {
  onBack: () => void;
}

const DonorRegistration = ({ onBack }: DonorRegistrationProps) => {
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    age: '',
    bloodGroup: '',
    mobile: '',
    consent: false
  });

  const [healthIssues, setHealthIssues] = useState({
    diabetes: false,
    hypertension: false,
    heartDisease: false,
    asthma: false,
    cancer: false,
    hepatitis: false,
    hiv: false,
    other: false
  });

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donor registration:', { formData, healthIssues });
    alert('Thank you for registering as a donor! You will receive notifications when your blood type is needed.');
  };

  const handleHealthIssueChange = (issue: string, checked: boolean) => {
    setHealthIssues(prev => ({ ...prev, [issue]: checked }));
  };

  return (
    <div className="min-h-screen bg-medical-dark p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-6 animate-fade-in">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:bg-slate-800 mr-4"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center">
            <HeartPulse className="h-6 w-6 text-medical-blue mr-2" />
            <h1 className="text-2xl font-bold text-white">Donor Registration</h1>
          </div>
        </div>

        {/* Rewards Info */}
        <Card className="mb-6 bg-gradient-to-r from-medical-blue/20 to-medical-green/20 border-slate-700 animate-fade-in">
          <CardContent className="p-4 text-center">
            <Gift className="h-8 w-8 text-medical-green mx-auto mb-2" />
            <p className="text-white font-semibold">Earn Reward Coins!</p>
            <p className="text-slate-300 text-sm">Get rewarded for every successful donation</p>
          </CardContent>
        </Card>

        <Card className="bg-medical-dark-card border-slate-700 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-white">Register as Donor</CardTitle>
            <p className="text-slate-300 text-sm">Join our life-saving community</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-slate-800 border-slate-600 text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="age" className="text-white">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      className="bg-slate-800 border-slate-600 text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="place" className="text-white">Place/Address</Label>
                  <Input
                    id="place"
                    value={formData.place}
                    onChange={(e) => setFormData({...formData, place: e.target.value})}
                    className="bg-slate-800 border-slate-600 text-white"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="bloodGroup" className="text-white">Blood Group</Label>
                    <Select onValueChange={(value) => setFormData({...formData, bloodGroup: value})}>
                      <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                        <SelectValue placeholder="Select blood group" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        {bloodGroups.map(group => (
                          <SelectItem key={group} value={group} className="text-white">
                            {group}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="mobile" className="text-white">Mobile Number</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                      className="bg-slate-800 border-slate-600 text-white"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Health Issues */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Health Conditions</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(healthIssues).map(([issue, checked]) => (
                    <div key={issue} className="flex items-center space-x-2">
                      <Checkbox
                        id={issue}
                        checked={checked}
                        onCheckedChange={(checked) => handleHealthIssueChange(issue, checked as boolean)}
                      />
                      <Label htmlFor={issue} className="text-white capitalize">
                        {issue === 'hiv' ? 'HIV' : issue.replace(/([A-Z])/g, ' $1').trim()}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consent */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({...formData, consent: checked as boolean})}
                  required
                />
                <Label htmlFor="consent" className="text-white">
                  I agree to the no blood sale and purchase policy
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-medical-blue hover:bg-medical-blue/80 transition-all duration-300 hover:glow-blue"
                disabled={!formData.consent}
              >
                <HeartPulse className="mr-2 h-4 w-4" />
                Register as Donor
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DonorRegistration;
