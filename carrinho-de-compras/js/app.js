let totalGeral = 0;
limpar();

const btnAdicionar = document.querySelector(".botao-adicionar");
const btnLimpar = document.querySelector(".botao-limpar");
const carrinhoDeCompras = [];

btnAdicionar.addEventListener("click", (event) => {
  adicionar();
  localStorage.setItem("carrinho", JSON.stringify(carrinhoDeCompras));
});

btnLimpar.addEventListener("click", (event) => {
  limpar();
});

function adicionar() {
  // recuperar nome do produto, quantidade e valor
  let produto = document.getElementById("produto");
  let valor = produto.options[produto.selectedIndex].text;
  let nomeProduto = valor.split("-")[0].trim();
  let valorUnitario = parseInt(valor.split("R$")[1]);
  let quantidade = parseInt(document.getElementById("quantidade").value);

  if (Number.isNaN(quantidade) || quantidade <= 0) {
    quantidade = 1;
  }

  // calcular o preço, o nosso subtotal
  let preco = quantidade * valorUnitario;

  // adicionar o produto ao carrinho
  let carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
    </section>`;

  // atualizar o valor total
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById("valor-total");
  campoTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById("quantidade").value = "";

  carrinhoDeCompras.push({ nomeProduto, valorUnitario, quantidade });
}

function limpar() {
  totalGeral = 0;
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").textContent = "R$ 0";
}
