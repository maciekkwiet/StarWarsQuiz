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
        const saberLight = document.createElement('div');
        saberLight.classList.add('saber__light');
        saberContainer.appendChild(saberLight);
    }

    render(id) {
        this.contentRender(id);
    }
}

export default Lightsaber;