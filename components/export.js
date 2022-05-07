function sidebar(){
    return `
    <div id="name">
    <h2>Categories</h2>
</div>
    <div id="category">
        <p><i class="fa-solid fa-greater-than"></i> Hair</p>
        <p><i class="fa-solid fa-greater-than"></i> Men's Grooming</p>
        <p><i class="fa-solid fa-greater-than"></i> Skin Care</p>
        <p><i class="fa-solid fa-greater-than"></i> Tools & Appliances</p>
        <p><i class="fa-solid fa-greater-than"></i> Wellness</p>
        <p><i class="fa-solid fa-greater-than"></i> Personal Care</p>
        <p><i class="fa-solid fa-greater-than"></i> Ayush</p>
        <p><i class="fa-solid fa-greater-than"></i> Fitness</p>
        <p><i class="fa-solid fa-greater-than"></i> Mom & Baby</p>
        <p><i class="fa-solid fa-greater-than"></i> Sexual Wellness</p>
        <p><i class="fa-solid fa-greater-than"></i> Treatments</p>
        <p><i class="fa-solid fa-greater-than"></i> Devices</p>
        <p><i class="fa-solid fa-greater-than"></i> Health Conditions</p>
        <p><i class="fa-solid fa-greater-than"></i> Otc Deals</p>
        <p><i class="fa-solid fa-greater-than"></i> Eyewear</p>
        <p><i class="fa-solid fa-greater-than"></i> Covid Essentials</p>
        <p><i class="fa-solid fa-greater-than"></i> Surgical</p>
    </div>


    
<div id="filter">
    <h2>Filters</h2>
    <h3>  Availability</h3>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1"> Exclude out of stock (1,508)</label><br>
    <h3>  Category</h3>
    <input type="text" placeholder="Search...." id="inp">
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1"> Exclude out of stock (1,508)</label><br>
    <hr>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1"> Exclude out of stock (1,508)</label><br>
    <hr>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1"> Exclude out of stock (1,508)</label><br>
    <hr>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1"> Exclude out of stock (1,508)</label><br>
    <hr>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1"> Exclude out of stock (1,508)</label><br>

    <h3>  Manufacturers</h3>
    <input type="text" placeholder="Search...." id="inp">
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1">  Bio Veda Action Research Company (53)</label><br>
    <hr>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1"> L'oreal India Private Limited (50)</label><br>
    <hr>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1">    Herbal Canada (48)</label><br>
    <hr>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1"> The Himalaya Drug Company (44)</label><br>
    <hr>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1"> Honasa Consumer Pvt Ltd (41)</label><br>

   
    
    <h3>  Brands</h3>
    <input type="text" placeholder="Search...." id="inp">
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1"> St.Botanica (75)</label><br>
    <hr>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1">  L’Oreal Paris (55)</label><br>
    <hr>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1">  Biotique (53)</label><br>
    <hr>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1"> Khadi Natural (52)</label><br>
    <hr>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1">  Pantene (50)</label><br>
    

    <h3>  Price</h3>
    <input type="range" id="vol" name="vol" min="0" max="50">

    <h3>  Discount</h3>
    <input type="range" id="vol" name="vol" min="0" max="50">



</div>



    `
}


export {sidebar};