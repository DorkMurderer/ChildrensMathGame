const questionEl = document.getElementById("question");
const formEl = document.getElementById("form")
const inputEl = document.getElementById("input")
const addScoreEl = document.getElementById("score")
const scoreAlertEl = document.getElementById("score-alert")
const btnAlertEl = document.getElementById("btn-alert")
const btn = document.getElementById("btn")

let addScore =  JSON.parse(localStorage.getItem("addScore"))



let startingSeconds = 1;

let time = startingSeconds * 15;

const countdownEl = document.getElementById("countdown")
 

setInterval(updateCountdown, 1000)

function updateCountdown(){

    const seconds = time % 60
    
   if(seconds < 0){
   
    formEl.style.visibility = "hidden"
    scoreAlertEl.style.visibility = "visible"
    scoreAlertEl.innerHTML = `Score: ${addScore} <br> click to Try Again`
    scoreAlertEl.addEventListener("click", function(){
        localStorage.removeItem("addScore", JSON.stringify(addScore))
        location.reload()
  })

      stopTimeout()
   }



    countdownEl.innerHTML = `timer: ${seconds}`
    time --
}

addScoreEl.innerHTML = `<i class="fa-solid fa-plus"> </i>   score:  ${addScore}`



if(!addScore){
    addScore = 0
}

//Generate random nums
const num1 = Math.floor(Math.random() * 10)
const num2 = Math.floor(Math.random() * 10) 



questionEl.innerText = `${num1} + ${num2} = ?`

const correctAns = num1 + num2

formEl.addEventListener("submit", () => {
     const userAns = +inputEl.value
     if(userAns === correctAns){
       addScore++
      updateLocalStorage()
     } else {
        addScore--
        updateLocalStorage()
     }
})



function updateLocalStorage(){
    localStorage.setItem("addScore", JSON.stringify(addScore))
}