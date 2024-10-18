
function getNumberOfGames(teamsNumber) {
    let totalGames = 0;

    while (teamsNumber > 1) {
        if (teamsNumber % 2 === 0) {
            totalGames += teamsNumber / 2;
            teamsNumber = teamsNumber / 2;
        } else {
            totalGames += (teamsNumber - 1) / 2;
            teamsNumber = Math.floor(teamsNumber / 2) + 1;
        }
    }

    return totalGames;
}

let totalGamesAllTournaments = 0;

for (let i = 2; i <= 100; i++) {
    totalGamesAllTournaments += getNumberOfGames(i);
}

console.log(totalGamesAllTournaments);