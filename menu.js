document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const closeButton = document.getElementById('close-button');
  const mainNav = document.getElementById('main-nav');
  const navUl = mainNav.querySelector('ul');
  const imagem1 = document.getElementById('image1');
  const imagem2 = document.getElementById('image2');

  // Função para atualizar a exibição do menu conforme o tamanho da tela
  const updateMenuDisplay = () => {
    if (window.innerWidth > 600) {
      mainNav.style.display = 'flex';
      navUl.style.display = 'flex';
      imagem1.style.display = 'block';
      imagem2.style.display = 'none';
    } else {
      imagem1.style.display = 'none';
      imagem2.style.display = 'block';
      mainNav.style.display = 'none';
      navUl.style.display = 'flex';
    }
  };

  // Troca o fundo do body conforme o tamanho da tela
  function trocafundo() {
    const fundo = document.body;
    if (window.innerWidth <= 480) {
      fundo.style.backgroundImage = "url('images/foda.webp')";
    } else {
      fundo.style.backgroundImage = "url('images/fundo222.webp')";
    }
  }

  // Exibe o menu ao clicar no botão hamburguer
  menuButton.addEventListener('click', () => {
    if (window.innerWidth <= 600) {
      mainNav.style.display = 'block';
      navUl.style.display = 'flex';
    }
  });

  closeButton.addEventListener('click', () => {
    if (window.innerWidth <= 600) {
      mainNav.style.display = 'none';
    }
  });

  window.addEventListener('resize', updateMenuDisplay);
  window.addEventListener('resize', trocafundo);
  updateMenuDisplay();
  trocafundo();
});

// Responsivo
function responsivo() {
  const paragrafo = document.getElementById("mensagem");
  const botao = document.getElementById("botao");
  if (window.innerWidth <= 600) {
    paragrafo.textContent = "Você está usando á versão mobile ;)";
    botao.style.backgroundColor = "yellow"; 
  } else {
    paragrafo.textContent = "Você está usando á versão desktop do site :)";
    botao.style.backgroundColor = "black";
  }
}
window.addEventListener("load", responsivo);
window.addEventListener("resize", responsivo);

// Exibe largura e altura da tela em tempo real
function larguraTela() {
  const info = document.getElementById('tela-info');
  if (info) {
    info.textContent = `Sua tela tem ${window.innerWidth} x ${window.innerHeight} pixels`;
  }
}
window.addEventListener('resize', larguraTela);
window.addEventListener('load', larguraTela);

