import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button } from "@/components/ui/button"; // Import Button
import { ArrowLeft, Award, CircleCheck } from "lucide-react"; // Import icons
import html2canvas from 'html2canvas'; // Import html2canvas
import jsPDF from 'jspdf'; // Import jsPDF

const DownloadCertificate = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [hasDonated, setHasDonated] = useState(false); // State to check if user has donated
  const [checkingStatus, setCheckingStatus] = useState(false); // State for loading indicator

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  // Dummy function to simulate checking donation status
  const checkDonationStatus = () => {
    setCheckingStatus(true);
    // Simulate an API call or check
    setTimeout(() => {
      // In a real app, this would be based on user data
      const userHasDonated = true; // Simulate successful donation check
      setHasDonated(userHasDonated);
      setCheckingStatus(false);
    }, 2000); // Simulate network delay
  };

  // Function to handle PDF download
  const handleDownloadPdf = () => {
    const certificateElement = document.getElementById('certificate-container');
    const downloadButton = document.getElementById('download-button-container');
    const backButtonContainer = document.getElementById('back-button-container'); // Get the back button container

    if (certificateElement) {
      // Temporarily hide the download button container
      if (downloadButton) {
        downloadButton.style.display = 'none';
      }

      // Temporarily hide the back button container
      if (backButtonContainer) {
         backButtonContainer.style.display = 'none';
      }

      html2canvas(certificateElement, {
        scale: 2, // Increase scale for better resolution
        ignoreElements: (element) => element.id === 'download-button-container' || element.id === 'back-button-container' // Ignore both buttons by ID
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        pdf.save('blood_donation_certificate.pdf');
      }).finally(() => {
         // Show the download button container again
         if (downloadButton) {
            downloadButton.style.display = 'block'; // Or whatever the original display style was
         }
         // Show the back button container again
         if (backButtonContainer) {
            backButtonContainer.style.display = 'block'; // Or whatever the original display style was
         }
      });
    } else {
        console.error('Certificate element not found!');
    }
  };

  // Add a health quote array - replace with actual quotes later
  const healthQuotes = [
    "Donating blood costs nothing, but means the world to someone in need.",
    // Add more quotes here
  ];

  return (
    <div className="min-h-screen bg-medical-dark flex flex-col items-center justify-center p-2 md:p-4"> {/* Changed background to bg-medical-dark */}
        {/* Health Quote */}
        <p className="text-white text-sm md:text-lg italic mb-4 md:mb-6 max-w-prose text-center">"{healthQuotes[0]}"</p> {/* Added health quote above certificate */}

        {/* Certificate Container */}
        <div
          id="certificate-container"
          className="bg-white rounded-lg shadow-xl w-full max-w-[90vw] md:w-[800px] min-h-[450px] h-auto md:h-[600px] p-4 md:p-8 relative overflow-hidden"
        >
         {/* Background element for theme */}
         <div className="absolute inset-0 bg-gradient-to-br from-medical-red/10 to-medical-blue/10 opacity-50"></div>

      <div className="relative z-10 flex flex-col h-full p-3 md:p-4 pt-20"> {/* Add top padding equal to header height */}
          <div className="flex items-center mb-4 md:mb-6">
            {/* Back Button */}
            {!checkingStatus && ( // Show back button when not checking status
              <div id="back-button-container"> {/* Added a container with ID */}
                <Button
                  onClick={handleBack}
                  variant="ghost"
                  className="text-black hover:bg-slate-800"
                >
                  <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>
            )} {/* Close conditional rendering */}
            <h1 className="text-lg md:text-2xl font-bold text-center text-medical-red flex-grow">Blood Donation Certificate</h1>
            {/* Award icon is always shown for branding */}{hasDonated && !checkingStatus && ( // Show award icon when certificate is shown
            <Award className="h-6 w-6 md:h-8 md:w-8 text-yellow-500 ml-2 md:ml-4"/>
            )}
          </div>

          {!hasDonated && !checkingStatus && (
            <div className="text-center py-16 md:py-32 flex flex-col items-center justify-center flex-grow"> {/* Adjusted vertical padding, centered content */} 
              <p className="text-base md:text-xl text-gray-700 mb-4 md:mb-8 px-2">Please check your donation status to view and download your certificate.</p> {/* Responsive text size */}
              <Button
                onClick={checkDonationStatus}
                className="bg-medical-blue hover:bg-medical-blue/80 text-base md:text-lg px-4 md:px-6 py-2 md:py-3"
              >
                Check Donation Status
              </Button>
            </div>
          )}

           {checkingStatus && (
            <div className="text-center py-16 md:py-32 flex flex-col items-center justify-center flex-grow"> {/* Responsive padding */} 
              <p className="text-base md:text-lg text-gray-700">Checking donation status...</p>
               {/* Add a simple spinner or loading indicator here if desired */}
            </div>
          )}

          {hasDonated && !checkingStatus && (
            <div className="border-t-2 border-b-2 border-medical-red py-4 md:py-8 text-center flex flex-col justify-center flex-grow">
              <p className="text-base md:text-lg mb-2 md:mb-4 text-gray-700">This certifies that</p>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-6">John Doe</h2>
              <p className="text-base md:text-lg mb-2 md:mb-4 text-gray-700">has generously donated blood on</p>
              <p className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-6">June 24, 2025</p>
              <p className="text-base md:text-lg text-gray-700">at City Blood Bank</p>
               <div className="mt-4 md:mt-8 text-medical-green flex items-center justify-center">
                  <CircleCheck className="h-5 w-5 md:h-6 md:w-6 mr-1 md:mr-2"/>
                  <span className="text-sm md:text-base font-semibold">Donation Verified</span>
               </div>
            </div>
          )}

          {hasDonated && !checkingStatus && (
            <div className="mt-auto pt-2 md:pt-4 text-center">
              <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-4">Issued by BloodConnect Care Link</p>
              <p className="text-xs md:text-sm text-gray-600">Thank you for your life-saving contribution!</p>
              <div id="download-button-container" className="mt-4"> {/* Added a container with ID */}
                <Button
                  onClick={handleDownloadPdf}
                  className="bg-medical-red hover:bg-medical-red/80 text-white text-xs md:text-sm px-3 py-1 md:px-4 md:py-2"
                >
                  Download Certificate (PDF)
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DownloadCertificate;
