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

                let container = document.createElement('div')
                container.id = `sonora-container-${index}`
                container.classList.add('hidden')

                container.innerHTML = `
                    <img src="../img/bg-sonoras.jpeg">
                    <audio controls> \
                        <source src="https://www.justicaeleitoral.jus.br/audios/tre-pr-voce-sabia-sabia-sonora-${index}/@@streaming/file/tre-pr-sonora-voce-sabia-sabia-${index}.mp3"> \
                    </audio>`

                document.body.insertAdjacentElement('beforeend', container)

                obj.link = `multimedia/iframes/iframe.html `
            }else{
                obj.link = data[key].links[i]
            }

            new Modal(obj)
        }

        const lightbox = GLightbox();
    })

// TODO

//AUTOPLAY Audio no load do lightbox
