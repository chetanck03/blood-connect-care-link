import { useAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isSignedIn, isLoaded } = useAuth();
  
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-medical-dark flex items-center justify-center">
        <div className="animate-pulse text-medical-red text-center">
          <div className="inline-block w-8 h-8 border-4 border-current border-t-transparent rounded-full" 
               role="status" aria-label="loading">
            <span className="sr-only">Loading...</span>
          </div>
          <p className="mt-4 text-white">Loading...</p>
        </div>
      </div>
    );
  }
  
  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;