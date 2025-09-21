# Firebase Authentication Project

I am starting to learn Firebase. This is an initial level of authentication and authorization using Firebase Authentication. I am adding Google and GitHub providers and also the login and registration form.

## 🚀 Project Overview

This project is a modern React application built with Vite that implements Firebase Authentication. It features a complete authentication system with email/password login, registration, and social authentication providers (Google and GitHub).

## ✨ Features

- 🔐 **Email/Password Authentication**
  - User registration with email verification
  - Secure login system
  - Password strength validation
  - Form validation with real-time feedback

- 🌐 **Social Authentication**
  - Google OAuth integration
  - GitHub OAuth integration
  - One-click social sign-in

- 🎨 **Modern UI/UX**
  - Responsive design with Tailwind CSS
  - Beautiful components with DaisyUI
  - Smooth animations and transitions
  - Dark/Light theme support

- 🛡️ **Security Features**
  - Client-side form validation
  - Password strength indicator
  - Error handling and user feedback
  - Secure Firebase configuration

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.13 + DaisyUI 5.1.12
- **Authentication**: Firebase 12.2.1
- **Routing**: React Router 7.9.1
- **Package Manager**: pnpm

## 📁 Project Structure

```
auth-firebase/
├── src/
│   ├── components/
│   │   ├── ErrorPage/
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── Register/
│   │   ├── Navbar/
│   │   ├── Toaster/
│   ├── contexts/
│   │   ├── AuthContext.jsx
│   ├── providers/
│   │   ├── AuthProviders.jsx
│   ├── index.css
│   ├── Root.jsx
│   └── main.jsx
├── Firebase/
│   └── firebase.init.js
├── public/
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm package manager
- Firebase project with Authentication enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd auth-firebase
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Firebase Setup**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and configure providers:
     - Email/Password
     - Google
     - GitHub
   - Copy your Firebase config and update `Firebase/firebase.init.js`

4. **Environment Configuration**
   ```bash
   # Update Firebase/firebase.init.js with your config
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-auth-domain",
     projectId: "your-project-id",
     // ... other config
   };
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 📱 Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run ESLint
pnpm lint
```

## 🔧 Firebase Configuration

### Authentication Providers Setup

1. **Google Provider**
   - Go to Firebase Console → Authentication → Sign-in method
   - Enable Google provider
   - Add your domain to authorized domains

2. **GitHub Provider**
   - Enable GitHub provider in Firebase Console
   - Create GitHub OAuth App
   - Add Client ID and Client Secret to Firebase

3. **Email/Password**
   - Enable Email/Password provider
   - Configure email verification settings

### Security Rules

Ensure your Firebase project has proper security rules configured for production use.

## 🎯 Learning Objectives

This project helps learn:

- Firebase Authentication setup and configuration
- React functional components and hooks
- Form validation and error handling
- OAuth integration with social providers
- Modern CSS frameworks (Tailwind CSS + DaisyUI)
- React Router for navigation
- State management in React
- User experience best practices

## 🔐 Authentication Flow

1. **Registration**: Users can create accounts with email/password
2. **Login**: Existing users can sign in with email/password or social providers
3. **Validation**: Real-time form validation with password strength checking
4. **Error Handling**: Comprehensive error messages for various scenarios
5. **Navigation**: Protected routes and conditional rendering based on auth state

## 🐛 Common Issues & Solutions

### Firebase Configuration
- Ensure all required Firebase services are enabled
- Check that your domain is added to authorized domains
- Verify API keys and project settings

### Social Authentication
- Make sure OAuth apps are properly configured
- Check redirect URIs match your domain
- Verify provider-specific settings in Firebase Console

## 📚 Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [DaisyUI Components](https://daisyui.com)
- [Vite Documentation](https://vitejs.dev)

## 🤝 Contributing

This is a learning project, but suggestions and improvements are welcome!

## 📄 License

This project is for educational purposes.

---

**Happy Learning! 🎉**