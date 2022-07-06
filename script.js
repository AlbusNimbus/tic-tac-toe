


const Player = () => {
    let sign = "cross"
    return 
};
let player = "cross"
const gameController = (() => {
    let board = Array(9)
    let nextPlayer = "cross"

    const playRound = (player, field) => {
        if (!getFieldValue(field) && myTurn(player)) {
            board[field] = player
            displayController.updateField(player, field)
            playerTurn(player)
        }
    }

    const playerTurn = (player) => {
        if(player.sign === "cross"){
            nextPlayer = "circle"
        } else{
            nextPlayer = "cross"
        }
    }
    const myTurn = (player) => {
        if(nextPlayer === "cross"){
            return true
        }
        return false
    }

    const getFieldValue = (field) => {
        return board[field]
    }
    return {playRound, getFieldValue}
})();


const displayController = (() => {
    const fields = document.querySelectorAll('.field')

    fields.forEach((field) => {
        field.addEventListener("click", (e) => {
            gameController.playRound(player,field.id)
        })
    })

    const updateField = (player, field) => {
            if (player.sign === "circle") {
                fields[field].querySelector(".circle").classList.add('active')
            } else if (player === "cross"){
                fields[field].querySelector(".cross").classList.add('active')
            }  
    }
    return {updateField}
})();


const AI = (() => {

})();