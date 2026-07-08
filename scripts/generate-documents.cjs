const fs = require('fs');
const path = require('path');
const { Document, Packer, Paragraph, TextRun, AlignmentType } = require('docx');
const PDFDocument = require('pdfkit');

const outputDir = path.join(__dirname, '..', 'documents');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const content = [
  'HealthWatch Pro - Dokumentasi Proyek',
  '',
  'Latar Belakang',
  'HealthWatch Pro adalah prototipe dashboard monitoring kesehatan berbasis React yang dirancang untuk menampilkan antarmuka modern, informatif, dan mudah dipahami dalam memantau data kesehatan seperti detak jantung, tidur, aktivitas, serta notifikasi penting.',
  '',
  'Hasil Pekerjaan',
  '- Halaman landing yang lebih menarik dan modern',
  '- Tampilan dashboard kesehatan yang lebih rapi',
  '- Bagian notifikasi dan alert yang informatif',
  '- Panel profil pasien dan pengguna terhubung',
  '- Dukungan tema terang dan gelap',
  '- Navigasi antar halaman berbasis React Router',
  '- Konfigurasi routing untuk deployment di Vercel',
  '',
  'Teknologi yang Digunakan',
  '- React',
  '- Vite',
  '- Tailwind CSS',
  '- Lucide Icons',
  '- React Router DOM',
  '',
  'Catatan Pengembangan',
  'Proyek ini merupakan prototype frontend untuk pengalaman smartwatch kesehatan yang dapat dikembangkan lebih lanjut dengan integrasi backend, autentikasi, analitik real-time, dan basis data.',
  '',
  'Repository GitHub',
  'https://github.com/iimibrahim-netizen/Health-Smartwatch',
  '',
  'Disusun Oleh',
  'Asisten AI / Pendukung Pengembangan'
];

const doc = new Document({
  sections: [{
    properties: {},
    children: [
      new Paragraph({
        children: [new TextRun({ text: 'HealthWatch Pro', bold: true, size: 32 })],
        spacing: { after: 120 },
        alignment: AlignmentType.CENTER
      }),
      new Paragraph({
        children: [new TextRun({ text: 'Dokumentasi Proyek', bold: true, size: 24 })],
        spacing: { after: 220 },
        alignment: AlignmentType.CENTER
      }),
      ...content.slice(1).map((text) => {
        const isHeading = ['Latar Belakang','Hasil Pekerjaan','Teknologi yang Digunakan','Catatan Pengembangan','Repository GitHub','Disusun Oleh'].includes(text);
        if (isHeading) {
          return new Paragraph({
            children: [new TextRun({ text, bold: true, size: 22 })],
            spacing: { before: 180, after: 120 }
          });
        }
        return new Paragraph({
          children: [new TextRun({ text, size: 20 })],
          spacing: { after: 80 }
        });
      })
    ]
  }]
});

(async () => {
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(path.join(outputDir, 'HealthWatchPro_Document.docx'), buffer);

  const pdf = new PDFDocument({ size: 'A4', margin: 40 });
  const pdfPath = path.join(outputDir, 'HealthWatchPro_Document.pdf');
  const stream = fs.createWriteStream(pdfPath);
  pdf.pipe(stream);
  pdf.fontSize(20).text('HealthWatch Pro', { align: 'center' });
  pdf.moveDown();
  pdf.fontSize(14).text('Dokumentasi Proyek', { align: 'center' });
  pdf.moveDown(1.2);
  content.forEach((line) => {
    pdf.fontSize(11).text(line, { align: 'left' });
    pdf.moveDown(0.25);
  });
  pdf.end();

  stream.on('finish', () => {
    console.log('Documents generated at:', outputDir);
  });
})();
