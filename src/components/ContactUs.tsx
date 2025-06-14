import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react";

interface ContactUsProps {
  onBack: () => void;
}

const ContactUs = ({ onBack }: ContactUsProps) => {
  const contactInfo = [
    { type: "Emergency", number: "+91 9876543210", icon: Phone, color: "text-medical-red" },
    { type: "Support", number: "+91 9876543211", icon: Phone, color: "text-medical-blue" },
    { type: "Blood Bank", number: "+91 9876543212", icon: Phone, color: "text-medical-green" }
  ];

  const socialLinks = [
    { name: "Facebook", handle: "@BDonorApp" },
    { name: "Twitter", handle: "@BDonor" },
    { name: "Instagram", handle: "@bdonor_official" },
    { name: "LinkedIn", handle: "B-Donor Healthcare" }
  ];

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
            <Phone className="h-6 w-6 text-medical-blue mr-2" />
            <h1 className="text-2xl font-bold text-white">Contact Us</h1>
          </div>
        </div>

        {/* Emergency Contact */}
        <Card className="mb-6 bg-gradient-to-r from-medical-red/20 to-transparent border-slate-700 animate-fade-in">
          <CardContent className="p-6 text-center">
            <Phone className="h-12 w-12 text-medical-red mx-auto mb-2 animate-pulse" />
            <h3 className="text-white text-xl font-bold">24/7 Emergency</h3>
            <p className="text-medical-red text-2xl font-bold">108</p>
            <p className="text-slate-300 text-sm">For medical emergencies</p>
          </CardContent>
        </Card>

        {/* Contact Numbers */}
        <Card className="mb-6 bg-medical-dark-card border-slate-700 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-white">Contact Numbers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <div className="flex items-center">
                    <contact.icon className={`h-5 w-5 mr-3 ${contact.color}`} />
                    <div>
                      <p className="text-white font-semibold">{contact.type}</p>
                      <p className={`${contact.color} font-mono`}>{contact.number}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Email & Website */}
        <Card className="mb-6 bg-medical-dark-card border-slate-700 animate-slide-in-right">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Mail className="mr-2 h-5 w-5 text-medical-blue" />
              Digital Contact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-slate-800 p-4 rounded-lg">
                <p className="text-white font-semibold">Email</p>
                <p className="text-medical-blue">support@bdonor.com</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <p className="text-white font-semibold">Website</p>
                <p className="text-medical-blue">www.bdonor.com</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Media */}
        <Card className="mb-6 bg-medical-dark-card border-slate-700 animate-slide-in-right">
          <CardHeader>
            <CardTitle className="text-white">Follow Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <div
                  key={index}
                  className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer text-center"
                >
                  <p className="text-white font-semibold">{social.name}</p>
                  <p className="text-medical-blue text-sm">{social.handle}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Address */}
        <Card className="bg-medical-dark-card border-slate-700 animate-slide-in-right">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-medical-green" />
              Address
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-white">B-Donor Healthcare Solutions</p>
              <p className="text-slate-300">123 Medical Plaza, Healthcare District</p>
              <p className="text-slate-300">Mumbai, Maharashtra 400001</p>
              <p className="text-slate-300">India</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;
