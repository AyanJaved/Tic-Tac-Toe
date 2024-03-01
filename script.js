let boxes = document.querySelectorAll(".box");// accessing all the boxes
let resetBtn = document.querySelector("#resetBtn"); // reset button
let turnO = true;// player turn tracker
let count = 0;// for checking if game is draw
let winner = false; // this will help when someone wins at 9th click
// winnig patterns
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

// enable boxes and reset button
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        count=0;
        winner=false;
    }
}
resetBtn.addEventListener("click",enableBoxes);

// main working of the button
boxes.forEach((box) => {
    box.addEventListener("click",()=>{ // tracking the click
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        count++;// increasing the count
        box.disabled = true; // disabling the button after one click 
        checkWinner();// function which checks winner
    });
});

// winner function definition 
const checkWinner= ()=>{ 
    for(let pattern of winPatterns){
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" &&pos3val != "" ){// first checks if the box is empty
            if(pos1val === pos2val && pos2val===pos3val){
                alert((pos1val)+" is the Winner"); // gives alert if the winner is found
                winner=true; // count condition will not give the output
                for(let box of boxes){ // disabling boxes after match ends
                    box.disabled = true;
                }
            }
        }
    }
    if(winner != true && count===9){ // checking the draw condition
        alert("Game Draw")
    }
}

