function getListBrand() {
    var array = [];
    for (var i = 0; i < listCar.length; i++) {
        if (!array.includes(listCar[i].brand)) {
            array.push(listCar[i].brand);
        }
    }
    //get list brand 
    return array;
};

function createButton(container) {
    var listBrand = getListBrand();//get Brand list  
    var id = document.getElementById(container);//get div container to store all the buttons
    var btnAll = createButtonCategory("All Manufacturers"); //create button "All Manufacturer"
    var btnPopular = createButtonCategory("Popular Cars"); //create button "Popular Cars"
    var btnBusiness = createButtonCategory("Business Cars"); //create button "Bussiness Cars"
    var btnLimited = createButtonCategory("Limited Editions"); //create button "Limited Editions"
    addEventClickButton(btnPopular); //add event click for btn "Popular Cars"
    addEventClickButton(btnBusiness); //add event click for btn "Bussiness Cars"
    addEventClickButton(btnLimited); //add event click for btn "Limited Cars"
    addEventClickButton(btnAll); //add event click for btn "All Manufacturers"
    id.appendChild(btnPopular); 
    id.appendChild(btnBusiness);
    id.appendChild(btnLimited);
    id.appendChild(btnAll);
    //append all btns to the container
    for (var i = 0; i < listBrand.length; i++) {
        var divBtn = createButtonCategory(listBrand[i]);//create button base on each brand
        addEventClickButton(divBtn); //add event click for each brand
        id.appendChild(divBtn); //append each btn to the container
    }
}

function addEventClickButton(btn) {
    //add event for each button when clicking 
    btn.addEventListener("click", function () {
        var s = btn.value; //get button value
        var list = [];
        switch (s) {
            case "Popular Cars":
                list = getCarListBaseOnType("popular");
                 //get car base on type Popular
                break;
            case "Business Cars":
                list = getCarListBaseOnType("business");
                 //get car base on type Bussiness
                break;
            case "Limited Editions":
                list = getCarListBaseOnType("limited");
                //get car base on type Limited
                break;
            case "All Manufacturers":
                list = listCar; //get all cars
                break;
            default: 
                list = getCarListBaseOnBrand(s);
                //if btn clicked is AUDI, MAYBACK, TOYOTA, etc..
                break;
        }
        var listId = document.getElementById("carouselExampleIndicators");//get <div id="carouselExampleIndicators"> from html
        listId.innerHTML = "";  //clear content inside
        var slideCount = (list.length % 6 == 0) ? parseInt(list.length / 6) : parseInt(list.length / 6) + 1;
        //get slide count number to render base on the car list.
        var ol = document.createElement("ol"); 
        ol.className = "carousel-indicators carousel-indicators-numbers"; 
        ol.id = "carousel-indicators-numbers";
        //create <ol class="carousel-indicators carousel-indicators-numbers">
        for (var i = 0; i < slideCount; i++) { //base on slideCount
            var li = document.createElement("li"); 
            if(i == 0) {
                li.className = "carouselBtn text-center active";
            } else {
                li.className = "carouselBtn text-center";
            }
             //with each time slides created, slide 0 are always set to be actived.
            li.setAttribute("data-slide-to", i);
            li.setAttribute("data-target", "#carouselExampleIndicators");
            //create <li class="active" data-slide-to="0, 1, 2,.... base on which number i is given to that slide" data-target="#carouselExampleIndicators">
            li.innerHTML = i + 1; //append number 1,2,3... base on "data-slide-to" ="0,1,2,..."
            ol.appendChild(li); //append each <li> to <ol>
        }
        var divCarouselInner = document.createElement("div"); 
        divCarouselInner.className = "carousel-inner";
        //create <div class="carousel-inner">
        var trace = 0; //to trace the position where the car list is counting
        for (var i = 0; i < slideCount;i++) {
            //count each slide 
            var row = document.createElement("div");
            row.className = "row";
            //create <div class="row">
            for (;trace < list.length;trace++) {
                var listElement = document.createElement("div");
                listElement.className = "card-item";
                listElement.innerHTML = "<div class='card text-center' style='width:18rem;'><a href='/car/detail/" + list[trace]._id + "' style='color: inherit;text-decoration: inherit;'><img class='card-img-top' src='" +
                list[trace].image[0] + "'/><div class='card-body'><h5 class='card-title'>" +
                list[trace].brand + "<span class='font-weight-bold' style='color: #fcb900;'> " +
                list[trace].class + "</span></h5><small class='font-weight-light'>Start at <span class='font-weight-bold'>" +
                list[trace].rentalPrice + " USD</span> per day</small><div class='row'><div class='col' style='background-color:#afafaf; border-right: 0.5px solid white; border-top-left-radius: 10px;border-bottom-left-radius: 10px;'><small>" +
                list[trace].publishedYear + "</small></div><div class='col' style='background-color:#afafaf; border-right: 0.5px solid white;' ><small>" +
                (list[trace].automatic ? "AUTO" : "MANUAL") + "</small></div><div class='col' style='background-color:#afafaf; border-right: 0.5px solid white;'><small>" +
                list[trace].fuel + "</small></div><div class='col' style='background-color:#afafaf;  border-top-right-radius: 10px;border-bottom-right-radius: 10px;'><small>" +
                list[trace].cc + "CC</small></div></div></div></a></div>";
            //for each car information, create a card contain each infos of a car 
            row.appendChild(listElement); //append each card element to <div class="row">
            if ((trace + 1) % 6 == 0) break; //each page contains 6 cards
            //-> break if each trace count to number 6, 12, 18, 24... 
            }
            var divCarouselItem = document.createElement("div");
            divCarouselItem.className = (i == 0) ? "carousel-item active": "carousel-item";
            //create <div class="carousel-item active"> for the first slide page or <div class="carousel-item"> for the next 1,2,3.. page
            divCarouselItem.appendChild(row);//append <div class="row"> which contains 6 car's information cards to <div class="carousel-item">(the slide page)
            divCarouselInner.appendChild(divCarouselItem); //append <div class="carousel-item">(slide page) to <div class="carousel-inner">(slide container)
            trace++;//if not trace + 1, some car's info will not be shown during the next forloop
        }
        listId.appendChild(ol);//append <ol> to <div id="carouselExampleIndicators">
        listId.appendChild(divCarouselInner);// append <div class="carousel-inner"> to <div id="carouselExampleIndicators">
        addBtnCssOnclick("carousel-indicators-numbers","carouselBtn");
    });
}

function addBtnCssOnclick(container, elm) {
    var btnContainer = document.getElementById(container);
    var btns = document.getElementsByClassName(elm);
    for (var i = 0;i < btns.length; i++) {
        btns[i].addEventListener("click",function () {
          var curr = document.getElementsByClassName(elm + " active");
          curr[0].className = curr[0].className.replace(" active","");
          this.className = elm + " text-center active";
        });
    }
}

function createButtonCategory(text) {
    var btn = document.createElement("div");
    btn.className = "brandName row text-center";
    btn.id = "brandName";
    btn.value = text;
    //create btn <div class="row text-center" value="Popular Cars, Limited Cars, AUDI,..... for each btn assigned by value text" id="brandName">
    switch (text) {
        case "Popular Cars":
        case "Business Cars":
        case "Limited Editions":
            btn.innerHTML = text;
            btn.style.cssText = "background-color: black; color: white; padding:20px; border-bottom: 0.5px solid white;";
            btn.addEventListener("mouseover", function () {
                this.style.cssText = "background-color: white; padding:20px; color: black;";
            });
            btn.addEventListener("mouseleave", function () {
                this.style.cssText = "background-color: black; color: white; padding:20px; border-bottom: 0.5px solid white;";
            });
            //create black button for "Popular Cars", "Bussiness Cars", "Limited Editions"
            break;
        default:
            btn.innerText = text;
            btn.style.cssText = "background-color: #ffe311; color: white; padding:20px; border-bottom: 0.5px solid white;";
            btn.addEventListener("mouseover", function () {
                //fucntion when hover mouse
                this.style.cssText = "background-color: white; padding:20px; color: black;";
            });
            btn.addEventListener("mouseleave", function () {
                //function when not hover mouse
                this.style.cssText = "background-color: #ffe311; color: white; padding:20px; border-bottom: 0.5px solid white;";
            });
            //create yellow button for each car brand
            break;
    }
    return btn;
    //return button
}

function getCarListBaseOnBrand(brand) {
    //get List car base on brand AUDI, LEXUS, ...
    var array = [];
    for (var i = 0; i < listCar.length; i++) {
        if (listCar[i].brand === brand) {
            array.push(listCar[i]);
        }
    }
    return array;
}

function getCarListBaseOnType(type) {
    //get List car base on type Limited Cars, Popular Cars, ...
    var array = [];
    for (var i = 0; i < listCar.length; i++) {
        if (listCar[i].type === type) {
            array.push(listCar[i]);
        }
    }
    return array;
}
