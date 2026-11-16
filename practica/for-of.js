"use strict";
(() => {
    const ironman = {
        name: "Ironman",
        weapon: "Armorsuit"
    };
    const captainAmerica = {
        name: "Captain America",
        weapon: "Shield"
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir"
    };
    const avengers = [ironman, captainAmerica, thor];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
