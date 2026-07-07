import { useState } from 'react';
import {
  Bell,
  Activity,
  AlertTriangle,
  BarChart3,
  Home,
  Settings,
  Menu,
  X,
  LogOut,
  Moon,
  Sun,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  TrendingUp,
  Clock3
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import HealthMetricCard from './HealthMetricCard';
import AlertNotification from './AlertNotification';
import PatientProfile from './PatientProfile';
import HealthChart from './HealthChart';
import ConnectedUsers from './ConnectedUsers';

type Tab = 'dashboard' | 'alerts' | 'history';

type UserRole = 'family' | 'medical' | 'patient';

interface CurrentUser {
  name: string;
  role: UserRole;
}

interface AlertItem {
  id: string;
  type: 'critical' | 'warning' | 'info';
  message: string;
  patientName: string;
  time: string;
}

interface ModernDashboardProps {
  currentUser: CurrentUser | null;
  alerts: AlertItem[];
  onDismissAlert: (id: string) => void;
  onLogout: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function ModernDashboard({
  currentUser,
  alerts,
  onDismissAlert,
  onLogout,
  theme,
  onToggleTheme
}: ModernDashboardProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeTab: Tab = location.pathname === '/alerts'
    ? 'alerts'
    : location.pathname === '/history'
      ? 'history'
      : 'dashboard';

  const connectedUsers = [
    { id: '1', name: 'Dr. Ahmad Wijaya', role: 'medical' as const, status: 'online' as const },
    { id: '2', name: 'Ns. Dewi Lestari', role: 'medical' as const, status: 'online' as const },
    { id: '3', name: 'Andi Rahayu (Anak)', role: 'family' as const, status: 'online' as const },
    { id: '4', name: 'Budi Santoso (Menantu)', role: 'family' as const, status: 'offline' as const, lastActive: '30m lalu' }
  ];

  const quickInsights = [
    { label: 'Ritme jantung', value: '72 BPM', icon: HeartPulse, tone: 'text-rose-500' },
    { label: 'Kualitas tidur', value: '7.5 jam', icon: Clock3, tone: 'text-violet-500' },
    { label: 'Perkembangan', value: '+12%', icon: TrendingUp, tone: 'text-emerald-500' }
  ];

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

  const handleTabChange = (tab: Tab) => {
    const nextPath = tab === 'alerts' ? '/alerts' : tab === 'history' ? '/history' : '/dashboard';
    navigate(nextPath);
  };

  const isDark = theme === 'dark';
  const shellClasses = isDark ? 'min-h-screen bg-slate-950 text-slate-100' : 'min-h-screen bg-slate-50 text-slate-900';
  const panelClasses = isDark ? 'bg-slate-900/80 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900';
  const mutedText = isDark ? 'text-slate-400' : 'text-slate-600';
  const softPanel = isDark ? 'bg-slate-800/70 border-slate-700' : 'bg-slate-50 border-slate-200';

  const roleLabels = {
    patient: 'User Inti',
    family: 'Keluarga',
    medical: 'Tenaga Medis'
  };

  return (
    <div className={shellClasses}>
      <header className={`sticky top-0 z-40 border-b backdrop-blur ${isDark ? 'border-slate-800 bg-slate-950/90' : 'border-slate-200 bg-white/90'}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`rounded-lg p-2 transition-colors lg:hidden ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}
            >
              {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">HealthWatch Pro</h1>
              <p className={`text-sm ${mutedText}`}>Dashboard kesehatan pintar</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onToggleTheme}
              className={`rounded-full p-2 transition ${isDark ? 'bg-slate-800 text-slate-100 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <div className={`hidden items-center gap-3 rounded-2xl px-4 py-2 sm:flex ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
              <div className="text-right">
                <div className="text-sm font-semibold">{currentUser?.name}</div>
                <div className={`text-xs ${mutedText}`}>{currentUser && roleLabels[currentUser.role]}</div>
              </div>
            </div>
            <div className="relative">
              <button className={`rounded-xl p-2 transition ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}>
                <Bell className="h-6 w-6" />
                {alerts.filter(a => a.type === 'critical').length > 0 && (
                  <span className="absolute right-1 top-1 h-3 w-3 rounded-full bg-red-600 animate-pulse" />
                )}
              </button>
            </div>
            <button className={`rounded-xl p-2 transition ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}>
              <Settings className="h-6 w-6" />
            </button>
            <button
              onClick={onLogout}
              className={`rounded-xl p-2 transition ${isDark ? 'hover:bg-slate-800 hover:text-red-400' : 'hover:bg-red-50 hover:text-red-600'}`}
              title="Logout"
            >
              <LogOut className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => handleTabChange('dashboard')}
            className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-6 py-3 font-medium transition-all ${
              activeTab === 'dashboard'
                ? 'bg-blue-600 text-white shadow-lg'
                : isDark
                  ? 'border border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800'
                  : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Home className="h-5 w-5" />
            Dashboard
          </button>
          <button
            onClick={() => handleTabChange('alerts')}
            className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-6 py-3 font-medium transition-all ${
              activeTab === 'alerts'
                ? 'bg-blue-600 text-white shadow-lg'
                : isDark
                  ? 'border border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800'
                  : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <AlertTriangle className="h-5 w-5" />
            Notifikasi
            {alerts.length > 0 && (
              <span className="rounded-full bg-red-600 px-2 py-0.5 text-xs text-white">
                {alerts.length}
              </span>
            )}
          </button>
          <button
            onClick={() => handleTabChange('history')}
            className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-6 py-3 font-medium transition-all ${
              activeTab === 'history'
                ? 'bg-blue-600 text-white shadow-lg'
                : isDark
                  ? 'border border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800'
                  : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <BarChart3 className="h-5 w-5" />
            Riwayat
          </button>
        </div>

        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className={`rounded-[28px] border p-6 shadow-sm ${panelClasses}`}>
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <div className="mb-4 flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-3 py-1 text-sm font-medium text-blue-600">
                    <Sparkles className="h-4 w-4" />
                    Ringkasan hari ini
                  </div>
                  <h2 className="text-3xl font-semibold">Halo, {currentUser?.name}</h2>
                  <p className={`mt-3 max-w-2xl text-lg ${mutedText}`}>
                    Kondisi kesehatan terpantau dengan baik dan ada 3 perhatian yang perlu diperhatikan secara berkala.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      onClick={() => handleTabChange('alerts')}
                      className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
                    >
                      Lihat notifikasi
                    </button>
                    <button className={`rounded-2xl border px-5 py-3 font-semibold transition ${isDark ? 'border-slate-700 bg-slate-800 hover:bg-slate-700' : 'border-slate-200 bg-white hover:bg-slate-50'}`}>
                      Unduh laporan
                    </button>
                  </div>
                </div>

                <div className={`rounded-3xl border p-5 ${softPanel}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm ${mutedText}`}>Status proteksi</p>
                      <p className="text-xl font-semibold">Aman & terpantau</p>
                    </div>
                    <div className="rounded-2xl bg-emerald-500/15 p-3 text-emerald-500">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3">
                    {quickInsights.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.label} className={`flex items-center justify-between rounded-2xl border px-4 py-3 ${isDark ? 'border-slate-700 bg-slate-900/60' : 'border-slate-200 bg-white'}`}>
                          <div className="flex items-center gap-3">
                            <div className={`rounded-xl bg-slate-100 p-2 ${item.tone} ${isDark ? 'bg-slate-800' : ''}`}>
                              <Icon className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-medium">{item.label}</span>
                          </div>
                          <span className="text-sm font-semibold">{item.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  <HealthMetricCard type="heart-rate" value="145" unit="BPM" status="critical" trend="up" lastUpdate="1 menit lalu" />
                  <HealthMetricCard type="blood-pressure" value="150/95" unit="mmHg" status="warning" trend="up" lastUpdate="5 menit lalu" />
                  <HealthMetricCard type="oxygen" value="97" unit="%" status="normal" trend="stable" lastUpdate="2 menit lalu" />
                  <HealthMetricCard type="temperature" value="36.8" unit="°C" status="normal" trend="stable" lastUpdate="10 menit lalu" />
                  <HealthMetricCard type="steps" value="5,234" unit="langkah" status="normal" trend="up" lastUpdate="Hari ini" />
                  <HealthMetricCard type="sleep" value="7.5" unit="jam" status="normal" trend="stable" lastUpdate="Tadi malam" />
                </div>

                <div className={`rounded-2xl border p-6 ${panelClasses}`}>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Notifikasi terbaru</h3>
                    <span className={`text-sm ${mutedText}`}>Update real-time</span>
                  </div>
                  {alerts.slice(0, 2).map(alert => (
                    <AlertNotification key={alert.id} {...alert} onDismiss={() => onDismissAlert(alert.id)} />
                  ))}
                </div>
              </div>

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
          </div>
        )}

        {activeTab === 'alerts' && (
          <div className="mx-auto max-w-3xl">
            <div className={`rounded-2xl border p-6 ${panelClasses}`}>
              <h2 className="mb-6 text-2xl font-semibold">Semua Notifikasi</h2>
              {alerts.length > 0 ? (
                alerts.map(alert => (
                  <AlertNotification key={alert.id} {...alert} onDismiss={() => onDismissAlert(alert.id)} />
                ))
              ) : (
                <div className="py-12 text-center">
                  <Bell className="mx-auto mb-4 h-16 w-16 text-gray-300" />
                  <p className={mutedText}>Tidak ada notifikasi</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <HealthChart title="Detak Jantung (24 Jam Terakhir)" data={heartRateData} color="#ef4444" yAxisLabel="BPM" />
              <HealthChart title="Tekanan Darah Sistolik (24 Jam Terakhir)" data={bloodPressureData} color="#f59e0b" yAxisLabel="mmHg" />
            </div>

            <div className={`rounded-2xl border p-6 ${panelClasses}`}>
              <h3 className="mb-4 text-lg font-semibold">Ringkasan Mingguan</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                <div className={`rounded-xl p-4 ${isDark ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
                  <div className={`mb-1 text-sm ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>Rata-rata Detak Jantung</div>
                  <div className={`text-2xl font-semibold ${isDark ? 'text-blue-100' : 'text-blue-900'}`}>78 BPM</div>
                </div>
                <div className={`rounded-xl p-4 ${isDark ? 'bg-emerald-500/10' : 'bg-green-50'}`}>
                  <div className={`mb-1 text-sm ${isDark ? 'text-emerald-300' : 'text-green-600'}`}>Langkah Harian</div>
                  <div className={`text-2xl font-semibold ${isDark ? 'text-emerald-100' : 'text-green-900'}`}>4,850</div>
                </div>
                <div className={`rounded-xl p-4 ${isDark ? 'bg-violet-500/10' : 'bg-purple-50'}`}>
                  <div className={`mb-1 text-sm ${isDark ? 'text-violet-300' : 'text-purple-600'}`}>Kualitas Tidur</div>
                  <div className={`text-2xl font-semibold ${isDark ? 'text-violet-100' : 'text-purple-900'}`}>7.2 jam</div>
                </div>
                <div className={`rounded-xl p-4 ${isDark ? 'bg-amber-500/10' : 'bg-orange-50'}`}>
                  <div className={`mb-1 text-sm ${isDark ? 'text-amber-300' : 'text-orange-600'}`}>Alert Kritis</div>
                  <div className={`text-2xl font-semibold ${isDark ? 'text-amber-100' : 'text-orange-900'}`}>3 kali</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
