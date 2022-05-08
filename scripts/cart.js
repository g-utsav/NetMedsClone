import {navbar,shopcart} from "../components/navbar.js";
document.getElementById("navbar").innerHTML= navbar();



import {footer} from "../components/footer.js";
document.getElementById("footer").innerHTML= footer();
document.addEventListener("click", e =>{
    const isDropdownButton = e.target.matches("[db]")
    if(!isDropdownButton && e.target.closest ("[down2]") != null)return

    let cd 
    if(isDropdownButton){
        cd = e.target.closest ("[down2]")
        cd.classList.toggle("active")

    }


    document.querySelectorAll("[down2].active").forEach( dropdown =>{
        if(dropdown === cd) return
        dropdown.classList.remove("active")
    })


})








$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})



const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += (containerWidth/4);
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= (containerWidth/4);
    })
})



let adda=document.querySelector("#addmore").addEventListener("click",gohome);
function gohome(){
    window.location.href="index.html";
}



let pro=document.querySelector("#pro").addEventListener("click",proceed);
function proceed(){
    window.location.href="address.html";
}



let arr1=JSON.parse(localStorage.getItem("cartData")) || {};

let arr = [];
for(let i in arr1){
    arr.push(arr1[i])
}

displayUI(arr)
function displayUI(arr){
    let body = document.querySelector("#hola")
    body.innerHTML = null
arr.forEach((el,ind) => 
{
    // console.log(el.image,el.mkt,arr)
        let div0=document.createElement("div");
        div0.id="product";
        let div1=document.createElement("div");
        let image=document.createElement("img");
        image.src=el.image;
        div1.append(image);
        let div2=document.createElement("div");
        div2.id="wide";
        let hh=document.createElement("h4");
        hh.textContent=el.name;
        let p1=document.createElement("p");
        p1.textContent=el.mkt;
        let div3=document.createElement("div");
        div3.className="flex";
        let div4=document.createElement("div");
        let sp1=document.createElement("span");
        sp1.textContent=el.price;
        let sp2=document.createElement("span");
        sp2.className="price dash";
        if(el.strike==false)
        {
        sp2.textContent="";
        }
        else
        {
        sp2.textContent=el.strike;
        }
        let sel=document.createElement("select");
        sel.id="sell";
        let op1=document.createElement("option");
        op1.value=1;
        op1.innerText="1";
        let op2=document.createElement("option");
        op2.value=2;
        op2.innerText="2";
        let op3=document.createElement("option");
        op3.value=3;
        op3.innerText="3";
        let op4=document.createElement("option");
        op4.value=4;
        op4.innerText="4";
        let op5=document.createElement("option");
        op5.value=5;
        op5.innerText="5";
        let op6=document.createElement("option");
        op6.value=6;
        op6.innerText="6";
        sel.append(op1,op2,op3,op4,op5,op6);
        sel.addEventListener("change",function(){
            func(el);
        });
        div4.append(sp1,sp2,sel);

        // select tag space
        let div5=document.createElement("div");
        div5.className="flex topd";
        let sp3=document.createElement("span");
        sp3.textContent="Delivery between 2-3 working days";
        let div6=document.createElement("div");
        div6.id="resa";
        let btn1=document.createElement("button");
        btn1.id="rmv-btn";
        btn1.innerText="REMOVE";
        btn1.addEventListener("click",function(){
            funto(el,ind);
        });
        let btn2=document.createElement("button");
        btn2.innerText="SAVE FOR LATER";
        div6.append(btn1,btn2);
        div5.append(sp3,div6);
        div3.append(div4);
        div2.append(hh,p1,div3,div5);
        div0.append(div1,div2);
        body.append(div0);
})
}


function func(el){
    // console.log(sel.value);
    el.count=event.target.value;
    pongoo();
}



function funto(z,ind){
    // console.log(z);
    
    arr.splice(ind,1)
    // console.log(arr)
    displayUI(arr)


    let obj = {};
    for(let i in arr){
        obj[arr[i].name] = arr[i]
        console.log(obj)
    }
    localStorage.setItem("cartData",JSON.stringify(obj));
    window.location.reload();
}

function pongoo(){
    let prm=document.querySelector("#mrp");
    var m=0;
    var d=0;
    for(let q in arr)
    {
        m=m+((arr[q].price)*(arr[q].count));
        d=d+((arr[q].strike)*(arr[q].count));
    }
    prm.textContent=d;
    document.querySelector("#disc").textContent=d-m;
    document.querySelector("#save").textContent=d-m;
    document.querySelector("#total").textContent=m;
    document.querySelector("#gtotal").textContent=m;
    localStorage.setItem("amount",JSON.stringify(m));
}
pongoo();

shopcart()