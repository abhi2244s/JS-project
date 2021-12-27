var btn;


function addTodo() {
    var name = document.getElementById('name').value
    var user = document.getElementById('user').value
    var dob = document.getElementById('dob').value
    var email = document.getElementById('Email').value

    var firstElement = document.getElementById('del')
    var create = document.createElement('div')
    var button = document.createElement('button')
    button.textContent = "remove"
    button.addEventListener('click',removeItem)
    create.textContent= name
    create.style.margin = "10px"
    firstElement.append(create,button)

    var firstElement_1 = document.getElementById('del-1')
    var create1= document.createElement('div')
    create1.textContent= user
    create1.style.margin = "10px"
    var button1 = document.createElement('button')
    button1.textContent = "remove"
    button1.addEventListener('click',removeItem)
   
    firstElement_1.append(create1,button1)


    var firstElement_2 = document.getElementById('del-3')
    var create2 = document.createElement('div')
    create2.textContent= dob
    create2.style.margin = "10px"
    var button2 = document.createElement('button')
    button2.textContent = "remove"
    button2.addEventListener('click',removeItem)
    firstElement_2.append(create2,button2)



    var firstElement_3 = document.getElementById('del-2')
    var create3 = document.createElement('div')
    create3.textContent= email
    create3.style.margin = "10px"
    var button3 = document.createElement('button')
    button3.textContent = "remove"
    button3.addEventListener('click',removeItem)
    firstElement_3.append(create3,button3)

    // renderDOM(create)
    // renderDOM(create1)
    // renderDOM(create2)
    // renderDOM(create3)

    




}

function removeItem(){
   event.target.parentElement.remove()
   
}

function renderDOM(element) {
   var target = document.getElementById('con-3')
   target.appendChild(element)

}





window.addEventListener('load', function () {
    btn = document.getElementById('btn')
    btn.addEventListener('click', addTodo)
    // console.log("abhis")
})