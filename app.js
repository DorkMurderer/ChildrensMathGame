const questionEl = document.getElementById("question");
const formEl = document.getElementById("form")
const inputEl = document.getElementById("input")
const scoreEl = document.getElementById("score")
const scoreAlertEl = document.getElementById("score-alert")
const btnAlertEl = document.getElementById("btn-alert")
const easyBtnEl = document.getElementById("easy-btn")

const btn = document.getElementById("btn")


let score =  JSON.parse(localStorage.getItem("score"))




    let startingSeconds = 1;
    let time = startingSeconds * 15;
    
    
    const countdownEl = document.getElementById("countdown")
     
    setInterval(updateCountdown, 1000)
    
    function updateCountdown(){
    
        const seconds = time % 60
        
       if(seconds < 0){
       
        formEl.style.visibility = "hidden"
        scoreAlertEl.style.visibility = "visible"
        scoreAlertEl.innerHTML = `Score: ${score} <br> click to Try Again`
        scoreAlertEl.addEventListener("click", function(){
            localStorage.removeItem("score", JSON.stringify(score))
            location.reload()
      })
    
          stopTimeout()
       }
    
    
    
        countdownEl.innerHTML = `timer: ${seconds}`
        time --
    }


scoreEl.innerHTML = `<i class="fa-solid fa-multiply"> </i> score: ${score}`

if(!score){
    score = 0
}





//Generate random nums
const num1 = Math.floor(Math.random() * 10)
const num2 = Math.floor(Math.random() * 10) 



questionEl.innerText = `${num1} * ${num2} = ?`

const correctAns = num1 * num2

formEl.addEventListener("submit", () => {
     const userAns = +inputEl.value
     if(userAns === correctAns){
       score++
      updateLocalStorage()
     } else {
        score--
        updateLocalStorage()
     }
})



  

   




function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}