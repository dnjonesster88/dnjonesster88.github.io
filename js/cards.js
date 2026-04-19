async function buildCards() {
  const response = await fetch('/data/pages.json');
  const { pages } = await response.json();

  const grid = document.getElementById('card-grid');

  pages.forEach(page => {
    const card = document.createElement('div');
    card.className = 'card shadow-sm p-3 mb-5 app-card col-sm';
    card.style.position = 'relative';

    card.innerHTML = `
      ${page.audience ? `
        <span class="badge badge-pill badge-info"
          style="position:absolute; right:0; top:4px;">
          ${page.audience}
        </span>` : ''}

      ${page.logo ? `
        <span class="badge badge-pill badge-light"
          style="position:absolute; left:0; top:4px;">
          ${page.logo}
        </span>` : ''}

      ${page.image ? `
        <a href="${page.appUrl}" target="_blank">
          <img class="card-img-top" alt="${page.imageAlt}" src="${page.image}" />
        </a>` : ''}

      <div class="card-body">
        <h4 class="card-title">
          <a href="${page.appUrl}" target="_blank" class="stretched-link">
            ${page.title}
          </a>
        </h4>
        <p class="card-text" style="font-size:.8em; font-weight:400; margin:6px 0;">
          ${page.description}
        </p>
        <div class="app-card-links">
          <a href="${page.url}" class="card-link" style="font-weight:600">Info</a>
          <span class="link-separator">&nbsp;|&nbsp;</span>
          <a href="${page.appUrl}" class="card-link card-link-launch"
            style="font-weight:600" target="_blank">Launch App</a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

buildCards();
