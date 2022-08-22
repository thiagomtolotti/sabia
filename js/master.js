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
          <a href="#"> \
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
        <a href="#"> \
          <img src="img/Reduzido_MonoBranco.png" alt=""> \
        </a> \
      </div> \
      <div class="close-icon" onclick="closeMenu()">X</div> \
  </nav>`;

  document.body.insertAdjacentHTML("afterbegin", nav);
}

renderNav()

/*
TODO
- JSON Populate
*/
