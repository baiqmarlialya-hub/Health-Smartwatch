import { Activity, Bell, BarChart3, Users, Shield, Smartphone, Heart, Clock, Zap, Lock, Headphones, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

interface FeaturesPageProps {
  onGetStarted: () => void;
}

export default function FeaturesPage({ onGetStarted }: FeaturesPageProps) {
  const mainFeatures = [
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Pantau detak jantung, tekanan darah, saturasi oksigen, suhu tubuh, langkah harian, dan kualitas tidur secara real-time 24 jam penuh.',
      highlights: ['Update setiap 30 detik', 'Akurasi medis tinggi', 'Riwayat data 90 hari'],
      color: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200'
    },
    {
      icon: Bell,
      title: 'Alert & Notifikasi Otomatis',
      description: 'Sistem peringatan cerdas yang mengirimkan notifikasi instan ke keluarga dan tenaga kesehatan saat terdeteksi kondisi abnormal.',
      highlights: ['Notifikasi WhatsApp & SMS', 'Prioritas kritis & peringatan', 'Log alert lengkap'],
      color: 'from-red-500 to-red-600',
      bg: 'bg-red-50',
      border: 'border-red-200'
    },
    {
      icon: Users,
      title: 'Platform Terintegrasi',
      description: 'Satu platform yang menghubungkan pasien, keluarga, dokter, dan perawat dalam ekosistem pemantauan kesehatan yang terpadu.',
      highlights: ['3 jenis akun pengguna', 'Akses multi-perangkat', 'Sinkronisasi real-time'],
      color: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200'
    },
    {
      icon: BarChart3,
      title: 'Analisis & Laporan Data',
      description: 'Grafik tren kesehatan komprehensif dengan laporan mingguan dan bulanan untuk membantu dokter membuat keputusan klinis yang lebih baik.',
      highlights: ['Grafik 24 jam interaktif', 'Laporan PDF otomatis', 'Tren jangka panjang'],
      color: 'from-green-500 to-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200'
    },
    {
      icon: Shield,
      title: 'Keamanan Standar Medis',
      description: 'Data kesehatan pengguna dilindungi dengan enkripsi end-to-end sesuai standar keamanan medis internasional ISO 13485 dan HIPAA.',
      highlights: ['Enkripsi AES-256', 'Compliance HIPAA', 'Audit trail lengkap'],
      color: 'from-indigo-500 to-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200'
    },
    {
      icon: Smartphone,
      title: 'Akses Multi-Platform',
      description: 'Pantau kondisi kesehatan dari smartphone iOS/Android, tablet, atau browser web kapan saja dan di mana saja tanpa batasan.',
      highlights: ['Aplikasi iOS & Android', 'Dashboard web responsif', 'Mode offline tersedia'],
      color: 'from-orange-500 to-orange-600',
      bg: 'bg-orange-50',
      border: 'border-orange-200'
    }
  ];

  const additionalFeatures = [
    { icon: Heart, text: 'Deteksi aritmia jantung otomatis' },
    { icon: Clock, text: 'Jadwal pengingat minum obat' },
    { icon: Zap, text: 'Respons darurat satu sentuhan' },
    { icon: Lock, text: 'Kontrol privasi granular per pengguna' },
    { icon: Headphones, text: 'Support telemedis 24/7' },
    { icon: TrendingUp, text: 'Prediksi risiko kesehatan AI' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6 text-sm font-medium backdrop-blur-sm">
              <Activity className="w-4 h-4" />
              Fitur Lengkap HealthWatch Pro
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Teknologi Kesehatan yang <br />
              <span className="text-blue-200">Bekerja untuk Anda</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Setiap fitur dirancang bersama dokter dan keluarga untuk memastikan monitoring kesehatan yang akurat, mudah, dan dapat diandalkan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border-2 ${feature.border} ${feature.bg} p-8 hover:shadow-xl transition-all group`}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fitur Tambahan</h2>
            <p className="text-gray-600">Dan masih banyak lagi yang kami siapkan untuk Anda</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalFeatures.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Siap Merasakan Semua Fiturnya?</h2>
          <p className="text-blue-100 mb-8 text-lg">Coba gratis 30 hari tanpa kartu kredit. Batalkan kapan saja.</p>
          <button
            onClick={onGetStarted}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            Mulai Gratis Sekarang
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
