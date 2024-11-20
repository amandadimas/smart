export const catalogo = [
  {
    id: "1",
    marca: "Alarme",
    nome: "Instalação de Alarme de Segurança",
    preco: 0,
    imagem: "alarme2.jpeg",
    servico: true,
  },
  {
    id: "2",
    marca: "Antena",
    nome: "Instalação de Antenas",
    preco: 0,
    imagem: "antena.jpeg",
    servico: true,
  },
  {
    id: "3",
    marca: "Câmera",
    nome: "Instalação de câmera de Segurança",
    preco: 0,
    imagem: "camera.jpeg",
    servico: true,
  },
  {
    id: "4",
    marca: "Intelbras",
    nome: "Câmera VHL 1120 B HD 720p Sensor 1/2.7 Lente 3.6mm HDCVI Lite Menu OSD 20M IR - 1120B",
    preco: 125,
    imagem: "cameraSeguranca.jpeg",
    produtoComprar: true,
  },
  {
    id: "5",
    marca: "Intelbras",
    nome: "Sensor De Abertura S/ Fio Msa 1001",
    preco: 75,
    imagem: "sensorAbertura.jpeg",
    produtoComprar: false,
  },
  {
    id: "6",
    marca: "Para-raios",
    nome: "Instalação de Para-raios",
    preco: 0,
    imagem: "paraRaios.jpeg",
    servico: true,
  },
  {
    id: "7",
    marca: "Intelbras",
    nome: "Sensor Infravermelho Passivo IVP Com Fio - 3000 Cf",
    preco: 45,
    imagem: "sensor.jpeg",
    produtoComprar: false,
  },
  {
    id: "8",
    marca: "Eletricista",
    nome: "Serviço de Eletricista Residencial",
    preco: 0,
    imagem: "eletricista.jpeg",
    servico: true,
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
  localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(
  idProduto,
  idContainerHtml,
  quantidadeProduto
) 

{
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById(idContainerHtml);

  const elementoArticle = document.createElement("article"); 
  const articleClasses = [
    "flex",
    "bg-stone-200",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
    "w-96",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }
  const cartaoProdutoCarrinho = `
    <img
      src="./assets/img/${produto.imagem}"
      alt="Carrinho: ${produto.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${produto.nome}
      </p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
    </div>`;
    
 

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
  
}