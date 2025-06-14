# B-Donor: Blood Donation Management System

## Overview

B-Donor is a comprehensive blood donation management system designed to connect blood donors with patients in need. The platform facilitates the registration of both donors and patients, provides information about nearby hospitals and blood banks, and offers a user-friendly interface for managing blood donation activities.

## Features

### User Authentication
- Secure authentication using Clerk
- Protected routes for authenticated users
- User profile management

### Donor Management
- Donor registration with health information collection
- Blood type tracking
- Donation history
- Reward system for donors

### Patient Registration
- Patient registration with medical details
- Blood type requirement specification
- Payment integration for registration fees

### Hospital & Blood Bank Locator
- Interactive Google Maps integration
- List of nearby hospitals and blood banks
- Contact information for medical facilities

### User Dashboard
- Personal statistics (donations made, lives saved)
- Recent activity tracking
- Profile management

### Support & Contact
- Emergency contact information
- Support channels
- Social media links

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **UI Components**: Shadcn/ui
- **Authentication**: Clerk
- **Routing**: React Router
- **State Management**: React Query
- **Maps Integration**: Google Maps Embed API
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/blood-connect-care-link.git
   cd blood-connect-care-link
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   - Create a `.env` file in the root directory
   - Add your Clerk publishable key:
     ```
     VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
     ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
├── src/
│   ├── components/       # UI components
│   │   ├── ui/           # Shadcn UI components
│   │   └── ...           # Custom components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
└── ...                   # Configuration files
```

## Authentication Flow

The application uses Clerk for authentication with the following flow:

1. Users can sign up or sign in through the authentication page
2. Upon successful authentication, users are redirected to the home page
3. Protected routes require authentication to access
4. The application displays a loading screen while checking authentication status

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries or support, please contact us at support@bdonor.com