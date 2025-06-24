import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button } from "@/components/ui/button"; // Import Button
import { ArrowLeft , Heart } from "lucide-react"; // Import ArrowLeft icon
import Footer from '../components/Footer'; // Import the Footer component

const PolicyPage = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="min-h-screen bg-medical-dark text-white flex flex-col">
      <div className="max-w-2xl mx-auto p-4 flex-grow">
        <div className="flex items-center mb-6">
          <Button
            onClick={handleBack}
            variant="ghost"
            className="text-white hover:bg-slate-800 mr-4"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        <div className="flex items-center">
            <Heart className="h-6 w-6 text-medical-red mr-2" />
            <h1 className="text-2xl font-bold text-white">Our Policy </h1>
          </div>
        </div>

        <div className="bg-medical-dark-card p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl text-center text-red-500 font-semibold mb-4">No Blood Sale and Purchase Policy</h2>
          <p className="mb-4 text-slate-300 leading-relaxed">
            At B-Donor, we are committed to the principle that blood donation is a voluntary and altruistic act. Our platform is designed to connect generous blood donors with patients in critical need, facilitating a seamless and efficient donation process based on medical requirements and blood group compatibility.
          </p>
          <p className="mb-4 text-slate-300 leading-relaxed">
            <strong>Strict Prohibition of Commercial Transactions:</strong> We maintain a zero-tolerance policy against the sale or purchase of blood or blood components through our platform. Engaging in any form of commercial transaction involving blood is strictly prohibited and goes against the fundamental values of our service and the spirit of blood donation.
          </p>
          <p className="mb-4 text-slate-300 leading-relaxed">
          <strong>Focus on Voluntary Donation:</strong> Our primary focus is on promoting voluntary, unpaid blood donation. We believe that blood donation should be driven by compassion and a desire to help others, not by financial gain. We work tirelessly to raise awareness about the importance of regular blood donation and to encourage more people to become voluntary donors.
          </p>
           <h3 className="text-xl font-semibold mb-4 mt-6">Guidelines for Users:</h3>
          <ul className="list-disc list-inside mb-4 text-slate-300 leading-relaxed">
            <li>Users must not offer or request payment for blood donations or transfusions facilitated through the platform.</li>
            <li>Any communication or activity suggesting the sale or purchase of blood is strictly forbidden.</li>
            <li>Violations of this policy will lead to immediate investigation and may result in permanent suspension or termination of the user account.</li>
          </ul>

          <p className="mb-4 text-slate-300 leading-relaxed">
          <strong>Reporting Violations:</strong> We encourage our users to report any suspicious activity or instances where they believe our no blood sale and purchase policy is being violated. You can contact us through the provided contact information to report such incidents. Your cooperation helps us maintain a safe and ethical environment for blood donation.
          </p>
           <p className="text-slate-300 leading-relaxed">
            By using the B-Donor platform, you agree to comply with this No Blood Sale and Purchase Policy and all other terms and conditions. Together, we can ensure that blood donation remains a noble act of saving lives.
          </p>

          <p className="mt-6 text-center text-slate-400 text-sm">
            For any inquiries regarding this policy, please refer to our Contact Us page.
          </p>
        </div>
      </div>
      <Footer /> {/* Include the Footer component here */}
    </div>
  );
};

export default PolicyPage;
