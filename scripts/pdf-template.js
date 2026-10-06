const CONTACT_DEFAULTS = {
  email: 'ozhano.contact@gmail.com',
  website: 'ozhano.com',
  github: 'ahmozn',
  linkedin: 'LinkedIn'
};

const ICONS = {
  email: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  website: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  github: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  linkedin: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
};

export function renderHtml(data, avatarSrc) {
  const educations = Object.entries(data.education || {})
    .filter(([key]) => key !== 'title')
    .map(([, val]) => val);

  const jobs = Object.entries(data.jobExperience || {})
    .filter(([key]) => key !== 'title')
    .map(([, val]) => val);

  const skills = Object.entries(data.technicalSkills || {})
    .filter(([key]) => key !== 'title')
    .map(([, val]) => val);

  const projects = Object.entries(data.projects || {})
    .filter(([key]) => !['title', 'techs'].includes(key))
    .map(([, val]) => val);

  const exams = Object.entries(data.examsResults || {})
    .filter(([key]) => key !== 'title')
    .map(([, val]) => val);

  const languages = Object.entries(data.foreignLanguage || {})
    .filter(([key]) => key !== 'title')
    .map(([, val]) => val);

  return `<!DOCTYPE html>
<html lang="${data.lang || 'en'}">
<head>
  <meta charset="UTF-8">
  <style>
    @page { 
      size: A4; 
      margin: 8mm 12mm; 
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      font-size: 11px;
      line-height: 1.35;
      background: white;
    }
    
    /* HEADER */
    .header { 
      display: flex;
      align-items: center;
      gap: 16px;
      border-bottom: 2px solid #0f172a; 
      padding-bottom: 8px; 
      margin-bottom: 8px; 
    }
    .avatar {
      width: 130px;
      height: 170px;
      border-radius: 10px;
      object-fit: cover;
      flex-shrink: 0;
    }
    .header-content {
      flex: 1;
    }
    .name { 
      font-size: 25px; 
      font-weight: 700; 
      color: #0f172a; 
      letter-spacing: -0.3px;
      line-height: 1.1;
    }
    .role { 
      font-size: 14px; 
      color: #2563eb; 
      font-weight: 600; 
      margin-top: 3px; 
    }
    .contacts {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 6px;
    }
    .contact-item {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 11px;
      color: #475569;
      text-decoration: none;
      text-decoration: underline;
    }
    a.contact-item {
      color: #334155;
    }
    .contact-item svg {
      display: inline-block;
      vertical-align: middle;
      flex-shrink: 0;
      stroke: #64748b;
    }

    /* SECTIONS */
    .section { 
      margin-bottom: 7px; 
    }
    .section-title {
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0.4px;
      color: #0f172a;
      border-bottom: 1.5px solid #e2e8f0;
      padding-bottom: 2px;
      margin-bottom: 4px;
    }
    .summary-text { 
      color: #334155; 
      white-space: pre-line; 
      font-size: 12.5px;
      line-height: 1.4;
    }

    /* ITEMS */
    .item { 
      margin-bottom: 4px; 
      page-break-inside: avoid;
    }
    .item-header { 
      display: flex; 
      justify-content: space-between; 
      font-weight: 700; 
      font-size: 12px; 
      color: #0f172a;
    }
    .item-company { 
      color: #475569; 
      font-size: 10px; 
      font-weight: 600;
      margin-top: 1px;
    }
    .item-desc { 
      color: #334155; 
      font-size: 12px; 
      margin-top: 1.5px; 
      line-height: 1.35;
    }
    .tech-tag {
      font-weight: 600;
      color: #475569;
      font-size: 10.5px;
      margin-top: 1px;
    }

    /* 2 COLUMNS */
    .grid-2 {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 14px;
    }
    .skill-line { 
      font-size: 12px; 
      margin-bottom: 2px; 
      line-height: 1.35;
    }
    .skill-name { 
      font-weight: 700; 
      color: #1e293b; 
    }

    @media print {
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <div class="header">
    ${avatarSrc ? `<img src="${avatarSrc}" alt="Avatar" class="avatar" />` : ''}
    <div class="header-content">
      <div class="name">${data.profile?.name || ''}</div>
      <div class="role">${data.profile?.role || ''}</div>
      <div class="contacts">
        ${CONTACT_DEFAULTS.email ? `
          <a href="mailto:${CONTACT_DEFAULTS.email}" class="contact-item">
            ${ICONS.email}
            <span>${CONTACT_DEFAULTS.email}</span>
          </a>` : ''}
        ${CONTACT_DEFAULTS.linkedin ? `
          <a href="https://www.linkedin.com/in/ahmet-%C3%B6zhan-%C3%B6zen-389074224/" class="contact-item">
            ${ICONS.linkedin} <span>LinkedIn</span>
          </a>` : ''}
        ${CONTACT_DEFAULTS.github ? `
          <a href="https://github.com/ahmozn" class="contact-item">
            ${ICONS.github} <span>GitHub</span>
          </a>` : ''}
        ${CONTACT_DEFAULTS.website ? `
          <a href="https://ozhano.com" class="contact-item">
            ${ICONS.website} <span>${CONTACT_DEFAULTS.website}</span>
          </a>` : ''}
      </div>
    </div>
  </div>

  <!-- SUMMARY -->
  ${data.summary ? `
  <div class="section">
    <div class="section-title">${data.summary.title || 'Summary'}</div>
    <div class="summary-text">${data.summary.content || ''}</div>
  </div>` : ''}

  <!-- EXPERIENCE -->
  ${jobs.length ? `
  <div class="section">
    <div class="section-title">${data.jobExperience?.title || 'Experience'}</div>
    ${jobs.map(job => `
      <div class="item">
        <div class="item-header">
          <span>${job.title}</span>
          <span>${job.year}</span>
        </div>
        <div class="item-company">${job.company}</div>
        <div class="item-desc">${job.content}</div>
      </div>
    `).join('')}
  </div>` : ''}

  <!-- EDUCATION -->
  ${educations.length ? `
  <div class="section">
    <div class="section-title">${data.education?.title || 'Education'}</div>
    ${educations.map(edu => `
      <div class="item">
        <div class="item-header">
          <span style="font-weight:400">${edu.content}</span>
          <span>${edu.year}</span>
        </div>
      </div>
    `).join('')}
  </div>` : ''}

  <!-- PROJECTS -->
  ${projects.length ? `
  <div class="section">
    <div class="section-title">${data.projects?.title || 'Projects'}</div>
    ${projects.map(p => `
      <div class="item">
        <div class="item-header">
          <span>${p.title}</span>
        </div>
        <div class="item-desc">${p.content}</div>
        <div class="tech-tag">🛠 ${data.projects?.techs || 'Tech'}: ${p.techs}</div>
      </div>
    `).join('')}
  </div>` : ''}

  <!-- 2 KOLON: SKILLS & DİĞERLERİ -->
  <div class="grid-2">
    <!-- TECHNICAL SKILLS -->
    ${skills.length ? `
    <div class="section">
      <div class="section-title">${data.technicalSkills?.title || 'Technical Skills'}</div>
      ${skills.map(s => `
        <div class="skill-line">
          <span class="skill-name">${s.title}:</span> ${s.content}
        </div>
      `).join('')}
    </div>` : ''}

    <!-- DİL & SINAV SONUÇLARI -->
    <div>
      ${languages.length ? `
      <div class="section">
        <div class="section-title">${data.foreignLanguage?.title || 'Language'}</div>
        ${languages.map(l => `
          <div class="skill-line">
            <span class="skill-name">${l.title} (${l.level}):</span> ${l.certificate}
          </div>
        `).join('')}
      </div>` : ''}

      ${exams.length ? `
      <div class="section">
        <div class="section-title">${data.examsResults?.title || 'Exams'}</div>
        ${exams.map(e => `
          <div class="skill-line">
            <span class="skill-name">${e.title}:</span> ${e.score} <span style="color:#64748b; font-size:9.5px;">(${e.year})</span>
          </div>
        `).join('')}
      </div>` : ''}
    </div>
  </div>

</body>
</html>`;
}