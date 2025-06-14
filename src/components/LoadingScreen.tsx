import { Heart } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-medical-dark flex items-center justify-center">
      <div className="text-center">
        <Heart className="h-16 w-16 text-medical-red animate-pulse mx-auto" />
        <p className="text-white mt-4 text-xl font-medium">Loading B-Donor...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;