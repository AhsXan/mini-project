const form = document.querySelector("form")

form.addEventListener('submit', (e) => {
    
e.preventDefault()

const height = parseInt(document.querySelector("#height").value)
const weight = parseInt(document.querySelector("#weight").value)
const results= document.querySelector("#results")

if (height < 0 || height === ""|| isNaN(height)){
    results.innerHTML= "Enter a Valid Number"
}

else if (height < 0 || height === ""|| isNaN(height)){
    results.innerHTML= "Enter a Valid Number"
}

else{ 
 results.innerHTML= (weight /((height*height)/10000)).toFixed(2)
}

});