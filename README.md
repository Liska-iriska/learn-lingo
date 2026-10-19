# LearnLingo

LearnLingo is a modern, responsive web application designed to help users find and book online language tutors. Users can filter teachers by target language, level of knowledge, and price, bookmark their favorite tutors, and book trial lessons.

---

## 🚀 Features

- **Teacher Discovery & Filtering**: Search and filter teachers by language, knowledge level (A1 to C2), and maximum price per hour.
- **Dynamic Tag Highlighting**: Visual highlighting of level tags based on active user filters.
- **Favorites System**: Save and manage favorite tutors locally using browser storage with immediate UI synchronization.
- **User Authentication**: Firebase Auth integration supporting registration, login, and protected routes/actions.
- **Trial Lesson Booking**: Interactive modal form for scheduling trial lessons with validation.
- **Responsive Design**: Clean, user-friendly UI styled using CSS Modules.

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, React Router
- **State & Form Management**: React Hooks, React Hook Form, Yup Validation
- **Backend & Database**: Firebase Realtime Database, Firebase Authentication
- **Build Tool**: Vite
- **Styling**: CSS Modules

---

## 📦 Getting Started

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Liska-iriska/learn-lingo.git
   cd learn-lingo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add your Firebase configuration details:

   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_DATABASE_URL=your_database_url
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MSG_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```text
public/              # Static assets (images, icons, SVG sprites)
src/        
├── components/      # Reusable UI components (TeacherCard, Modal, Filters, etc.)
├── context/         # Auth and state contexts
├── hooks/           # Custom React hooks (useFavorites, useAuth)
├── services/        # API and Firebase database integration functions
├── types/           # TypeScript interfaces and types
├── firebase.ts      # Firebase initialization configuration
├── main.tsx         # Main file
└── theme.ts         # Random theme
```

---
