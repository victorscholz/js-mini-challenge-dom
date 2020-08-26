document.addEventListener("DOMContentLoaded", function(e) {
    const header = document.querySelector("#header")
    console.log("Here's your header:", header)
    
    header.style.color = "red"
    
    console.log("PLAYERS array looks like this:", PLAYERS)

    PLAYERS.forEach(function(player) {
        const playerContainer = document.querySelector(".player-container")
        const playerDiv = document.createElement("playerDiv")
        playerDiv.className = "player"
        playerDiv.dataset.number = `${player.number}`
        
        const aPlayer = `
        <h3>${player.name} (<em>${player.nickname}</em>)</h3>
        <img src="${player.photo}" alt="${player.name}">
        `
        playerDiv.innerHTML = aPlayer
        playerContainer.append(playerDiv)
    })

    const wrongPlayer = document.querySelector("[data-number='7']")
    wrongPlayer.remove()

});
/***** Deliverable 1 *****/


/***** Deliverable 2 *****/


/***** Deliverable 3 *****/


/***** Deliverable 4 *****/