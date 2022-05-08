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



// var sum  = 0 ;
// var sum1 = 0;


// for(var i = 0; i<arr.length; i++)
// {
//     sum += arr[i].strike
//     sum1 += arr[i].price

// }
// var div = document.getElementById("total");
// let s = document.createElement("p")
//       s.innerText = `Rs. ${sum}`;
//     //   s.style.color = "red"
//       div.append(s)


// var div = document.getElementById("discount");
// let m = document.createElement("p")
//         m.innerText = `Rs. -${sum-sum1}`;
//         // m.style.color = "red"
//         div.append(m)

// var div = document.getElementById("all");
// let t = document.createElement("p")
//          t.innerText = `Rs. ${sum1}`;
//          t.style.fontWeight = "bolder"
//          div.append(t)
        
// var div = document.getElementById("saving");
// var p = document.createElement("p")
// p.innerText = `TOTAL SAVINGS Rs. ${sum-sum1}`
// div.append(p)

// var div = document.getElementById("show");
// var d = document.createElement("p")
// d.innerText = `Rs.${sum1}`
// div.append(d)


// var div = document.getElementById("button1");
// div.innerHTML = `Pay Rs.${sum1}`


var data = 























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