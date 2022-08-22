const key = "videos"

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
        let modal = `<a href="${this.link}"> \
            <div class="modal-download"> \
                <h2>${this.titulo}</h2> \
                <p>${this.crimeName}</p> \
                <img src="${this.imgPath}" alt=""> \
                <a href="${this.linkDownload}"> \
                    <img src="img/download_icon.svg" alt="" class="download-icon"> \
                </a> \
            </div> \
        </a>`

		document.querySelector("#modal-container").insertAdjacentHTML("beforeend", modal)
    }
}

fetch("js/downloads.json")
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < 10; i++){
            let obj = {
                title: `Crime ${i+1}`,
                crimeName: data.crimes[i],
                imgPath: `img/crime_${i+1}.png`,
                link: data[key].links[i],
                linkDownload: data[key].linksDownload[i]
            }

            new Modal(obj)
        }
    })