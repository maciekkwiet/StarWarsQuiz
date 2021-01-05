class Lightsaber {
    constructor(time, id) {
        this.time = time;
        this.render(id);
    }

    contentRender(id) {
        const container = document.querySelector(`#${id}`);
        container.classList.add('saber');
        const pictureSrc = '../static/assets/ui/LightsaberHandle.png';
        const picture = document.createElement('img');
        picture.classList.add('saber__handle');
        picture.setAttribute('src', pictureSrc);
        container.appendChild(picture);
        const saberContainer = document.createElement('div');
        saberContainer.classList.add('saber__container');
        container.appendChild(saberContainer);
        this.saberLight = document.createElement('div');
        this.saberLight.classList.add('saber__light');
        saberContainer.appendChild(this.saberLight);
    }

    render(id) {
        this.contentRender(id);
    }

    progress(time) {
        if (this.time > 0) {
            this.time--;
            this.saberLight.style.width = ((this.time/time)*100) + '%';
        }
    }
}

export default Lightsaber;