


function Player(sign) {
    this.sign = sign
};


const gameController = (() => {
    let board = Array(9)
    const player1 = new Player("cross")
    const player2 = new Player("circle")
    let nextPlayer = player1

    const playRound = (field) => {
        if (!getFieldValue(field)) {
            board[field] = nextPlayer.sign
            displayController.updateField(nextPlayer, field)
            let winPackage = checkWinCondition(nextPlayer)
            if (winPackage[0]) { displayController.displayWinner(nextPlayer,winPackage[1]) }
            playerTurn(nextPlayer)
        }
    }

    const playerTurn = (player) => {
        if (player.sign === "cross") {
            nextPlayer = player2
        } else {
            nextPlayer = player1
        }
    }

    const myTurn = (player) => {
        if (nextPlayer === player.sign) {
            return true
        }
        return false
    }

    const getFieldValue = (field) => {
        return board[field]
    }

    const checkWinCondition = (player) => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        let isWon = false
        for ( let winCombination of winConditions ) {     
            if (board[winCombination[0]] === board[winCombination[1]] && board[winCombination[1]] === board[winCombination[2]] && board[winCombination[0]] === player.sign) {
                isWon = true
                return [isWon, winCombination]
            } 
        }
        return [isWon,[]]
        //return winConditions.some((element) => { return (element.every((index) =>{ return( board[index] == player.sign)})) })

        
        

    }

    return { playRound, getFieldValue }
})();


const displayController = (() => {
    const fields = document.querySelectorAll('.field')

    fields.forEach((field) => {
        field.addEventListener("click", (e) => {
            gameController.playRound(field.id)
        })
    })

    const updateField = (player, field) => {
        if (player.sign === "circle") {
            fields[field].querySelector(".circle").classList.add('active')
        } else if (player.sign === "cross") {
            fields[field].querySelector(".cross").classList.add('active')
        }
    }
    const displayWinner = (player, winningCombination) => {
        console.log(winningCombination)
        fields.forEach(field => {
            if(winningCombination.indexOf(parseInt(field.id)) !== -1){
                switch(field.id){
                    case "0":
                        setTimeout(()=>{field.querySelector("."+ player.sign).style.transform = "translate(100%,100%)"},500)
                        setTimeout(()=>{field.querySelector("."+ player.sign).style.transform += "scale(2)"},1000)
                        break
                    case "1":
                        setTimeout(()=>{field.querySelector("."+ player.sign).style.transform = "translate(0,100%)"},500)
                        setTimeout(()=>{field.querySelector("."+ player.sign).style.transform += "scale(2)"},1000)
                        break
                    case "2":
                        setTimeout(()=>{field.querySelector("."+ player.sign).style.transform = "translate(-100%,100%)"},500)
                        setTimeout(()=>{field.querySelector("."+ player.sign).style.transform += "scale(2)"},1000)
                        break
                    case "3":
                        setTimeout(()=>{field.querySelector("."+ player.sign).style.transform = "translate(100%,0)"},500)
                        setTimeout(()=>{field.querySelector("."+ player.sign).style.transform += "scale(2)"},1000)
                        break
                    case "4":
                        setTimeout(()=>{field.querySelector("."+ player.sign).style.transform = "translate(0,0)"},500)
                        setTimeout(()=>{field.querySelector("."+ player.sign).style.transform += "scale(2)"},1000)
                        break
                    case "5":
                        setTimeout(()=>{field.querySelector("."+ player.sign).style.transform = "translate(-100%,0)"},500)
                        setTimeout(()=>{field.querySelector("."+ player.sign).style.transform += "scale(2)"},1000)
                        break
                    case "6":
                        setTimeout(()=>{field.querySelector("."+ player.sign).style.transform = "translate(100%,-100%)"},500)
                        setTimeout(()=>{field.querySelector("."+ player.sign).style.transform += "scale(2)"},1000)
                        break   
                    case "7":
                        setTimeout(()=>{field.querySelector("."+ player.sign).style.transform = "translate(0,-100%)"},500)
                        setTimeout(()=>{field.querySelector("."+ player.sign).style.transform += "scale(2)"},1000)
                        break
                    case "8":
                        setTimeout(()=>{field.querySelector("."+ player.sign).style.transform = "translate(-100%,-100%)"},500)
                        setTimeout(()=>{field.querySelector("."+ player.sign).style.transform += "scale(2)"},1000)
                        break
        
                }
                
            }
        })
    }
    return { updateField, displayWinner }
})();


const AI = (() => {

})();
