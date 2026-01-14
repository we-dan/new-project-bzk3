import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/providers/theme';
import { HomeView } from '@/components/home-view';

function SearchView() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="text-center text-white">
        <h1 className="text-3xl font-light">Search</h1>
        <p className="mt-2 text-white/60">Search for locations</p>
      </div>
    </div>
  );
}

function NotificationsView() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <div className="text-center text-white">
        <h1 className="text-3xl font-light">Notifications</h1>
        <p className="mt-2 text-white/60">Weather alerts and updates</p>
      </div>
    </div>
  );
}

function ProfileView() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-green-900">
      <div className="text-center text-white">
        <h1 className="text-3xl font-light">Profile</h1>
        <p className="mt-2 text-white/60">Your settings and preferences</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="app-theme">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/notifications" element={<NotificationsView />} />
          <Route path="/profile" element={<ProfileView />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}