class Modal {
  constructor(id, content) {
    this.render(id, content);
  }

  renderContent(id, content) {
    const modal = document.getElementById(`${id}`);
    const modalBox = document.createElement('div');
    const close = document.createElement('span');
    const modalContent = document.createElement('div');
    const modalSummoner = document.getElementById('modalSummoner');
    
    modalBox.setAttribute('class', 'modalBox');
    close.setAttribute('class', 'close');
    modalContent.setAttribute('class', 'modalContent');
    
    close.innerHTML = '&times;';
    modalContent.innerHTML = content;
    
    modal.appendChild(modalBox);
    modalBox.appendChild(close);
    modalBox.appendChild(modalContent);

    modalSummoner.addEventListener('click', this.openModal);

    close.addEventListener('click', this.closeModal);

    window.addEventListener('click', this.closeModalOutside)
  }

  closeModal() {
    modal.style.display = "none";
  }

  closeModalOutside(e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  }

  openModal() {
    modal.style.display = "block";
  }

  render(id, content) {
    this.renderContent(id, content);
  }
};

export default Modal;