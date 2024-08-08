let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg =document.querySelector("#msg");

let turn0=true;//playerX,player0

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame = ()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");



};


    boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
            console.log("box is clicked");
            if(turn0){
                box.innerText="0";
                turn0=false;
            }
            else{
                box.innerText="X";
                turn0=true ;
            }
            box.disabled =true;
            checkWinner();

        })

    });

     

     const disableboxes =()=>{
        for(let box of boxes){
            box.disabled=true;
        }
     }

     
     const enableboxes =()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";

        }
     }



    const showWinner=(winner)=>{
   msg.innerText=`congratulations Winner is ${winner}`;
   msgcontainer.classList.remove("hide");
   disableboxes();
    };

    const checkWinner=()=>{
        for( let pattern of winpatterns){
            
            let pos1value =boxes[pattern[0]].innerText;
            let pos2value =boxes[pattern[1]].innerText;
            let pos3value =boxes[pattern[2 ]].innerText;

            if(pos1value !="" && pos2value !="" && pos3value!=""){
                if(pos1value === pos2value && pos2value===pos3value){
                    console.log("winner",pos1value);
                    showWinner(pos1value);
                }

            };

        };
       
    };

    newgamebtn.addEventListener("click",resetgame);
    
    resetbtn.addEventListener("click",resetgame);
