const form = document.querySelector("form")

form.addEventListener("submit", (e)=> {
    e.preventDefault();
const height = parseInt(document.querySelector("#height").value)
const weight = parseInt(document.querySelector("#weight").value)
const result = document.querySelector("#results")

if (height === "" || isNaN(height) || (height < 0 )){

    result.innerHTML= "Please Enter a Valid Number"
}
else if (weight === "" || isNaN(weight) || (weight < 0 )){

    result.innerHTML= `<span>Please Enter a Valid Number</span>`
}
else {
    result.innerHTML = (weight / ((height* height) / 10000)).toFixed(2)
}
})