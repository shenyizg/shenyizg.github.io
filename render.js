// ============================================
//  render.js — Reads siteData and builds the page
//  You should NOT need to edit this file.
// ============================================

(function () {
  const d = siteData;

  // Top-4 security conference abbreviations to bold in venue text
  const TOP4 = ["CCS", "USENIX Security", "S&P", "NDSS"];

  // Helper: escape HTML
  function esc(str) {
    const el = document.createElement("span");
    el.textContent = str;
    return el.innerHTML;
  }

  // Helper: bold the user's name in an author string (with accent color)
  function boldName(authors) {
    if (!d.name) return esc(authors);
    const escaped = esc(authors);
    const nameEscaped = esc(d.name);
    return escaped.replaceAll(nameEscaped, `<span class="author-me">${nameEscaped}</span>`);
  }

  // Helper: turn a trailing `†` corresponding-author marker into a styled superscript
  function styleCorrespondingMark(html) {
    return html.replace(/†/g, '<sup class="corresponding-mark">†</sup>');
  }

  // Helper: format venue — bold top-4 abbreviations in parentheses
  function formatVenue(venue) {
    let result = esc(venue);
    for (const conf of TOP4) {
      const confEscaped = esc(conf);
      const regex = new RegExp(`\\(${confEscaped.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)`, "g");
      result = result.replace(regex, `(<strong class="venue-top">${confEscaped}</strong>)`);
    }
    return result;
  }

  // --- Page title ---
  document.title = `${d.name} — Homepage`;

  // --- Nav logo ---
  document.getElementById("nav-logo").textContent = d.name;

  // --- Hero ---
  const heroPhoto = document.getElementById("hero-photo");
  if (d.photo) {
    heroPhoto.innerHTML = `<img src="${esc(d.photo)}" alt="${esc(d.name)}">`;
  } else {
    heroPhoto.innerHTML = `<div class="photo-placeholder"><span>Photo</span></div>`;
  }

  document.getElementById("hero-name").textContent = d.name;
  document.getElementById("hero-title").textContent = d.title;
  document.getElementById("hero-affiliation").textContent = d.affiliation;

  // Bio supports HTML (for <strong> tags and line breaks)
  document.getElementById("hero-bio").innerHTML = d.bio;

  // Hero links — email dropdown for multiple addresses
  const heroLinks = document.getElementById("hero-links");
  let linksHtml = "";

  if (d.email) {
    const hasSecondary = !!d.secondaryEmail;
    if (hasSecondary) {
      linksHtml += `
        <div class="email-dropdown">
          <button class="btn email-btn" id="emailToggle">Email</button>
          <div class="email-menu" id="emailMenu">
            <a href="mailto:${esc(d.email)}">${esc(d.email)}</a>
            <a href="mailto:${esc(d.secondaryEmail)}">${esc(d.secondaryEmail)}</a>
          </div>
        </div>`;
    } else {
      linksHtml += `<a href="mailto:${esc(d.email)}" class="btn">Email</a>`;
    }
  }
  if (d.scholarUrl) linksHtml += `<a href="${esc(d.scholarUrl)}" class="btn btn-outline">Google Scholar</a>`;
  if (d.githubUrl) linksHtml += `<a href="${esc(d.githubUrl)}" class="btn btn-outline">GitHub</a>`;
  heroLinks.innerHTML = linksHtml;

  // Email dropdown logic
  if (d.email && d.secondaryEmail) {
    const emailToggle = document.getElementById("emailToggle");
    const emailMenu = document.getElementById("emailMenu");
    emailToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      emailMenu.classList.toggle("open");
    });
    document.addEventListener("click", () => {
      emailMenu.classList.remove("open");
    });
  }

  // --- Research Interests ---
  const RESEARCH_ICONS = {
    shield: '<path d="M12 2.6l7.4 3.3v5.5c0 4.5-3.1 8.1-7.4 9.3-4.3-1.2-7.4-4.8-7.4-9.3V5.9L12 2.6z"/><path d="M9.1 12.1l2.1 2.1 3.9-4"/>',
    target: '<circle cx="12" cy="12" r="8.2"/><circle cx="12" cy="12" r="3.4"/><path d="M12 1.7v3.1M12 19.2v3.1M1.7 12h3.1M19.2 12h3.1"/>',
    wave: '<path d="M4 10v4M8 6.6v10.8M12 3.4v17.2M16 7.6v8.8M20 10.6v2.8"/>',
    lock: '<rect x="4.2" y="10.2" width="15.6" height="11" rx="2.6"/><path d="M8 10.2V7.4a4 4 0 0 1 8 0v2.8"/><path d="M12 14.6v2.4"/>'
  };

  // Flatten every paper once, so a research highlight can resolve its own link
  const allPapers = (d.publications || []).flatMap(g => g.papers || []);
  function workLink(work) {
    const key = (work.match || work.name || "").toLowerCase();
    if (!key) return "";
    const hit = allPapers.find(p => p.title.toLowerCase().includes(key));
    if (!hit || !hit.links) return "";
    return hit.links.paper || hit.links.preprint || hit.links.code || "";
  }

  const researchSection = document.getElementById("research");
  const researchList = document.getElementById("research-list");
  if (researchList && d.research && d.research.length) {
    const introEl = document.getElementById("research-intro");
    if (d.researchIntro) {
      introEl.innerHTML = d.researchIntro;
    } else {
      introEl.remove();
    }

    researchList.innerHTML = d.research.map(r => {
      const icon = RESEARCH_ICONS[r.icon] || RESEARCH_ICONS.shield;
      const tags = (r.tags || [])
        .map(t => `<span class="research-tag">${esc(t)}</span>`)
        .join("");
      const works = (r.works || []).map(w => {
        const url = workLink(w);
        const label = url
          ? `<a href="${esc(url)}">${esc(w.name)}</a>`
          : `<span class="research-work-name">${esc(w.name)}</span>`;
        const venue = w.venue ? ` <span class="research-work-venue">${esc(w.venue)}</span>` : "";
        return `<span class="research-work">${label}${venue}</span>`;
      }).join("");

      return `
        <article class="research-card">
          <div class="research-head">
            <span class="research-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icon}</svg>
            </span>
            <h3>${esc(r.title)}</h3>
          </div>
          <p>${esc(r.description)}</p>
          ${tags ? `<div class="research-tags">${tags}</div>` : ""}
          ${works ? `<div class="research-works"><span class="research-works-label">Selected work</span>${works}</div>` : ""}
        </article>`;
    }).join("");
  } else if (researchSection) {
    researchSection.remove();
    const navLink = document.querySelector('.nav-links a[href="#research"]');
    if (navLink) navLink.remove();
  }

  // --- Education ---
  const eduList = document.getElementById("edu-list");
  eduList.innerHTML = d.education.map(e => `
    <div class="cv-item">
      <div class="cv-date">${esc(e.date)}</div>
      <div class="cv-detail">
        <strong>${esc(e.degree)}</strong><br>
        ${esc(e.school)}
      </div>
    </div>
  `).join("");

  // --- Publications ---
  const pubContainer = document.getElementById("pub-container");
  const noteHtml = d.publicationsNote
    ? `<p class="pub-legend">${styleCorrespondingMark(esc(d.publicationsNote))}</p>`
    : "";
  pubContainer.innerHTML = d.publications.filter(group => group.papers.length > 0).map(group => {
    const papersHtml = group.papers.map(p => {
      const links = Object.entries(p.links || {})
        .filter(([, url]) => url && url !== "#")
        .map(([label, url]) => `<a href="${esc(url)}">${esc(label.charAt(0).toUpperCase() + label.slice(1))}</a>`)
        .join(" · ");
      return `
        <li class="pub-item">
          <span class="pub-title">${esc(p.title)}</span>
          <span class="pub-authors">${styleCorrespondingMark(boldName(p.authors))}</span>
          <span class="pub-venue">${formatVenue(p.venue)}</span>
          ${links ? `<span class="pub-links">${links}</span>` : ""}
        </li>`;
    }).join("");

    return `
      <div class="pub-year">${group.year}</div>
      <ul class="pub-list">${papersHtml}</ul>`;
  }).join("");
  pubContainer.innerHTML = noteHtml + pubContainer.innerHTML;

  // --- Services (grouped by category, matching sample site) ---
  const servicesList = document.getElementById("services-list");
  servicesList.innerHTML = Object.entries(d.services).map(([category, items]) => `
    <div class="service-group">
      <h3 class="service-category">${esc(category)}</h3>
      <ul class="service-items">
        ${items.map(item => `<li>${esc(item)}</li>`).join("")}
      </ul>
    </div>
  `).join("");

  // --- Teaching ---
  const teachingList = document.getElementById("teaching-list");
  teachingList.innerHTML = d.teaching.map(t => `
    <div class="teaching-item">
      <div class="teaching-term">${esc(t.term)}</div>
      <div class="teaching-detail">
        <h3>${esc(t.course)}</h3>
        <p>${esc(t.role)}</p>
      </div>
    </div>
  `).join("");

  // --- Talks (with links) ---
  const talksList = document.getElementById("talks-list");
  talksList.innerHTML = d.talks.map(t => {
    const titleHtml = t.link
      ? `<a href="${esc(t.link)}" class="talk-title">${esc(t.title)}</a>`
      : `<span class="talk-title">${esc(t.title)}</span>`;
    return `
    <div class="talk-item">
      ${titleHtml}
      <span class="talk-detail">${esc(t.detail)}</span>
    </div>`;
  }).join("");

  // --- Footer ---
  document.getElementById("footer-text").textContent = d.footerText;

})();
