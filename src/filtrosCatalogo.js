const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
  const produtosEscondidos = Array.from(
    catalogoProdutos.getElementsByClassName("hidden")
  );

  for (const produto of produtosEscondidos) {
    produto.classList.remove("hidden");
  }
}

function esconderProduto() {
  exibirTodos();
  const produtosComprar = Array.from(
    catalogoProdutos.getElementsByClassName("produtoComprar")
  );

  for (const produto of produtosComprar) {
    produto.classList.add("hidden");
  }
}

function esconderServico() {
  exibirTodos();
  const servicos = Array.from(
    catalogoProdutos.getElementsByClassName("servico")
  );

  for (const produto of servicos) {
    produto.classList.add("hidden");
  }
}

export function inicializarFiltros() {
  document
    .getElementById("exibir-todos")
    .addEventListener("click", exibirTodos);
  document
    .getElementById("exibir-produto")
    .addEventListener("click", esconderServico);
  document
    .getElementById("exibir-servico")
    .addEventListener("click", esconderProduto);
}