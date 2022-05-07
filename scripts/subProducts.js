function get(id){
    return document.querySelector(id)
}
function create(id){
    return document.createElement(id)
}

import {covidEssentials} from "../components/data.js"

let data = covidEssentials()
// console.log(data)
let buttonCreateDivCount = 0;

function displayUI({catagories : {data, subBanner}, name}){
    let body = get("appendProd");
    // console.log(data,subBanner)
    displayBannerImage(subBanner,name);

    appendPrducts(data);

}
displayUI(data.mastCata[localStorage.getItem("idToAcessProducts")])

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

