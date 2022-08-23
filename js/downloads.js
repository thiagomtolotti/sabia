class Modal {
    constructor(obj){
        this.titulo = obj.title;
        this.crimeName = obj.crimeName;
        this.imgPath = obj.imgPath;
        this.link = obj.link;
        this.linkDownload = obj.linkDownload;

        this.render();
    }

    render(){
      let modal = `<div class='modal-download'>\
                      <a href="${this.link}" class="glightbox"> \
                        <h2>${this.titulo}</h2>\
                        <p>${this.crimeName}</p>\
                        <img src='img/crime_1.png' alt=''>\
                        <a href='${this.linkDownload}'>\
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
                imgPath: `img/crime_${i+1}.png`,
                link: '',
                linkDownload: data[key].linksDownload[i]
            }

            if(key === "sonoras"){
                obj.link = '#aa'
            }else{
                obj.link = data[key].links[i]
            }

            new Modal(obj)
        }
        
        const lightbox = GLightbox();
    })