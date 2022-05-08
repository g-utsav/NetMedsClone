
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

  document.querySelector("#probtn").addEventListener("click",addres);
  function addres(){
      var obj={
          lastname:document.querySelector("#lname").value,
          pincode:document.querySelector("#pin").value,
          city:document.querySelector("#city").value,
          state:document.querySelector("#state").value,
          firstname:document.querySelector("#fname").value,
          address:document.querySelector("#address").value,
          landmark:document.querySelector("#landmark").value,
          phonenumber:document.querySelector("#phone").value
      }
      localStorage.setItem("address",JSON.stringify(obj));
      window.location.href="./pay.html";
  }