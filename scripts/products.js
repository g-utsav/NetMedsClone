function get(id){
    return document.querySelector(id)
}
function create(id){
    return document.createElement(id)
}

import {covidEssentials, personalCare, MakeUp} from "../components/data.js"
import {sidebar} from "../components/export.js"
import {navbar,shopcart} from "../components/navbar.js"
import {footer} from "../components/footer.js"


get("#navbar").innerHTML = navbar()

get("#sidebar").innerHTML = sidebar()
// get("#footerContainer").innerHTML = footer()
get("#footer").innerHTML = footer()

let dataFuncArr = [covidEssentials,personalCare,MakeUp];
let loadData = localStorage.getItem("loadData") || ""
let data;
let backUp;
if(loadData == "cE"){
    data = covidEssentials();
    backUp = 0;
    localStorage.setItem("loadData1", "cE")
}else if(loadData == "pC"){
    data = personalCare();
    backUp = 1;
    localStorage.setItem("loadData1", "pC")
}else if(loadData == "mU"){
    data = MakeUp();
    backUp = 2;
    localStorage.setItem("loadData1", "mU")
}else{
    let ran = Math.floor(Math.random()*3)
    console.log(ran)
    data = dataFuncArr[ran]()
    backUp = ran;
    let key ;
    if(ran == 0){
        key = "cE"
    }else if(ran == 1){
        key = "pC"
    }else if(ran == 2){
        key = "mU"
    }

    localStorage.setItem("loadData1", key)
}


// let data = MakeUp()
// console.log(data)
let buttonCreateDivCount = 0;
let i = 0;
let mastRan;
function displayUI({bannerImg, mastCata, name}){
    let body = get("appendProd");

    console.log(mastCata)
    sortByCatagory(mastCata)
    displayBannerImage(bannerImg,name);
    if(!mastRan)mastRan = Math.floor(Math.random()* mastCata.length);
    appendPrducts(mastCata[mastRan].catagories.data);

}
displayUI(data)

function appendPrducts(data){
    let body = get("#appendProd")
    
    body.innerHTML = null;

    let h5 = create("h5");
    h5.innerText = "ALL PRODUCTS"

    let Mdiv = create("div");
    // console.log(data)

    data.forEach(({image, mkt, name, price, strike}) => {
        let div = create("div");

        let img = create("img");
        img.src = image;

        let title = create("h5");
        title.innerText = name;

        let mktP = create("p");
        mktP.setAttribute("id","mkt")
        mktP.innerText = `Mkt: ${mkt}`

        let priceH = create("h4");
        priceH.innerHTML = `Best Price* <span>Rs ${price}</span>`

        let strikeP = create("p")
        strikeP.setAttribute("id","strikedOffPrice")
        if(strike){
            strikeP.innerHTML = `MRP <span>Rs ${strike}</span>`
        }else{
            strikeP.innerHTML = " . "
        }

        let Buttondiv = create("div");
        let idDiv = `productAddToCartDiv${buttonCreateDivCount}`
        Buttondiv.setAttribute("id", idDiv)
        let button = buttonCreate(Buttondiv,{image, mkt, name, price, strike},idDiv);

        div.append(img, title, mktP, priceH, strikeP, Buttondiv)
        Mdiv.append(div);
    });
    body.append(h5,Mdiv)
}

function buttonCreate(div, obj,idDiv){

    // console.log(div)
    div.innerHTML = null

    let button = create("button");
    button.innerHTML= '<h4>ADD TO CART</h4>'
    // let i = 0;
    button.addEventListener("click",function(){addToProductsButtonClick(div,obj,idDiv)})
    button.setAttribute("id","productAddToCartButton")
    
    div.append(button)

    buttonCreateDivCount++;
}

function addToProductsButtonClick(div,obj, idDiv){
    div.innerHTML = null
    // console.log(obj)
    obj.count = 1;
    console.log(obj)
    setLocalStorage(obj,"cartData")

    let minus = create("button");
    minus.innerText = "-"
    minus.id = "minusButton"
    
    let count = create("p");
    count.innerText = 1
    count.id = "productCount"
    
    let plus = create("button");
    plus.innerText = "+"
    plus.id = "plusButton"

    minus.onclick = function(){
        obj["count"]--;
        if(obj.count <= 0){
            removeFromLocalStorage(obj)
        }else{
            setLocalStorage(obj,"cartData")
        }
        addToProductsIncDec(count,false, idDiv,obj)
    }
    plus.onclick = function(){
        obj["count"]++;
        console.log(obj)
        setLocalStorage(obj,"cartData")
        addToProductsIncDec(count,true,idDiv,obj)
    }

    div.append(minus,count,plus)
}

function removeFromLocalStorage(obj){
    let data = getLocaStorage("cartData");
    delete data[obj.name];
    localStorage.setItem("cartData",JSON.stringify(data));
}

function getLocaStorage(key){
    let data = JSON.parse(localStorage.getItem(key)) || {};
    return data;
}

function setLocalStorage(obj,key){
    let data = getLocaStorage(key);
    data[obj.name] = obj;
    localStorage.setItem("cartData",JSON.stringify(data));
}

function addToProductsIncDec(count,inc,idDiv,obj){
    if(inc){
        // count.innerText = ++(Number(count.innerText))
        let c = count.innerText
        c++;
        count.innerText = c
    }else{
        let c = count.innerText
        c--;
        count.innerText = c
        if(c == 0){
            // console.log(idDiv,get(`#${idDiv}`))
            buttonCreate(get(`#${idDiv}`),obj,idDiv)
        }
    }
}

function displayBannerImage(data,name){
    let body = get("#bannerImg")
    // console.log(data,name)
    body.innerHTML = null;
    let innerDat
    if(data){
        innerDat = create("img");
        innerDat.src = data;

    }else{
        innerDat = create("h2");
        innerDat.innerText = name; 
        body.style.backgroundColor = "#dff8ff"
    }
    body.append(innerDat);
}


function sortByCatagory(data){
    let body = get("#sortByCatagory");
    body.innerHTML = null;

    let h5 = create("h5");
    h5.innerText = "SHOP BY CATAGORY"

    let mDiv = create("div");
    data.forEach(({catagoryImg, name, disc},ind) => {
        let div = create("div")
        div.onclick = function(){
            console.log("working")
            localStorage.setItem("idToAcessProducts",ind)
            window.location.href = "./subProducts.html"
        }

        let img = create("img");
        img.src = catagoryImg;

        let h6 = create("h6")
        h6.innerText = name;

        let dis = create("h6")
        dis.innerText = `UPTO ${disc}%`;

        div.append(img, h6, dis)

        mDiv.append(div);
    })

    body.append(h5, mDiv)
}


let sortButtons = get("#buttonsToSort>div");
sortButtons = sortButtons.children
sortButtons[0].style.color = "#24aeb1"
sortButtons[0].style.border = "1px solid #24aeb1"
for(let x of sortButtons){
    x.addEventListener("click",sortingCall);
}


function buttonColor(event){
    for(let x of sortButtons){
        x.style.color = "black"
        x.style.border = "none"
    }
    event.style.color = "#24aeb1"
    event.style.border = "1px solid #24aeb1"
}

function sortingCall(event){
    let dataLocal = dataFuncArr[backUp]();
    let buttonVal = event.target.value
    buttonColor(event.target);

    if(buttonVal == "h"){
        dataLocal.mastCata[mastRan].catagories.data.sort((a,b) =>b.price-a.price)
        displayUI(dataLocal)
    }else if(buttonVal == "l"){
        dataLocal.mastCata[mastRan].catagories.data.sort((a,b) =>a.price-b.price)
        displayUI(dataLocal)
    }else if(buttonVal == "p"){
        displayUI(data)
    }else if(buttonVal == "d"){
        dataLocal.mastCata[mastRan].catagories.data.sort((a,b) =>{
            a = a.price - (a.strike || 0)
            b = b.price - (b.strike || 0)
            return a-b 
        })
        displayUI(dataLocal)
    }

}
shopcart()
