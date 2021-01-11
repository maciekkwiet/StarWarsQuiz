export class ComputerPlayer {
    constructor(answerSelectedCallback) {
        this.answerSelectedCallback = answerSelectedCallback;
    }
    askQuestion(answersList) {
        const selectedAnswerIndex = Math.floor(Math.random() * 4);
        const selectedAnswer  = answersList[selectedAnswerIndex];
        this.answerSelectedCallback(selectedAnswer);
    }
}

export default ComputerPlayer;
