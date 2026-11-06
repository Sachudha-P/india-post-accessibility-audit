let products = [];

async function loadProducts() {
  const response = await fetch(
    "https://fakestoreapi.com/products"
  );

  products = await response.json();
  displayProducts(products);
}

function displayProducts(items) {
  const container = document.getElementById("products");

  if (!container) return;

  container.innerHTML = items.map(item => `
    <div class="card">
      <h3>${item.title}</h3>
      <p>Price: $${item.price}</p>
      <p>${item.category}</p>
    </div>
  `).join("");
}

function searchProducts(value) {
  const filtered = products.filter(item =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );

  displayProducts(filtered);
}

loadProducts();
