window.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('product-list');
  products.forEach((prod, idx) => {
    const card = document.createElement('div');
    card.className = 'product-card';

    // Check if product has multiple images
    if (Array.isArray(prod.images)) {
      // Create a container for the images
      let imgIdx = 0;
      card.innerHTML = `
        <div class="image-slider" id="slider-${idx}">
          <img src="${prod.images[imgIdx]}" alt="${prod.title}" id="img-${idx}">
          <button class="prev-btn" id="prev-${idx}">&#8592;</button>
          <button class="next-btn" id="next-${idx}">&#8594;</button>
        </div>
        <div class="product-title">${prod.title}</div>
        <div class="product-price">${prod.price}</div>
        <a href="${prod.url}" class="product-link" target="_blank" rel="noopener">View on AliExpress</a>
      `;
      // Add event listeners for buttons after adding to DOM
      setTimeout(() => {
        let current = 0;
        const imgEl = document.getElementById(`img-${idx}`);
        document.getElementById(`prev-${idx}`).onclick = () => {
          current = (current - 1 + prod.images.length) % prod.images.length;
          imgEl.src = prod.images[current];
        };
        document.getElementById(`next-${idx}`).onclick = () => {
          current = (current + 1) % prod.images.length;
          imgEl.src = prod.images[current];
        };
      });
    } else {
      card.innerHTML = `
        <img src="${prod.image}" alt="${prod.title}">
        <div class="product-title">${prod.title}</div>
        <div class="product-price">${prod.price}</div>
        <a href="${prod.url}" class="product-link" target="_blank" rel="noopener">View on AliExpress</a>
      `;
    }
    list.appendChild(card);
  });
});
