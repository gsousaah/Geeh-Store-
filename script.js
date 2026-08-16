const products=[
  {id:1,name:"Marreta Exemplo I",rarity:"RARIDADE • LENDÁRIA",price:10},
  {id:2,name:"Marreta Exemplo II",rarity:"RARIDADE • ÉPICA",price:12},
  {id:3,name:"Marreta Exemplo III",rarity:"RARIDADE • RARA",price:8},
  {id:4,name:"Marreta Exemplo IV",rarity:"RARIDADE • EVENTO",price:15}
];
let cart=JSON.parse(localStorage.getItem("geehCart")||"[]");
const grid=document.querySelector("#productGrid"),search=document.querySelector("#search");
function money(n){return n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}
function renderProducts(){
  const q=search.value.toLowerCase();
  const list=products.filter(p=>(p.name+" "+p.rarity).toLowerCase().includes(q));
  grid.innerHTML=list.map(p=>`<article class="product"><div class="product-img">IMAGEM DA MARRETA</div><div class="product-info"><div class="rarity">${p.rarity}</div><h3>${p.name}</h3><div class="price">${money(p.price)}</div><button class="add" onclick="addToCart(${p.id})">Adicionar ao carrinho</button></div></article>`).join("");
  document.querySelector("#empty").classList.toggle("hidden",list.length!==0);
}
function addToCart(id){const p=products.find(x=>x.id===id);cart.push(p);save();openCart()}
function removeItem(i){cart.splice(i,1);save()}
function save(){localStorage.setItem("geehCart",JSON.stringify(cart));renderCart()}
function renderCart(){
  document.querySelector("#cartCount").textContent=cart.length;
  document.querySelector("#cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-item"><div><strong>${p.name}</strong><br><small>${p.rarity}</small></div><div><strong>${money(p.price)}</strong><br><button class="remove" onclick="removeItem(${i})">Remover</button></div></div>`).join(""):`<p style="color:#a88c76">Seu carrinho está vazio.</p>`;
  document.querySelector("#cartTotal").textContent=money(cart.reduce((s,p)=>s+p.price,0));
}
function openCart(){document.querySelector("#cart").classList.add("open");document.querySelector("#overlay").classList.remove("hidden")}
function closeCart(){document.querySelector("#cart").classList.remove("open");document.querySelector("#overlay").classList.add("hidden")}
document.querySelector("#cartBtn").onclick=openCart;
document.querySelector("#closeCart").onclick=closeCart;
document.querySelector("#overlay").onclick=closeCart;
document.querySelector("#checkoutBtn").onclick=()=>alert("Checkout será conectado na próxima etapa.");
search.addEventListener("input",renderProducts);
renderProducts();renderCart();
