import { useState } from 'react';
import { Bell, Activity, AlertTriangle, BarChart3, Home, Settings, Menu, X, LogOut } from 'lucide-react';
import HealthMetricCard from './components/HealthMetricCard';
import AlertNotification from './components/AlertNotification';
import PatientProfile from './components/PatientProfile';
import HealthChart from './components/HealthChart';
import ConnectedUsers from './components/ConnectedUsers';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    role: 'family' | 'medical' | 'patient';
  } | null>(null);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'alerts' | 'history'>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  // Mock data untuk grafik
  const heartRateData = [
    { time: '00:00', value: 72 },
    { time: '04:00', value: 68 },
    { time: '08:00', value: 75 },
    { time: '12:00', value: 82 },
    { time: '16:00', value: 88 },
    { time: '20:00', value: 78 },
    { time: '23:59', value: 70 }
  ];

  const bloodPressureData = [
    { time: '00:00', value: 120 },
    { time: '04:00', value: 115 },
    { time: '08:00', value: 125 },
    { time: '12:00', value: 130 },
    { time: '16:00', value: 135 },
    { time: '20:00', value: 128 },
    { time: '23:59', value: 122 }
  ];

  const connectedUsers = [
    { id: '1', name: 'Dr. Ahmad Wijaya', role: 'medical' as const, status: 'online' as const },
    { id: '2', name: 'Ns. Dewi Lestari', role: 'medical' as const, status: 'online' as const },
    { id: '3', name: 'Andi Rahayu (Anak)', role: 'family' as const, status: 'online' as const },
    { id: '4', name: 'Budi Santoso (Menantu)', role: 'family' as const, status: 'offline' as const, lastActive: '30m lalu' }
  ];

  const handleDismissAlert = (id: string) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const handleLogin = (role: 'family' | 'medical' | 'patient', name: string) => {
    setCurrentUser({ name, role });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setActiveTab('dashboard');
  };

  const handleGetStarted = () => {
    setShowLanding(false);
  };

  const handleBackToHome = () => {
    setShowLanding(true);
  };

  // Show landing page first
  if (showLanding) {
    return <LandingPage onGetStarted={handleGetStarted} />;
  }

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} onBackToHome={handleBackToHome} />;
  }

  const roleLabels = {
    patient: 'User Inti',
    family: 'Keluarga',
    medical: 'Tenaga Medis'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <Activity className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                HealthWatch Pro
              </h1>
            </div>

            <div className="flex items-center gap-4">
              {/* User Info */}
              <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-lg">
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">{currentUser?.name}</div>
                  <div className="text-xs text-gray-600">{currentUser && roleLabels[currentUser.role]}</div>
                </div>
              </div>

              <div className="relative">
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
                  <Bell className="w-6 h-6 text-gray-700" />
                  {alerts.filter(a => a.type === 'critical').length > 0 && (
                    <span className="absolute top-1 right-1 w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                  )}
                </button>
              </div>
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Settings className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={handleLogout}
                className="p-2 rounded-lg hover:bg-red-50 transition-colors group"
                title="Logout"
              >
                <LogOut className="w-6 h-6 text-gray-700 group-hover:text-red-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'dashboard'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            <Home className="w-5 h-5" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('alerts')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'alerts'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            <AlertTriangle className="w-5 h-5" />
            Notifikasi
            {alerts.length > 0 && (
              <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {alerts.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'history'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            Riwayat
          </button>
        </div>

        {/* Dashboard View */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Metrics */}
            <div className="lg:col-span-2 space-y-6">
              {/* Health Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <HealthMetricCard
                  type="heart-rate"
                  value="145"
                  unit="BPM"
                  status="critical"
                  trend="up"
                  lastUpdate="1 menit lalu"
                />
                <HealthMetricCard
                  type="blood-pressure"
                  value="150/95"
                  unit="mmHg"
                  status="warning"
                  trend="up"
                  lastUpdate="5 menit lalu"
                />
                <HealthMetricCard
                  type="oxygen"
                  value="97"
                  unit="%"
                  status="normal"
                  trend="stable"
                  lastUpdate="2 menit lalu"
                />
                <HealthMetricCard
                  type="temperature"
                  value="36.8"
                  unit="°C"
                  status="normal"
                  trend="stable"
                  lastUpdate="10 menit lalu"
                />
                <HealthMetricCard
                  type="steps"
                  value="5,234"
                  unit="langkah"
                  status="normal"
                  trend="up"
                  lastUpdate="Hari ini"
                />
                <HealthMetricCard
                  type="sleep"
                  value="7.5"
                  unit="jam"
                  status="normal"
                  trend="stable"
                  lastUpdate="Tadi malam"
                />
              </div>

              {/* Recent Alerts */}
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Notifikasi Terbaru
                </h3>
                {alerts.slice(0, 2).map(alert => (
                  <AlertNotification
                    key={alert.id}
                    {...alert}
                    onDismiss={() => handleDismissAlert(alert.id)}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Profile & Connected Users */}
            <div className="space-y-6">
              <PatientProfile
                name="Ibu Siti Rahayu"
                age={72}
                gender="Perempuan"
                address="Jl. Merdeka No. 45, Jakarta Selatan"
                phone="+62 812-3456-7890"
                emergencyContact="Andi Rahayu (Anak)"
                emergencyPhone="+62 811-2222-3333"
                conditions={['Hipertensi', 'Diabetes Tipe 2', 'Kolesterol Tinggi']}
              />

              <ConnectedUsers users={connectedUsers} />
            </div>
          </div>
        )}

        {/* Alerts View */}
        {activeTab === 'alerts' && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Semua Notifikasi
              </h2>
              {alerts.length > 0 ? (
                alerts.map(alert => (
                  <AlertNotification
                    key={alert.id}
                    {...alert}
                    onDismiss={() => handleDismissAlert(alert.id)}
                  />
                ))
              ) : (
                <div className="text-center py-12">
                  <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">Tidak ada notifikasi</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* History View */}
        {activeTab === 'history' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <HealthChart
                title="Detak Jantung (24 Jam Terakhir)"
                data={heartRateData}
                color="#ef4444"
                yAxisLabel="BPM"
              />
              <HealthChart
                title="Tekanan Darah Sistolik (24 Jam Terakhir)"
                data={bloodPressureData}
                color="#f59e0b"
                yAxisLabel="mmHg"
              />
            </div>

            <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Ringkasan Mingguan
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-sm text-blue-600 mb-1">Rata-rata Detak Jantung</div>
                  <div className="text-2xl font-semibold text-blue-900">78 BPM</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-sm text-green-600 mb-1">Langkah Harian</div>
                  <div className="text-2xl font-semibold text-green-900">4,850</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="text-sm text-purple-600 mb-1">Kualitas Tidur</div>
                  <div className="text-2xl font-semibold text-purple-900">7.2 jam</div>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <div className="text-sm text-orange-600 mb-1">Alert Kritis</div>
                  <div className="text-2xl font-semibold text-orange-900">3 kali</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}