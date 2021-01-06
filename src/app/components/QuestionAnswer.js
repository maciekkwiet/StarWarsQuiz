class QuestionAnswer {
  constructor(id, answers, correctAnswer) {
    this.renderContent(answers, id);
  }

  renderContent(answers, id) {
    answers.forEach(answer => {
      const container = document.querySelector(`${id}`);
      const btn = document.createElement('button');
      const answerBtn = container.appendChild(btn)
      answerBtn.innerHTML = answer;
    });
  }
}