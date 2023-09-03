const ul = document.querySelector('ul')
const lists = document.querySelectorAll('li')
const pragraph = document.querySelector('p')
const input = document.querySelector('#input')
const btn2 = document.querySelector('#button2')

btn2.addEventListener('click',(e)=> {
    e.preventDefault()
    let val = input.value
   if (val) {
    let li1= document.createElement('li')
    li1.textContent = (val)
    ul.appendChild(li1)
    li1.setAttribute('class',"list-group-item fs-3 fw-bold border border-1 bg-primary text-white")
   }
    localStorage.setItem('token',JSON.stringify(val))
    input.value = ""
   
   
})
console.log(JSON.parse(localStorage.getItem('token')));
ul.addEventListener('click',(e)=> {
    if (e.target.nodeName === "LI") {
        e.target.remove()
    }
})