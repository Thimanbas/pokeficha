const addNewRow = document.querySelector("#move-add-btn")
const moveTable = document.querySelector("#trainer-move-table")
const changePokePic = document.querySelector("#poke-pic")
const inputPokePic = document.querySelector("#poke-pic-input")

const ficha = document.getElementById('inputFile');
const conteudoFicha = document.getElementById('conteudoFicha');

const abilityTable = document.getElementById('ability-table')

var vdaInput = document.getElementById('vda-input')
var nvlInput = document.getElementById('nvl-input')
var expInput = document.getElementById('exp-input')
var affInput = document.getElementById('aff-input')
var hpInput = document.getElementById('hp-input')
var atkInput = document.getElementById('atk-input')
var defInput = document.getElementById('def-input')
var spAtkInput = document.getElementById('spatak-input')
var spDefInput = document.getElementById('spdef-input')
var speedInput = document.getElementById('spe-input')
var hitInput = document.getElementById('hit-input')
var ddgInput = document.getElementById('ddg-input')
var crtInput = document.getElementById('crt-input')
var natural;





//change pokemon pic preview
inputPokePic.addEventListener("change", function () {
    changePokePic.src = URL.createObjectURL(inputPokePic.files[0]);
})


function download() {
    var zip = new JSZip();
    var pokeTrainerName = document.getElementById("poke-trainer-name").textContent
    var pokeName = document.getElementById("poke-name").textContent
    domtoimage.toBlob(document.getElementById('ficha'))
    .then(function (imageBlob) {
      zip.file(`${pokeTrainerName}_${pokeName}.png`, imageBlob);

      // Baixe o HTML e adicione-o ao ZIP
      let x = document.querySelector(".ficha");
      x = x.outerHTML;
      let htmlBlob = new Blob([x], { type: 'text/html' });
      zip.file(`${pokeTrainerName}_${pokeName}.html`, htmlBlob);

      // Gere o arquivo ZIP
      zip.generateAsync({ type: "blob" }).then(function(content) {
        // Crie um objeto Blob com o conteúdo ZIP
        var blob = new Blob([content], { type: "application/zip" });

        // Crie um URL para o arquivo ZIP
        var url = URL.createObjectURL(blob);

        // Crie um link para download do arquivo ZIP
        var link = document.createElement('a');
        link.href = url;
        link.download = `${pokeTrainerName}_${pokeName}.zip`;

        // Simule um clique no link para iniciar o download
        link.click();
      });
    });
}

















//put the old characterSheet in screen
ficha.addEventListener('change', function () {
    const file = ficha.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            // O conteúdo do arquivo estará disponível em e.target.result
            const conteudoHTML = e.target.result;
            // Exibir o conteúdo do arquivo na página
            conteudoFicha.innerHTML = conteudoHTML;
            getInfo()
        };

        reader.readAsText(file);
    }
});


//get info on pokemon based on the poke name
function getInfo() {
    var pokeName = document.querySelector("#poke-name");
    const pokePicFicha = document.querySelector("#pokemon-front-image")
    deleteMovesId()
    pokeName = pokeName.textContent.toLowerCase()
    getStat()
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(res => res.json())
        .then(data => {
            changePokePic.src = pokePicFicha.src
            for (i = 0; i < data['abilities'].length; i++) {
                checkAbility(data['abilities'][i]['ability']['name'], true)
            }
            moveHandlerFicha(data["moves"])
        })
}


function getStat() {
    var basicStatus = document.querySelectorAll('[class="stat"]')
    var advStatus = document.querySelectorAll('[class="stat-other"]')

    vdaInput.value = document.getElementById('kda').textContent
    nvlInput.value = parseInt(document.getElementById('poke-nvl').textContent.slice(7))
    expInput.value = parseInt(document.getElementById('poke-exp').textContent.slice(5))
    affInput.value = parseInt(document.getElementById('poke-aff').textContent.slice(9))






    for (i = 0; i < basicStatus.length; i++) {
        switch (i) {
            case 0: {
                hpInput.value = parseInt(basicStatus[i].getAttribute('value'))
                break;
            }
            case 1: {
                atkInput.value = parseInt(basicStatus[i].getAttribute('value'))
                break;
            }
            case 2: {
                defInput.value = parseInt(basicStatus[i].getAttribute('value'))
                break;
            }
            case 3: {
                spAtkInput.value = parseInt(basicStatus[i].getAttribute('value'))
                break;
            }
            case 4: {
                spDefInput.value = parseInt(basicStatus[i].getAttribute('value'))
            }
            case 5: {
                speedInput.value = parseInt(basicStatus[i].getAttribute('value'))
                break;
            }
        }
    }
    for (i = 0; i < advStatus.length; i++) {
        switch (i) {
            case 0: {
                hitInput.value = parseInt(advStatus[i].getAttribute('value'))
                break;
            }
            case 1: {
                ddgInput.value = parseInt(advStatus[i].getAttribute('value'))
                break;
            }
            case 2: {
                crtInput.value = parseInt(advStatus[i].getAttribute('value'))
                break;
            }
        }
    }

}


function deleteMovesId() {
    let checkboxesTm = document.querySelectorAll('[id="tutor-checkbox"]')
    let checkboxesTutor = document.querySelectorAll('[id="tm-checkbox"]')
    for (i = 0; i < checkboxesTm.length; i++) {
        checkboxesTm[i].setAttribute("id", "")
    }
    for (i = 0; i < checkboxesTutor.length; i++) {
        checkboxesTutor[i].setAttribute("id", "")
    }
}



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
                        abilityTable.innerHTML += preAb;

                    }
                }


            })

    }

}




//add new row to move list
addNewRow.addEventListener('click', () => {
    //addRow()
    changeAdvanced()


})
function addRow() {
    var row = moveTable.insertRow(moveTable.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    /*`
        <tr>
            <td></td>
            <td><textarea type="text" class="textarea-container"></textarea></td>
        </tr>
    `*/
    cell1.innerHTML = '<input type="text" class="input-container"/>'
    cell2.innerHTML = '<textarea type="text" class="textarea-container"></textarea>'
}

function update() {
    const file = document.querySelector("#inputFile").files
    if (file.length == 0) return alert("Você não selecionou sua ficha.")

    const pokeName = document.getElementById("rename-pokemon")
    const pokeTypeOne = document.getElementById("type-one-select")
    const pokeTypeTwo = document.getElementById("type-two-select")
    var pokeAbility = document.querySelectorAll('[name = "ability-checkbox"]')
    pokeAbility.forEach(item => {
        if (item.checked) pokeAbility = item;

    })


    changeBasics(pokeName, pokeTypeOne, pokeTypeTwo, pokeAbility)
    changeMoves()
    changeNature();
}

function changeBasics(pokeName, pokeTypeOne, pokeTypeTwo, pokeAblityName) {

    if (pokeName.value != "") document.getElementById("poke-trainer-name").textContent = pokeName.value.toUpperCase();
    document.getElementById("pokemon-front-image").src = document.getElementById("poke-pic").src
    if (pokeTypeOne.value != "-1" && pokeTypeOne.value != "0") document.getElementById("poke-typeone").src = typeMap.get(pokeTypeOne.value)
    if (pokeTypeTwo.value != "-1" && pokeTypeTwo.value != "0") document.getElementById("poke-typetwo").src = typeMap.get(pokeTypeTwo.value)


    switch (pokeTypeOne.value) {
        case "-1": {
            if (pokeTypeTwo == "0") {
                break;
            }
            typeWeakness2(invertedTypeMap.get((document.getElementById("poke-typeone").src).slice(-28)), invertedTypeMap.get((document.getElementById("poke-typetwo").src).slice(-28)))


            break;
        }
        case "0": {
            document.getElementById("poke-typeone").src = "Images/Types/noneIC_SV.png"
            if (pokeTypeTwo == "0") {
                typeWeakness2(null, null)
                break;
            }
            typeWeakness2(null, (document.getElementById("poke-typetwo").src).slice(-28))
            break;
        }
        default: {
            if (pokeTypeTwo == "0") {
                typeWeakness2((document.getElementById("poke-typeone").src).slice(-28), null)
                break;
            }
            typeWeakness2(invertedTypeMap.get((document.getElementById("poke-typeone").src).slice(-28)), invertedTypeMap.get((document.getElementById("poke-typetwo").src).slice(-28)))

            break;
        }
    }
    switch (pokeTypeTwo.value) {
        case "-1": {
            if (pokeTypeOne == "0") {
                break;
            }
            typeWeakness2(invertedTypeMap.get((document.getElementById("poke-typeone").src).slice(-28)), invertedTypeMap.get((document.getElementById("poke-typetwo").src).slice(-28)))


            break;
        }
        case "0": {
            document.getElementById("poke-typetwo").src = "Images/Types/noneIC_SV.png"
            if (pokeTypeOne == "0") {
                typeWeakness2(null, null)
                break;
            }
            typeWeakness2((document.getElementById("poke-typeone").src).slice(-28), null)
            break;

        }
        default: {
            if (pokeTypeOne == "0") {
                typeWeakness2(null, (document.getElementById("poke-typetwo").src).slice(-28))
                break;
            }
            typeWeakness2(invertedTypeMap.get((document.getElementById("poke-typeone").src).slice(-28)), invertedTypeMap.get((document.getElementById("poke-typetwo").src).slice(-28)))
            break;
        }
    }

    if (pokeAblityName.length == undefined) {
        fetch(`https://pokeapi.co/api/v2/ability/${pokeAblityName.value}/`)
            .then(res => res.json())
            .then(data => {
                for (i = 0; i < data["effect_entries"].length; i++) {

                    if (data["effect_entries"][i]["language"]["name"] == "en") {
                        let ab = `<spam class="deepblue-stat">Ability: </spam><spam id = "blue-stat">${pokeAblityName.value}: ${data["effect_entries"][i]["effect"]}</spam>`
                        document.getElementById("poke-ability").innerHTML = ab;

                    }
                }

            })
    }
    const pokemonDamageTaken = document.getElementById("table-damage")

}
function changeAdvanced() {
    var moveName = document.getElementById("trainer-move-name-input")
    var moveDesc = document.getElementById("trainer-move-desc-input")
    var moveTable = document.getElementById("trainer-moves-table")
    moveTable.className = "table"
    moveTable.innerHTML += `
        <tr>
            <td>${moveName.value}</td>
            <td><textarea>${moveDesc.value}</textarea></td>
        </tr>
    `
    moveName.value = ""
    moveDesc.value = ""
}

function changeStatus() {
    try {
        document.getElementById("kda").textContent = vdaInput.value
        document.getElementById("poke-nvl").textContent = `Nivel: ${nvlInput.value}`
        document.getElementById("poke-exp").textContent = `Exp: ${expInput.value}`
        document.getElementById("poke-aff").textContent = `Exp: ${affInput.value}`

        var tot = 0;
        var stats = document.querySelectorAll('[class="stat"]')

        stats.forEach(item => {

            switch (item.id) {
                case "hp-stat": {
                    item.setAttribute = ("value", `${hpInput.value}`)
                    var buff = (natural === 9) ? "ₙ" : "";
                    item.innerHTML = `
                        
                            <div class="stat-ficha">
                                <spam class="deepblue-stat">Hp:</spam>
                                <spam class="blue-stat">${Math.floor(parseInt(hpInput.value) / 10)}</spam>
                                <spam id = "red-stat">${Math.floor(parseInt(hpInput.value) % 10)}</spam>
                                <spam id = "natural-buff">${buff}</spam>
                            </div>
                            <div class = "progress-bar">
                                <div id="hp" style ="width: ${(parseInt(hpInput.value) / 255) * 100}%"></div>
                            </div>
                     
                    `
                    tot += parseInt(hpInput.value)
                    break;
                }
                case "attack-stat": {
                    item.setAttribute = ("value", `${atkInput.value}`)
                    var buff = (natural === 8) ? "ₙ" : "";

                    item.innerHTML = `
                        
                            <div class="stat-ficha">
                                <spam class="deepblue-stat">Attack:</spam>
                                <spam class="blue-stat">${Math.floor(parseInt(atkInput.value) / 10)}</spam>
                                <spam id = "red-stat">${Math.floor(parseInt(atkInput.value) % 10)}</spam>
                                <spam id = "natural-buff">${buff}</spam>
                            </div>
                            <div class = "progress-bar">
                                <div id="hp" style ="width: ${(parseInt(atkInput.value) / 255) * 100}%"></div>
                            </div>
                     
                    `
                    tot += parseInt(atkInput.value)

                    break;
                }
                case "defense-stat": {
                    item.setAttribute = ("value", `${defInput.value}`)
                    var buff = (natural === 1) ? "ₙ" : "";

                    item.innerHTML = `
                        
                            <div class="stat-ficha">
                                <spam class="deepblue-stat">Defense:</spam>
                                <spam class="blue-stat">${Math.floor(parseInt(defInput.value) / 10)}</spam>
                                <spam id = "red-stat">${Math.floor(parseInt(defInput.value) % 10)}</spam>
                                <spam id = "natural-buff">${buff}</spam>
                            </div>
                            <div class = "progress-bar">
                                <div id="hp" style ="width: ${(parseInt(defInput.value) / 255) * 100}%"></div>
                            </div>
                     
                    `
                    tot += parseInt(defInput.value)

                    break;
                }
                case "special-attack-stat": {
                    item.setAttribute = ("value", `${spAtkInput.value}`)
                    var buff = (natural === 6) ? "ₙ" : "";

                    item.innerHTML = `
                        
                            <div class="stat-ficha">
                                <spam class="deepblue-stat">Sp. Atk:</spam>
                                <spam class="blue-stat">${Math.floor(parseInt(spAtkInput.value) / 10)}</spam>
                                <spam id = "red-stat">${Math.floor(parseInt(spAtkInput.value) % 10)}</spam>
                                <spam id = "natural-buff">${buff}</spam>
                            </div>
                            <div class = "progress-bar">
                                <div id="hp" style ="width: ${(parseInt(spAtkInput.value) / 255) * 100}%"></div>
                            </div>
                     
                    `
                    tot += parseInt(spAtkInput.value)

                    break;
                }
                case "special-defense-stat": {
                    item.setAttribute = ("value", `${spDefInput.value}`)
                    var buff = (natural === 2) ? "ₙ" : "";

                    item.innerHTML = `
                        
                            <div class="stat-ficha">
                                <spam class="deepblue-stat">Sp. Def:</spam>
                                <spam class="blue-stat">${Math.floor(parseInt(spDefInput.value) / 10)}</spam>
                                <spam id = "red-stat">${Math.floor(parseInt(spDefInput.value) % 10)}</spam>
                                <spam id = "natural-buff">${buff}</spam>
                            </div>
                            <div class = "progress-bar">
                                <div id="hp" style ="width: ${(parseInt(spDefInput.value) / 255) * 100}%"></div>
                            </div>
                     
                    `
                    tot += parseInt(spDefInput.value)

                    break;
                }
                case "speed-stat": {
                    item.setAttribute = ("value", `${speedInput.value}`)
                    var buff = (natural === 3) ? "ₙ" : "";

                    item.innerHTML = `
                        
                            <div class="stat-ficha">
                                <spam class="deepblue-stat">Speed:</spam>
                                <spam class="blue-stat">${Math.floor(parseInt(speedInput.value) / 10)}</spam>
                                <spam id = "red-stat">${Math.floor(parseInt(speedInput.value) % 10)}</spam>
                                <spam id = "natural-buff">${buff}</spam>
                            </div>
                            <div class = "progress-bar">
                                <div id="hp" style ="width: ${(parseInt(speedInput.value) / 255) * 100}%"></div>
                            </div>
                     
                    `
                    tot += parseInt(speedInput.value)

                    break;
                }
            }
        })
        document.getElementById("total-stat").textContent = tot;
        var otherStats = document.querySelectorAll('[class="stat-other"]')
        otherStats.forEach(item => {
            switch (item.id) {
                case "hit-stat": {
                    item.setAttribute = ("value", `${hitInput.value}`)
                    var buff = (natural === 4) ? "ₙ" : "";

                    item.innerHTML = `  
                            <spam class="deepblue-stat">Hit:</spam>
                            <spam class ="blue-stat">${hitInput.value}%</spam>                               
                            <spam id = "natural-buff">${buff}</spam>
                    `

                    break;
                }
                case "ddg-stat": {
                    item.setAttribute = ("value", `${ddgInput.value}`)
                    var buff = (natural === 7) ? "ₙ" : "";

                    item.innerHTML = `  
                            <spam class="deepblue-stat">Dodge:</spam>
                            <spam class ="blue-stat">${ddgInput.value}%</spam>                               
                            <spam id = "natural-buff">${buff}</spam>
                    `

                    break;
                }
                case "crt-stat": {
                    item.setAttribute = ("value", `${crtInput.value}`)
                    var buff = (natural === 5) ? "ₙ" : "";

                    item.innerHTML = `  
                            <spam class="deepblue-stat">Dodge:</spam>
                            <spam class ="blue-stat">${crtInput.value}%</spam>                               
                            <spam id = "natural-buff">${buff}</spam>
                    `

                    break;
                }

            }

        })

    } catch (e) {

    }




}

function changeMoves() {
    var tutorMovesTable = document.getElementById("tutor-move-table")
    var tutorMovesTableFicha = document.getElementById("poke-tutor-move")
    var tmMovesTable = document.getElementById("tm-move-table")
    var tmMovesTableFicha = document.getElementById("poke-tm-move")




    tutorMovesTableFicha.innerHTML = `
    <table id="poke-tutor-move">
        <tbody><tr>
            <th class="table-name"><input type="checkbox" checked=""></th>
            <th class="table-name">Type</th>
            <th class="table-name">Class</th>
            <th class="table-name move-name">Name</th>
            <th class="table-name">Power</th>
            <th class="table-name">Acc</th>
        </tr></tbody>
    </table>
    `
    tmMovesTableFicha.innerHTML = `
    <table id="poke-tm-move">
        <tbody><tr>
            <th class="table-name"><input type="checkbox" checked=""></th>
            <th class="table-name">Type</th>
            <th class="table-name">Class</th>
            <th class="table-name move-name">Name</th>
            <th class="table-name">Power</th>
            <th class="table-name">Acc</th>
        </tr></tbody>
    </table>
    `
    for (i = 1; i < tutorMovesTable.rows.length; i++) {
        tutorMovesTableFicha.innerHTML += `
         ${(tutorMovesTable.rows[i]).outerHTML}
        `
    }
    for (i = 1; i < tmMovesTable.rows.length; i++) {
        tmMovesTableFicha.innerHTML += `
            ${(tmMovesTable.rows[i]).outerHTML}
        `
    }
}


function changeNature() {
    var currentNature;
    var newNature = parseInt(document.getElementById("nature").value)
    switch (newNature) {
        case 0: {
            natural = natureMap.get(document.querySelector(".nature").getAttribute("id"))

            changeStatus()

            break;
        }
        case 1: {
            document.getElementById("def-input").value = parseInt(document.getElementById("def-input").value) + 50;
            getNature(true)
            createNature(newNature)
            getNature(false)
            changeStatus()

            break;
        }
        case 2: {
            document.getElementById("spdef-input").value = parseInt(document.getElementById("spdef-input").value) + 50;
            getNature(true)
            createNature(newNature)
            getNature(false)
            changeStatus()
            break;
        }
        case 3: {
            document.getElementById("spe-input").value = parseInt(document.getElementById("spe-input").value) + 50;
            getNature(true)
            createNature(newNature)
            getNature(false)
            changeStatus()
            break;
        }
        case 4: {
            document.getElementById("hit-input").value = parseInt(document.getElementById("hit-input").value) + 15;
            getNature(true)
            createNature(newNature)
            getNature(false)
            changeStatus()
            break;
        }
        case 5: {
            document.getElementById("crt-input").value = parseInt(document.getElementById("crt-input").value) + 10;
            getNature(true)
            createNature(newNature)
            getNature(false)
            changeStatus()
            break;
        }
        case 6: {
            document.getElementById("spatk-input").value = parseInt(document.getElementById("spatk-input").value) + 10;
            getNature(true)
            createNature(newNature)
            getNature(false)
            changeStatus()
            break;
        }
        case 7: {
            document.getElementById("ddg-input").value = parseInt(document.getElementById("ddg-input").value) + 15;
            getNature(true)
            createNature(newNature)
            getNature(false)
            changeStatus()
            break;
        }
        case 8: {
            document.getElementById("atk-input").value = parseInt(document.getElementById("atk-input").value) + 50;
            getNature(true)
            createNature(newNature)
            getNature(false)
            changeStatus()
            break;
        }
        case 9: {
            document.getElementById("hp-input").value = parseInt(document.getElementById("hp-input").value) + 50;
            getNature(true)
            createNature(newNature)
            getNature(false)
            changeStatus()
            break;
        }
    }
}


function getNature(change) {
    var fichaNature = document.querySelector(".nature")
    if (change) {

        switch (fichaNature.getAttribute("id")) {
            case "Inflexível": {
                document.getElementById("def-input").value = parseInt(document.getElementById("def-input").value) - 50;
                natural = 1
                break;
            }
            case "Dócil": {
                document.getElementById("spdef-input").value = parseInt(document.getElementById("spdef-input").value) - 50;
                natural = 2
                break;
            }
            case "Alegre": {
                document.getElementById("spe-input").value = parseInt(document.getElementById("spe-input").value) - 50;
                natural = 3
                break;
            }
            case "Corajoso": {
                document.getElementById("hit-input").value = parseInt(document.getElementById("hit-input").value) - 15;
                natural = 4
                break;
            }
            case "Solitário": {
                document.getElementById("crt-input").value = parseInt(document.getElementById("crt-input").value) - 10;
                natural = 5
                break;
            }
            case "Cuidadoso": {
                document.getElementById("spatk-input").value = parseInt(document.getElementById("spatk-input").value) - 50;
                natural = 6
                break;
            }
            case "Atrevido": {
                document.getElementById("ddg-input").value = parseInt(document.getElementById("ddg-input").value) - 15;
                natural = 7
                break;
            }
            case "Valente": {
                document.getElementById("atk-input").value = parseInt(document.getElementById("atk-input").value) - 50;

                natural = 8
                break;
            }
            case "Tranquilo": {
                document.getElementById("hp-input").value = parseInt(document.getElementById("hp-input").value) - 50;
                natural = 9
                break;
            }
        }
    }
    else {
        switch (fichaNature.getAttribute("id")) {
            case "Inflexível": {
                natural = 1
                break;
            }
            case "Dócil": {
                natural = 2
                break;
            }
            case "Alegre": {
                natural = 3
                break;
            }
            case "Corajoso": {
                natural = 4
                break;
            }
            case "Solitário": {
                natural = 5
                break;
            }
            case "Cuidadoso": {
                natural = 6
                break;
            }
            case "Atrevido": {
                natural = 7
                break;
            }
            case "Valente": {

                natural = 8
                break;
            }
            case "Tranquilo": {
                natural = 9
                break;
            }
        }
    }
}



function createNature(natureName) {



    let rValue = natureName - 1
    const nat = `
        <div class = "nature" id ="${natures[rValue].name}"><spam class="blue-stat">T${rValue + 1} - ${natures[rValue].name},${natures[rValue].effectName} +${natures[rValue].statBuff}
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
    document.getElementById("poke-nature").innerHTML = nat;


}




function createStatus(statName, statValueBlue, statValueRed) {
    let totalstat = ((parseInt(statValueBlue) * 10) + parseInt(statValueRed))
    if (statName != "crt" && statName != "hit" && statName != "ddg") {

        let stat = `
        <div id="stat" value="${totalstat}">
            <div class='stat-ficha'><spam id = "deepblue-stat">${statChanger.get(statName)}</spam> 
            <spam id = "blue-stat">${statValueBlue}</spam><spam  id = "red-stat">${statValueRed}</spam>
            <div id="natural-buff">${naturalBuff}</div>
        </div>
        <div class = "progress-bar">
            <div id = '${statName}'></div>
        </div>
        `

        pokemonStatus.innerHTML += stat;
        createStatusBar(statName, statValueBlue, statValueRed)

    }
    if (statName == "crt" || statName == "hit" || statName == "ddg") {
        let stat = `
        
        <div id ="stat-other" value="${totalstat}"><spam id = "deepblue-stat">${statChanger.get(statName)}</spam> 
        <spam id = "blue-stat">${statValueBlue}${statValueRed}%</spam>
        <div id="natural-buff">${naturalBuff}</div>
        `
        pokemonStatus.innerHTML += stat;
    }

}


function typeWeakness2(typeOne, typeTwo) {
    var result = new Array();
    if (typeOne != typeTwo) {
        if (!typeTwo) typeTwo = "none";
        if (!typeOne) typeOne = "none";
        const linha = document.getElementById("damage-taken-table").rows[1]
        for (i = 0; i < linha.cells.length; i++) {

            if (types[i][typeNameMap.get(typeOne)] * types[i][typeNameMap.get(typeTwo)] == 0) {
                linha.cells[i].innerHTML = `
                
                <td id = "zero-damage">0</td> 
             
            `
                linha.cells[i].id = "zero-damage"
            }
            if (types[i][typeNameMap.get(typeOne)] * types[i][typeNameMap.get(typeTwo)] == .25) {
                linha.cells[i].innerHTML = `
                
                <td id = "quart-damage">0.25</td> 
             
            `
                linha.cells[i].id = "quart-damage"

            }
            if (types[i][typeNameMap.get(typeOne)] * types[i][typeNameMap.get(typeTwo)] == .5) {
                linha.cells[i].innerHTML = `
                
                <td id = "half-damage">0.5</td> 
             
            `
                linha.cells[i].id = "half-damage"

            }
            if (types[i][typeNameMap.get(typeOne)] * types[i][typeNameMap.get(typeTwo)] == 1) {
                linha.cells[i].innerHTML = `
                
                <td id = "normal-damage">1</td> 
             
            `
                linha.cells[i].id = "normal-damage"

            }
            if (types[i][typeNameMap.get(typeOne)] * types[i][typeNameMap.get(typeTwo)] == 2) {
                linha.cells[i].innerHTML = `
                
                <td id = "db-damage">2</td> 
             
            `
                linha.cells[i].id = "db-damage"

            }
            if (types[i][typeNameMap.get(typeOne)] * types[i][typeNameMap.get(typeTwo)] == 4) {
                linha.cells[i].innerHTML = `
                
                <td id = "ft-damage">4</td> 
             
            `
                linha.cells[i].id = "ft-damage"

            }
        }
    }
}