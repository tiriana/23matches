"use strict";

const rupert = {
    name: "Rupert",
    makeMove: ({ onTable }) => ({ take: 1 })
};

const john = {
    name: "John",
    makeMove: ({ onTable }) => ({ take: 2 })
};

const cheater = {
    name: "Cheater",
    makeMove: ({ onTable }) => ({ take: onTable - 1 })
}

for (let initial = 10; initial < 100; initial ++) {
    require("./src/game.js").runGame([rupert, john], initial, 5);
}
