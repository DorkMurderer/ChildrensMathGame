const questionEl = document.getElementById("question");
const formEl = document.getElementById("form")
const inputEl = document.getElementById("input")
const subScoreEl = document.getElementById("score")
const scoreAlertEl = document.getElementById("score-alert")
const btnAlertEl = document.getElementById("btn-alert")

const btn = document.getElementById("btn")



let subScore =  JSON.parse(localStorage.getItem("subScore"))



let startingSeconds = 1;

let time = startingSeconds * 15;

const countdownEl = document.getElementById("countdown")
 

setInterval(updateCountdown, 1000)

function updateCountdown(){

    const seconds = time % 60
    
   if(seconds < 0){
    formEl.style.visibility = "hidden"
    scoreAlertEl.style.visibility = "visible"
    scoreAlertEl.innerHTML = `Score: ${subScore} <br> click to Try Again`
    scoreAlertEl.addEventListener("click", function(){
        localStorage.removeItem("subScore", JSON.stringify(subScore))
        location.reload()
  })
      stopTimeout()
   }

    countdownEl.innerHTML = `timer: ${seconds}`
    time --
}


subScoreEl.innerHTML = `<i class="fa-solid fa-subtract"> </i>  Score:  ${subScore}`

if(!subScore){
    subScore = 0
}



//Generate random nums
const num1 = Math.floor(Math.random() * 10)
const num2 = Math.floor(Math.random() * 10) 



questionEl.innerText = `${num1} - ${num2} = ?`

const correctAns = num1 - num2

formEl.addEventListener("submit", () => {
     const userAns = +inputEl.value
     if(userAns === correctAns){
       subScore++
      updateLocalStorage()
     } else {
        subScore--
        updateLocalStorage()
     }
})



function updateLocalStorage(){
    localStorage.setItem("subScore", JSON.stringify(subScore))
}