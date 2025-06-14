
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Hospital } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MapsProps {
  onBack: () => void;
}

const Maps = ({ onBack }: MapsProps) => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/');
  };
  
  const hospitals = [
    { name: "City General Hospital", type: "Public", distance: "2.5 km", bloodBank: true },
    { name: "Medicare Private Hospital", type: "Private", distance: "3.1 km", bloodBank: true },
    { name: "Emergency Care Center", type: "Private", distance: "4.2 km", bloodBank: false },
    { name: "Red Cross Blood Bank", type: "Blood Bank", distance: "5.0 km", bloodBank: true },
    { name: "Community Health Center", type: "Public", distance: "6.3 km", bloodBank: true }
  ];

  return (
    <div className="min-h-screen bg-medical-dark p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6 animate-fade-in">
          <Button
            onClick={handleBack}
            variant="ghost"
            className="text-white hover:bg-slate-800 mr-4"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center">
            <MapPin className="h-6 w-6 text-medical-green mr-2" />
            <h1 className="text-2xl font-bold text-white">Nearby Hospitals & Blood Banks</h1>
          </div>
        </div>

        {/* Google Maps Integration */}
        <Card className="mb-6 bg-medical-dark-card border-slate-700 animate-fade-in">
          <CardContent className="p-6">
            <div className="rounded-lg overflow-hidden h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sblood%20banks%20and%20hospitals!5e0!3m2!1sen!2sin!4v1656152197616!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Nearby Hospitals and Blood Banks"
                className="rounded-lg"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {/* Hospital List */}
        <Card className="bg-medical-dark-card border-slate-700 animate-slide-in-right">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Hospital className="mr-2 h-5 w-5 text-medical-red" />
              Nearby Healthcare Facilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {hospitals.map((hospital, index) => (
                <div
                  key={index}
                  className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer hover:glow-blue"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-white font-semibold">{hospital.name}</h3>
                      <p className="text-slate-300 text-sm">{hospital.type}</p>
                      <p className="text-slate-400 text-sm">{hospital.distance}</p>
                    </div>
                    <div className="text-right">
                      {hospital.bloodBank && (
                        <span className="bg-medical-red text-white text-xs px-2 py-1 rounded">
                          Blood Bank
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Filter Options */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="border-slate-600 text-white hover:bg-medical-red">
            2km
          </Button>
          <Button variant="outline" className="border-slate-600 text-white hover:bg-medical-red">
            5km
          </Button>
          <Button variant="outline" className="border-slate-600 text-white hover:bg-medical-red">
            10km
          </Button>
          <Button variant="outline" className="border-slate-600 text-white hover:bg-medical-red">
            25km
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Maps;
