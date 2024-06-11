let boxes = document.querySelectorAll('.btn');
let turn = "X";
let gameOver = false;

const changeMove = () => {
    turn = turn === "X" ? "0" : "X";
}

function checkWin() {
    console.log('function called')
    let win_possibilities = [
        [0, 1, 2, 0, 4, 0, 24],
        [3, 4, 5, 0, 12, 0, 24],
        [6, 7, 8, 0, 20, 0, 24],
        [0, 3, 6, 4, 0, 90, 24],
        [1, 4, 7, 12, 0, 90, 24],
        [2, 5, 8, 20, 0, 90, 24],
        [0, 4, 8, 0, 0, 45, 34],
        [2, 4, 6, 0, 24, -45, 34]
    ];
    let boxTexts = document.querySelectorAll('.boxText');
    win_possibilities.forEach((smallArray) => {
        if ((boxTexts[smallArray[0]].textContent === boxTexts[smallArray[1]].textContent) && (boxTexts[smallArray[2]].textContent === boxTexts[smallArray[1]].textContent) && boxTexts[smallArray[0]].textContent !== "") {
            document.getElementById('turn-and-reset-btn').firstElementChild.textContent = turn + " Won";
            let line = document.getElementById('line');
            line.style.width = `${smallArray[6]}vw`;
            line.style.transform = `translate(${smallArray[3]}vw, ${smallArray[4]}vw) rotateZ(${smallArray[5]}deg)`

            gameOver = true;
            return true;
        }
    })
}

boxes.forEach(box => {
    let boxText = box.querySelector('.boxText');
    box.addEventListener('click', () => {
        if (!gameOver) {
            if (boxText.textContent == "") {
                boxText.innerHTML = turn;
                checkWin();
                changeMove();
                if (!gameOver) {
                    document.getElementById('turn-and-reset-btn').firstElementChild.textContent = 'Turn for ' + turn;
                }
            }
            else {
                document.getElementById('alert').style.transformOrigin = 'left'
                document.getElementById('alert').textContent = "Select another box to play your move"
                document.getElementById('alert').style.transform = 'scale(1, 1)';
                setTimeout(() => {
                    document.getElementById('alert').style.transformOrigin = 'right'
                    document.getElementById('alert').style.transform = 'scale(0, 1)';
                }, 3000);
            }
        }
        else {
            document.getElementById('alert').style.transformOrigin = 'left'
            document.getElementById('alert').textContent = 'Game over, Press reset button to restart.';
            document.getElementById('alert').style.transform = 'scale(1, 1)';
            setTimeout(() => {
                document.getElementById('alert').style.transformOrigin = 'right'
                document.getElementById('alert').style.transform = 'scale(0, 1)';
            }, 3000);
        }
    })
})

document.getElementById('reset-btn').addEventListener('click', () => {
    gameOver = false;
    document.querySelectorAll('.boxText').forEach(text => {
        text.textContent = "";
        turn = "X";
        document.getElementById('turn-and-reset-btn').firstElementChild.textContent = 'Turn for ' + turn;
        let line = document.getElementById('line');
        line.style.width = `0`;
    })
})
