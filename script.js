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
