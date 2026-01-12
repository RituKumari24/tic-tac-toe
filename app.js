const boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector('#message');

trunO = true;
count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


const resetGame = () => {
    trunO = true;
    count = 0;
    boxes.forEach((box) => {
        box.innerText = '';
        box.disabled = false;
    });
    msgContainer.classList.add('hide');

};


boxes.forEach((box )=> {
    box.addEventListener('click', () => {
        if(trunO){
            box.innerText = 'O';
            trunO = false;
        } else {
            box.innerText = 'X';
            trunO = true;
        }
        box.disabled = true;
        count += 1;

        let isWinner = checkWinner();

        if(!isWinner && count === 9){
            msg.innerText = "It's a Draw!";
            msgContainer.classList.remove('hide');
        }
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations! ${winner} has won the game.`;
    msgContainer.classList.remove('hide');
    for (let box of boxes) {
        box.disabled = true;
    }
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        const boxA = boxes[pattern[0]].innerText;
        const boxB = boxes[pattern[1]].innerText;
        const boxC = boxes[pattern[2]].innerText;

        if (boxA && boxB && boxC){
            if (boxA === boxB && boxB === boxC) {
                showWinner(boxA);
                // return true;
            }
        }

    }
};

newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);




