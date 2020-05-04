const peopleList = ["Ann Martin", "Bob Daniels", "Carl Johnson", "David Gray", "Emily Smith", "Frank Newcome", "Gary Borders", "Helen Garrison", "Isabel Adams", "Jay Boyd"];
const prizeList = ["$100 gift certificate", "$50 gift certificate", "winter scarf", "pair of fun sunglasses", "candy bar"];

const peopleContent = document.getElementById('peopleList');
const prizeContent = document.getElementById('prizeList');
const winner = document.getElementById('peopleWinner');
const prize = document.getElementById('prizeWinner');

peopleList.forEach(person => {
    peopleContent.innerHTML += `<li>${person}</li>`;
});

prizeList.forEach(prize => {
    prizeContent.innerHTML += `<li>a ${prize}</li>`;
});

let winnerName = peopleList[Math.round(Math.random() * 9)];
let prizeName = prizeList[Math.round(Math.random() * 4)];

winner.innerHTML = winnerName;
prize.innerHTML = `${winnerName} receives a ${prizeName}`;
