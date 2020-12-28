class Timer {
    constructor(time, id) {
    this.render(time, id);
    }
  
    contentRender(time, id) {
      const timerBox = document.querySelector(`#${id}`);
      const timer = document.createElement('p');
      const text = timerBox.appendChild(timer);
      text.innerHTML = `Time Left: ${Math.floor(time/60)}m ${time%60}s`;
    }
  
    render(time, id) {
      this.contentRender(time, id);
    }
  }
  
  export default Timer;
