function showMenu(){
  document.querySelector("#navbar").style.left = 0
}

function closeMenu(){
    document.querySelector("#navbar").style.left = "-100vw"
}

function renderNav(){
  let nav = `<nav id="mobile-nav"> \
      <img src="img/menu.svg" alt="" class="icon" id="menu-mobile" onclick="showMenu()"> \
      <img src="img/Reduzido_MonoBranco.png" alt="" class="logo"> \
    </nav> \
    <nav id="navbar"> \
      <div class="container"> \
        <ul> \
          <a href="./index.html"> \
            <li>Home</li> \
          </a> \
          <a href="https://www.tre-pr.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tre-pr.jus.br/eleitor/sabia/arquivos/tre-pr-voce-sabia-sabia-cartilha/@@download/file/tre-pr-cartilha-voce-sabia-sabaia-v3.pdf" target="_blank"> \
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
          <img src="img/Reduzido_MonoBranco.png" alt=""> \
        </a> \
      </div> \
      <div class="close-icon" onclick="closeMenu()">X</div> \
  </nav>`;

  document.body.insertAdjacentHTML("afterbegin", nav);
}

renderNav()

// Adicionar footer
function renderFooter(){
  let footer = `<footer><div class=""> \
    <p><strong>2022</strong></p> \
    <p><strong>Tribunal Regional Eleitoral do Paraná</strong></p>
    <p>Rua João Parolin, 224 - Prado Velho - Curitiba - PR<br>CEP 80.220-290 - Telefone (41) 3330-8880</p> \
  </div> \

  <!-- Logos -->
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
      <h3>Sonoras de rádio</h3> \
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
  </div></footer>`

  document.body.insertAdjacentHTML("beforeend", footer);
}

renderFooter();

// TODO
/*
  - Adicionar footer em todas as páginas
*/
