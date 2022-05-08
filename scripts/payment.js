console.log(1)




function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }

  function myFunctio() {
    var checkBox = document.getElementById("myChec");
    var text = document.getElementById("tex");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }

  function myFuncti() {
    var checkBox = document.getElementById("Check");
    var text = document.getElementById("txt");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }

  function myFunctio() {
    var checkBox = document.getElementById("myChec");
    var text = document.getElementById("tex");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }

  function Amazon(){
    alert("Are you confirm to payment")
       var main = document.getElementById("main2")
        main.innerHTML = null
     
        var loader = document.getElementById("loader")
        loader.style.display = "block"
      setTimeout(function(){
        window.location.href = "Thank.html"
    },5000)
  }

  function Google(){
    alert("Are you confirm to payment")
       var main = document.getElementById("main2")
        main.innerHTML = null
     
        var loader = document.getElementById("loader")
        loader.style.display = "block"
      setTimeout(function(){
        window.location.href = "Thank.html"
    },5000)
   
}

function Phone(){
    alert("Are you confirm to payment")
    var main = document.getElementById("main2")
     main.innerHTML = null
  
     var loader = document.getElementById("loader")
     loader.style.display = "block"
   setTimeout(function(){
     window.location.href = "Thank.html"
 },5000)
    
}





let data1=JSON.parse(localStorage.getItem("cartData")) || {};

let data = [];
for(let i in data1){
    data.push(data1[i])
}



console.log(data)




var sum  = 0 ;
var sum1 = 0;


for(var i = 0; i<data.length; i++)
{
    sum += data[i].strike
    sum1 += data[i].price

}


console.log(sum,sum1)
var div = document.getElementById("total");
let s = document.createElement("p")
      s.innerText = `Rs. ${sum}`;
    //   s.style.color = "red"
      div.append(s)


var div = document.getElementById("discount");
let m = document.createElement("p")
        m.innerText = `Rs. -${sum-sum1}`;
        // m.style.color = "red"
        div.append(m)

var div = document.getElementById("all");
let t = document.createElement("p")
         t.innerText = `Rs. ${sum1}`;
         t.style.fontWeight = "bolder"
         div.append(t)
        
var div = document.getElementById("saving");
var p = document.createElement("p")
p.innerText = `TOTAL SAVINGS Rs. ${sum-sum1}`
div.append(p)
