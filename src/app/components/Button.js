class Button {
    constructor(id, content) {
        this.render(id, content);
      }
    
      renderContent(id, content) {
        const container = document.querySelector(`#${id}`);
        const buttonContent = document.createElement('button');
        buttonContent.setAttribute('class', 'play-button');
        const text = container.appendChild(buttonContent);
        text.innerHTML = content;
      }
    
      render(id, content) {
        this.renderContent(id, content);
      }
}

export default Button;