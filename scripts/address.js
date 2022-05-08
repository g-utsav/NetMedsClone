


  document.querySelector("button").addEventListener("click",addres);
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
      window.location.href="";
  }