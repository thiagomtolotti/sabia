class Modal {
    constructor(obj){
        this.titulo = obj.title;
        this.crimeName = obj.crimeName;
        this.imgPath = obj.imgPath;
        this.link = obj.link;
        this.downloadPath = obj.downloadPath;
        this.crimeDownload = obj.crimeName.replaceAll(' ', '_') + obj.extension

        this.render();
    }

    render(){
      let modal = `<div class='modal-download'>\
                      <a href="${this.link}" class="glightbox"> \
                        <h2>${this.titulo}</h2>\
                        <p>${this.crimeName}</p>\
                        <img src='${this.imgPath}' alt=''>\
                        <a download='${this.crimeDownload}' href='${this.linkDownload}'>\
                            <img src='img/download_icon.svg' alt='' class='download-icon'>\
                        </a>\
                      </a>
                    </div>`;

  		document.querySelector("#modal-container .container").insertAdjacentHTML("beforeend", modal)
    }
}

fetch("js/downloads.json")
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.crimes.length ; i++){
            let obj = {
                title: `Crime ${i+1}`,
                crimeName: data.crimes[i],
                imgPath: `img/crimes/crime_${i+1}.jpg`,
                link: '',
                downloadPath: data[key].downloadPath[i],
                extension: (key === "videos") ? ".mp4" : ".mp3"
            }

            if(key === "sonoras"){
                let index = ('0'+(i+1)).slice(-2)
                obj.link = `multimedia/iframes/iframe.html?id=${index}`
            }else{
                obj.link = data[key].links[i]
            }

            new Modal(obj)
        }

        const lightbox = GLightbox();
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
    })

// TODO
// Popular downloadPath
