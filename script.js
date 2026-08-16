/* =========================================
   GEEH STORE
========================================= */


/* =========================================
   WHATSAPP
========================================= */

const WHATSAPP_NUMBER = "5561982230634";



/* =========================================
   SETS DA LOJA
========================================= */

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



/* =========================================
   CARRINHO
========================================= */

let cart = [];



/* =========================================
   PREÇO
========================================= */

function formatPrice(value) {

  return value.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL"
    }
  );

}



/* =========================================
   MOSTRAR OS SETS
========================================= */

function renderProducts() {

  const productsContainer =
    document.getElementById("products");


  if (!productsContainer) {

    console.error(
      "Elemento #products não encontrado."
    );

    return;

  }


  productsContainer.innerHTML = "";


  products.forEach(
    function(product, index) {


      const card =
        document.createElement("div");


      card.className =
        "product";


      card.innerHTML = `

        <h3>
          ${product.name}
        </h3>

        <div class="price">

          ${formatPrice(product.price)}

        </div>

        <button
          type="button"
          onclick="addToCart(${index})"
        >

          Adicionar ao carrinho

        </button>

      `;


      productsContainer.appendChild(card);

    }
  );

}



/* =========================================
   ADICIONAR
========================================= */

function addToCart(index) {

  cart.push(products[index]);

  renderCart();

}



/* =========================================
   REMOVER
========================================= */

function removeFromCart(index) {

  cart.splice(index, 1);

  renderCart();

}



/* =========================================
   MOSTRAR CARRINHO
========================================= */

function renderCart() {

  const cartContainer =
    document.getElementById("cartItems");

  const cartCount =
    document.getElementById("cartCount");

  const cartTotal =
    document.getElementById("cartTotal");


  if (!cartContainer) {

    return;

  }


  cartCount.textContent =
    cart.length +
    (
      cart.length === 1
        ? " item"
        : " itens"
    );


  if (cart.length === 0) {

    cartContainer.innerHTML = `

      <p class="empty">

        Seu carrinho está vazio.

      </p>

    `;

  }

  else {


    cartContainer.innerHTML = "";


    cart.forEach(
      function(product, index) {


        const item =
          document.createElement("div");


        item.className =
          "cart-item";


        item.innerHTML = `

          <span>

            ${product.name}

            —

            ${formatPrice(product.price)}

          </span>


          <button
            type="button"
            class="remove"
            onclick="removeFromCart(${index})"
          >

            remover

          </button>

        `;


        cartContainer.appendChild(item);

      }
    );

  }


  const total =
    cart.reduce(
      function(sum, product) {

        return sum + product.price;

      },
      0
    );


  cartTotal.textContent =
    formatPrice(total);

}



/* =========================================
   ABRIR WHATSAPP
========================================= */

function openWhatsApp(message) {

  const whatsappURL =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);


  window.location.href =
    whatsappURL;

}



/* =========================================
   COMPRAR
========================================= */

function checkoutWhatsApp() {


  if (cart.length === 0) {

    alert(
      "Seu carrinho está vazio! 🤎"
    );

    return;

  }


  let message =
    "Olá! 🤎 Quero fazer uma compra na Geeh Store!\n\n";


  message +=
    "SETS:\n";


  cart.forEach(
    function(product, index) {

      message +=
        `${index + 1}. ` +
        `${product.name} — ` +
        `${formatPrice(product.price)}\n`;

    }
  );


  const total =
    cart.reduce(
      function(sum, product) {

        return sum + product.price;

      },
      0
    );


  message +=
    "\nTotal: " +
    formatPrice(total);


  message +=
    "\n\nAguardo atendimento! 🤎";


  openWhatsApp(message);

}



/* =========================================
   NÃO ENCONTROU O SET
========================================= */

function contactWhatsApp() {


  const message =
    "Olá! 🤎 Não encontrei o set que procuro na lista da Geeh Store. Gostaria de consultar outros sets disponíveis.";


  openWhatsApp(message);

}



/* =========================================
   BOTÃO DO WHATSAPP
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {


    renderProducts();

    renderCart();


    const whatsappButton =
      document.getElementById(
        "whatsappButton"
      );


    const otherSetsButton =
      document.getElementById(
        "otherSetsButton"
      );


    if (whatsappButton) {

      whatsappButton.addEventListener(
        "click",
        checkoutWhatsApp
      );

    }


    if (otherSetsButton) {

      otherSetsButton.addEventListener(
        "click",
        contactWhatsApp
      );

    }

  }
);
