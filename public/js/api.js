const url = 'https://estagio.geopostenergy.com/WorldCup/GetAllTeams'
let groupOne = [];
let one = 'Grupo 1';
let groupTwo = [];
let two = 'Grupo 2';
let groupThree = [];
let three = 'Grupo 3';
let groupFour = [];
let four = 'Grupo 4';
let groupFive = [];
let five = 'Grupo 5';
let groupSix = [];
let six = 'Grupo 6';
let groupSeven = [];
let seven = 'Grupo 7'
let groupEigth = [];
let eigth = 'Grupo 8'
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
    makeTeams(groupEigth, array);
}
function  addTeams(group, div) {
    
    let expositor = document.getElementById(div)
    let ul = document.createElement("ul");
    expositor.appendChild(ul);
    let li = document.createElement("li");  
    ul.appendChild(li) 
    li.innerText = div
    
    for(let i = 0; i<group.length; i++){
        let li = document.createElement("li");  
        ul.appendChild(li)  
        li.innerText = group[i].Name
    }  
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
       addTeams(groupOne, one)
       addTeams(groupTwo, two)
       addTeams(groupThree, three)
       addTeams(groupFour, four)
       addTeams(groupFive, five)
       addTeams(groupSix, six)
       addTeams(groupSeven, seven)
       addTeams(groupEigth, eigth)

    } catch (e) {
        console.log("ERRO!")
    }
}

getTeams()




