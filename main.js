
const button = document.getElementById('button');

button.addEventListener("click",function(){
    const myInput=document.getElementById('myInput').value
    fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${myInput}`)
.then(res=>res.json())
.then(data=>{
    const team = data.player;
    const Team = document.getElementById("Team");
    Team.innerHTML = " "
    for(let i=0;i<team.length;i++) {
        const div = document.createElement("div");
        div.className = " players"
        const element =  team[i];
        console.log(element);
        if(element.strThumb!=null){
            const teamPlayer = `
        <img src="${element.strThumb}">
        <div id="playerDiv">
        <h1>${element.strPlayer}</h1>
        <h2>${element.strSport}</h2>
        <h2>Country: ${element.strNationality}</h2>
        <h2>Club: ${element.strTeam}</h2>
        <button id="button">Details</button>
        </div>
        `
        div.innerHTML = teamPlayer;
        Team.appendChild(div)
        document.body.style.backgroundColor = " blue";
        document.body.style.backgroundImage = "none"
        }

        
    };


})
})