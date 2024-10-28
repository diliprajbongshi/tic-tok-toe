let boxes = document.querySelectorAll(".box");
let mgsContainer = document.querySelector(".hide");
let msg = document.querySelector(".msg");
let newBtn = document.querySelector("#newBtn");
let reset = document.querySelector("#reset");
let player0 = true;

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
const disabledBox = ()=>{
    for(let box of boxes){
        player0 = true;
        box.disabled = true;
    }
}
const ensabledBox = ()=>{
    for(let box of boxes){
        player0 = true;
        box.disabled = false;
        box.innerText = ""
    }
}
const newGame = ()=>{
    player0 = true;
    ensabledBox()
    mgsContainer.classList.add("hide")
}
const resetGame = ()=>{
    player0 = true;
    ensabledBox()
    mgsContainer.classList.add("hide")
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(player0){
            box.innerText = "0";
            player0 = false;
        }else{
            box.innerText = "x";
            player0 = true;
        }
        box.disabled = true;
        checkWinner()
    })
})
const showMsg = (winner)=>{
    msg.innerText = `The winner is ${winner}`;
    mgsContainer.classList.remove("hide")
}
const checkWinner = ()=>{
    for(let patern of winPaterns){
       let po1value = boxes[patern[0]].innerText;
       let po2value = boxes[patern[1]].innerText;
       let po3value = boxes[patern[2]].innerText;
  
       if(po1value != "" && po2value != "" && po3value != ""){
           if(po1value === po2value && po2value === po3value){
                 showMsg(po1value)
                 disabledBox()
           }
       }

    }
}


newBtn.addEventListener("click",newGame)
reset.addEventListener("click",resetGame)