export class RankingBox {
    constructor(id, scores) {
      this.render(id, scores);
    }
      
    renderContent(id, scores) {
        const rankingBoxContainer = document.querySelector(`#${id}`);

        let rankingHeader = document.createElement('div');
        rankingBoxContainer.appendChild(rankingHeader);
        rankingHeader.classList.add("ranking-header");
        
        let logoImg = document.createElement('img');
        logoImg.src = '../../static/assets/img/modes/icons/contacts_24px.png'
        logoImg.classList.add("ranking-img");
        rankingHeader.appendChild(logoImg);

        let spanText = document.createElement('span')
        rankingHeader.appendChild(spanText);
        spanText.innerHTML = "Mode Ranking";

        let rankingTable = document.createElement('table');
        rankingBoxContainer.appendChild(rankingTable);
        rankingTable.classList.add("ranking-table");

        let tableHeaderRow = document.createElement('tr');
        rankingTable.appendChild(tableHeaderRow);


        let tableHeaderFirst = document.createElement('th');
        tableHeaderRow.appendChild(tableHeaderFirst);
        tableHeaderFirst.innerHTML = "Place";
        tableHeaderFirst.classList.add("first-column");

        let tableHeaderSecond = document.createElement('th');
        tableHeaderRow.appendChild(tableHeaderSecond);
        tableHeaderSecond.innerHTML = "Player";
        tableHeaderSecond.classList.add("second-column");

        
        let tableHeaderThird= document.createElement('th');
        tableHeaderRow.appendChild(tableHeaderThird);
        tableHeaderThird.innerHTML = "Answered";
        tableHeaderThird.classList.add("third-column");

        for(let i=0; i < scores.length; i++) {
            let tableRow = document.createElement('tr');
            rankingTable.appendChild(tableRow);

            let tableData1 = document.createElement('td');
            tableRow.appendChild(tableData1);
            tableData1.innerHTML = this.numberToOrdinal(i+1);
            let tableData2 = document.createElement('td');
            tableRow.appendChild(tableData2);
            tableData2.innerHTML = scores[i].player;
            let tableData3 = document.createElement('td');
            tableRow.appendChild(tableData3);
            tableData3.innerHTML = scores[i].correctAnswers+"/"+scores[i].allAnswers;

        }
    
    }

    render(id, scores) {
        this.renderContent(id, scores);
    }

    numberToOrdinal(number){
        if (number === 1){
            return "1st";
        } else if (number === 2) {
            return "2nd";
        } else if (number === 3) {
            return "3rd";
        }
    }
}