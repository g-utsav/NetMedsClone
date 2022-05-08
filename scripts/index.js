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



// Suresh

$('.carousel').carousel({
    interval: 3000
  })
  let bt = document.getElementById('productsbtns1')
  var productbuttonRight = document.getElementById('pleftbtn');
  var productbuttonLeft = document.getElementById('prightbtn');
  
      productbuttonRight.onclick = function () {
          
          
          document.getElementById('payment_category').scrollLeft += 500;
          console.log("hii")
      };
      productbuttonLeft.onclick = function () {
          
          document.getElementById('payment_category').scrollLeft -= 500;
          
          console.log("hii")
      };
  
      // movers btns
      let moverbtnsRight = document.querySelector('#prightbtn1');
      let moverbtnsLeft = document.querySelector('#pleftbtn1');
  
      moverbtnsRight.onclick = function () {
          
          
          document.querySelector('#CategoriesinFocus').scrollLeft += 250;
          console.log("hii")
      };
      moverbtnsLeft.onclick = function () {
          
          document.querySelector('#CategoriesinFocus').scrollLeft -= 250;
          
          console.log("hii")
      };
  
      // top brands
      let CToppleftbtn1 = document.getElementById("CToppleftbtn1");
      let CTopprightbtn1 = document.getElementById("CTopprightbtn1");
      CTopprightbtn1.onclick = function () {
          
          
          document.querySelector('#topbrands').scrollLeft += 250;
          console.log("hii")
      };
      CToppleftbtn1.onclick = function () {
          
          document.querySelector('#topbrands').scrollLeft -= 250;
          
          console.log("hii")
      };
  
      // explore beauty
      let exploreBeautyleftbtns = document.getElementById("exploreBeautyleftbtns");
      let exploreBeautyrightbtns = document.getElementById("exploreBeautyrightbtns");
      exploreBeautyrightbtns.onclick = function () {
          
          
          document.querySelector('#exploreBeauty1').scrollLeft += 250;
          console.log("hii")
      };
      exploreBeautyleftbtns.onclick = function () {
          
          document.querySelector('#exploreBeauty1').scrollLeft -= 250;
          
          console.log("hii")
      };
  
      // BestinBeauty
      let BestinBeautyleftbtns = document.getElementById("BestinBeautyleftbtns");
      let BestinBeautyrightbtns = document.getElementById("BestinBeautyrightbtns");
      BestinBeautyrightbtns.onclick = function () {
          
          
          document.querySelector('#BestinBeauty1').scrollLeft += 250;
          console.log("hii")
      };
      BestinBeautyleftbtns.onclick = function () {
          
          document.querySelector('#BestinBeauty1').scrollLeft -= 250;
          
          console.log("hii")
      };
  
      // Health Concerns
      let Hleftbtn = document.getElementById("Hleftbtn");
      let Hrightbtn = document.getElementById("Hrightbtn");
      Hrightbtn.onclick = function () {
          
          
          document.querySelector('#HealthConcerns').scrollLeft += 250;
          console.log("hii")
      };
      Hleftbtn.onclick = function () {
          
          document.querySelector('#HealthConcerns').scrollLeft -= 250;
          
          console.log("hii")
      };
  
      // Advice
      let Adviceleftbtns = document.getElementById("Adviceleftbtns");
      let Advicerightbtns = document.getElementById("Advicerightbtns");
      Advicerightbtns.onclick = function () {
          
          
          document.querySelector('#Advice1').scrollLeft += 250;
          console.log("hii")
      };
      Adviceleftbtns.onclick = function () {
          
          document.querySelector('#Advice1').scrollLeft -= 250;
          
          console.log("hii")
      };




   
  let arr=JSON.parse(localStorage.getItem("data"))
  if(arr!==null){
  
  
       let final =document.getElementById("a")
  
         arr.forEach(function(el){
          
           
          // let a=document.createElement("p")
          // a.innerText=el.first
          final.innerText=el.first
          final.href="sign.html"
  
         })
      }  


//       let datax = JSON.parse(localStorage.getItem("cartData"))
//       console.log('datax:', datax)
//   let x  = document.querySelector("#t1")
//   let x1  = document.querySelector("#t2")

// for(let y in datax){

//          x.textContent = datax[y].name
//          console.log('y:', datax[y].name)
//         x1.textContent = datax[y].price
       
       
       

// }

shopcart()

