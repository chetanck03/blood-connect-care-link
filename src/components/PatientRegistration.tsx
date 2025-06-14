
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Heart, CreditCard } from "lucide-react";

interface PatientRegistrationProps {
  onBack: () => void;
}

const PatientRegistration = ({ onBack }: PatientRegistrationProps) => {
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
    console.log('Patient registration:', { formData, healthIssues });
    // Here you would typically integrate with payment gateway
    alert('Registration submitted! Redirecting to payment gateway...');
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
            <Heart className="h-6 w-6 text-medical-red mr-2" />
            <h1 className="text-2xl font-bold text-white">Patient Registration</h1>
          </div>
        </div>

        <Card className="bg-medical-dark-card border-slate-700 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-white">Register as Patient</CardTitle>
            <p className="text-slate-300 text-sm">Registration fee: ₹100 per unit</p>
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
                className="w-full bg-medical-red hover:bg-medical-red-dark transition-all duration-300 hover:glow-red"
                disabled={!formData.consent}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Proceed to Payment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatientRegistration;
