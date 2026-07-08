const fs = require('fs');
const path = require('path');
const { Document, Packer, Paragraph, HeadingLevel, TextRun, AlignmentType, PageBreak } = require('docx');
const PDFDocument = require('pdfkit');

const outputDir = path.join(__dirname, '..', 'documents');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const content = [
  'HealthWatch Pro - Project Documentation',
  '',
  'Project Overview',
  'HealthWatch Pro is a React-based health monitoring dashboard prototype designed to present a modern and user-friendly interface for monitoring wellness data such as heart rate, sleep, activity, and notifications.',
  '',
  'What Was Implemented',
  '- Modern landing page with engaging visuals',
  '- React-based dashboard interface',
  '- Notification and alert sections',
  '- Patient profile and connected users panel',
  '- Light/dark theme support',
  '- React Router-based navigation',
  '- Vercel routing configuration for SPA deployment',
  '',
  'Technology Stack',
  '- React',
  '- Vite',
  '- Tailwind CSS',
  '- Lucide Icons',
  '- React Router DOM',
  '',
  'Development Notes',
  'This project demonstrates a frontend prototype for a health smartwatch experience and can be extended with backend services, authentication, real-time analytics, and database integration.',
  '',
  'Repository',
  'https://github.com/iimibrahim-netizen/Health-Smartwatch',
  '',
  'Prepared By',
  'AI Assistant / Developer Support'
];

const doc = new Document({
  sections: [{
    properties: {},
    children: [
      new Paragraph({
        children: [new TextRun({ text: 'HealthWatch Pro', bold: true, size: 32 })],
        spacing: { after: 200 },
        alignment: AlignmentType.CENTER
      }),
      new Paragraph({
        children: [new TextRun({ text: 'Project Documentation', bold: true, size: 24 })],
        spacing: { after: 200 },
        alignment: AlignmentType.CENTER
      }),
      ...content.slice(1).map((text, index) => {
        const isHeading = ['Project Overview','What Was Implemented','Technology Stack','Development Notes','Repository','Prepared By'].includes(text);
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
  pdf.fontSize(14).text('Project Documentation', { align: 'center' });
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
