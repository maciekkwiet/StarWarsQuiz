class Modal {
  constructor(id) {
    this.render(id);
    window.addEventListener('click', this.closeModalOutside)
  }

  renderContent(id) {
    const modalBox = document.getElementById(`${id}`);
    const close = document.createElement('span');
    const modalSummoner = document.getElementById('modalSummoner');

    close.setAttribute('class', 'close');
    close.innerHTML = '&times;';
    close.addEventListener('click', this.closeModal);

    modalBox.appendChild(close);

    modalSummoner.addEventListener('click', this.openModal);
  }

  closeModal() {
    modal.style.display = "none";
    location.reload();
  }

  closeModalOutside(e) {
    e.target === modal ? modal.style.display = 'none' : null;
  }

  openModal() {
    modal.style.display = "block";
  }

  render(id) {
    this.renderContent(id);
  }
};

export default Modal;