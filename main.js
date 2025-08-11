window.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('product-list');
  const searchBar = document.getElementById('search-bar');
  const categoryFilter = document.getElementById('category-filter');

  function displayProducts(filteredProducts) {
    list.innerHTML = '';
    filteredProducts.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'product-card';

      let imagesHTML = prod.images.map((img, index) =>
        `<img src="${img}" class="${index === 0 ? 'active' : ''}" alt="${prod.title}">`
      ).join('');

      card.innerHTML = `
        <div class="carousel">
          ${imagesHTML}
          <button class="prev">❮</button>
          <button class="next">❯</button>
        </div>
        <div class="product-title">${prod.title}</div>
        <a href="${prod.url}" class="product-link" target="_blank" rel="noopener">View on AliExpress</a>
      `;

      list.appendChild(card);

      // Carousel functionality
      const images = card.querySelectorAll('img');
      let index = 0;
      const showImage = (i) => {
        images.forEach(img => img.classList.remove('active'));
        images[i].classList.add('active');
      };

      card.querySelector('.prev').addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
      });

      card.querySelector('.next').addEventListener('click', () => {
        index = (index + 1) % images.length;
        showImage(index);
      });
    });
  }

  function filterProducts() {
    const searchText = searchBar.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filtered = products.filter(prod => {
      const matchesSearch = prod.title.toLowerCase().includes(searchText);
      const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    displayProducts(filtered);
  }

  // Initial display
  displayProducts(products);

  // Event listeners
  searchBar.addEventListener('input', filterProducts);
  categoryFilter.addEventListener('change', filterProducts);
});

