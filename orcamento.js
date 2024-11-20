import { catalogo, lerLocalStorage } from "./src/utilidades";

function calcularTotal() {
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
  let precoTotal = 0;

  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    const produto = catalogo.find((p) => p.id === idProduto);
    precoTotal += produto.preco * idsProdutoCarrinhoComQuantidade[idProduto];
  }

  return precoTotal.toFixed(2); 
}

function desenharOrcamentoFinal() {
  console.log(function desenharOrcamentoFinal() {
    console.log("Função desenharOrcamentoFinal chamada");
    
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
    console.log("Carrinho:", idsProdutoCarrinhoComQuantidade); 
    
    const containerOrcamento = document.getElementById("lista-orcamento");
    if (!containerOrcamento) {
      console.error("Elemento com ID 'lista-orcamento' não encontrado!");
      return;
    }
    
    containerOrcamento.innerHTML = ""; 
  
  }
  );
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
  const containerOrcamento = document.getElementById("lista-orcamento"); 
  containerOrcamento.innerHTML = "";


  const titulo = document.createElement("h2");
  titulo.innerText = "Relatório Final do Orçamento";
  titulo.classList.add("text-2xl", "font-bold", "mb-4");
  containerOrcamento.appendChild(titulo);

  const produtos = [];
  const servicos = [];

  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    const produto = catalogo.find((p) => p.id === idProduto);
    if (produto.servico) {
      servicos.push(produto);
    } else {
      produtos.push(produto);
    }
  }

  if (produtos.length > 0) {
    const tituloProdutos = document.createElement("h3");
    tituloProdutos.innerText = "Produtos:";
    tituloProdutos.classList.add("text-xl", "font-bold", "mt-4");
    containerOrcamento.appendChild(tituloProdutos);

    produtos.forEach((produto) => {
      const quantidade = idsProdutoCarrinhoComQuantidade[produto.id];
      const produtoElemento = document.createElement("div");
      produtoElemento.classList.add("flex", "justify-between", "my-2");

      produtoElemento.innerHTML = `
        <span>${produto.nome} (x${quantidade})</span>
        <span>R$ ${Number(produto.preco * quantidade).toFixed(2)}</span>
      `;

      containerOrcamento.appendChild(produtoElemento);
    });
  }


  if (servicos.length > 0) {
    const tituloServicos = document.createElement("h3");
    tituloServicos.innerText = "Serviços:";
    tituloServicos.classList.add("text-xl", "font-bold", "mt-4");
    containerOrcamento.appendChild(tituloServicos);

    servicos.forEach((servico) => {
      const quantidade = idsProdutoCarrinhoComQuantidade[servico.id];
      const servicoElemento = document.createElement("div");
      servicoElemento.classList.add("flex", "justify-between", "my-2");

      servicoElemento.innerHTML = `
        <span>${servico.nome} (x${quantidade})</span>
        <span>R$ ${Number(servico.preco * quantidade).toFixed(2)}</span>
      `;

      containerOrcamento.appendChild(servicoElemento);
    });
  }
 
const botaoEncaminharOrcamento = document.getElementById("btn-encaminhar-orcamento");

if (botaoEncaminharOrcamento) {
  botaoEncaminharOrcamento.addEventListener("click", () => {
    
    window.location.href = "./confirmacaoOrcamento.html";
  });
}

  const totalContainer = document.createElement("div");
  totalContainer.classList.add("flex", "justify-between", "border-t", "border-gray-400", "mt-4", "pt-4");
  totalContainer.innerHTML = `
    <strong>Total:</strong>
    <strong>R$ ${calcularTotal()}</strong>
  `;
  containerOrcamento.appendChild(totalContainer);
}

window.addEventListener("load", desenharOrcamentoFinal);

