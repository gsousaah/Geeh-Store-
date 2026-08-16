/* =====================================
   GEEH STORE
===================================== */


/* =====================================
   WHATSAPP DA LOJA
===================================== */

const WHATSAPP_NUMBER = "5561982230634";


/* =====================================
   PRODUTOS
===================================== */

const products = [

  {
    name: "Party Balloons Set",
    price: 12.00
  },

  {
    name: "Lovesick Bow Set",
    price: 9.00
  },

  {
    name: "Gothic Bouquet Set",
    price: 7.50
  },

  {
    name: "Pumpkin Slice Set",
    price: 5.00
  },

  {
    name: "Icecream Mix Set",
    price: 4.50
  },

  {
    name: "Devilish Candle Set",
    price: 5.00
  },

  {
    name: "Spooky Brew Set",
    price: 5.50
  },

  {
    name: "Cherry Blossom Tree Set",
    price: 4.50
  },

  {
    name: "Pegasus Blade Set",
    price: 4.00
  },

  {
    name: "Bleak Ink Set",
    price: 4.00
  },

  {
    name: "Sakura Parasol Set",
    price: 3.00
  },

  {
    name: "Batwing Basher Set",
    price: 3.50
  },

  {
    name: "Classic Set",
    price: 3.00
  },

  {
    name: "Pearl Piercer Set",
    price: 5.00
  },

  {
    name: "Phosphor Jellyfish Set",
    price: 5.00
  },

  {
    name: "Chilly Sweet's Vend Set",
    price: 6.00
  },

  {
    name: "Kraken's Ambush Set",
    price: 6.00
  },

  {
    name: "Psycho’s Chainsaw Set",
    price: 4.00
  },

  {
    name: "Soulless Theater Set",
    price: 3.50
  },

  {
    name: "Dark Bone Crusher Set",
    price: 3.50
  },

  {
    name: "Devilborn Set",
    price: 3.50
  },

  {
    name: "Strawberry Garden Set",
    price: 4.50
  },

  {
    name: "Choco Dip Set",
    price: 3.00
  },

  {
    name: "Marine Anchor Set",
    price: 3.00
  }

];


/* =====================================
   CARRINHO
===================================== */

let cart = [];


/* =====================================
   FORMATAÇÃO DE PREÇO
===================================== */

function formatPrice(price) {

  return price.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL"
    }
  );

}


/* =====================================
   MOSTRAR PRODUTOS
===================================== */

function renderProducts() {

  const container =
    document.getElementById("products");

  container.innerHTML = "";

  products.forEach((product, index) => {

    const card =
      document.createElement("article");

    card.className = "product";

    card.innerHTML = `

      <h3>
        ${product.name}
      </h3>

      <div class="price">
        ${formatPrice(product.price)}
      </div>

      <button
        onclick="addToCart(${index})"
      >
        Adicionar ao carrinho
      </button>

    `;

    container.appendChild(card);

  });

}


/* =====================================
   ADICIONAR AO CARRINHO
===================================== */

function addToCart(index) {

  cart.push(products[index]);

  renderCart();

}


/* =====================================
   REMOVER DO CARRINHO
===================================== */

function removeFromCart(index) {

  cart.splice(index, 1);

  renderCart();

}


/* =====================================
   MOSTRAR CARRINHO
===================================== */

function renderCart() {

  const container =
    document.getElementById("cartItems");

  const count =
    document.getElementById("cartCount");

  const total =
    document.getElementById("cartTotal");


  count.textContent =
    `${cart.length} ${
      cart.length === 1
        ? "item"
        : "itens"
    }`;


  if (cart.length === 0) {

    container.innerHTML = `
      <p class="empty">
        Seu carrinho está vazio.
      </p>
    `;

  }

  else {

    container.innerHTML = "";

    cart.forEach((product, index) => {

      const item =
        document.createElement("div");

      item.className = "cart-item";

      item.innerHTML = `

        <span>
          ${product.name}
          —
          ${formatPrice(product.price)}
        </span>

        <button
          class="remove"
          onclick="removeFromCart(${index})"
        >
          remover
        </button>

      `;

      container.appendChild(item);

    });

  }


  const totalValue =
    cart.reduce(
      (sum, product) =>
        sum + product.price,
      0
    );


  total.textContent =
    formatPrice(totalValue);

}


/* =====================================
   COMPRAR PELO WHATSAPP
===================================== */

function checkoutWhatsApp() {

  if (cart.length === 0) {

    alert(
      "Adicione pelo menos um set ao carrinho."
    );

    return;

  }


  let message =
    "Olá! 🤎 Quero comprar estes sets na Geeh Store:\n\n";


  cart.forEach((product, index) => {

    message +=
      `${index + 1}. ` +
      `${product.name} — ` +
      `${formatPrice(product.price)}\n`;

  });


  const total =
    cart.reduce(
      (sum, product) =>
        sum + product.price,
      0
    );


  message +=
    `\nTotal: ${formatPrice(total)}`;


  const url =
    `https://wa.me/${WHATSAPP_NUMBER}` +
    `?text=${encodeURIComponent(message)}`;


  window.open(
    url,
    "_blank"
  );

}


/* =====================================
   NÃO ENCONTROU O SET
===================================== */

function contactWhatsApp() {

  const message =
    "Olá! 🤎 Não encontrei o set que procuro na lista da Geeh Store. Gostaria de consultar a disponibilidade de outros sets.";


  const url =
    `https://wa.me/${WHATSAPP_NUMBER}` +
    `?text=${encodeURIComponent(message)}`;


  window.open(
    url,
    "_blank"
  );

}


/* =====================================
   INICIAR A LOJA
===================================== */

renderProducts();

renderCart();
