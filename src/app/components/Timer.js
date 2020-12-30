class Timer {
    constructor(time, id) {
        this.time = time;
        this.render(id);
    }
  
    contentRender(id) {
      const timerBox = document.querySelector(`#${id}`);
      this.paragraph = document.createElement('p');
      timerBox.appendChild(this.paragraph);
      this.paragraph.innerHTML = `Time Left: ${Math.floor((this.time)/60)}m ${(this.time)%60}s`;
    }

    render(id) {
        this.contentRender(id);
    }

    decrement() {
        if (this.time > 0) {
            this.time-- 
        }
        this.paragraph.innerHTML = `Time Left: ${Math.floor((this.time)/60)}m ${(this.time)%60}s`;
    }
}
  
  export default Timer;
