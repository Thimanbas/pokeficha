const pokemonDamageTaken = document.querySelector('#table-damage')
var types = new Array(
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1, 1],// Normal
    [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1, 1],// Fire
    [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 1],// Water
    [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1],// Electric
    [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1, 1],// Grass
    [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1, 1],// Ice
    [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5, 1],// Fighting
    [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2, 1],// Poison
    [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1, 1],// Ground
    [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1, 1],// Flying
    [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1, 1],// Psychic
    [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5, 1],// Bug
    [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1],// Rock
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1, 1],// Ghost
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0, 1],// Dragon
    [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5, 1],// Dark
    [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2, 1],// Steel
    [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1, 1],// Fairy
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]// None
);
const typeNameMap = new Map([["normal", 0], ["fire", 1], ["water", 2], ["electric", 3], ["grass", 4], ["ice", 5],
["fighting", 6], ["poison", 7], ["ground", 8], ["flying", 9], ["psychic", 10], ["bug", 11], ["rock", 12], ["ghost", 13],
["dragon", 14], ["dark", 15], ["steel", 16], ["fairy", 17], ["none", 18]]);
var type_name = new Array("normal", "fire", "water", "electric",
    "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug",
    "rock", "ghost", "dragon", "dark", "steel", "fairy", "none"
);

function typeWeakness(typeOne, typeTwo) {
    var result = new Array();

    if (typeOne != typeTwo) {
        if (!typeTwo) typeTwo = "none";
        if(!typeOne) typeOne = "none";

        for (i = 0; i < 18; i++) {
            result[i] = ((types[i][typeNameMap.get(typeOne)] * types[i][typeNameMap.get(typeTwo)]));
            if (result[i] == 4) {
                createWeakness(result[i])

            }
            if (result[i] == 2) {
                createWeakness(result[i])

            }
            if (result[i] == 1) {
                createWeakness(result[i])
            }

            if (result[i] == 0.5) {
                createWeakness(result[i])

            }

            if (result[i] == 0.25) {
                createWeakness(result[i])

            }
            if (result[i] == 0) {
                createWeakness(result[i])
            }
        }

    }
}
function createWeakness(weakness) {
    if (weakness == 4) {
        let typeDamage = `
        <td id = "ft-damage">${weakness}</td> 
     `
        pokemonDamageTaken.innerHTML += typeDamage;
    }
    if (weakness == 2) {
        let typeDamage = `
        <td id = "db-damage">${weakness}</td> 
     `
        pokemonDamageTaken.innerHTML += typeDamage;
    }
    if (weakness == 0.5) {
        let typeDamage = `
        <td id = "half-damage">${weakness}</td> 
     `
        pokemonDamageTaken.innerHTML += typeDamage;
    }
    if (weakness == 0.25) {
        let typeDamage = `
        <td id = "quart-damage">${weakness}</td> 
     `
        pokemonDamageTaken.innerHTML += typeDamage;
    }
    if (weakness == 0) {
        let typeDamage = `
        <td id = "zero-damage">${weakness}</td> 
     `
        pokemonDamageTaken.innerHTML += typeDamage;
    }
    if(weakness == 1) {
        let typeDamage = `
        <td id = "normal-damage">${weakness}</td> 
     `
        pokemonDamageTaken.innerHTML += typeDamage;
    }
}