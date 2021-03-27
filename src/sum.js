const map = {
    913: 1,
    914: 2,
    915: 3,
    916: 4,
    917: 5,
    918: 7,
    919: 8,
    920: 9,
    921: 10,
    922: 20,
    923: 30,
    924: 40,
    925: 50,
    926: 60,
    927: 70,
    928: 80,
    929: 100,
    931: 200,
    932: 300,
    933: 400,
    934: 500,
    935: 600,
    936: 700,
    937: 800
}

function sum(word) {
    return Array.from(word)
                .map((character)=> character.charCodeAt(0))
                .map((code)=> map[code])
                .reduce((a,b)=> a + b)
}

module.exports = sum
