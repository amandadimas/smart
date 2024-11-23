import { atualizarPrecoCarrinho } from "./src/menuCarrinho";
import {
  apagarDoLocalStorage,
  desenharProdutoCarrinhoSimples,
  lerLocalStorage,
  salvarLocalStorage,
} from "./src/utilidades";

function obterDetalhesProduto(idProduto) {
  const produtos = lerLocalStorage("produtosDetalhes") ?? {};
  return produtos[idProduto] || null;
}

function desenharProdutosCheckout() {
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoCarrinhoSimples(
      idProduto,
      "container-produtos-checkout",
      idsProdutoCarrinhoComQuantidade[idProduto]
    );
  }
}

function calcularValorTotal() {
  atualizarPrecoCarrinho();

  // Obter o valor do serviço (orçamento) inserido pelo usuário
  const valorServico = parseFloat(
    document.getElementById("valor").value.replace(",", ".")
  ) || 0;

  // Obter o total calculado pelo atualizarPrecoCarrinho
  const precoCarrinho = document.getElementById("preco-total");
  const precoTotalCarrinho = parseFloat(precoCarrinho.innerText.replace('Total: R$', '').replace(',', '.'));

  // Somar o valor do orçamento com o total dos produtos
  const totalFinal = precoTotalCarrinho + valorServico;

  // Exibir o total final (produtos + serviço)
  precoCarrinho.innerText = `Total: R$ ${totalFinal.toFixed(2)}`;

  // Retornar o total final para ser utilizado no pedido
  return totalFinal;
}

// Função para finalizar a compra
function finalizarCompra(evento) {
  evento.preventDefault();

  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    alert("O carrinho está vazio!");
    return;
  }

  // Obter informações do cliente e orçamento
  const nomeCliente = document.getElementById("nome").value;
  const emailCliente = document.getElementById("email").value;
  const telefoneCliente = document.getElementById("telefone").value;
  const descricaoServico = document.getElementById("descricao-servico").value;
  const valorServico = parseFloat(document.getElementById("valor").value.replace(",", ".")) || 0;

  // Dados do pedido
  const dataAtual = new Date();
  const pedidoFeito = {
    dataPedido: dataAtual,
    pedido: idsProdutoCarrinhoComQuantidade,
    servicos: [{ nome: descricaoServico, preco: valorServico }],
    cliente: {
      nome: nomeCliente,
      email: emailCliente,
      telefone: telefoneCliente,
    },
    valorTotal: calcularValorTotal() // Agora a função retorna o valor total
  };

  // Atualiza o histórico de pedidos no localStorage
  const historicoDePedidos = lerLocalStorage("historico") ?? [];
  const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];
  salvarLocalStorage("historico", historicoDePedidosAtualizado);

  // Limpa o carrinho no localStorage
  apagarDoLocalStorage("carrinho");

  // Salva o pedido atual no localStorage para a tela de confirmação
  salvarLocalStorage("pedidoAtual", pedidoFeito);

  // Redireciona para a página de confirmação
  window.location.href = "./confirmacaoOrcamento.html";
}

// Inicializa a página
desenharProdutosCheckout();
calcularValorTotal();

// Adiciona eventos
document.getElementById("orcamento-form").addEventListener("submit", finalizarCompra);
document.getElementById("valor").addEventListener("input", calcularValorTotal);
