export const catalogo = [
  {
    id: "1",
    marca: "Movimento",
    nome: "Motor Basculante 220v 1/4 BM12 Calha 1,50m com 2 Controles",
    preco: 1150,
    imagem: "motor_basculante.jpeg", 
    produtoComprar: true,
  },
  {
    id: "2",
    marca: "Intelbras",
    nome: "Sensor de Presença para Iluminação ESPI 360 A Branco",
    preco: 35,
    imagem: "sensor_presenca_branco.jpeg", 
    produtoComprar: true,
  },
  {
    id: "3",
    marca: "Intelbras",
    nome: "Sensor De Presença Espi 360 Para Iluminação",
    preco: 35,
    imagem: "sensor_presenca_iluminacao.jpeg", 
    produtoComprar: true,
  },
  {
    id: "4",
    marca: "Intelbras",
    nome: "Sensor Infravermelho Passivo IVP Com Fio - 3000 Cf",
    preco: 45,
    imagem: "sensor_presenca_infravermelho.jpeg", 
    produtoComprar: true,
  },
  {
    id: "5",
    marca: "Intelbras",
    nome: "Sensor De Abertura S/ Fio Msa 1001", 
    preco: 75,
    imagem: "sensorAbertura.jpeg", 
    produtoComprar: true,
  },
  {
    id: "6",
    marca: "Intelbras",
    nome: "Vídeo Porteiro Wi-Fi Allo W3",
    preco: 480,
    imagem: "video_porteiro.jpeg", 
    produtoComprar: true,
  },
  {
    id: "7",
    marca: "Intelbras",
    nome: "Interfone Inteligente com Câmera e Áudio Wi-Fi - Visão Noturna e Sem Fio",
    preco: 140,
    imagem: "interfone.jpeg", 
    produtoComprar: true,
  },
  {
    id: "8",
    marca: "Intelbras",
    nome: "Videoporteiro Wi-fi Allo wT7 Lite",
    preco: 1400,
    imagem: "video_porteirowt7.jpeg", 
    produtoComprar: true,
  },
  {
    id: "9",
    marca: "Marca Movimento",
    nome: "Motor Portão Deslizante 220v DM08",
    preco: 900,
    imagem: "MOTOR.jpeg", 
    produtoComprar: true,
  },
{
    id: "10",
    marca: "Alarme",
    nome: "Instalação de Alarme de Segurança",
    preco: 0,
    imagem: "alarme2.jpeg", 
    servico: true,
  },
  {
    id: "11",
    marca: "Antena",
    nome: "Instalação de Antenas",
    preco: 0,
    imagem: "antena.jpeg", 
    servico: true,
  },
  {
    id: "12",
    marca: "Câmera",
    nome: "Instalação de câmera de Segurança",
    preco: 0,
    imagem: "camera.jpeg", 
    servico: true,
  },
  {
    id: "13",
    marca: "Intelbras",
    nome: "Sensor De Abertura S/ Fio Msa 1001",
    preco: 75,
    imagem: "sensorAbertura.jpeg", 
    produtoComprar: false,
  },
  {
    id: "14",
    marca: "Para-raios",
    nome: "Instalação de Para-raios",
    preco: 0,
    imagem: "paraRaios.jpeg", 
    servico: true,
  },
  {
    id: "15",
    marca: "Eletricista",
    nome: "Serviço de Eletricista Residencial",
    preco: 0,
    imagem: "eletricista.jpeg", 
    servico: true,
  },
{
    id: "16",
    marca: "Intelbras",
    nome: "Câmera VHL 1120 B HD 720p Sensor 1/2.7 Lente 3.6mm HDCVI Lite Menu OSD 20M IR - 1120B",
    preco: 125,
    imagem: "camera_sensor.jpeg", 
    produtoComprar: true,
  },
{
    id: "17",
    marca: "Intelbras",
    nome: "Câmera Infravermelho Multi Hd VHD 1220 D G7",
    preco: 160,
    imagem: "camera_infravermelho_multi.jpeg", 
    produtoComprar: true,
  },
{
    id: "18",
    marca: "Intelbras",
    nome: "Kit Cftv 4 Cameras Segurança 1080p Full Hd Dvr 4ch",
    preco: 950,
    imagem: "kit4_cameras.jpeg", 
    produtoComprar: true,
  },
{
    id: "19",
    marca: "Intelbras",
    nome: "Kit Cftv 6 Cameras Segurança 1080p Full Hd Dvr 1TB",
    preco: 1300,
    imagem: "kit6_cameras.jpeg", 
    produtoComprar: true,
  },
{
    id: "20",
    marca: "Intelbras",
    nome: "Kit Cftv 10 Câmeras Segurança Full Hd 1080 Dvr 2TB",
    preco: 1900,
    imagem: "kit10_cameras.jpeg", 
    produtoComprar: true,
  },
{
    id: "21",
    marca: "Intelbras",
    nome: "DVR 8 Canais MHDX 1008-C - Multi HD - IP, HDCVI, HDTVI e AHD - ONVIF",
    preco: 650,
    imagem: "dvr8.jpeg", 
    produtoComprar: true,
  },
{
    id: "22",
    marca: "Intelbras",
    nome: "Kit de Alarme AMT 2018 E com 13 Sensores com Monitoramento Por Aplicativo via Internet",
    preco: 1600,
    imagem: "kit_alarme.jpeg", 
    produtoComprar: true,
  },
{
    id: "23",
    marca: "Intelbras",
    nome: "Sirene Sir 1000 105 Db Sistema de Segurança",
    preco: 45,
    imagem: "sirene.jpeg", 
    produtoComprar: true,
  },
{
    id: "24",
    marca: "Intelbras",
    nome: "Bateria Selada para Central de Alarme 7A - 12V",
    preco: 85,
    imagem: "bateria_selada.jpeg",
    produtoComprar: true,
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