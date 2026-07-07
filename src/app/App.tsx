import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import ModernDashboard from './components/ModernDashboard';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    role: 'family' | 'medical' | 'patient';
  } | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    return (window.localStorage.getItem('healthwatch-theme') as 'light' | 'dark') || 'light';
  });
  const [alerts, setAlerts] = useState([
    {
      id: '1',
      type: 'critical' as const,
      message: 'Detak jantung mencapai 145 BPM - Di atas normal',
      patientName: 'Ibu Siti Rahayu',
      time: '2 menit yang lalu'
    },
    {
      id: '2',
      type: 'warning' as const,
      message: 'Tekanan darah tinggi terdeteksi: 150/95 mmHg',
      patientName: 'Ibu Siti Rahayu',
      time: '15 menit yang lalu'
    },
    {
      id: '3',
      type: 'info' as const,
      message: 'Target langkah harian tercapai: 5,000 langkah',
      patientName: 'Ibu Siti Rahayu',
      time: '1 jam yang lalu'
    }
  ]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('healthwatch-theme', theme);
    }
  }, [theme]);

  const handleDismissAlert = (id: string) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  const handleLogin = (role: 'family' | 'medical' | 'patient', name: string) => {
    setCurrentUser({ name, role });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const handleGetStarted = () => {
    setShowLanding(false);
  };

  const handleBackToHome = () => {
    setShowLanding(true);
  };

  if (showLanding) {
    return <LandingPage onGetStarted={handleGetStarted} />;
  }

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} onBackToHome={handleBackToHome} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route
        path="/dashboard"
        element={
          <ModernDashboard
            currentUser={currentUser}
            alerts={alerts}
            onDismissAlert={handleDismissAlert}
            onLogout={handleLogout}
            theme={theme}
            onToggleTheme={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
          />
        }
      />
      <Route
        path="/alerts"
        element={
          <ModernDashboard
            currentUser={currentUser}
            alerts={alerts}
            onDismissAlert={handleDismissAlert}
            onLogout={handleLogout}
            theme={theme}
            onToggleTheme={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
          />
        }
      />
      <Route
        path="/history"
        element={
          <ModernDashboard
            currentUser={currentUser}
            alerts={alerts}
            onDismissAlert={handleDismissAlert}
            onLogout={handleLogout}
            theme={theme}
            onToggleTheme={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
          />
        }
      />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}