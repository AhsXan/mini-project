const body= document.querySelector("body")
const button = document.querySelectorAll('.button')
button.forEach((b)  => {
     b.addEventListener("click", function (e){

        console.log(e)
if (e.target.id === "grey"){
body.style.backgroundColor = 'grey'
 }
 if (e.target.id === "white"){
    body.style.backgroundColor = e.target.id
     }
     if (e.target.id === "blue"){
        body.style.backgroundColor = e.target.id
         }   
         if (e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id
             }   
})
  })
