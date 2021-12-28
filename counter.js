var count = 0;


function Incre(){
     var element =document.getElementById('span')

     count++
     element.textContent = count
  
     
     
     
}

function Decre(){
    var element =  document.getElementById('span')
    count--
    element.textContent = count
}




window.addEventListener('load',function(){
    var btn = document.getElementById('Increment')
    btn.addEventListener('click',Incre)
})


window.addEventListener('load',function(){
    var btn = document.getElementById('Decrement')
    btn.addEventListener('click',Decre)
})