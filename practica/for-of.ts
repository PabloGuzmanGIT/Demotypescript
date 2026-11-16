(()=>{
    type avenger = {
        name: string,
        weapon: string,
        
    }

    const ironman: avenger = {
        name: "Ironman",
        weapon: "Armorsuit"
    }

    const captainAmerica: avenger = {
        name: "Captain America",
        weapon: "Shield"
    }

    const thor: avenger = {
        name: "Thor",
        weapon: "Mjolnir"
    }

    const avengers = [ironman, captainAmerica, thor]

    for(const avenger of avengers){
        console.log(avenger.name, avenger.weapon)
    }


})()