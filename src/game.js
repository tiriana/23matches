"use strict";

const player = {
    name: "Dummy",
    makeMove: ({ onTable }) => ({ take: 1 })
};

const runGame = (players = [], initial = 23, maxTake = 3) => {

    const validMoves = [...Array(maxTake)].map((e, i) => i + 1);

    let onTable = initial;
    let iteration = 0;

    const isValidMove = howMany => validMoves.indexOf(howMany) !== -1;
    const isFinished = () => onTable <= 0
    const getGameInfo = () => ({ onTable });

    const runMatch = () => {
        let playerNum;
        let playerName;
        while (!isFinished()) {
            playerNum = iteration % players.length;
            playerName = players[playerNum].name || "Player " + (playerNum + 1);
            const { take } = players[playerNum].makeMove(getGameInfo());

            if (!isValidMove(take)) {
                console.log(take + " is not a valid move.");

                break;
            }

            onTable -= take;

            console.log(playerName + " took " + take + ". On table: " + onTable);

            iteration ++;
        }

        console.log(initial + " - " + playerName + " LOST");

        return playerNum;
    }

    return runMatch();
}

module.exports = {
    runGame
}
