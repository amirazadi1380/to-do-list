const myInput = document.getElementById('input')
const mySubmit = document.getElementById('submit')
const works = document.querySelector('.works')
let number = 1;

mySubmit.addEventListener('click', ()=>{
   var myDiv =  document.createElement("div");
   const header = document.createElement("h3")

    header.textContent = number + ". " +  myInput.value
    number++;
    works.appendChild(myDiv)
    myDiv.appendChild(header)
     myInput.value = "";

     
myDiv.addEventListener('dblclick',() =>{
  myDiv.remove(header)
  myInput.value = ""
})

})