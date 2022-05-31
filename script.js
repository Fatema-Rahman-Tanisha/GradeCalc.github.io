btn.addEventListener('click', function(){
var bangla = Number(document.getElementById("Bangla").value )
var eng = Number(document.getElementById("English").value)
var maths = Number(document.getElementById("Maths").value )
var bgs = Number(document.getElementById("B.G.S.").value )
var science = Number(document.getElementById("Science").value)  
var islam =Number(document.getElementById("islam").value )
var btn = document.getElementById('btn');


    var total = bangla + eng + maths + bgs + science + islam
    var persn = total*100/600
    console.log(typeof(bangla))
     console.log(`your total is ${total} and you got ${persn}% marks`)
     document.getElementById('result').innerHTML = `your total is ${total} and you got ${persn}% marks`
})