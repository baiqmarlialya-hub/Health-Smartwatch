import { useState } from 'react';
import { Activity, Heart, Stethoscope, User, Users, ArrowRight, Eye, EyeOff, Shield, ArrowLeft } from 'lucide-react';

interface LoginPageProps {
  onLogin: (role: 'family' | 'medical' | 'patient', name: string) => void;
  onBackToHome: () => void;
}

export default function LoginPage({ onLogin, onBackToHome }: LoginPageProps) {
  const [selectedRole, setSelectedRole] = useState<'family' | 'medical' | 'patient' | null>(null);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const roles = [
    {
      id: 'patient' as const,
      title: 'User Inti',
      description: 'Saya pengguna smartwatch (lansia/pasien)',
      icon: User,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-700'
    },
    {
      id: 'family' as const,
      title: 'Keluarga',
      description: 'Pantau kesehatan orang tua atau keluarga Anda',
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      textColor: 'text-pink-700'
    },
    {
      id: 'medical' as const,
      title: 'Tenaga Medis',
      description: 'Akses data pasien dan kelola monitoring',
      icon: Stethoscope,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole && name) {
      onLogin(selectedRole, name);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Activity className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            HealthWatch Pro
          </h1>
          <p className="text-xl text-gray-600">
            Monitoring Kesehatan Lansia Terintegrasi
          </p>
        </div>

        {!selectedRole ? (
          /* Role Selection */
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                Pilih Peran Anda
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`group relative overflow-hidden bg-white rounded-2xl border-2 ${role.borderColor} p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${role.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />

                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${role.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className={`text-2xl font-bold ${role.textColor} mb-2`}>
                        {role.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {role.description}
                      </p>

                      <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                        <span className={role.textColor}>Pilih</span>
                        <ArrowRight className={`w-4 h-4 ${role.textColor}`} />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Back to Home Button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={onBackToHome}
                className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Kembali ke Homepage
              </button>
            </div>

            {/* Features */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Aman & Terpercaya</h4>
                <p className="text-sm text-gray-600">Data kesehatan terenkripsi end-to-end</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Activity className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Real-time Monitoring</h4>
                <p className="text-sm text-gray-600">Pantau kondisi vital 24/7</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Terintegrasi</h4>
                <p className="text-sm text-gray-600">Keluarga dan tenaga medis terhubung</p>
              </div>
            </div>
          </div>
        ) : (
          /* Login Form */
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-xl p-8">
              <div className="text-center mb-8">
                {(() => {
                  const selectedRoleData = roles.find(r => r.id === selectedRole)!;
                  const Icon = selectedRoleData.icon;
                  return (
                    <>
                      <div className={`w-16 h-16 bg-gradient-to-br ${selectedRoleData.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Login sebagai {selectedRoleData.title}
                      </h2>
                      <p className="text-gray-600">
                        {selectedRoleData.description}
                      </p>
                    </>
                  );
                })()}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Masukkan password"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">Ingat saya</span>
                  </label>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Lupa password?
                  </a>
                </div>

                <div className="space-y-3">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Masuk
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedRole(null)}
                    className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Kembali
                  </button>
                </div>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
                <p>
                  Belum punya akun?{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Daftar sekarang
                  </a>
                </p>
              </div>
            </div>

            {/* Demo credentials */}
            <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
              <p className="text-sm font-medium text-blue-900 mb-2">Demo Login:</p>
              <p className="text-xs text-blue-700">
                Gunakan nama apa saja dan password apa saja untuk demo
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
