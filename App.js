let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;//player-0
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turn0=true;
    EnableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X"
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const EnableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}

const showWinner=(Winner)=>{
    msg.innerText=`congratulations,Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const checkWinner=()=>{
    for( let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
  if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
    if(pos1Val===pos2Val && pos2Val===pos3Val){

       showWinner(pos1Val);

    }
  }
    }
};

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

