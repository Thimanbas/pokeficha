
const inputHp = document.querySelector('#input-poke-hp')
const inputAtk = document.querySelector('#input-poke-atk')
const inputDef = document.querySelector('#input-poke-def')
const inputSpAtk = document.querySelector('#input-poke-spatk')
const inputSpDef = document.querySelector('#input-poke-spdef')
const inputSpe = document.querySelector('#input-poke-spe')
const inputHit = document.querySelector('#input-poke-hit')
const inputDdg = document.querySelector('#input-poke-ddg')
const inputCrt = document.querySelector('#input-poke-crt')
const inputKda = document.querySelector('#input-poke-kda')

const statusArr = [inputHp, inputAtk, inputDef, inputSpAtk, inputSpDef, inputSpe, inputHit, inputDdg, inputCrt]



const searchText = document.querySelector('#input-pokemon-name');
const inputTrainerName = document.querySelector('#input-trainer-name');
const pokeTrainerName = document.querySelectorAll('#poke-trainer-name');
const btnSearch = document.querySelector('#search-button')

//basic info
const pokemonImage = document.querySelector('#poke-image')
const pokemonPreImage = document.querySelector('#poke-image-pre')
const pokemonName = document.querySelector('#poke-name');
const pokemonGender = document.querySelector('#poke-gender ');
const pokemonId = document.querySelector('#national-dex-n');
const pokemonTypeOne = document.querySelector('#poke-typeone');
const pokemonTypeTwo = document.querySelector('#poke-typetwo');
const pokemonSpec = document.querySelector('#poke-species');
const pokemonHeight = document.querySelector('#poke-height');
const pokemonWeight = document.querySelector('#poke-weight');
const pokemonAbility = document.querySelector('#poke-ability');
const pokemonPreAbility = document.querySelector('#pre-ability');
const pokemonAff = document.querySelector('#poke-aff');
const pokemonNvl = document.querySelector('#poke-nvl');
const pokemonExp = document.querySelector('#poke-exp');
const pokeBasics = [pokemonAff, pokemonNvl, pokemonExp]
const pokemonAffInput = document.querySelector('#input-poke-aff');
const pokemonNvlInput = document.querySelector('#input-poke-nvl');
const pokemonExpInput = document.querySelector('#input-poke-exp');
const pokeBasicsInput = [pokemonNvlInput, pokemonExpInput, pokemonAffInput]

const haveEggMoves = document.querySelector('#egg-moves-check');

//status
const pokemonStatus = document.querySelector('#poke-stat-container');
const pokemonHit = document.querySelector('#hit-stat');
const pokemonDdg = document.querySelector('#ddg-stat');
const pokemonCrt = document.querySelector('#crt-stat');

//nature
const pokemonNature = document.querySelector('#poke-nature');
const pokemonPreNature = document.querySelector('#nature');
let natureN;
let naturalBuff = "";

const tmConfirmButton = document.querySelector('#tm-confirm');




const InputTrainerMoveName = document.querySelector('#input-trainer-move-name')
const InputTrainerMoveDesc = document.querySelector('#input-trainer-move-desc')

const trainerMoveAdd = document.querySelector('#trainer-move-button')

const trainerMoveRemove = document.querySelector('#trainer-move-remove')
const trainerMoveConfirm = document.querySelector('#trainer-move-confirm')



const generatePokemon = document.querySelector('#generate-pokemon')
const fichaPokemon = document.querySelector('.ficha')



//pokemon type images
const typeMap = new Map([["bug", "Images/BugIC_SV.png"], ["dark", "Images/DarkIC_SV.png"], ["dragon", "Images/DragonIC_SV.png"], ["electric", "Images/ElectricIC_SV.png"],
["fairy", "Images/FairyIC_SV.png"], ["fighting", "Images/FightingIC_SV.png"], ["fire", "Images/FireIC_SV.png"], ["flying", "Images/FlyingIC_SV.png"], ["ghost", "Images/GhostIC_SV.png"],
["grass", "Images/GrassIC_SV.png"], ["ground", "Images/GroundIC_SV.png"], ["ice", "Images/IceIC_SV.png"], ["normal", "Images/NormalIC_SV.png"], ["poison", "Images/PoisonIC_SV.png"],
["psychic", "Images/PsychicIC_SV.png"], ["rock", "Images/RockIC_SV.png"], ["steel", "Images/SteelIC_SV.png"], ["water", "Images/WaterIC_SV.png"]]);

const statChanger = new Map([["hp", "Hp:"], ["attack", "Attack:"], ["defense", "Defense:"], ["special-attack", "Sp. Atk:"], ["special-defense", "Sp. Def: "],
["speed", "Speed:"], ["hit", "Hit:"], ["ddg", "Dodge:"], ["crt", "Critical:"]
])

const catType = new Map([["physical", "Images/PhysicalIC.png"], ["special", "Images/SpecialIC.png"], ["status", "Images/StatusIC.png"]
])



//create pokemon image
function createImage(imageFrontSrc) {
    let image = `
    <img crossorigin="anonymous" id = "pokemon-front-image" src = "${imageFrontSrc}"></img>
    `
    let image2 = `
    <img  crossorigin="anonymous" id = "pokemon-front-image-pre" src = "${imageFrontSrc}"></img>
    `
    pokemonImage.innerHTML = image;
    pokemonPreImage.innerHTML = image2;
};

//create pokemon type
function createType(typeOne, typeTwo) {
    let imgOne = `
        <img crossorigin="anonymous" src = "${typeMap.get(typeOne)}"></img>
        `
    pokemonTypeOne.innerHTML = imgOne;
    if (typeTwo != null) {
        let imgTwo = `
        <img crossorigin="anonymous" src = "${typeMap.get(typeTwo)}"></img>
        `
        pokemonTypeTwo.innerHTML = imgTwo;
    }
}

//create pokemon gender
function createGender(gender) {
    if (gender == "male") {
        let imgOne = `
        <img crossorigin="anonymous" src = "Images/male.png"></img>
        `
        pokemonGender.innerHTML = imgOne;
    }
    if (gender == "female") {
        let imgOne = `
        <img crossorigin="anonymous" src = "Images/female.png"></img>
        `
        pokemonGender.innerHTML = imgOne;
    }
}

//create pokemon status
function createStatus(statName, statValueBlue, statValueRed) {
    if (statName != "crt" && statName != "hit" && statName != "ddg") {
        let stat = `
        
        <div><spam id = "deepblue-stat">${statChanger.get(statName)}</spam> 
        <spam id = "blue-stat">${statValueBlue}</spam><spam  id = "red-stat">${statValueRed}</spam>
        <div id="natural-buff">${naturalBuff}</div>
        `
        pokemonStatus.innerHTML += stat;
    }
    if (statName == "crt" || statName == "hit" || statName == "ddg") {
        let stat = `
        
        <div><spam id = "deepblue-stat">${statChanger.get(statName)}</spam> 
        <spam id = "blue-stat">${statValueBlue}${statValueRed}%</spam>
        <div id="natural-buff">${naturalBuff}</div>
        `
        pokemonStatus.innerHTML += stat;
    }

}
//create Nature
function createNature(natureName) {

    if (pokemonPreNature.value != 0) {
        let tvalue = pokemonPreNature.value - 1;
        const nat = `
        <div><spam id="blue-stat">T${tvalue + 1} - ${natures[tvalue].name},${natures[tvalue].effectName} +${natures[tvalue].statBuff}
        <div>${natures[tvalue].characteristic}<spam id = "red-stat">${natures[tvalue].badCharacteristic}</spam></div>
        
        <div>Afeição + 90%: ${natures[tvalue].battleBuff}</div>
        
        <div>Afeição - 70%: ${natures[tvalue].battleDebuff}</div>
        
        <div>Fora das batalhas + 70%: ${natures[tvalue].affBuff}</div>
        
        <div>Fora das batalhas - 70%: ${natures[tvalue].affDebuff}</div>
        </spam></div>
        `
        natureN = natures[tvalue].statBuff;
        pokemonNature.innerHTML = nat;
    }
    else {
        let rValue = randomNumber(0, 9);
        const nat = `
        <div><spam id="blue-stat">T${rValue + 1} - ${natures[rValue].name},${natures[rValue].effectName} +${natures[rValue].statBuff}
        </br>${natures[rValue].characteristic}<spam id = "red-stat">${natures[rValue].badCharacteristic}</spam>
        </br>
        </br>Afeição + 90%: ${natures[rValue].battleBuff}
        </br>
        </br>Afeição - 70%: ${natures[rValue].battleDebuff}
        </br>
        </br>Fora das batalhas + 70%: ${natures[rValue].affBuff}
        </br>
        </br>Fora das batalhas - 70%: ${natures[rValue].affDebuff}
        </spam></div>
        `
        natureN = natures[rValue].statBuff;
        pokemonNature.innerHTML = nat;
    }



}


let pokemonPic = document.getElementById("pokemon-front-image-pre")
let inputFile = document.getElementById("input-poke-img")

inputFile.onchange = function () {
    pokemonPic.src = URL.createObjectURL(inputFile.files[0]);
}




//check pokemon by given name or id
function checkPokemon(pokeName, preSearch) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(res => res.json())
        .then(data => {
            newCheck()
            let abilityUnchecked = [];
            pokemonName.textContent = data['name'].toUpperCase()
            if (preSearch == false) {
                pokemonId.innerHTML = `<div id = "deepblue-stat">National Nº </div><div id = "blue-stat"> ${data["id"]}</div>`
                moveHandler(data["moves"], haveEggMoves.checked);

                let radioCheck = document.querySelectorAll('[name = "ability-checkbox"]')
                radioCheck.forEach((item) => {
                    if (item.checked == true) {
                        checkAbility(item.value, false)
                    }
                    if (item.checked == false) {
                        abilityUnchecked.push(item.value)
                    }
                })
                if (abilityUnchecked.length == data['abilities'].length) {
                    checkAbility(data["abilities"][randomNumber(0, data["abilities"].length)]["ability"]["name"])
                }

                if (pokemonPic.src == "") {
                    createImage(data['sprites']['front_default']);
                } else {
                    createImage(pokemonPic.src);
                }


                let typeOne = document.getElementById("type-one-select").value;
                let typeTwo = document.getElementById("type-two-select").value;
                console.log(data["types"])
                switch (typeTwo) {
                    case "-1": {
                        if (typeOne == "-1") {
                            if (data["types"][1]) {
                                createType(data["types"][0]["type"]["name"], data["types"][1]["type"]["name"])
                                typeWeakness(data["types"][0]["type"]["name"], data["types"][1]["type"]["name"])
                            } else {
                                createType(data["types"][0]["type"]["name"], null)
                                typeWeakness(data["types"][0]["type"]["name"], null)

                            }
                            break;
                        }
                        if (typeOne == "0") {
                            if (data["types"][1]) {
                                createType(null, data["types"][1]["type"]["name"])
                                typeWeakness(null, data["types"][1]["type"]["name"])

                            } else {
                                createType(null, null)
                            }
                            break;

                        }
                        else {
                            if (data["types"][1]) {
                                createType(typeOne, data["types"][1]["type"]["name"])
                                typeWeakness(typeOne, data["types"][1]["type"]["name"])

                            } else {
                                createType(typeOne, null)
                                typeWeakness(typeOne, null)

                            }
                            break;

                        }
                        break;
                    }
                    case "0": {
                        if (typeOne == "-1") {
                            createType(data["types"][0]["type"]["name"], null)
                            typeWeakness(data["types"][0]["type"]["name"], null)

                            break;
                        }
                        if (typeOne == "0") {

                            createType(null, null)
                            break;
                        }
                        else {
                            createType(typeOne, null)
                            typeWeakness(typeOne, null)

                            break;
                        }
                        break;
                    }
                    default: {
                        if (typeOne == "-1") {
                            createType(data["types"][0]["type"]["name"], typeTwo)
                            typeWeakness(data["types"][0]["type"]["name"], typeTwo)

                            break;
                        }
                        if (typeOne == "0") {

                            createType(null, typeTwo)
                            typeWeakness(null, typeTwo)

                            break;
                        }
                        else {
                            createType(typeOne, typeTwo)
                            typeWeakness(typeOne, typeTwo)

                            break;
                        }
                        break;
                    }
                }

                checkGender(pokeName, 0);
                checkBasisc(pokeName, data["height"], data["weight"])
                let stattotal = 0;

                if (pokemonNvlInput.value == "") {
                    pokemonNvl.innerHTML = `Nivel: 1`
                }
                else {
                    pokemonNvl.innerHTML = `Nivel: ${pokemonNvlInput.value}`
                }
                if (pokemonExpInput.value == "") {
                    pokemonExp.innerHTML = `Exp: 0`
                }
                else {
                    pokemonExp.innerHTML = `Exp: ${pokemonExpInput.value}`
                }
                if (pokemonAffInput.value == "") {
                    pokemonAff.innerHTML = `Afeição: 0%`
                } else {
                    pokemonAff.innerHTML = `Afeição: ${pokemonAffInput.value}%`
                }

                for (i = 0; i < statusArr.length; i++) {
                    switch (statusArr[i].id) {
                        case "input-poke-hp": {
                            if (statusArr[i].value == "") {
                                checkStatColor(data["stats"][i]['stat']['name'], data["stats"][i]["base_stat"])
                                stattotal += parseInt(data["stats"][i]["base_stat"]);
                                break;
                            };
                            stattotal += parseInt(statusArr[i].value);
                            checkStatColor("hp", statusArr[i].value)
                            break;
                        }
                        case "input-poke-atk": {
                            if (statusArr[i].value == "") {
                                checkStatColor(data["stats"][i]['stat']['name'], data["stats"][i]["base_stat"])
                                stattotal += parseInt(data["stats"][i]["base_stat"]);

                                break;
                            };
                            stattotal += parseInt(statusArr[i].value);
                            checkStatColor("attack", statusArr[i].value)
                            break;
                        }
                        case "input-poke-def": {
                            if (statusArr[i].value == "") {
                                checkStatColor(data["stats"][i]['stat']['name'], data["stats"][i]["base_stat"])
                                stattotal += parseInt(data["stats"][i]["base_stat"]);

                                break;
                            };
                            stattotal += parseInt(statusArr[i].value);
                            checkStatColor("defense", statusArr[i].value)
                            break;
                        }
                        case "input-poke-spatk": {
                            if (statusArr[i].value == "") {
                                checkStatColor(data["stats"][i]['stat']['name'], data["stats"][i]["base_stat"])
                                stattotal += parseInt(data["stats"][i]["base_stat"]);

                                break;
                            };
                            stattotal += parseInt(statusArr[i].value);
                            checkStatColor("special-attack", statusArr[i].value)
                            break;
                        }
                        case "input-poke-spdef": {
                            if (statusArr[i].value == "") {
                                checkStatColor(data["stats"][i]['stat']['name'], data["stats"][i]["base_stat"])
                                stattotal += parseInt(data["stats"][i]["base_stat"]);

                                break;
                            };
                            stattotal += parseInt(statusArr[i].value);
                            checkStatColor("special-defense", statusArr[i].value)
                            break;
                        }
                        case "input-poke-spe": {
                            if (statusArr[i].value == "") {
                                checkStatColor(data["stats"][i]['stat']['name'], data["stats"][i]["base_stat"])
                                stattotal += parseInt(data["stats"][i]["base_stat"]);

                                break;
                            };
                            stattotal += parseInt(statusArr[i].value);
                            checkStatColor("speed", statusArr[i].value)
                            break;
                        }
                        case "input-poke-hit": {
                            if (statusArr[i].value == "") {
                                checkStatColor("hit", 0)
                                break;
                            };
                            checkStatColor("hit", statusArr[i].value)
                            break;
                        }
                        case "input-poke-ddg": {
                            if (statusArr[i].value == "") {
                                checkStatColor("ddg", 0)
                                break;
                            };
                            checkStatColor("ddg", statusArr[i].value)
                            break;
                        }
                        case "input-poke-crt": {
                            if (statusArr[i].value == "") {
                                checkStatColor("crt", 0)
                                break;
                            };
                            checkStatColor("crit", statusArr[i].value)
                            break;
                        }
                    }
                }


                if (natureN != "15% DDG" && natureN != "10% Crit" && natureN != "15% Hit") {
                    pokemonStatus.innerHTML += `<spam id = "deepblue-stat">Total: </spam> <spam id = "blue-stat">${stattotal + 50}</spam>`;
                } else {
                    pokemonStatus.innerHTML += `<spam id = "deepblue-stat">Total: </spam> <spam id = "blue-stat">${stattotal}</spam>`;
                }


            }
            if (preSearch == true) {
                if (pokemonPic.src == "") {
                    createImage(data['sprites']['front_default']);

                }
                for (i = 0; i < data['abilities'].length; i++) {
                    checkAbility(data['abilities'][i]['ability']['name'], preSearch)
                }

                if (inputTrainerName.value.toString() != "") {
                    pokeTrainerName.forEach(item => {
                        item.textContent = inputTrainerName.value.toString()
                    }
                    )
                } else {
                    pokeTrainerName.forEach(item => {
                        item.textContent = data['name'].toUpperCase();
                    })
                }
            }
        })
}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//check the ability that the given pokemon might have
function checkAbility(abilityName, preCheck) {
    if (preCheck) {

        fetch(`https://pokeapi.co/api/v2/ability/${abilityName}/`)
            .then(res => res.json())
            .then(data => {
                for (i = 0; i < data["effect_entries"].length; i++) {

                    if (data["effect_entries"][i]["language"]["name"] == "en") {

                        let preAb = `<tr>
                        <td><input type = "radio" name = "ability-checkbox" value = "${abilityName}"></td>
                        <td>${abilityName}</td>
                        <td>${data['effect_entries'][i]["short_effect"]}</td>
                    </tr>`
                        pokemonPreAbility.innerHTML += preAb;

                    }
                }


            })

    }
    if (!preCheck) {
        fetch(`https://pokeapi.co/api/v2/ability/${abilityName}/`)
            .then(res => res.json())
            .then(data => {
                for (i = 0; i < data["effect_entries"].length; i++) {

                    if (data["effect_entries"][i]["language"]["name"] == "en") {
                        let ab = `<spam id = "blue-stat">${abilityName}: ${data["effect_entries"][i]["effect"]}</spam>`
                        pokemonAbility.innerHTML += ab;

                    }
                }

            })

    }

}

//check the gender probability of a given pokemon
function checkGender(pokeName, checkSpec) {

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeName}/`)
        .then(res => res.json())
        .then(data => {

            if (checkSpec == 1) {

                for (i = 0; i < 10; i++) {

                    if (data["genera"][i]["language"]["name"] == "en") {
                        pokemonSpec.innerHTML = `<spam id = "deepblue-stat">Species:</spam><spam id = "blue-stat"> ${data["genera"][i]["genus"]}</spam>`

                    }
                }
            }
            if (data["gender_rate"] == 8) {
                createGender("female")
            }
            if (data["gender_rate"] == 0) {
                createGender("male")


            }
            if (data["gender_rate"] == -1) {
                return pokemonGender.textContent = ""
            }
            if (data["gender_rate"] > 0 && data["gender_rate"] < 8) {
                const genderProbability = data["gender_rate"] / 8;
                const rValue = Math.random();
                if (rValue < genderProbability) {
                    createGender("female")

                }
                else {
                    createGender("male")


                }
            }

        })

}
function checkStatColor(statName, statValue) {

    let statN = parseInt(statValue);
    switch (natureN) {
        case "1X Def": {
            if (statName == "defense") {
                statN += 50;
                naturalBuff = "ₙ"
            }
            break;
        }
        case "1X Sp. Def": {
            if (statName == "special-defense") {
                statN += 50;
                naturalBuff = "ₙ"
            }

            break;
        }
        case "1X Speed": {
            if (statName == "speed") {
                statN += 50;
                naturalBuff = "ₙ"
            }

            break;
        }
        case "15% Hit": {
            if (statName == "hit") {
                statN += 15;
                naturalBuff = "ₙ"
            }

            break;
        }
        case "10% Crit": {
            if (statName == "crt") {
                statN += 10;
                naturalBuff = "ₙ"
            }


            break;
        }
        case "1X Sp. Atk": {
            if (statName == "special-attack") {
                statN += 50;
                naturalBuff = "ₙ"
            }

            break;
        }
        case "15% DDG": {
            if (statName == "ddg") {
                statN += 15;
                naturalBuff = "ₙ"
            }

            break;
        }
        case "1X Attack": {

            if (statName == "attack") {
                statN += 50;
                naturalBuff = "ₙ"
            }

            break;
        }
        case "1X HP": {

            if (statName == "hp") {
                statN += 50;
                naturalBuff = "ₙ"
            }

            break;
        }
    }
    let bluestat = Math.floor(statN / 10)
    let redstat = Math.floor(statN % 10)
    createStatus(statName, bluestat, redstat);
    naturalBuff = "";
}

function checkBasisc(pokeName, height, weight) {
    checkGender(pokeName, 1)
    pokemonHeight.innerHTML = `<spam id = "deepblue-stat">Height:</spam><spam id = "blue-stat">  ${height / 10}m</spam>`
    pokemonWeight.innerHTML = `<spam id = "deepblue-stat">Weight:</spam><spam id = "blue-stat"> ${weight / 10}kg</spam>`
    createNature();

}
function newCheck() {
    pokemonHit.textContent = "Hit: 0%";
    pokemonDdg.textContent = "Dodge: 0%";
    pokemonCrt.textContent = "Critical: 0%";
    pokemonStatus.innerHTML = "";
    pokemonSpec.innerHTML = `<spam id = "deepblue-stat">Species:</spam> `
    pokemonHeight.innerHTML = `<spam id = "deepblue-stat">Height:</spam> `
    pokemonWeight.innerHTML = `<spam id = "deepblue-stat">Weight:</spam> `
    pokemonAbility.innerHTML = `<spam id = "deepblue-stat">Ability:</spam> `
    pokemonDamageTaken.innerHTML = ""
    pokemonLevelMoves.innerHTML = `
    <tr>
        <th class = "table-name">Nvl</th>
        <th class = "table-name">Type</th>
        <th class = "table-name">Class</th>
        <th class = "table-name move-name">Name</th>
        <th class = "table-name">Power</th>
        <th class = "table-name">Acc</th>
    </tr>`
    pokemonEggMoves.innerHTML = `
    <tr>
        <th class = "table-name">Type</th>
        <th class = "table-name">Class</th>
        <th class = "table-name move-name">Name</th>
        <th class = "table-name">Power</th>
        <th class = "table-name">Acc</th>
    </tr>`
    pokemonTutorMoves.innerHTML = `
    <tr>
        <th class="table-name"><input type="checkbox" checked /></th>
        <th class = "table-name">Type</th>
        <th class = "table-name">Class</th>
        <th class = "table-name move-name">Name</th>
        <th class = "table-name">Power</th>
        <th class = "table-name">Acc</th>
    </tr>`
    pokemonTmMoves.innerHTML = `
    <tr>
        <th class="table-name"><input type="checkbox" checked /></th>
        <th class = "table-name">Type</th>
        <th class = "table-name">Class</th>
        <th class = "table-name move-name">Name</th>
        <th class = "table-name">Power</th>
        <th class = "table-name">Acc</th>
    </tr>`
}

trainerMoveAdd.addEventListener('click', () => {
    let trainerMove = `
        <tr ><td value= "${InputTrainerMoveName.value.toString()}"id = "trainer-move-name">${InputTrainerMoveName.value.toString()}</td><td><textarea id = "desc-trainer-move" value="${InputTrainerMoveDesc.value.toString()}">${InputTrainerMoveDesc.value.toString()}</textarea></td></tr>
    `
    trainerPreMoveTable.innerHTML += trainerMove;
})
trainerMoveRemove.addEventListener('click', () => {
    try {
        trainerPreMoveTable.deleteRow(trainerPreMoveTable.rows.length - 1)

    } catch (e) {

    }
})
inputTrainerName.addEventListener('keyup', () => {
    if (inputTrainerName.value.toString() != "") {
        pokeTrainerName.forEach(item => {
            item.textContent = inputTrainerName.value.toString()
        }
        )
    } else {
        pokeTrainerName.forEach(item => {
            item.textContent = data['name'].toUpperCase();
        })
    }
})
//listen when button search is clicked
btnSearch.addEventListener('click', () => {
    checkPokemon(searchText.value.toLowerCase(), true)

});


generatePokemon.addEventListener('click', () => {
    checkPokemon(searchText.value.toLowerCase(), false);
    document.getElementById('ficha').hidden = false;
    if (!haveEggMoves.checked) {
        let eggDiv = document.querySelectorAll('[id = "egg-move-class"]')
        eggDiv.forEach((item) => {
            item.hidden = true;
        })
    }
    console.log(document.getElementById("type-one-select").value)
    //hide()

})



trainerMoveConfirm.addEventListener('click', () => {
    var table = document.querySelectorAll('[id = "table-trainer-move"]')
    table = table[0];
    arrTrainerMoves = []
    let trainerMoveName = document.querySelectorAll('[id  = "trainer-move-name"]')
    let trainerMoveDesc = document.querySelectorAll('[id  = "desc-trainer-move"]')
    for (i = 0; i < trainerMoveName.length; i++) {
        arrTrainerMoves.push({ name: trainerMoveName[i]['childNodes'][0]['textContent'], desc: trainerMoveDesc[i]['childNodes'][0]['textContent'] })
    }
    trainerMoves(arrTrainerMoves);
})

function hide() {
    var x = document.getElementById("ficha");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}


