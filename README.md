
# Project Name

## Eco-Adventure Experiences

## Purpose

The purpose of this project is to create an eco-adventure experience blog website showcasing eco-friendly travel adventures like mountain treks, ocean dives, and more. Users can browse adventures, view detailed information, and consult experts for guidance. It also incorporates user engagement through authentication and profile management.


## Live Website
https://eco-adventure807.surge.sh/



## Key Features

Responsive Design

1. Fully responsive layout for mobile, tablet, and desktop devices.
User Authentication

2. Email/password and Google-based login and registration.
Persistent login on private routes without redirection to the login page upon reload.
Dynamic Adventure Data

3. JSON-based data for eco-adventure experiences including title, images, descriptions, cost, availability, and eco-friendly features.
Interactive Pages

4. Homepage: Displays adventure cards dynamically populated from JSON data and a banner with sliders.
Adventure Details Page: Comprehensive details about each adventure, with conditional "Talk with Expert" functionality based on time.

5. My Profile Page: Displays user information and provides options to update profiles.

6. Authentication Features

* Password validation with criteria like uppercase, lowercase, and minimum length.
* Forgot password functionality with email persistence.

7. Routing and Error Handling
* Private routes for detailed adventure pages and profiles.
* Custom 404 error page with navigation back to home.
Deployment

8. Hosted on Surge  with proper environment configuration for Firebase keys.

9. AOS Package

10. Smooth animations for adventure cards on the homepage.

11. Dynamic Titles

* Each page dynamically updates its title based on the route.

## NPM Packages Used
 ** React Router DOM: For managing routes and private pages.

 ** Firebase: For authentication and profile management.

 ** AOS (Animate on Scroll): For adding smooth animation effects to homepage elements.

 ** Animate.css

 ** React Toastify: For error and success messages during       authentication and profile updates.

 ** hero-slider :  For the banner slider on the homepage.

 ** react modal video :  For the Video Section


Here's a concise guide for running a project created with React Router DOM and Firebase:

```markdown
# Project Setup Guide

Follow these steps to set up and run the project on your local machine.

## Prerequisites

Ensure you have:
- **Node.js** installed
- A **Firebase** project set up

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

- Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
- Obtain the Firebase configuration object from your project settings.
- Create a `.env` file in the project root and add your Firebase configuration:

```env
VITE_API_KEY=your-api-key
VITE_AUTH_DOMAIN=your-auth-domain
VITE_PROJECT_ID=your-project-id
VITE_STORAGE_BUCKET=your-storage-bucket
VITE_MESSAGING_SENDER_ID=your-sender-id
VITE_APP_ID=your-app-id
```

### 4. Run the Application

```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Additional Notes

- **React Router DOM** is used for client-side routing.
- **Firebase** handles authentication and other backend services.

For any issues or support, contact [Walid Hasan](walid.official8@gmail.com).
``` 

This guide provides a clear, step-by-step approach to running your project.