let gamesq = [];
let usersq = [];
let score = 0;
let body = document.querySelector("body");
let btns = document.querySelectorAll(".button");
let color = ["red", "yellow", "green", "purple"];
let h2 = document.querySelector("h2");
let started = false;

document.addEventListener("keypress", function (event) {
    
    if (started == false) {
        
        started = true; 
        // console.log("game started");
        levelup();
    }
})
let level = 0;
function levelup() {
    usersq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let random = Math.floor(Math.random() * 4);
    let randomcolor = color[random];
    // console.log(randomcolor);
    let randombtn=document.querySelector(`.${randomcolor}`)
    gameflash(randombtn);
    gamesq.push(randomcolor);
    // console.log(gamesq);
}
function gameflash(btn) {
    setTimeout(function () {
        btn.classList.add("gameflash");
   },1000)
    setTimeout(function () {
        btn.classList.remove("gameflash");
    }, 1500)
    
    
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },500)
}
function press() {  
    // console.log(this);
    userflash(this);
    usersq.push(this.id);
    // console.log(usersq);
    check(usersq.length-1)
    
    
}
 
let allbtn = document.querySelectorAll(".button");
for (btn of allbtn) {
    btn.addEventListener("click", press)
}


function check(idx) {

    if (gamesq[idx] == usersq[idx]) {
        if (gamesq.length == usersq.length) {
            console.log(usersq);
            levelup();
        }
    }
    else {
        h2.innerHTML = `Game Over!. Your score <b>${level - 1}</b><br> Prees any key to start the game`;
         body.classList.add("end");
        // setTimeout(function () {
        //     body.classList.add("end");
        // }, 500);
        setTimeout(function () {
            body.classList.remove("end");
        },200)
        if (score < level) {
            score = level;
        }
        document.querySelector("#score").innerText = `Highest Score ${score}`;
        reset();
    }
}
function reset() {
     
    started = false;
    level = 0;
    gamesq = [];
    usersq = [];
}
