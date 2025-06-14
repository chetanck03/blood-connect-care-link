
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Hospital } from "lucide-react";

interface MapsProps {
  onBack: () => void;
}

const Maps = ({ onBack }: MapsProps) => {
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
            onClick={onBack}
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

        {/* Map Placeholder */}
        <Card className="mb-6 bg-medical-dark-card border-slate-700 animate-fade-in">
          <CardContent className="p-6">
            <div className="bg-slate-800 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-medical-green mx-auto mb-2" />
                <p className="text-white">Interactive Map</p>
                <p className="text-slate-400 text-sm">Google Maps integration would appear here</p>
              </div>
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
