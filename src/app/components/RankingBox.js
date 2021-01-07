export class RankingBox {
    constructor(id, scores) {
      this.render(id, scores);
    }

    render(id, scores) {
        const rankingBoxContainer = document.querySelector(`#${id}`);
        this.renderHeader(rankingBoxContainer);
        this.renderTable(scores, rankingBoxContainer);
    }

    numberToOrdinal(number) { 
        switch (number) {
            case 1:
                return "1st";
            case 2:
                return "2nd";
            case 3:
                return "3rd";
        }
    }

    renderHeader(rankingBoxContainer) {
        const rankingHeader = document.createElement('div');
        rankingBoxContainer.appendChild(rankingHeader);
        rankingHeader.classList.add("ranking-header");
        
        const logoImg = document.createElement('img');
        logoImg.src = '../../static/assets/img/modes/icons/contacts_24px.png'
        logoImg.classList.add("ranking-img");
        rankingHeader.appendChild(logoImg);

        const spanText = document.createElement('span')
        rankingHeader.appendChild(spanText);
        spanText.innerHTML = "Mode Ranking";
    }

    renderTable(scores, rankingBoxContainer) {
        const rankingTable = document.createElement('table');
        rankingBoxContainer.appendChild(rankingTable);
        rankingTable.classList.add("ranking-table");

        const tableHeaderRow = document.createElement('tr');
        rankingTable.appendChild(tableHeaderRow);

        const tableHeaderFirst = document.createElement('th');
        tableHeaderRow.appendChild(tableHeaderFirst);
        tableHeaderFirst.innerHTML = "Place";
        tableHeaderFirst.classList.add("first-column");

        const tableHeaderSecond = document.createElement('th');
        tableHeaderRow.appendChild(tableHeaderSecond);
        tableHeaderSecond.innerHTML = "Player";
        tableHeaderSecond.classList.add("second-column");
        
        const tableHeaderThird= document.createElement('th');
        tableHeaderRow.appendChild(tableHeaderThird);
        tableHeaderThird.innerHTML = "Answered";
        tableHeaderThird.classList.add("third-column");

        for (let i=0; i < scores.length; i++) {
            const tableRow = document.createElement('tr');
            rankingTable.appendChild(tableRow);

            const tableData1 = document.createElement('td');
            tableRow.appendChild(tableData1);

            tableData1.innerHTML = this.numberToOrdinal(i+1);
            const tableData2 = document.createElement('td');
            tableRow.appendChild(tableData2);

            tableData2.innerHTML = scores[i].player;
            const tableData3 = document.createElement('td');

            tableRow.appendChild(tableData3);
            tableData3.innerHTML = scores[i].correctAnswers+"/"+scores[i].allAnswers;
        }
    }
}
