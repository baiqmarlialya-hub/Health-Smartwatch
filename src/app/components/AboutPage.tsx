import { Heart, Shield, Users, Clock, Target, Eye, Award, CheckCircle, Linkedin, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onGetStarted: () => void;
}

export default function AboutPage({ onGetStarted }: AboutPageProps) {
  const milestones = [
    { year: '2020', event: 'HealthWatch Pro didirikan oleh tim dokter dan insinyur teknologi di Jakarta' },
    { year: '2021', event: 'Peluncuran versi beta dengan 500 pengguna awal di Jabodetabek' },
    { year: '2022', event: 'Mendapatkan sertifikasi ISO 13485 dan izin edar Kemenkes RI' },
    { year: '2023', event: 'Ekspansi ke 34 provinsi Indonesia dengan 5.000+ pengguna aktif' },
    { year: '2024', event: 'Integrasi dengan 200+ klinik dan rumah sakit mitra nasional' },
    { year: '2026', event: '10.000+ pengguna aktif dan peluncuran fitur AI prediksi risiko kesehatan' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Berpusat pada Manusia',
      description: 'Setiap keputusan desain kami dimulai dari kebutuhan nyata lansia dan keluarga mereka, bukan dari kemudahan teknologi.',
      color: 'text-red-500',
      bg: 'bg-red-50'
    },
    {
      icon: Shield,
      title: 'Integritas Data',
      description: 'Kami memperlakukan data kesehatan pengguna dengan standar privasi tertinggi. Data Anda adalah milik Anda.',
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      icon: Eye,
      title: 'Transparansi',
      description: 'Kami terbuka tentang bagaimana sistem kami bekerja, batasan teknologi kami, dan cara kami menggunakan data.',
      color: 'text-green-500',
      bg: 'bg-green-50'
    },
    {
      icon: Target,
      title: 'Akurasi Medis',
      description: 'Setiap algoritma dan threshold alert kami dikembangkan dan divalidasi bersama dokter spesialis berpengalaman.',
      color: 'text-purple-500',
      bg: 'bg-purple-50'
    }
  ];

  const team = [
    {
      name: 'Dr. Arief Wicaksono',
      role: 'CEO & Co-Founder',
      specialty: 'Dokter Spesialis Geriatri',
      photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&auto=format',
      bio: '15 tahun pengalaman menangani pasien lansia mendorong beliau menciptakan solusi monitoring jarak jauh yang lebih baik.'
    },
    {
      name: 'Ir. Maya Sari Dewi',
      role: 'CTO & Co-Founder',
      specialty: 'Insinyur Biomedika',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&auto=format',
      bio: 'Alumni ITB dengan pengalaman 10 tahun di IoT medis dan pengembangan sensor kesehatan presisi tinggi.'
    },
    {
      name: 'Dr. Ns. Ratna Komala',
      role: 'Chief Medical Officer',
      specialty: 'Perawat Spesialis & Doktor Keperawatan',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&auto=format',
      bio: 'Memimpin tim klinis dalam validasi protokol alert dan memastikan platform memenuhi standar keperawatan terkini.'
    }
  ];

  const certifications = [
    { name: 'ISO 13485:2016', desc: 'Manajemen Mutu Perangkat Medis' },
    { name: 'Izin Edar Kemenkes', desc: 'No. AKL 20401921234' },
    { name: 'HIPAA Compliant', desc: 'Perlindungan Data Kesehatan' },
    { name: 'SNI 8460:2023', desc: 'Standar Nasional Indonesia' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-600 via-teal-700 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6 text-sm font-medium backdrop-blur-sm">
                <Users className="w-4 h-4" />
                Tentang Kami
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Kami Ada untuk <br />
                <span className="text-green-200">Orang yang Anda Cintai</span>
              </h1>
              <p className="text-xl text-green-100 leading-relaxed">
                HealthWatch Pro lahir dari keresahan nyata: bagaimana cara terbaik menjaga kesehatan orang tua yang tinggal sendiri, saat kita tidak bisa selalu ada di sisi mereka?
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&auto=format"
                alt="Tim medis HealthWatch Pro"
                className="rounded-2xl object-cover h-48 w-full bg-teal-100"
              />
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop&auto=format"
                alt="Monitoring kesehatan lansia"
                className="rounded-2xl object-cover h-48 w-full mt-8 bg-blue-100"
              />
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&auto=format"
                alt="Keluarga bersama pasien"
                className="rounded-2xl object-cover h-48 w-full -mt-8 bg-green-100"
              />
              <img
                src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=400&h=300&fit=crop&auto=format"
                alt="Teknologi kesehatan modern"
                className="rounded-2xl object-cover h-48 w-full bg-teal-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-10 border-2 border-blue-200">
              <Target className="w-10 h-10 text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Memberikan ketenangan pikiran kepada setiap keluarga Indonesia dengan teknologi monitoring kesehatan real-time yang akurat, mudah digunakan, dan terjangkau — sehingga lansia dapat hidup mandiri dengan aman dan bermartabat.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-10 border-2 border-purple-200">
              <Eye className="w-10 h-10 text-purple-600 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Menjadi platform monitoring kesehatan lansia terpercaya nomor satu di Asia Tenggara, di mana setiap orang tua dapat menikmati masa tua yang sehat dan setiap keluarga memiliki ketenangan karena selalu terhubung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nilai-Nilai yang Kami Pegang</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Prinsip-prinsip ini membimbing setiap keputusan yang kami buat, dari fitur produk hingga kebijakan privasi.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className={`${v.bg} rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all`}>
                  <div className={`${v.color} mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perjalanan Kami</h2>
            <p className="text-gray-500">Dari ide kecil menjadi platform kepercayaan ribuan keluarga Indonesia</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg z-10">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-200 transition-all flex-1">
                    <span className="text-sm font-bold text-blue-600 mb-2 block">{m.year}</span>
                    <p className="text-gray-700">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tim Kepemimpinan</h2>
            <p className="text-gray-500">Gabungan keahlian medis dan teknologi untuk solusi terbaik</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-64 object-cover bg-gray-100"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <div className="text-blue-600 font-semibold text-sm mb-1">{member.role}</div>
                  <div className="text-gray-400 text-xs mb-4 italic">{member.specialty}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  <button className="mt-4 flex items-center gap-1 text-blue-600 text-sm hover:text-blue-800 transition-colors">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <Award className="w-10 h-10 text-blue-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Sertifikasi & Kepatuhan</h2>
            <p className="text-blue-300">Kami memenuhi standar regulasi medis lokal dan internasional</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-blue-800 rounded-xl p-6 text-center border border-blue-700 hover:border-blue-400 transition-all">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="font-bold text-white mb-1">{cert.name}</div>
                <div className="text-blue-300 text-xs">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Jadilah Bagian dari Misi Kami</h2>
          <p className="text-green-100 mb-8 text-lg">Bersama, kita jaga kesehatan generasi yang telah membangun bangsa ini.</p>
          <button
            onClick={onGetStarted}
            className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            Mulai Sekarang
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
