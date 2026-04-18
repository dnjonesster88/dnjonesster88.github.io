async function buildCards() {
  const response = await fetch('/data/pages.json');
  const { pages } = await response.json();

  const grid = document.getElementById('card-grid');

  pages.forEach(page => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-icon">${page.icon}</div>
      <h3><a href="${page.url}">${page.title}</a></h3>
      <p>${page.description}</p>
    `;
    grid.appendChild(card);
  });
}

buildCards();
