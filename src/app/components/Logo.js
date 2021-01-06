class Logo {
  constructor(id) {
    this.render(id);
  }

  contentRender(id) {
    const container = document.querySelector(`#${id}`);
    const pictureSrc = '../static/assets/ui/StarWarsLogo.png';
    const picture = document.createElement('img');
    container.classList.add('logo');
    picture.setAttribute('src', pictureSrc);
    picture.setAttribute('alt', 'Star Wars Logo');
    container.appendChild(picture);
  }

  render(id) {
    this.contentRender(id);
  }
}

export default Logo;