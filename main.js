window.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('product-list');
  products.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${prod.image}" alt="${prod.title}">
      <div class="product-title">${prod.title}</div>
      <div class="product-price">${prod.price}</div>
      <a href="${prod.url}" class="product-link" target="_blank" rel="noopener">View on AliExpress</a>
    `;
    list.appendChild(card);
  });
});