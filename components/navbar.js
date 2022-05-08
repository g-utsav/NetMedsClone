function navbar(){
    return  `<div id="up">
    <div id="up1">
        <img src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg" alt="">
    </div>
    <div id="up2">
        <div class="input-group mb-3">
            <button id="tango" style="color : gray;background-color: white;" class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Deliver to <span style="color: skyblue;">700067</span></button>
          
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
            <input placeholder="Search for medicine & wellness" type="text" class="form-control" aria-label="Text input with dropdown button">
          </div>
    </div>
    
    <div id="up3">
        <span><i class="fa-solid fa-file-lines"></i><span class="one"><a style="color: white;text-decoration: none;" href="upload.html">Upload</a></span></span>
    <span id="si"><i class="fa-solid fa-cart-shopping cartt"></i><span id="cart" class="one cartt">Cart</span></span>
    <div id="siri">
        <div id="n1">
            <p>ORDER SUMMARY</p>
             <P>1 item(s)</P>
        </div>
        <div id="n2">
            <p id="t1">Patanjali</p>
            <p id="t2">RS.55.00X1</p>
        </div>
     
        <div id="n3">
    <h4 id="t3">RS.55</h4>
    <button>PROCEED TO CART</button>
        </div>
    </div>
    
    
    <span><i class="fa-solid fa-user"></i><span class="one"></span id="log"><a id="a" href="signup.html" style="text-decoration: none; color:#fff">Sign in / Sign up</a></span>    
    


    </div>
    </div>
    
    
    <div id="down">   
    <div id="down2">
    <img src="https://www.netmeds.com/assets/version1649433944/gloryweb/images/icons/medicine.svg" alt="">
    <p class="head">Medicine</p>
    <span><i class="fa-solid rotate fa-caret-down"></i></span>
    <div id="alexa">
    <div id="points">
        <p><a id="a" href="footer.html">All Medicines</a></p>
       <p>Previously Ordered Products</p>
    </div>
    
    </div>
    
    </div>
    <div id="down3">
        <img src="https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg" alt="">
    <p class="head">wellness</p>
    </div>
    <div id="down4">
        <img src="https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg" alt="">
    <p class="head">Lab Tests</p>
    </div>
    <div id="down5">
        <img src="https://www.netmeds.com/assets/gloryweb/images/icons/beauty.svg" alt="">
    <p class="head">Beauty</p>
    <span><i  class="fa-solid rotate fa-caret-down"></i></span>
    <div class="alexa">
        <div id="points1">
            <p>Personal Care</p>
            <p >Make-up</p>
            <p>Hair</p>
            <p>Skin Care</p>
            <p>Tools & Appliances</p>
            <p>Mom & Baby</p>
            <p>Fragrance</p>
            <p>Men's Grooming</p>
         
        </div>
        
        </div>
    
    
    </div>
    <div id="down6">
        <img src="https://www.netmeds.com/assets/version1649433944/gloryweb/images/icons/health-library.svg" alt="">
        <p class="head">Health Corner</p>
        <span><i  class="fa-solid rotate fa-caret-down"></i></span>
        <div class="alexa">
            <div id="points2">
                <p>Health Library</p>
                <p>PatientsALike</p>
                <p>Corona Awareness</p>
              
             
            </div>
            
            </div>
    </div>
    </div>
    </div>
    
    <div id="low">
        <div id="strip">
            <p id="cE1234">COVID Essentials</p>
            <p>Diabetes</p>
            <p>Eyewear</p>
            <p>Ayush</p>
            <p>Ayurvedic</p>
            <p>Homeopathy</p>
            <p>Fitness</p>
            <p>Mom & Baby</p>
            <p>Devices</p>
            <p>Surgicals</p>
            <p>Sexual Wellness</p>
            <p>Treatments</p>
            </div>
            </div>`
}


function shopcart(){
    document.querySelectorAll(".cartt").forEach(el=>{
        el.addEventListener("click",function(){
            window.location.href="./cart.html"
        })
    })

    document.querySelector("#n3>button").addEventListener("click",function(){
        window.location.href = "./cart.html"
    })

    let datax = JSON.parse(localStorage.getItem("cartData"))
// <<<<<<< HEAD
//     let x  = document.querySelector("#t1")
//     let x1  = document.querySelector("#t2")

//     for(let y in datax){
//         x.textContent = datax[y].name
//         x1.textContent = datax[y].price
//     } 
// =======
console.log('datax:', datax)
let x  = document.querySelector("#t1")
let x1  = document.querySelector("#t2")
let x2  = document.querySelector("#t3")
for(let y in datax){

       x.textContent = datax[y].name
       console.log('y:', datax[y].name)
      x1.textContent = datax[y].price

     x2.textContent = `RS.${datax[y].price}`
}

    
// >>>>>>> f79d9d2c1da0144bed16fae81c0fdcc4481ed1b3
}







export {navbar,shopcart}