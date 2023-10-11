let eggMoves = [];
let tutorMoves = {};
let levelMoves = {};
let tmMoves = {};
let arrTrainerMoves = [];


let arrEggMoves = []
let arrLevelMoves = []
let arrTmMoves = []
let arrTutorMoves = []


let moveLevelList = []
let moveEggList = []
let moveTutorList = []
let moveTmList = []

let tmUnchecked = [];
let tutorUnchecked = [];


const pokemonLevelMoves = document.querySelector('#poke-level-move');
const pokemonEggMoves = document.querySelector('#poke-egg-move');
const pokemonTutorMoves = document.querySelector('#poke-tutor-move');
const pokemonTmMoves = document.querySelector('#poke-tm-move');
const trainerMoveTable = document.querySelector('#trainer-moves-table')
const trainerPreMoveTable = document.querySelector('#table-trainer-move')



const tmConfirmBtn = document.querySelector('#tm-confirm');
const tutorConfirmBtn = document.querySelector('#tutor-confirm');
const tmRefreshBtn = document.querySelector('#tm-refresh');
const tutorRefreshBtn = document.querySelector('#tutor-refresh');

function createLevelMove(moveName, moveListLength) {
    moveLevelList.push(moveName)

    if (moveLevelList[0].length < moveListLength) return;


    moveLevelList[0].sort(function (a, b) {
        return a.level - b.level
    })


    for (i = 0; i < moveLevelList.length; i++) {
        if (moveLevelList[0][i].power != "null" && moveLevelList[0][i].accuracy != "null") {

            let move = `
            <tr class = "move"><td>${moveLevelList[0][i].level}</td><td><img src = "${typeMap.get(moveLevelList[0][i].type)}"></img></td><td> 
             <img id = "damage-class" src = "${catType.get(moveLevelList[0][i].damageClass)}"></img></td>  <td class = "move-name">${moveLevelList[0][i].name}</td>  
             <td>${moveLevelList[0][i].power}</td> <td>${moveLevelList[0][i].accuracy}</td></tr>
            `
            pokemonLevelMoves.innerHTML += move;
        }
        if (moveLevelList[0][i].power == "null" && moveLevelList[0][i].accuracy != "null") {
            let move = `
            <tr class = "move"><td>${moveLevelList[0][i].level}</td><td><img src = "${typeMap.get(moveLevelList[0][i].type)}"></img></td><td> 
             <img id = "damage-class" src = "${catType.get(moveLevelList[0][i].damageClass)}"></img></td>  <td class = "move-name">${moveLevelList[0][i].name}</td>  
             <td>${"-"}</td> <td>${moveLevelList[0][i].accuracy}</td></tr>
            `
            pokemonLevelMoves.innerHTML += move;
        }
        if (moveLevelList[0][i].power != "null" && moveLevelList[0][i].accuracy == "null") {
            let move = `
            <tr class = "move"><td>${moveLevelList[0][i].level}</td><td><img src = "${typeMap.get(moveLevelList[0][i].type)}"></img></td><td> 
             <img id = "damage-class" src = "${catType.get(moveLevelList[0][i].damageClass)}"></img></td>  <td class = "move-name">${moveLevelList[0][i].name}</td>  
             <td>${moveLevelList[0][i].power}</td> <td>${"-"}</td></tr>
            `
            pokemonLevelMoves.innerHTML += move;
        }
        if (moveLevelList[0][i].power == "null" && moveLevelList[0][i].accuracy == "null") {
            let move = `
            <tr class = "move"><td>${moveLevelList[0][i].level}</td><td><img src = "${typeMap.get(moveLevelList[0][i].type)}"></img></td><td> 
             <img id = "damage-class" src = "${catType.get(moveLevelList[0][i].damageClass)}"></img></td>  <td class = "move-name">${moveLevelList[0][i].name}</td>  
             <td>${"-"}</td> <td>${"-"}</td></tr>
            `
            pokemonLevelMoves.innerHTML += move;
        }
    }
    moveLevelList = []
    arrMoves = []


}

//egg moves
function createEggMove(moveName, moveListLength) {
    moveEggList.push(moveName)

    if (moveEggList[0].length < moveListLength) return;

    moveEggList[0].sort(function (x, y) {
        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
    })


    for (i = 0; i < moveEggList.length; i++) {
        if (moveEggList[0][i].power != "null" && moveEggList[0][i].accuracy != "null") {

            let move = `
            <tr class = "move"><td><img src = "${typeMap.get(moveEggList[0][i].type)}"></img></td><td> 
             <img id = "damage-class" src = "${catType.get(moveEggList[0][i].damageClass)}"></img></td>  <td class = "move-name">${moveEggList[0][i].name}</td>  
             <td>${moveEggList[0][i].power}</td> <td>${moveEggList[0][i].accuracy}</td></tr>
            `
            pokemonEggMoves.innerHTML += move;
        }
        if (moveEggList[0][i].power == "null" && moveEggList[0][i].accuracy != "null") {
            let move = `
            <tr class = "move"><td><img src = "${typeMap.get(moveEggList[0][i].type)}"></img></td><td> 
             <img id = "damage-class" src = "${catType.get(moveEggList[0][i].damageClass)}"></img></td>  <td class = "move-name">${moveEggList[0][i].name}</td>  
             <td>${"-"}</td> <td>${moveEggList[0][i].accuracy}</td></tr>
            `
            pokemonEggMoves.innerHTML += move;
        }
        if (moveEggList[0][i].power != "null" && moveEggList[0][i].accuracy == "null") {
            let move = `
            <tr class = "move"><td><img src = "${typeMap.get(moveEggList[0][i].type)}"></img></td><td> 
             <img id = "damage-class" src = "${catType.get(moveEggList[0][i].damageClass)}"></img></td>  <td class = "move-name">${moveEggList[0][i].name}</td>  
             <td>${moveEggList[0][i].power}</td> <td>${"-"}</td></tr>
            `
            pokemonEggMoves.innerHTML += move;
        }
        if (moveEggList[0][i].power == "null" && moveEggList[0][i].accuracy == "null") {
            let move = `
            <tr class = "move"><td><img src = "${typeMap.get(moveEggList[0][i].type)}"></img></td><td> 
             <img id = "damage-class" src = "${catType.get(moveEggList[0][i].damageClass)}"></img></td>  <td class = "move-name">${moveEggList[0][i].name}</td>  
             <td>${"-"}</td> <td>${"-"}</td></tr>
            `
            pokemonEggMoves.innerHTML += move;
        }
    }
    moveEggList = []
    arrMoves = []


}

//tutor Moves
function createTutorMove(moveName, moveListLength) {
    moveTutorList.push(moveName)

    if (moveTutorList[0].length < moveListLength) return;

    moveTutorList[0].sort(function (x, y) {
        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
    })


    for (i = 0; i < moveTutorList.length; i++) {
        if (moveTutorList[0][i].power != "null" && moveTutorList[0][i].accuracy != "null") {

            let move = `
            <tr class = "move"><td><input type="checkbox" value = "${moveTutorList[0][i].name}" id = "tutor-checkbox"></td><td><img src = "${typeMap.get(moveTutorList[0][i].type)}"></img></td><td> 
             <img id = "damage-class" src = "${catType.get(moveTutorList[0][i].damageClass)}"></img></td>  <td class = "move-name">${moveTutorList[0][i].name}</td>  
             <td>${moveTutorList[0][i].power}</td> <td>${moveTutorList[0][i].accuracy}</td></tr>
            `
            pokemonTutorMoves.innerHTML += move;
        }
        if (moveTutorList[0][i].power == "null" && moveTutorList[0][i].accuracy != "null") {
            let move = `
            <tr class = "move"><td><input type="checkbox" value = "${moveTutorList[0][i].name}" id = "tutor-checkbox"></td><td><img src = "${typeMap.get(moveTutorList[0][i].type)}"></img></td><td> 
             <img id = "damage-class" src = "${catType.get(moveTutorList[0][i].damageClass)}"></img></td>  <td class = "move-name">${moveTutorList[0][i].name}</td>  
             <td>${"-"}</td> <td>${moveTutorList[0][i].accuracy}</td></tr>
            `
            pokemonTutorMoves.innerHTML += move;
        }
        if (moveTutorList[0][i].power != "null" && moveTutorList[0][i].accuracy == "null") {
            let move = `
            <tr class = "move"><td><input type="checkbox" value = "${moveTutorList[0][i].name}" id = "tutor-checkbox"></td><td><img src = "${typeMap.get(moveTutorList[0][i].type)}"></img></td><td> 
             <img id = "damage-class" src = "${catType.get(moveTutorList[0][i].damageClass)}"></img></td>  <td class = "move-name">${moveTutorList[0][i].name}</td>  
             <td>${moveTutorList[0][i].power}</td> <td>${"-"}</td></tr>
            `
            pokemonTutorMoves.innerHTML += move;
        }
        if (moveTutorList[0][i].power == "null" && moveTutorList[0][i].accuracy == "null") {
            let move = `
            <tr class = "move"><td><input type="checkbox" value = "${moveTutorList[0][i].name}" id = "tutor-checkbox"></td><td><img src = "${typeMap.get(moveTutorList[0][i].type)}"></img></td><td> 
             <img id = "damage-class" src = "${catType.get(moveTutorList[0][i].damageClass)}"></img></td>  <td class = "move-name">${moveTutorList[0][i].name}</td>  
             <td>${"-"}</td> <td>${"-"}</td></tr>
            `
            pokemonTutorMoves.innerHTML += move;
        }
    }
    moveTutorList = []
    arrTutorMoves = []


}



function createTmMove(moveName, moveListLength) {
    moveTmList.push(moveName)
    if (moveTmList[0].length < moveListLength) return;

    moveTmList[0].sort(function (x, y) {
        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
    })


    for (i = 0; i < moveTmList.length; i++) {
        if (moveTmList[0][i].power != "null" && moveTmList[0][i].accuracy != "null") {

            let move = `
            <tr class = "move"><td><input type="checkbox" value = "${moveTmList[0][i].name}" id = "tm-checkbox"></td><td><img src = "${typeMap.get(moveTmList[0][i].type)}"></img></td><td> 
             <img id = "damage-class" src = "${catType.get(moveTmList[0][i].damageClass)}"></img></td>  <td class = "move-name">${moveTmList[0][i].name}</td>  
             <td>${moveTmList[0][i].power}</td> <td>${moveTmList[0][i].accuracy}</td></tr>
            `
            pokemonTmMoves.innerHTML += move;
        }
        if (moveTmList[0][i].power == "null" && moveTmList[0][i].accuracy != "null") {
            let move = `
            <tr class = "move"><td><input type="checkbox" value = "${moveTmList[0][i].name}" id = "tm-checkbox"></td><td><img src = "${typeMap.get(moveTmList[0][i].type)}"></img></td><td> 
             <img id = "damage-class" src = "${catType.get(moveTmList[0][i].damageClass)}"></img></td>  <td class = "move-name">${moveTmList[0][i].name}</td>  
             <td>${"-"}</td> <td>${moveTmList[0][i].accuracy}</td></tr>
            `
            pokemonTmMoves.innerHTML += move;
        }
        if (moveTmList[0][i].power != "null" && moveTmList[0][i].accuracy == "null") {
            let move = `
            <tr class = "move"><td><input type="checkbox" value = "${moveTmList[0][i].name}" id = "tm-checkbox"></td><td><img src = "${typeMap.get(moveTmList[0][i].type)}"></img></td><td> 
             <img id = "damage-class" src = "${catType.get(moveTmList[0][i].damageClass)}"></img></td>  <td class = "move-name">${moveTmList[0][i].name}</td>  
             <td>${moveTmList[0][i].power}</td> <td>${"-"}</td></tr>
            `
            pokemonTmMoves.innerHTML += move;
        }
        if (moveTmList[0][i].power == "null" && moveTmList[0][i].accuracy == "null") {
            let move = `
            <tr class = "move"><td><input type="checkbox" value = "${moveTmList[0][i].name}" id = "tm-checkbox"></td><td><img src = "${typeMap.get(moveTmList[0][i].type)}"></img></td><td> 
             <img id = "damage-class" src = "${catType.get(moveTmList[0][i].damageClass)}"></img></td>  <td class = "move-name">${moveTmList[0][i].name}</td>  
             <td>${"-"}</td> <td>${"-"}</td></tr>
            `
            pokemonTmMoves.innerHTML += move;
        }
    }
    moveTmList = []
    arrTmMoves = []


}




async function checkMove(moves, type) {
    if (type == "level") {

        for (i = 0; i < moves.length; i++) {
            let moveLevel = moves[i].level
            fetch(`https://pokeapi.co/api/v2/move/${moves[i].name}/`)
                .then(res => res.json())
                .then(data => {
                    arrLevelMoves.push({
                        name: `${data["name"]}`, type: `${data["type"]["name"]}`, damageClass: `${data["damage_class"]["name"]}`, level: `${moveLevel}`,
                        power: `${data["power"]}`, accuracy: `${data["accuracy"]}`

                    })
                    createLevelMove(arrLevelMoves, moves.length)
                })
        }
    }
    if (type == "egg") {
        for (i = 0; i < moves.length; i++) {

            fetch(`https://pokeapi.co/api/v2/move/${moves[i].name}/`)
                .then(res => res.json())
                .then(data => {
                    arrEggMoves.push({
                        name: `${data["name"]}`, type: `${data["type"]["name"]}`, damageClass: `${data["damage_class"]["name"]}`,
                        power: `${data["power"]}`, accuracy: `${data["accuracy"]}`

                    })
                    createEggMove(arrEggMoves, moves.length)
                })
        }
    }
    if (type == "tutor") {
        for (i = 0; i < moves.length; i++) {

            fetch(`https://pokeapi.co/api/v2/move/${moves[i].name}/`)
                .then(res => res.json())
                .then(data => {
                    arrTutorMoves.push({
                        name: `${data["name"]}`, type: `${data["type"]["name"]}`, damageClass: `${data["damage_class"]["name"]}`,
                        power: `${data["power"]}`, accuracy: `${data["accuracy"]}`

                    })
                    createTutorMove(arrTutorMoves, moves.length)
                })
        }
    }
    if (type == "tm") {
        for (i = 0; i < moves.length; i++) {

            fetch(`https://pokeapi.co/api/v2/move/${moves[i].name}/`)
                .then(res => res.json())
                .then(data => {
                    arrTmMoves.push({
                        name: `${data["name"]}`, type: `${data["type"]["name"]}`, damageClass: `${data["damage_class"]["name"]}`,
                        power: `${data["power"]}`, accuracy: `${data["accuracy"]}`

                    })
                    createTmMove(arrTmMoves, moves.length)
                })
        }
    }



}



function moveHandler(data, haveEggMoves) {
    eggMoves = []
    tutorMoves = []
    levelMoves = []
    tmMoves = []
    arrLevelMoves = []
    arrEggMoves = []
    arrTutorMoves = []





    for (i = 0; i < data.length; i++) {
        for (j = 0; j < data[i]["version_group_details"].length; j++) {
            if (data[i]["version_group_details"][j]["version_group"]["name"] == "ultra-sun-ultra-moon") {
                if (data[i]["version_group_details"][j]["move_learn_method"]["name"] == "egg" && haveEggMoves) {
                    eggMoves.push({ name: data[i]["move"]["name"] })
                }
                if (data[i]["version_group_details"][j]["move_learn_method"]["name"] == "tutor") {
                    tutorMoves.push({ name: `${data[i]["move"]["name"]}` })
                }
                if (data[i]["version_group_details"][j]["move_learn_method"]["name"] == "level-up") {
                    levelMoves.push({ name: `${data[i]["move"]["name"]}`, level: `${[data[i]["version_group_details"][j]["level_learned_at"]]}` })

                }
                if (data[i]["version_group_details"][j]["move_learn_method"]["name"] == "machine") {
                    tmMoves.push({ name: `${data[i]["move"]["name"]}` })
                }
            }
        }
    }
    checkMove(levelMoves, "level")
    checkMove(eggMoves, "egg")
    checkMove(tutorMoves, "tutor")
    checkMove(tmMoves, "tm")
}

function trainerMoves(trainerMovesArr) {
    for (i = 0; i < trainerMovesArr.length; i++) {
        let trainerM = `
            <tr><td>${trainerMovesArr[i].name}</td><td id ="trainer-move-desc"><textarea>${trainerMovesArr[i].desc}</textarea></td></tr>
        `
        trainerMoveTable.innerHTML += trainerM;
    }

}



tmConfirmBtn.addEventListener('click', (e) => {

    e.preventDefault();
    let boxcheck = document.querySelectorAll('[id="tm-checkbox"]')
    for (i = 0; i < boxcheck.length; i++) {

        if (boxcheck[i].checked == false) {
            pokemonTmMoves.deleteRow(i - (boxcheck.length - pokemonTmMoves.rows.length))
            tmUnchecked.push({ name: `${boxcheck[i].value}` })
        }

    }

})


tmRefreshBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkMove(tmUnchecked, 'tm')
    tmUnchecked = []

})



tutorConfirmBtn.addEventListener('click', (e) => {

    e.preventDefault();
    let boxtutorcheck = document.querySelectorAll('[id="tutor-checkbox"]')
    for (i = 0; i < boxtutorcheck.length; i++) {

        if (boxtutorcheck[i].checked == false) {
            pokemonTutorMoves.deleteRow(i - (boxtutorcheck.length - pokemonTutorMoves.rows.length))
            tutorUnchecked.push({ name: `${boxtutorcheck[i].value}` })
        }

    }
})


tutorRefreshBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkMove(tutorUnchecked, 'tutor')
    tutorUnchecked = []
})















