const url = 'https://estagio.geopostenergy.com/WorldCup/GetAllTeams'
let groupOne = [];
let groupTwo = [];
let groupThree = [];
let groupFour = [];
let groupFive = [];
let groupSix = [];
let groupSeven = [];
let groupEight = [];
let sortedNumbers = [];

function makeTeams(group, array) {
    for (let i = 0; i < 4; i++) {
        let random = Math.floor(Math.random() * 32);
        function found() {
            return sortedNumbers.find(element => element === random);
        }
        while (found() !== undefined) {
            random = Math.floor(Math.random() * 32);
            found()
        }
        sortedNumbers.push(random);
        group.push(array[random]);
    }
}

function randomTeams(array) {


    for (let i = 0; i < 4; i++) {
        let random = Math.floor(Math.random() * 32)
        sortedNumbers.push(random)
        groupOne.push(array[random])
    }

    makeTeams(groupTwo, array);
    makeTeams(groupThree, array);
    makeTeams(groupFour, array);
    makeTeams(groupFive, array);
    makeTeams(groupSix, array);
    makeTeams(groupSeven, array);
    makeTeams(groupEight, array);
}
async function getTeams() {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "git-user": "bryumi"
            }
        })
        const jsonData = await response.json()
        const list = jsonData.Result

        randomTeams(list)
        console.log(groupOne, groupTwo, groupThree, groupFour, groupFive, groupSix,
            groupSeven, groupEight, sortedNumbers)

    } catch (e) {
        console.log("ERRO!")
    }
}

getTeams()

function addTeams(){
    let li = document.createElement("li");
    let text = document.createTextNode(`${groupOne[i].name}`);
    li.appendChild(text);
    document.getElementById('numberOne').appendChild(li);
    
    for(let i = 0; i<groupOne.length; i++){
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(`${groupOne[i].name}`));
        document.getElementById('numberOne').appendChild(li);
    }
}
addTeams()