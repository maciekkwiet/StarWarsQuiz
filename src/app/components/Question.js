const fetch = require('node-fetch');

class Question {
    constructor(typeOfQuestion, howManyAnswers) {
        this._typeOfQuestion = typeOfQuestion;
        this._howManyAnswers = howManyAnswers;
        this._answers = [];
        this._rightAnswer = this._createRandomInt(howManyAnswers);
    }

    get answers() {
        return this._answers;
    }

    get rightAnswer() {
        return this._rightAnswer;
    }

    _getMaxId() {
        switch (this._typeOfQuestion) {
            case 'people':
                return 82;
            case 'starships':
                return 36;
            case 'vehicles':
                return 39;
        }
    }

    _createRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max) + 1)
    }

    _generateUrl(typeOfQuestion, id) {
        const baseUrl = process.env.SW_API_BASE_URL || 'https://swapi.dev/api/';
        return baseUrl + typeOfQuestion + '/' + id + '/';
    }

    async _addAnswer(id) {
        const response = await fetch(this._generateUrl(this._typeOfQuestion, id));
        if (response.ok) {
            const answer = await response.json();
            return answer;
        } else {
            return -1;
        }
    }

    async generateAnswers() {
        let i = 0;
        while (i < this._howManyAnswers) {
            let id = this._createRandomInt(this._getMaxId(this._typeOfQuestion));
            let answer = await this._addAnswer(id);
            if (answer !== -1 && !this._answers.includes(answer.name)) {
                this._answers.push(answer.name);
                i++;
            }
        }
    }

    async getImage(id) {

    }
}

const question = new Question('starships', 4);
question.generateAnswers().then(() => {
    console.log(question.answers);
});
console.log(question.rightAnswer);
