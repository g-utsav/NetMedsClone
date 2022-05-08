// var arr = [
//     {
//         name : "akhil khan is the good boy",
//         img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9-Nz_gVKTaA0h2s5An1dMrqCschtfsd3mA&usqp=CAU",
//         price : 200,
//         strike : 220,
//     },
//     {
//         name : "akhil khan is the good boy",
//         img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9-Nz_gVKTaA0h2s5An1dMrqCschtfsd3mA&usqp=CAU",
//         price : 200,
//         strike : 220,
//     },
//     {
//         name : "akhil khan is the good boy",
//         img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9-Nz_gVKTaA0h2s5An1dMrqCschtfsd3mA&usqp=CAU",
//         price : 200,
//         strike : 220,
//     },
//     {
//         name : "akhil khan is the good boy",
//         img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9-Nz_gVKTaA0h2s5An1dMrqCschtfsd3mA&usqp=CAU",
//         price : 200,
//         strike : 220,
//     },
//     {
//         name : "akhil khan is the good boy",
//         img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9-Nz_gVKTaA0h2s5An1dMrqCschtfsd3mA&usqp=CAU",
//         price : 200,
//         strike : 220,
//     }
// ]


// var arr = JSON.parse(localStorage.getItem("cartData"));






let data1=JSON.parse(localStorage.getItem("cartData")) || {};

let data = [];
for(let i in data1){
    data.push(data1[i])
}



console.log(data)

data.forEach(function(el){
    var main = document.getElementById("catch")

    var A = document.createElement("div")
    A.setAttribute("class","AA")



    var B = document.createElement("div")
    B.setAttribute("class","BB")

    // inside b
    var D = document.createElement("div")
    D.setAttribute("class","DD")
    //inside d
    var image = document.createElement("img")
    image.src  = el.image;
    D.append(image)

    //inside b

    var E = document.createElement("div")
    E.setAttribute("class","EE")
    //indside EE
    var h3 = document.createElement("h3")
    h3.innerText = el.name;

    var p = document.createElement("p")
    p.innerText = el.mkt;

    var l = document.createElement("p")
    l.innerText = "Seller : SP Pharma Ranaji Enclave Najafgarh Rd"

    var s = document.createElement("p")
    s.innerText = "Expiry : May 2023"
    E.append(h3,p,l,s)

    B.append(D,E)


    var C = document.createElement("div")
    C.setAttribute("class","CC")

    //inside C

    var h2 = document.createElement("h2")
    h2.innerText = `Rs. ${el.price}`;

    var h3 = document.createElement("h3")
    h3.innerText = `Rs. ${el.strike}`;


    var h4 = document.createElement("h4")
    h4.innerText =`Qty: ${el.count}` ;

    var hr = document.createElement("hr")
    C.append(h2,h3,h4)

    A.append(B,C,)
    
    main.append(A,hr)
})



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

var div = document.getElementById("show");
var d = document.createElement("p")
d.innerText = `Rs.${sum1}`
div.append(d)


var div = document.getElementById("button1");
div.innerHTML = `Pay Rs.${sum1}`













function address1(){




var arr1 = JSON.parse(localStorage.getItem("address")) || {}

// var arr = [];
// for(var i in arr1)
// {
//     arr.push(arr1[i])
// }


    let el = arr1;


    var box = document.getElementById("Add")


    box.innerHTML = null;

    var p = document.createElement("p")
    p.innerText = el.firstname;
    var l = document.createElement("p")
    l.innerText = el.address;
    var m = document.createElement("p")
    m.innerText = el.city
    var n = document.createElement("p")
    n.innerText = el.phonenumber;

    box.append(p,l,m,n)

}

address1();