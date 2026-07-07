import { Star, Quote, ThumbsUp, ArrowRight } from 'lucide-react';

interface TestimonialsPageProps {
  onGetStarted: () => void;
}

export default function TestimonialsPage({ onGetStarted }: TestimonialsPageProps) {
  const featured = {
    name: 'Dr. Bambang Suryadi, Sp.JP',
    role: 'Dokter Spesialis Jantung — RS Harapan Kita, Jakarta',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&auto=format',
    rating: 5,
    text: 'HealthWatch Pro mengubah cara saya menangani pasien lansia. Data real-time memungkinkan saya mendeteksi aritmia dan fluktuasi tekanan darah sebelum berkembang menjadi kondisi kritis. Dalam 6 bulan pemakaian, tiga pasien saya terhindar dari serangan jantung berkat peringatan dini sistem ini.'
  };

  const testimonials = [
    {
      name: 'Siti Nurhaliza',
      role: 'Putri Pasien — Jakarta',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format',
      rating: 5,
      text: 'Ibu saya tinggal sendirian di Bandung sementara saya di Jakarta. Sekarang saya bisa memantau kondisi beliau setiap saat. Waktu malam pernah ada alert detak jantung tinggi, langsung bisa saya koordinasikan dengan dokter keluarga. Sangat tenang rasanya.',
      tag: 'Keluarga Pasien'
    },
    {
      name: 'Ns. Dewi Lestari, S.Kep',
      role: 'Perawat Senior — Puskesmas Kemayoran',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&auto=format',
      rating: 5,
      text: 'Interface-nya sangat user-friendly, bahkan untuk lansia sekalipun. Data yang komprehensif dan tersusun rapi membuat pekerjaan monitoring pasien jauh lebih efisien. Laporan otomatisnya juga sangat membantu untuk rekam medis.',
      tag: 'Tenaga Medis'
    },
    {
      name: 'Bpk. Hendra Gunawan',
      role: 'Pengguna Aktif — Surabaya, 68 tahun',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format',
      rating: 5,
      text: 'Saya kira akan susah menggunakannya karena sudah tua. Ternyata sangat mudah! Smartwatch-nya nyaman dipakai, dan saya senang anak-anak bisa memantau saya dari jauh. Mereka lebih tenang, saya juga lebih tenang.',
      tag: 'Pasien Lansia'
    },
    {
      name: 'Dr. Rini Kusuma, Sp.PD',
      role: 'Dokter Internist — Klinik Sehat Bersama',
      photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&auto=format',
      rating: 5,
      text: 'Dashboard untuk tenaga medis sangat informatif. Saya bisa melihat tren vital signs pasien selama seminggu terakhir sebelum konsultasi, sehingga bisa langsung ke inti permasalahan. Efisiensi klinik meningkat signifikan.',
      tag: 'Tenaga Medis'
    },
    {
      name: 'Ahmad Fauzi',
      role: 'Menantu Pasien — Medan',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format',
      rating: 5,
      text: 'Mertua kami memiliki hipertensi dan diabetes. Sebelum pakai HealthWatch Pro, kami selalu khawatir. Sekarang semua anggota keluarga bisa memantau kondisi beliau lewat aplikasi. Benar-benar solusi yang kami butuhkan.',
      tag: 'Keluarga Pasien'
    },
    {
      name: 'Ns. Budi Santoso, Amd.Kep',
      role: 'Perawat Homecare — Jakarta Timur',
      photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&auto=format',
      rating: 5,
      text: 'Sebagai perawat homecare, saya sangat terbantu. Sebelum kunjungan, saya sudah tahu kondisi pasien dari data smartwatch. Koordinasi dengan dokter dan keluarga juga jadi lebih mudah dan cepat.',
      tag: 'Tenaga Medis'
    }
  ];

  const stats = [
    { value: '4.9/5', label: 'Rating rata-rata' },
    { value: '98%', label: 'Rekomendasikan ke keluarga' },
    { value: '10.000+', label: 'Ulasan positif' },
    { value: '500+', label: 'Tenaga medis aktif' }
  ];

  const tagColors: Record<string, string> = {
    'Keluarga Pasien': 'bg-purple-100 text-purple-700',
    'Tenaga Medis': 'bg-blue-100 text-blue-700',
    'Pasien Lansia': 'bg-green-100 text-green-700'
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6 text-sm font-medium backdrop-blur-sm">
            <ThumbsUp className="w-4 h-4" />
            Dipercaya Ribuan Pengguna di Seluruh Indonesia
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Apa Kata Mereka <br />
            <span className="text-purple-200">tentang HealthWatch Pro?</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Cerita nyata dari keluarga, pasien, dan tenaga medis yang telah merasakan manfaat monitoring kesehatan real-time.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Testimoni Unggulan</span>
          </div>
          <div className="bg-white rounded-3xl p-10 border-2 border-blue-100 shadow-xl relative">
            <Quote className="w-16 h-16 text-blue-100 absolute top-8 right-8" />
            <div className="flex items-center gap-1 mb-6">
              {[...Array(featured.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xl text-gray-700 italic leading-relaxed mb-8">
              "{featured.text}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={featured.photo}
                alt={featured.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-blue-100 bg-blue-50"
              />
              <div>
                <div className="font-bold text-gray-900 text-lg">{featured.name}</div>
                <div className="text-gray-500">{featured.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lebih Banyak Cerita dari Pengguna</h2>
            <p className="text-gray-500">Dari berbagai latar belakang — keluarga, tenaga medis, dan pasien langsung</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColors[t.tag]}`}>
                    {t.tag}
                  </span>
                </div>
                <p className="text-gray-600 italic leading-relaxed flex-1 mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-100 bg-gray-50"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Bergabung dengan 10.000+ Keluarga Bahagia</h2>
          <p className="text-purple-100 mb-8 text-lg">Mulai perjalanan monitoring kesehatan Anda hari ini.</p>
          <button
            onClick={onGetStarted}
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            Coba Gratis 30 Hari
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
