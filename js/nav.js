async function buildNav() {
  const response = await fetch('/data/pages.json');
  const { pages } = await response.json();

  const nav = document.getElementById('sidebar-nav');

  pages.forEach(page => {
    // Top-level link
    const link = document.createElement('a');
    link.href = page.url;
    link.textContent = page.title;
    link.className = 'nav-link';
    nav.appendChild(link);

    // Nested children, if any
    if (page.children && page.children.length > 0) {
      const subList = document.createElement('div');
      subList.className = 'nav-children';

      page.children.forEach(child => {
        const childLink = document.createElement('a');
        childLink.href = child.url;
        childLink.textContent = child.title;
        childLink.className = 'nav-link nav-child';
        subList.appendChild(childLink);
      });

      nav.appendChild(subList);
    }
  });
}

buildNav();
