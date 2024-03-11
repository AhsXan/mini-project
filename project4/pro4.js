const input = document.querySelector("#guessField")
const submit = document.querySelector("#subt")
const totalGuesses = document.querySelector(".guesses")
const guessLeft = document.querySelector(".lastResult")
const LH = document.querySelector(".lowOrHi")
const resultSection = document.querySelector(".resultParas")

let RNum = (parseInt(Math.random() *100 +1)) 

const P = document.createElement("p")

let guesses= 1
let prevGuess= []
let playGame= true

if (playGame){
    submit.addEventListener("click", (e)=>{
        e.preventDefault();
        const guess = parseInt(input.value)
        console.log(RNum)
        validateGuess(guess)
     })

}

function validateGuess(guess){
if (isNaN(guess)){
alert("Please Enter a Valid Number")
}
else if (guess<1){
    alert("Enter Value Greater then 1")
}
else if (guess>100){
    alert("Enter Value Less then 100.")

}
else {
    prevGuess.push(guess)
if (guesses===11){
displayGuess(guess)
MSG(`Game Over . The Number is ${RNum}`)
endGame()
}
else {
    displayGuess(guess)
    checkGuess(guess)
}}}

function checkGuess(guess){
if (RNum > guess){
    MSG(`Your guess is Low`)

}
else if (RNum < guess){
MSG(`Your guess is high`)
    
}
else{
    MSG(`You Have Won`)
endGame()
}


}
function displayGuess(guess){
input.value = ""
totalGuesses.innerHTML += `${guess} `// pushing values
guesses++
guessLeft.innerHTML =  `${11 - guesses}` 

}
function MSG(msg){
LH.innerHTML= msg

}
function startGame(){

const newGameButton = document.querySelector("#newGame")

newGameButton.addEventListener("click",(e)=>{
    let RNum = (parseInt(Math.random() *100 +1))
    let guesses= 1
let prevGuess= []
let playGame= true 
totalGuesses.innerHTML= ""
guessLeft= `${11 - guesses}`
input.removeAttribute("disabled")
resultSection.removeChild(P)


})

}    
function endGame(){
input.value= ''
input.setAttribute('disabled',"")
P.classList.add('button')
P.innerHTML= `<h2 id = "newGame" >Start Game</h2>`
resultSection.appendChild(P)
playGame = false
newGame()
}

 