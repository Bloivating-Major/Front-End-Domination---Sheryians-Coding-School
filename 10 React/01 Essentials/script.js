var arr = [
    {name: "Captain America" , team: "Avengers"},
    {name: "Thor" , team: "Avengers"},
    {name: "Super-Man" , team: "Justice"},
    {name: "Flash" , team: "Justice"},
]

const ans = arr.filter(elem => elem.team === "Avengers")

console.log(ans);


