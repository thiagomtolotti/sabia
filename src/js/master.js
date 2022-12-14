function showMenu(){
  document.querySelector("#navbar").style.left = 0
}

function closeMenu(){
    document.querySelector("#navbar").style.left = "-120vw"
}

function renderNav(){
  let nav = `<nav id="navbar"> \
      <div class="container"> \
        <ul> \
          <a href="./index.html"> \
            <li>Home</li> \
          </a> \
          <a href="https://apps.tre-pr.jus.br/files/outros/tre-pr-cartilha-voce-sabia-sabaia-v3-29082022.pdf" target="_blank"> \
            <li>Cartilha</li> \
          </a> \
          <a href="./videos.html"> \
            <li>Vídeos</li> \
          </a> \
          <a href="./sonoras.html"> \
            <li>Sonoras</li> \
          </a> \
          <a href="./cards.html"> \
            <li>Cards</li> \
          </a> \
        </ul> \
        <a href="https://www.tre-pr.jus.br"> \
          <img src="dist/img/Reduzido_MonoBranco.webp" alt="Logotipo do TRE-PR em branco"> \
        </a> \
      </div> \
      <div class="close-icon" onclick="closeMenu()">X</div> \
  </nav> \
  <nav id="mobile-nav"> \
      <img src="dist/img/menu.svg" alt="Ícone de menu 'Hamburguer'" class="icon" id="menu-mobile" onclick="showMenu()"> \
      <img src="dist/img/Reduzido_MonoBranco.webp" alt="Logotipo do TRE-PR em branco" class="logo"> \
    </nav>`;

  document.body.insertAdjacentHTML("afterbegin", nav);
}

renderNav()

// Adicionar footer
function renderFooter(){
  let footer = `<footer> \
    <div class=""> \
      <p>Contato: <a href="mailto:liods@tre-pr.jus.br" target="_blank">liods@tre-pr.jus.br</a></p> \
      <p><strong>2022</strong></p> \
      <p><strong>Tribunal Regional Eleitoral do Paraná</strong></p> \
      <p>Rua João Parolin, 224 - Prado Velho - Curitiba - PR<br>CEP 80.220-290 - Telefone (41) 3330-8880</p> \
      <div class="cc"> \
        <img src="dist/img/icons/cc.svg">\
        <p>Essa obra está sob licença Creative Commons BY-NC-ND, o que quer dizer que você pode compartilhar, distribuir e transmitir a obra contanto que: atribua a autoria original, não a utilize para fins comerciais e não altere, transforme ou crie em cima do trabalho original.</p>\
      </div>
    </div> \
    <div class="logos"> \
      <a href="https://www.instagram.com/treparana/" target="_blank"> \
        <img src="dist/img/icons/Instagram.webp" alt="Logotipo do instagrm em branco" width="38px"> \
      </a> \
      <a href="https://pt-br.facebook.com/treparana" target="_blank"> \
        <img src="dist/img/icons/Facebook.webp" alt="Logotipo do Facebook em branco" width="38px"> \
      </a> \
      <a href="https://www.tiktok.com/@tre_pr" target="_blank"> \
        <img src="dist/img/icons/Tiktok.webp" alt="Logotipo do Tiktok em branco" width="38px"> \
      </a> \
      <a href="https://tre-pr.jus.br/" target="_blank"> \
        <img src="dist/img/icons/Website.webp" alt="Ícone representando a internet em branco" width="38px"> \
      </a> \
    </div> \
    <div class="container"> \
      <div class="credito-container"> \
        <h3>Projeto</h3> \
        <div class="credito"> \
          <p>LIODS Pinha de Ideias - Coordenadoria de Inovação e Sustentabilidade</p> \
          <p>Produção</p> \
        </div> \
        <div class="credito"> \
          <p>Simone Hembecker - Seção de Comunicação Visual</p> \
          <p>Argumento, projeto gráfico, ilustração, vídeos animados</p> \
        </div> \
        <div class="credito"> \
            <p>Thiago Miquelleto Tolotti - Seção de Comunicação Visual</p> \
            <p>Website - Projeto Visual e Web</p> \
        </div> \
        <div class="credito"> \
            <p>Núcleo de Portais Web</p> \
            <p>Website - Publicação</p> \
        </div> \
        <div class="credito"> \
          <p>Assessoria Jurídica da Presidência</p> \
          <p>Revisão Jurídica</p> \
        </div> \
      </div> \
      <div class="credito-container"> \
        <h3>Sonoras</h3> \
        <div class="credito"> \
          <p>Seção de Audiovisual</p> \
          <p>Produção</p> \
        </div> \
        <div class="credito"> \
          <p>Beatriz Melo</p> \
          <p>Claudia Afanio</p> \
          <p>Dirceu Wolff dos Santos Lima Junior</p> \
          <p>Helton Sanchez</p> \
          <p>Luciano Eduardo França</p> \
          <p>Paulo Cezar Ribeiro</p> \
          <p>Simone Hembecker</p> \
          <p>Sinter Maiki de C. M. e Santana</p> \
          <p>Valcir Mombach</p> \
          <p>Vilmar Chequeleiro</p> \
          <p>Vozes</p> \
        </div> \
        <div class="credito"> \
          <p>Banda Fora da Pauta – TRE-PR</p> \
          <p>Música</p> \
        </div> \
      </div> \
    </div> \
  </footer>`

  document.body.insertAdjacentHTML("beforeend", footer);
}

renderFooter();
