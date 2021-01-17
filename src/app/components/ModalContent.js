import { getLocalStorage, setLocalStorage, scoreCheck } from '../LocalStorage'

export default class GameOverScreen {
  constructor(answers, closeWindow, id, gameMode) {
    this.render(answers, closeWindow, id, gameMode);
  }

  contentRender(answers, closeWindow, id, gameMode) {
    const modalBox = document.querySelector(`#${id}`);
    this.renderHeaders(modalBox, answers);
    this.renderTable(modalBox, answers);
    this.renderFormArea(modalBox);
    this.renderButton(modalBox, closeWindow, answers, gameMode);
  }

  render(answers, closeWindow, id, gameMode) {
    this.contentRender(answers, closeWindow, id, gameMode);
  }

  checkWhoWon(player1Answers, player2Answers, allAnswers) {

    if (player1Answers > player2Answers) {
      return `The force is strong in you young Padawan! During 1 minute you have answered ${player1Answers}/${allAnswers.length} questions. And Computer quessed ${player2Answers}/${allAnswers.length}.`
    } else if (player1Answers < player2Answers) {
      return `The force is strong in Computer! During 1 minute Computer quessed ${player2Answers}/${allAnswers.length} questions. And You ${player1Answers}/${allAnswers.length}.`
    } else {
      return `During 1 minute you and Computer quessed ${player2Answers}/${allAnswers.length} questions.`
    }
  }

  renderHeaders(modalBox, answers) {
    this.playerCorrectAnswers = answers.reduce(function (a, b) {
      if (b.playerAnswerIsCorrect === true) {
        return a + 1;
      } else {
        return a;
      }
    }, 0);
    this.computerCorrectAnswers = answers.reduce(function (a, b) {
      if (b.computerAnswerIsCorrect === true) {
        return a + 1;
      } else {
        return a;
      }
    }, 0);
    const gameOverCaption = document.createElement('span');
    modalBox.appendChild(gameOverCaption);
    gameOverCaption.innerHTML = "game over";
    gameOverCaption.classList.add("game-over");

    const finalComment = document.createElement('p');
    modalBox.appendChild(finalComment);
    finalComment.innerHTML = this.checkWhoWon(this.playerCorrectAnswers, this.computerCorrectAnswers, answers);
    finalComment.classList.add("final-comment");

    const tableName = document.createElement('p');
    modalBox.appendChild(tableName);
    tableName.innerHTML = "Detailed answers:";
    tableName.classList.add("table-name");
  }

  renderTable(modalBox, answers) {
    const summary = document.createElement('div');
    modalBox.appendChild(summary);
    summary.classList.add("summary");

    const picture = document.createElement('img');
    picture.src = "../../static/assets/img/modes/MasterYoda.png";
    summary.appendChild(picture);
    picture.classList.add("yodaPicture");

    const table = document.createElement('div');
    summary.appendChild(table);
    table.classList.add("grid-table");

    const tHeaderColumn1 = document.createElement('span');
    table.appendChild(tHeaderColumn1);
    tHeaderColumn1.classList.add("table-header");

    const tHeaderColumn2 = document.createElement('span');
    table.appendChild(tHeaderColumn2);
    tHeaderColumn2.innerHTML = "You";
    tHeaderColumn2.classList.add("table-header");

    const tHeaderColumn3 = document.createElement('span');
    table.appendChild(tHeaderColumn3);
    tHeaderColumn3.innerHTML = "Computer";
    tHeaderColumn3.classList.add("table-header");

    const tHeaderColumn4 = document.createElement('span');
    table.appendChild(tHeaderColumn4);
    tHeaderColumn4.innerHTML = "Answer";
    tHeaderColumn4.classList.add("table-header");

    for (let i = 0; i < answers.length; i++) {
      const tableRowColumn1 = document.createElement('span');
      table.appendChild(tableRowColumn1);

      const question = document.createElement('img');
      question.src = answers[i].questionPicture;
      tableRowColumn1.appendChild(question);
      question.classList.add("img-row")

      const playerAnswer = document.createElement('span');
      table.appendChild(playerAnswer);
      playerAnswer.innerHTML = answers[i].playerAnswer

      const computerAnswer = document.createElement('span');
      table.appendChild(computerAnswer);
      computerAnswer.innerHTML = answers[i].computerAnswer

      if (answers[i].playerAnswerIsCorrect === true) {
        playerAnswer.classList.add("correct-answer");
      } else {
        playerAnswer.classList.add("incorrect-answer");
      }

      if (answers[i].computerAnswerIsCorrect === true) {
        computerAnswer.classList.add("correct-answer");
      } else {
        computerAnswer.classList.add("incorrect-answer");
      }
      const correctAnswer = document.createElement('span');
      table.appendChild(correctAnswer);
      correctAnswer.innerHTML = answers[i].correctAnswer
    }
  }
  renderFormArea(modalBox) {
    const formContainer = document.createElement('div');
    modalBox.appendChild(formContainer);
    formContainer.classList.add("form-name");

    const form = document.createElement('form');
    formContainer.appendChild(form);
    form.classList.add("form-box")

    this.input = document.createElement('input');
    form.appendChild(this.input);
    this.input.classList.add("input-window")
    this.input.setAttribute('type', 'text')
    this.input.setAttribute('id', 'inputContent');
    this.input.setAttribute('name', 'playerName');
    this.input.setAttribute('required', '');
    this.input.required = true;

    const description = document.createElement('p');
    formContainer.appendChild(description);
    description.innerHTML = 'Please fill your name in order to receive eternal glory in whole Galaxy!';
    description.classList.add("form-description");
  }

  renderButton(modalBox, closeWindow, answers, gameMode) {
    const playerScore = `${this.playerCorrectAnswers}/${(answers.length)}`;
    const button = document.createElement('button');
    modalBox.appendChild(button);
    button.innerHTML = "may the force be with you";
    button.classList.add("modal-button");
    button.addEventListener("click", () => {
      const form = document.querySelector('form');
      if (form.checkValidity() === true) {
        const formData = new FormData(form);
        const playerName = formData.get('playerName');
        const actualLocalStorage = getLocalStorage(gameMode);
        if (scoreCheck(actualLocalStorage, 8, 8)) {
          setLocalStorage(actualLocalStorage, gameMode, playerName, 6, 8)
        }
        closeWindow(this.input.value, playerScore); // Fix needed
      } else {
        document.querySelector("form").reportValidity()
      }
    });
  }
}
