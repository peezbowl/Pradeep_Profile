import { PERSONAL_INFO, CAREER_JOURNEY, EDUCATION_LIST, CERTIFICATIONS_LIST, CORE_COMPETENCIES, IMPACT_METRICS } from '../data/portfolioData';

export function downloadResumeAsFormattedHTML(): void {
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${PERSONAL_INFO.name} - Professional Resume</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      color: #1a202c;
      max-width: 850px;
      margin: 40px auto;
      padding: 0 20px;
    }
    h1 {
      font-size: 26px;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin-bottom: 4px;
      color: #0f172a;
      text-transform: uppercase;
      text-align: center;
    }
    .subtitle {
      font-size: 15px;
      font-weight: 600;
      color: #2563eb;
      text-align: center;
      margin-bottom: 10px;
    }
    .contact-info {
      font-size: 12px;
      color: #4b5563;
      text-align: center;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 2px solid #e2e8f0;
    }
    .contact-info a {
      color: #2563eb;
      text-decoration: none;
    }
    h2 {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #1e3a8a;
      border-bottom: 1.5px solid #cbd5e1;
      padding-bottom: 4px;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    p, li {
      font-size: 13px;
      color: #334155;
    }
    .competencies {
      background: #f8fafc;
      padding: 10px 14px;
      border-radius: 6px;
      border: 1px solid #e2e8f0;
      font-size: 12.5px;
      font-weight: 500;
      line-height: 1.6;
    }
    .job {
      margin-bottom: 18px;
    }
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 4px;
    }
    .job-title {
      font-weight: 700;
      font-size: 14px;
      color: #0f172a;
    }
    .job-date {
      font-size: 12px;
      font-weight: 600;
      color: #64748b;
    }
    ul {
      margin: 4px 0 10px 18px;
      padding: 0;
    }
    li {
      margin-bottom: 4px;
    }
    @media print {
      body { margin: 0; padding: 10px; }
      h2 { color: #000; }
    }
  </style>
</head>
<body>
  <h1>${PERSONAL_INFO.name}</h1>
  <div class="subtitle">${PERSONAL_INFO.subtitles}</div>
  <div class="contact-info">
    ${PERSONAL_INFO.location} | <a href="mailto:${PERSONAL_INFO.email}">${PERSONAL_INFO.email}</a> | ${PERSONAL_INFO.phone} | <a href="${PERSONAL_INFO.linkedinUrl}">${PERSONAL_INFO.linkedinUrl}</a>
  </div>

  <h2>Professional Summary</h2>
  <p>${PERSONAL_INFO.statement}</p>
  <p>${PERSONAL_INFO.bio}</p>

  <h2>Core Competencies</h2>
  <div class="competencies">
    ${CORE_COMPETENCIES.map((c) => c.title).join(' • ')}
  </div>

  <h2>Key Achievements</h2>
  <ul>
    <li>Enabled structured sales enablement and knowledge programs supporting high-volume enterprise deal environments, strengthening competitive positioning across global pursuit teams.</li>
    <li>Established scalable knowledge governance practices, improving accessibility, reuse, and consistency of sales and delivery assets to support pursuit readiness.</li>
    <li>Delivered actionable competitive and market insights through win/loss intelligence, analyst inputs, and structured battlecards to support data-informed deal strategies.</li>
  </ul>

  <h2>Professional Experience</h2>
  ${CAREER_JOURNEY.map(
    (job) => `
    <div class="job">
      <div class="job-header">
        <span class="job-title">${job.company} | ${job.role}</span>
        <span class="job-date">${job.period}</span>
      </div>
      <p style="margin: 2px 0 6px 0; font-style: italic; font-size: 12px; color: #475569;">${job.summary}</p>
      <ul>
        ${job.highlights.map((h) => `<li>${h}</li>`).join('')}
      </ul>
    </div>
  `
  ).join('')}

  <h2>Education</h2>
  <ul>
    ${EDUCATION_LIST.map((edu) => `<li><strong>${edu.degree}</strong> &mdash; ${edu.institution} (${edu.focus})</li>`).join('')}
  </ul>

  <h2>Certifications</h2>
  <ul>
    ${CERTIFICATIONS_LIST.map((cert) => `<li><strong>${cert.title}</strong> &mdash; ${cert.issuer}</li>`).join('')}
  </ul>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Pradeep_Kumar_Resume.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
