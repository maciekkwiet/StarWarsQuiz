class ComputerPlayer {
    askQuestion(answersList) {
        const selectedAnswerIndex = Math.floor(Math.random() * answersList.length);
        const selectedAnswer  = answersList[selectedAnswerIndex];
        return selectedAnswer;
    
    }
}

export default ComputerPlayer;
