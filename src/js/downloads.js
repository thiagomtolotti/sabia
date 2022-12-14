class Modal {
    constructor(obj){
        this.titulo = obj.title;
        this.crimeName = obj.crimeName;
        this.imgPath = obj.imgPath;
        this.link = obj.link;
        this.downloadPath = obj.downloadPath;
        this.altTag = obj.altTag;

        this.render();
    }

    render(){
      let modal = `<div class='modal-download'>\
                      <a href="${this.link}" class="glightbox"> \
                        <div class="superior"> \
                            <h2>${this.titulo}</h2> \
                            <p>${this.crimeName}</p> \
                        </div> \
                        <div class="middle"> \
                            <img src="${this.imgPath}" alt='${this.altTag}'> \
                        </div> \
                        <div class="inferior"> \
                            <div class="botao"> \
                                <p>Assistir</p> \
                                <div class="play-icon"></div> \
                            </div> \
                            <div data-download='${this.downloadPath}' class="botao download" download> \
                                <p>Download</p> \
                                <div class="download-icon"></div> \
                            </div> \
                        </div> \
                      </a> \
                    </div>`;

  		document.querySelector("#modal-container").insertAdjacentHTML("beforeend", modal)
    }
}

if(data != "" && data!= null){
  for(let i = 0; i < data.crimes.length ; i++){
    let obj = {
        title: `Crime ${i+1}`,
        crimeName: data.crimes[i],
        imgPath: `dist/img/crimes/crime_${i+1}.webp`,
        altTag: data.altTag[i],
        link: '',
        downloadPath: '',
        extension: (key === "videos") ? ".mp4" : ".mp3"
    }

    if(key === "sonoras"){
        let index = ('0'+(i+1)).slice(-2)
        obj.link = `multimedia/iframes/iframe.html?id=${index}`
        obj.downloadPath = `https://www.justicaeleitoral.jus.br/audios/tre-pr-voce-sabia-sabia-sonora-${index}/@@download/file`
    }else if(key === "videos"){
        obj.link = data[key].links[i]
        if(i != 3){
          obj.downloadPath = `https://www.justicaeleitoral.jus.br/videos/tre-pr-crime-${i+1}-${obj.crimeName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll(" ", "-").toLowerCase()}/@@download/file`
        }else{
          obj.downloadPath = `https://www.justicaeleitoral.jus.br/videos/tre-prt-crime-${i+1}-${obj.crimeName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll(" ", "-").toLowerCase()}/@@download/file`
        }
    }

    new Modal(obj)
  }

  const lightbox = GLightbox();
  if(key === "sonoras"){
    lightbox.on('slide_after_load', ()=>{
        let iframe = document.querySelectorAll('.gslide.loaded:not(.current) iframe')

        iframe.forEach((iframe)=>{
            let audio = iframe.contentWindow.document.querySelector('audio')
            audio.pause();
        })
    })
    lightbox.on('slide_before_change',()=>{
        let slide = document.querySelector('.prev')
        let iframe = slide.querySelector('iframe').contentWindow.document

        iframe.querySelector('audio').pause()

        let nextSlide = lightbox.getActiveSlide()
        let nextIFrame = nextSlide.querySelector('iframe').contentWindow.document

        nextIFrame.querySelector('audio').play()
    })
  }

  // Permite baixar os arquivos sem abrir a lightbox
  document.querySelectorAll(".botao.download").forEach((botao)=>{
  botao.addEventListener("click",(event)=>{
    // Previne que o lightbox abra
    event.stopPropagation();
    event.preventDefault();

    // Pega o atributo data-download do HTML e redireciona para ele
    let downloadLink = event.target.closest('.download').getAttribute('data-download')
    window.open(downloadLink, "_blank");
  })
  })
}
