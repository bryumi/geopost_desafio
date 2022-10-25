const url = 'https://estagio.geopostenergy.com/WorldCup/GetAllTeams'

async function getTeams(){
    try{
        const response = await fetch(url, {
          method: "GET",
          headers: {"Content-Type": "application/json",
                    "git-user": "bryumi"}
        })
        const jsonData = await response.json()
        const list = jsonData.Result
        console.log(list[Math.floor(Math.random() * 10)])



    } catch (e){
        console.log("ERRO!")
    }
}

getTeams()

/* function randomTeams(array){
    let limit = 1;
    let numSorted = []
    let groups = []
    
} */

