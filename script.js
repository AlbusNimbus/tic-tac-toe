



const Gameboard = () => {
    const putSign = (sign, cellId) => {
    const field = document.querySelector(`.cell-(${cellId})`);
    field.classList.add('put' + sign)
    console.log("hello")
    }
    return { putSign }
}


const gameController = () => {

}

const displayController = () => {
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.addEventListener('click', console.log(cell.id))
    });

    return { cells}
}

const dp = displayController()