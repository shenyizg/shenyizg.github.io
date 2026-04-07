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
  document.title = `${d.name} — Academic Homepage`;

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
  pubContainer.innerHTML = d.publications.map(group => {
    const papersHtml = group.papers.map(p => {
      const links = Object.entries(p.links || {})
        .filter(([, url]) => url && url !== "#")
        .map(([label, url]) => `<a href="${esc(url)}">${esc(label.charAt(0).toUpperCase() + label.slice(1))}</a>`)
        .join(" · ");
      return `
        <li class="pub-item">
          <span class="pub-title">${esc(p.title)}</span>
          <span class="pub-authors">${boldName(p.authors)}</span>
          <span class="pub-venue">${formatVenue(p.venue)}</span>
          ${links ? `<span class="pub-links">${links}</span>` : ""}
        </li>`;
    }).join("");

    return `
      <div class="pub-year">${group.year}</div>
      <ul class="pub-list">${papersHtml}</ul>`;
  }).join("");

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
