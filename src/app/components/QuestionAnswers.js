class QuestionAnswers {
  constructor(id, answers, correctAnswer) {
    this.correctAnswer = answers[correctAnswer - 1];
    this.render(id, answers);
  }

  render(id, content) {
    this.renderContent(id, content);
  }

  renderContent(id, answers) {
    const container = document.querySelector(`${id}`);
    answers.forEach((answer) => {
      const btn = document.createElement('button');
      const answerBtn = container.appendChild(btn);
      answerBtn.innerHTML = answer;
      answerBtn.classList.add('answer');
    });
  }
};

export default QuestionAnswers;
