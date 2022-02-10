let coin;
let button = document.getElementById("flipButton");
let results = document.getElementById("results");
let resultsData = document.createElement("td");
let resultsRow = document.createElement("tr");
// let tableRow = document.createElement("tr");
// let tableData = document.createElement("td");
// switch (coin){
//     case 1: 
//         return "HEADS";
//     case 2:
//         return "TAILS";
// }
let userCoins = document.getElementById("numberOfCoins");
let numberOfCoins;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

userCoins.addEventListener("blur", (e) => {
    numberOfCoins = e.target.value;
    console.log(numberOfCoins)
});
button.addEventListener("click", (e) => {
    e.preventDefault();
    let numHeads = 0;
    let numTails = 0;
    for (let i = 0; i < numberOfCoins; i++) {
        let tableData = document.createElement("td");
        let tableRow = document.createElement("tr");
        if (Math.floor(getRandomInt(2) == 1)) {
            coin = "HEADS";
            numHeads += 1;
        } else {
            coin = "TAILS"
            numTails += 1;
        }
//        coin = Math.floor(getRandomInt(2)); // Should return 0 or 1
        let coinNumber = i + 1;
        tableData.innerText = `Coin ${coinNumber} is ${coin}`;
        tableRow.appendChild(tableData);
        results.appendChild(tableRow);
        // console.log(coinNumber, coin);
    }
    resultsData.innerText = `You had ${numHeads} Heads and ${numTails} Tails out of ${numberOfCoins} coins`
    resultsRow.appendChild(resultsData);
    results.appendChild(resultsRow);

    // console.log("Done");
  }
);
