let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let newBtn = document.querySelector("#newBtn");
let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");

let turn0 = true;
const winPaterns = [
    [0,1,2], 
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
const showWinner = (pos1Value) =>{
    msg.innerText = `Congratulation ${pos1Value}`;
    msgContainer.classList.remove("hide")
}
const newGame = ()=>{
    player0 = true;
    ensableBtn()
    msgContainer.classList.add("hide")
}
const resetGame = ()=>{
    player0 = true;
    ensableBtn()
    msgContainer.classList.add("hide")
}

const disableBtn = ()=>{
    for(let box of boxes){
        player0 = true;
        box.disabled = true;
    }
}
const ensableBtn = ()=>{
    for(let box of boxes){
        player0 = true;
        box.disabled = false;
        box.innerText = ""
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = "0"
            turn0 = false;
        }else{
            box.innerText = "x"
            turn0 = true;
        }
        box.disabled = true;
        checkWinner()
    })
})


const checkWinner = ()=>{
    for(let patern of winPaterns){
        let pos1Value = boxes[patern[0]].innerText;
        let pos2Value = boxes[patern[1]].innerText;
        let pos3Value = boxes[patern[2]].innerText;
        if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                showWinner(pos1Value);
                disableBtn()
            }
        }
    }
}


newBtn.addEventListener("click",newGame)
reset.addEventListener("click",resetGame)