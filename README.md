# HealthWatch Pro

Antarmuka berbasis React yang dirancang secara modern untuk pengalaman penggunaan smartwatch kesehatan. Proyek ini dikembangkan sebagai portofolio pribadi untuk menunjukkan kemampuan dalam merancang antarmuka pengguna (UI) modern, dashboard interaktif, serta arsitektur informasi yang jelas untuk pemantauan kesehatan.

## Gambaran Proyek

HealthWatch Pro dirancang untuk pengguna yang tinggal sendiri dan orang tua yang perlu pemantau  kesehatan jarak jauh secara intensif oleh keluarga. HealthWatch Pro merupakan dashboard konseptual untuk pemantauan kesehatan yang menampilkan berbagai indikator kebugaran penting, seperti detak jantung, kualitas tidur, aktivitas harian, dan notifikasi peringatan yang terintgrasi datanya dengan keluarga dan tenaga medis. Proyek ini berfokus pada penyediaan pengalaman pengguna (User Experience/UX) yang nyaman melalui tampilan yang bersih, modern, dan profesional sehingga cocok digunakan sebagai portofolio maupun referensi pengembangan aplikasi kesehatan.

## Fitur Utama

* Halaman utama (Landing Page) modern dengan penyampaian informasi produk yang jelas.
* Dashboard interaktif untuk menampilkan berbagai metrik kesehatan.
* Pusat notifikasi untuk memberikan peringatan dan pengingat penting.
* Profil pasien beserta informasi pengguna yang terhubung.
* Antarmuka responsif dengan dukungan tema terang (Light Mode) dan gelap (Dark Mode).
* Navigasi berbasis routing sehingga memberikan pengalaman seperti aplikasi (App-Like Experience).

## Teknologi yang Digunakan

* React
* Vite
* Tailwind CSS
* Lucide Icons
* React Router DOM

## Instalasi

1. Clone repositori

   ```bash
   git clone https://github.com/iimibrahim-netizen/Health-Smartwatch.git
   ```

2. Instal seluruh dependensi

   ```bash
   npm install
   ```

3. Jalankan server pengembangan

   ```bash
   npm run dev
   ```

4. Buka aplikasi melalui browser pada alamat

   ```text
   http://localhost:5173
   ```

## Struktur Proyek

* **src/app/components** — Berisi komponen antarmuka yang dapat digunakan kembali (Reusable Components).
* **src/app/App.tsx** — Mengatur alur utama aplikasi dan konfigurasi routing.
* **src/main.tsx** — Titik masuk (Entry Point) aplikasi React.

## Catatan Pengembangan

HealthWatch Pro merupakan prototipe frontend yang masih dapat dikembangkan lebih lanjut dengan berbagai fitur tambahan, seperti:

* Integrasi dengan backend.
* Sistem autentikasi pengguna.
* Sinkronisasi data secara real-time.
* Analisis data kesehatan yang lebih komprehensif.
* Integrasi dengan perangkat wearable atau smartwatch yang sebenarnya.

## Referensi Desain

Konsep visual proyek ini terinspirasi dari prototipe Figma berikut:

https://www.figma.com/design/99hYNkJO9VDVDduhZuv5Yg/Health-Smartwatch-Prototype
