function criarUsuarioNoLocalStorage(username, password) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    if (usuarios.some(user => user.username === username)) {
      alert('Usuário já existe');
      return;
    }

    const senhaHash = btoa(password); 
    usuarios.push({ username, password: senhaHash });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
    alert('Usuário criado com sucesso');
  }
  
  function autenticarUsuario(username, password) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuario = usuarios.find(user => user.username === username);
  
    if (!usuario) {
      return { success: false, message: 'Usuário não encontrado' };
    }

    if (usuario.password !== btoa(password)) { // Decrypta com 'atob' para comparar
      return { success: false, message: 'Senha incorreta' };
    }

    return { success: true, message: 'Login bem-sucedido', usuario };
  }
  
  function realizarLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const resultado = autenticarUsuario(username, password);
  
    if (resultado.success) {
      // Salva os dados do usuário autenticado, pode ser um token ou qualquer coisa
      localStorage.setItem('usuarioAutenticado', JSON.stringify(resultado.usuario));
  
      // Redireciona para a página home
      window.location.href = './home.html';
    } else {
      alert(resultado.message);
    }
  }
  
  function realizarLogout() {
    localStorage.removeItem('usuarioAutenticado');
    alert('Você foi desconectado');
    window.location.href = './index.html';
  }
  
  function verificarLogin() {
    const usuarioAutenticado = localStorage.getItem('usuarioAutenticado');
    
    if (!usuarioAutenticado) {
      window.location.href = './index.html';
    }
  }
  
  function renderizarHistoricoPedidos() {
    const historico = JSON.parse(localStorage.getItem('historico')) || [];
    
    for (const pedidoComData of historico) {
      criarPedidoHistorico(pedidoComData);
    }
  }
  
  function criarPedidoHistorico(pedidoComData) {
    const elementoPedido = `
      <p class="text-xl text-bold my-4">
        ${new Date(pedidoComData.dataPedido).toLocaleDateString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <section id="container-pedidos-${pedidoComData.dataPedido}" class="bg-slate-300 p-3 rounded-md"></section>
    `;
  
    const main = document.getElementsByTagName("main")[0];
    main.innerHTML += elementoPedido;
  
    for (const idProduto in pedidoComData.pedido) {
      desenharProdutoCarrinhoSimples(
        idProduto,
        `container-pedidos-${pedidoComData.dataPedido}`,
        pedidoComData.pedido[idProduto]
      );
    }
  }

  renderizarHistoricoPedidos();
  