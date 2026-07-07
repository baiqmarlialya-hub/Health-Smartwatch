import { useState } from 'react';
import { Activity, Heart, ChevronRight, Play, CheckCircle, Menu, X } from 'lucide-react';
import FeaturesPage from './FeaturesPage';
import TestimonialsPage from './TestimonialsPage';
import AboutPage from './AboutPage';

type LandingTab = 'home' | 'features' | 'testimonials' | 'about';

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  const [activePage, setActivePage] = useState<LandingTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [focusMode, setFocusMode] = useState<'heart' | 'sleep' | 'hydration'>('heart');

  const stats = [
    { value: '10.000+', label: 'Pengguna Aktif' },
    { value: '500+', label: 'Tenaga Medis' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' }
  ];

  const navLinks: { id: LandingTab; label: string }[] = [
    { id: 'home', label: 'Beranda' },
    { id: 'features', label: 'Fitur' },
    { id: 'testimonials', label: 'Testimoni' },
    { id: 'about', label: 'Tentang Kami' }
  ];

  const insightModes = {
    heart: {
      label: 'Detak Jantung',
      metric: '72 BPM',
      description: 'Denyut stabil dan berada di zona aman sepanjang hari.',
      highlight: 'Kesehatan jantung terpantaudi 24/7'
    },
    sleep: {
      label: 'Tidur',
      metric: '7.8 jam',
      description: 'Ritme tidur cukup membantu pemulihan tubuh dan fokus.',
      highlight: 'Durasi tidur ideal untuk pemulihan'
    },
    hydration: {
      label: 'Hidrasi',
      metric: '86%',
      description: 'Asupan cairan sudah cukup, tetap jaga keseimbangan harian.',
      highlight: 'Kondisi cairan tubuh terjaga dengan baik'
    }
  } as const;

  const activeInsight = insightModes[focusMode];

  const handleNav = (page: LandingTab) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                HealthWatch Pro
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activePage === link.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={onGetStarted}
                className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Masuk
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                    activePage === link.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={onGetStarted}
                className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold"
              >
                Masuk ke Dashboard
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      {activePage === 'features' && (
        <FeaturesPage onGetStarted={onGetStarted} />
      )}

      {activePage === 'testimonials' && (
        <TestimonialsPage onGetStarted={onGetStarted} />
      )}

      {activePage === 'about' && (
        <AboutPage onGetStarted={onGetStarted} />
      )}

      {activePage === 'home' && (
        <>
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 text-sm font-medium">
                    <Heart className="w-4 h-4" />
                    Platform Monitoring Kesehatan Terpercaya
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Jaga Mereka yang <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Berharga untuk Anda</span>
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Smartwatch kesehatan terintegrasi dengan monitoring real-time, alert otomatis, dan akses langsung untuk keluarga dan tenaga medis profesional.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={onGetStarted}
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      Mulai Sekarang
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleNav('features')}
                      className="flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all"
                    >
                      <Play className="w-5 h-5" />
                      Lihat Fitur
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl">
                    <div className="bg-white rounded-2xl p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 font-medium">Detak Jantung</span>
                        <span className="text-green-600 font-semibold">Normal</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-gray-900">72</span>
                        <span className="text-gray-600">BPM</span>
                      </div>
                      <div className="h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-end gap-1 p-2">
                        {[40, 60, 45, 70, 55, 65, 50, 75, 60, 70, 55, 65].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-sm"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border-2 border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Semua Normal</div>
                        <div className="text-sm text-gray-600">Terakhir: 2 menit lalu</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-blue-100 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Wellness Insight */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-5 text-sm font-medium">
                  <Heart className="w-4 h-4" />
                  Insight Kesehatan Real-Time
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Buat monitoring terasa lebih hidup dan mudah dipahami</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Antarmuka yang lebih interaktif membantu keluarga dan tenaga medis melihat kondisi kesehatan dengan cepat, tanpa kehilangan nuansa yang penting.
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { title: 'Akurat', text: 'Data real-time dan notifikasi cepat' },
                    { title: 'Mudah', text: 'Navigasi sederhana untuk semua usia' },
                    { title: 'Aman', text: 'Informasi tersusun rapi dan terarah' }
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-600 mt-1">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-6 text-white shadow-2xl">
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'heart', label: 'Jantung' },
                    { id: 'sleep', label: 'Tidur' },
                    { id: 'hydration', label: 'Hidrasi' }
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setFocusMode(mode.id as 'heart' | 'sleep' | 'hydration')}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                        focusMode === mode.id
                          ? 'bg-white text-slate-900 shadow-lg'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-100">Status Hari Ini</span>
                    <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-sm font-medium text-emerald-200">
                      Stabil
                    </span>
                  </div>
                  <div className="mt-4 flex items-end justify-between gap-4">
                    <div>
                      <div className="text-4xl font-bold">{activeInsight.metric}</div>
                      <div className="text-sm text-blue-100 mt-1">{activeInsight.label}</div>
                    </div>
                    <div className="rounded-xl bg-slate-950/30 px-4 py-3 text-sm text-slate-100">
                      {activeInsight.highlight}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-200">{activeInsight.description}</p>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {["08:00", "12:00", "20:00"].map((time) => (
                      <div key={time} className="rounded-xl bg-slate-950/20 p-3 text-center">
                        <div className="text-xs text-blue-100">{time}</div>
                        <div className="mt-1 text-sm font-semibold">{focusMode === 'heart' ? 'Normal' : focusMode === 'sleep' ? 'Baik' : 'Cukup'}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links to Sub-pages */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Jelajahi HealthWatch Pro</h2>
                <p className="text-xl text-gray-600">Pelajari lebih lanjut tentang solusi monitoring kesehatan kami</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <button
                  onClick={() => handleNav('features')}
                  className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all text-left"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Activity className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Fitur Unggulan</h3>
                  <p className="text-gray-600 mb-4">Monitoring real-time, alert otomatis, analisis data, dan platform terintegrasi untuk keluarga dan tenaga medis.</p>
                  <span className="text-blue-600 font-semibold flex items-center gap-1 group-hover:gap-3 transition-all">
                    Lihat Semua Fitur <ChevronRight className="w-4 h-4" />
                  </span>
                </button>

                <button
                  onClick={() => handleNav('testimonials')}
                  className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all text-left"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Testimoni Pengguna</h3>
                  <p className="text-gray-600 mb-4">Cerita nyata dari ribuan keluarga, pasien, dan tenaga medis yang telah merasakan manfaat HealthWatch Pro.</p>
                  <span className="text-purple-600 font-semibold flex items-center gap-1 group-hover:gap-3 transition-all">
                    Baca Testimoni <ChevronRight className="w-4 h-4" />
                  </span>
                </button>

                <button
                  onClick={() => handleNav('about')}
                  className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition-all text-left"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tentang Kami</h3>
                  <p className="text-gray-600 mb-4">Kenali tim dan misi di balik HealthWatch Pro — platform monitoring kesehatan yang lahir dari kepedulian nyata.</p>
                  <span className="text-green-600 font-semibold flex items-center gap-1 group-hover:gap-3 transition-all">
                    Kenali Kami <ChevronRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Siap Mulai Monitoring Kesehatan?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Bergabunglah dengan ribuan keluarga yang telah mempercayai HealthWatch Pro
              </p>
              <button
                onClick={onGetStarted}
                className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Mulai Gratis 30 Hari
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold">HealthWatch Pro</span>
                  </div>
                  <p className="text-gray-400">Platform monitoring kesehatan terpercaya untuk lansia</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Halaman</h4>
                  <ul className="space-y-2 text-gray-400">
                    {navLinks.map((link) => (
                      <li key={link.id}>
                        <button onClick={() => handleNav(link.id)} className="hover:text-white transition-colors">
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Produk</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">Smartwatch</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Aplikasi Mobile</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Dashboard Web</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Bantuan</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Support 24/7</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                <p>&copy; 2026 HealthWatch Pro. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
