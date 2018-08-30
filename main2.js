$(document).ready(function() {
    
    var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
    
    var modal2 = document.querySelector(".modal2");
    var trigger2 = document.querySelector(".trigger2");
    var closeButton2 = document.querySelector(".close-button2");

    function toggleModal2() {
        modal2.classList.toggle("show-modal");
    }

    function windowOnClick2(event) {
        if (event.target === modal2) {
            toggleModal2();
        }
    }

    trigger2.addEventListener("click", toggleModal2);
    closeButton2.addEventListener("click", toggleModal2);
    window.addEventListener("click", windowOnClick2);
    
    var modal3 = document.querySelector(".modal3");
    var trigger3 = document.querySelector(".trigger3");
    var closeButton3 = document.querySelector(".close-button3");

    function toggleModal3() {
        modal3.classList.toggle("show-modal");
    }

    function windowOnClick3(event) {
        if (event.target === modal3) {
            toggleModal3();
        }
    }

    trigger3.addEventListener("click", toggleModal3);
    closeButton3.addEventListener("click", toggleModal3);
    window.addEventListener("click", windowOnClick3);
    
    //saved texts and images for final output
    
    //for text
    var savedCity1 = "city1";
    var savedCity2 = "city2";
    var savedCity3 = "city3";
    var savedCity4 = "city4";
    var savedCity5 = "city5";
    var savedCity6 = "city6";
    var savedCity7 = "city7";
    var savedCity8 = "city8";
    var savedCity9 = "city9";
    var savedCity10 = "city10";
    
    //for text
    var savedVerb1 = "verb1";
    var savedVerb2 = "verb2";
    var savedVerb3 = "verb3";
    var savedVerb4 = "verb4";
    var savedVerb5 = "verb5";
    var savedVerb6 = "verb6";
    var savedVerb7 = "verb7";
    var savedVerb8 = "verb8";
    var savedVerb9 = "verb9";
    var savedVerb10 = "verb10";
    
    //for image
    var savedImage1 = "image1";
    var savedImage2 = "image2";
    var savedImage3 = "image3";
    var savedImage4 = "image4";
    var savedImage5 = "image5";
    var savedImage6 = "image6";
    var savedImage7 = "image7";
    var savedImage8 = "image8";
    var savedImage9 = "image9";
    var savedImage10 = "image10";
    
    //clicked this city for final output
    var clickedThisCity = 0;
    var clickedThisType = 0;
    
    var bigCount=1;


    //arrays of text and images
    
    var typeArray = ["/hi1.jpg", "/hi2.jpg", "/airport1.jpg", "/airport2.jpg", "/cemetery1.jpg", "/cemetery2.jpg", "/court1.jpg", "/court2.jpg", "/downtown1.jpg", "/downtown2.jpg", "/factory1.jpg", "/factory2.jpg", "/farm1.jpg", "/farm2.jpg", "/highway1.jpg", "/highway2.jpg", "/junkyard1.jpg", "/junkyard2.jpg", "/parking1.jpg", "/parking2.jpg", "/play1.jpg", "/play2.jpg", "/pool1.jpg", "/pool2.jpg", "/ship1.jpg", "/ship2.jpg", "/suburb1.jpg", "/suburb2.jpg", "/train1.jpg", "/train2.jpg"];
    
    var cityArray = ["images/baghdad", "images/bangkok", "images/istanbul", "images/london", "images/mumbai", "images/pyongYang", "images/saintPetersburg", "images/saoPaulo", "images/shenZhen", "images/tianJin", "images/berlin", "images/busan", "images/capetown", "images/losAngeles", "images/madrid", "images/mexicoCity", "images/nairobi", "images/newYork", "images/singapore", "images/yokohama"]
    
    var typeButtonArray = ["TRESPASS", "TRESPASS", "FLY", "FLY", "DIE", "DIE", "COMPETE", "COMPETE", "WANDER", "WANDER", "WORK", "WORK", "GRAZE", "GRAZE", "DRIVE", "DRIVE", "WASTE", "WASTE", "PARK", "PARK", "PLAY", "PLAY", "SWIM", "SWIM", "SAIL", "SAIL", "LIVE", "LIVE", "RIDE", "RIDE"]
    
    var verbArray = ["TRESPASS", "TRESPASS", "FLY", "FLY", "DIE", "DIE", "COMPETE", "COMPETE", "WANDER", "WANDER", "WORK", "WORK", "GRAZE", "GRAZE", "DRIVE", "DRIVE", "WASTE", "WASTE", "PARK", "PARK", "PLAY", "PLAY", "SWIM", "SWIM", "SAIL", "SAIL", "LIVE", "LIVE", "RIDE", "RIDE"]
    
    var cityNameArray = ["BAGHDAD, IRAQ", "BANGKOK, THAILAND", "ISTANBUL, TURKEY", "LONDON, ENGLAND", "MUMBAI, INDIA", "PYONGYANG, NORTH KOREA", "SAINT PETERSBURG, RUSSIA", "SAO PAULO, BRAZIL", "SHENZHEN, CHINA", "TIANJIN, CHINA", "BERLIN, GERMANY", "BUSAN, SOUTH KOREA", "CAPE TOWN, SOUTH AFRICA", "LOS ANGELES, UNITED STATES", "MADRID, SPAIN", "MEXICO CITY, MEXICO", "NAIROBI, KENYA", "NEW YORK, UNITED STATES", "SINGAPORE, SINGAPORE", "YOKOHAMA, JAPAN"]
    
    var endcityNameArray = ["BAGHDAD", "BANGKOK", "ISTANBUL", "LONDON", "MUMBAI", "PYONGYANG", "SAINT PETERSBURG", "SAO PAULO", "SHENZHEN", "TIANJIN", "BERLIN", "BUSAN", "CAPE TOWN", "LOS ANGELES", "MADRID", "MEXICO CITY", "NAIROBI", "NEW YORK", "SINGAPORE", "YOKOHAMA"]
    
    //random variables at start of code
    
    var randomType1 = Math.floor(Math.random() * 30);
    var randomType2 = Math.floor(Math.random() * 30);
    var randomType3 = Math.floor(Math.random() * 30);
    var randomType4 = Math.floor(Math.random() * 30);
    var randomType5 = Math.floor(Math.random() * 30);
    var randomType6 = Math.floor(Math.random() * 30);
    var randomType7 = Math.floor(Math.random() * 30);
    var randomType8 = Math.floor(Math.random() * 30);
    var randomType9 = Math.floor(Math.random() * 30);
    var randomType10 = Math.floor(Math.random() * 30);
    
    var randomCity1 = Math.floor(Math.random() * 20);
    var randomCity2 = Math.floor(Math.random() * 20);
    var randomCity3 = Math.floor(Math.random() * 20);
    var randomCity4 = Math.floor(Math.random() * 20);
    var randomCity5 = Math.floor(Math.random() * 20);
    var randomCity6 = Math.floor(Math.random() * 20);
    var randomCity7 = Math.floor(Math.random() * 20);
    var randomCity8 = Math.floor(Math.random() * 20);
    var randomCity9 = Math.floor(Math.random() * 20);
    var randomCity10 = Math.floor(Math.random() * 20);

    function randomWholeNum() {
        return Math.random();
    }
    
    //initializing images with random values combining random city and random type
    
    var img1 = cityArray[randomCity1] + typeArray[randomType1];
    var img2 = cityArray[randomCity2] + typeArray[randomType2];
    var img3 = cityArray[randomCity3] + typeArray[randomType3];
    var img4 = cityArray[randomCity4] + typeArray[randomType4];
    var img5 = cityArray[randomCity5] + typeArray[randomType5];
    var img6 = cityArray[randomCity6] + typeArray[randomType6];
    var img7 = cityArray[randomCity7] + typeArray[randomType7];
    var img8 = cityArray[randomCity8] + typeArray[randomType8];
    var img9 = cityArray[randomCity9] + typeArray[randomType9];
    var img10 = cityArray[randomCity10] + typeArray[randomType10];
    
    
    //vars declaring which city/which type is selected
    
    var selectedCity = 0;
    var selectedType = 0;
    
    //var declaring screen number out of ten
    
    var outOfTen = 1;
    
    //setting initial images as random image
    
    $("#1").attr("src", img1);
    $("#2").attr("src", img2);
    $("#3").attr("src", img3);
    $("#4").attr("src", img4);
    $("#5").attr("src", img5);
    $("#6").attr("src", img6);
    $("#7").attr("src", img7);
    $("#8").attr("src", img8);
    $("#9").attr("src", img9);
    $("#10").attr("src", img10);
    
    //change images upon hitting "type"
    $("#type").click(function() {
        
        $(".left, .right, .middle").hover(function() {
          $("#hover12, #hover3, #hover45, #hover67, #hover8, #hover910").hide();
          $("#location").empty().append("LOCATION");
       });
        
    $("#1").hover(function() {
          $("#hover12").show();
          $("#hover12").attr("src", img1);
          $("#1").attr("style", "outline:1px solid white;");
          $("#hover3, #hover45, #hover67, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity1]);
       },
    function(){
        if(selectedCity==1){
          $("#1").attr("style", "outline:1px solid white;");
        } else {
          $("#1").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#2").hover(function() {
          $("#hover12").show();
          $("#hover12").attr("src", img2);
          $("#2").attr("style", "outline:1px solid white;");
          $("#hover3, #hover45, #hover67, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity2]);
       },
    function(){
          if(selectedCity==2){
          $("#2").attr("style", "outline:1px solid white;");
        } else {
          $("#2").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#3").hover(function() {
          $("#hover3").show();
          $("#hover3").attr("src", img3);
          $("#3").attr("style", "outline:1px solid white;");
          $("#hover12, #hover45, #hover67, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity3]);
       },
    function(){
          if(selectedCity==3){
          $("#3").attr("style", "outline:1px solid white;");
        } else {
          $("#3").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#4").hover(function() {
          $("#hover45").show();
          $("#hover45").attr("src", img4);
          $("#4").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover67, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity4]);
       },
    function(){
          if(selectedCity==4){
          $("#4").attr("style", "outline:1px solid white;");
        } else {
          $("#4").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#5").hover(function() {
          $("#hover45").show();
          $("#hover45").attr("src", img5);
          $("#5").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover67, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity5]);
       },
    function(){
          if(selectedCity==5){
          $("#5").attr("style", "outline:1px solid white;");
        } else {
          $("#5").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#6").hover(function() {
          $("#hover67").show();
          $("#hover67").attr("src", img6);
          $("#6").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover45, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity6]);
       },
    function(){
          if(selectedCity==6){
          $("#6").attr("style", "outline:1px solid white;");
        } else {
          $("#6").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#7").hover(function() {
          $("#hover67").show();
          $("#hover67").attr("src", img7);
          $("#7").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover45, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity7]);
       },
    function(){
          if(selectedCity==7){
          $("#7").attr("style", "outline:1px solid white;");
        } else {
          $("#7").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#8").hover(function() {
          $("#hover8").show();
          $("#hover8").attr("src", img8);
          $("#8").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover45, #hover67, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity8]);
       },
    function(){
          if(selectedCity==8){
          $("#8").attr("style", "outline:1px solid white;");
        } else {
          $("#8").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#9").hover(function() {
          $("#hover910").show();
          $("#hover910").attr("src", img9);
          $("#9").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover45, #hover67, #hover8").hide();
          $("#location").empty().append(cityNameArray[randomCity9]);
       },
    function(){
          if(selectedCity==9){
          $("#9").attr("style", "outline:1px solid white;");
        } else {
          $("#9").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#10").hover(function() {
          $("#hover910").show();
          $("#hover910").attr("src", img10);
          $("#10").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover45, #hover67, #hover8").hide();
          $("#location").empty().append(cityNameArray[randomCity10]);
       },
    function(){
          if(selectedCity==10){
          $("#10").attr("style", "outline:1px solid white;");
        } else {
          $("#10").attr("style", "outline:0px solid white;");  
        }
    });
             $("#1").click(function() {
          $("#clicked").attr("src", img1);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType1]);
          $("#1").attr("style", "outline:1px solid white;");
          selectedCity = 1;
          selectedType = 1;
          $("#1").attr("style", "outline:1px solid white;");
          $("#2, #3, #4, #5, #6, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
          
       });
    
     $("#2").click(function() {
          $("#clicked").attr("src", img2);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType2]);
          $("#2").attr("style", "outline:1px solid white;");
          selectedCity = 2;
          selectedType = 2;
          $("#2").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #5, #6, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
       });
    
    $("#3").click(function() {
          $("#clicked").attr("src", img3);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType3]);
          selectedCity = 3;
          selectedType = 3;
          $("#3").attr("style", "outline:1px solid white;");
          $("#1, #2, #4, #5, #6, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
       });
    
    $("#4").click(function() {
          $("#clicked").attr("src", img4);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType4]);
          selectedCity = 4;
          selectedType = 4;
          $("#4").attr("style", "outline:1px solid white;");
          $("#1, #3, #2, #5, #6, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
        
       });
    
    $("#5").click(function() {
          $("#clicked").attr("src", img5);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType5]);
          selectedCity = 5;
          selectedType = 5;
          $("#5").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #2, #6, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
       });
    
    $("#6").click(function() {
          $("#clicked").attr("src", img6);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType6]);
          selectedCity = 6;
          selectedType = 6;
          $("#6").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #2, #5, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
       });
    
    $("#7").click(function() {
          $("#clicked").attr("src", img7);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType7]);
          selectedCity = 7;
          selectedType = 7;
          $("#7").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #2, #6, #5, #8, #9, #10").attr("style", "outline:0px solid white;");
       });
    
    $("#8").click(function() {
          $("#clicked").attr("src", img8);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType8]);
          selectedCity = 8;
          selectedType = 8;
          $("#8").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #2, #6, #7, #5, #9, #10").attr("style", "outline:0px solid white;");
       });
    
    $("#9").click(function() {
          $("#clicked").attr("src", img9);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType9]);
          selectedCity = 9;
          selectedType = 9;
          $("#9").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #2, #6, #7, #8, #5, #10").attr("style", "outline:0px solid white;");
       });
    
    $("#10").click(function() {
          $("#clicked").attr("src", img10);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType10]);
          selectedCity = 10;
          selectedType = 10;
          $("#10").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #2, #6, #7, #8, #9, #5").attr("style", "outline:0px solid white;");
       });
        
            if(selectedType==1){
                  randomCity1 = Math.floor(Math.random() * 20);
                  randomCity2 = Math.floor(Math.random() * 20);
                  randomCity3 = Math.floor(Math.random() * 20);
                  randomCity4 = Math.floor(Math.random() * 20);
                  randomCity5 = Math.floor(Math.random() * 20);
                  randomCity6 = Math.floor(Math.random() * 20);
                  randomCity7 = Math.floor(Math.random() * 20);
                  randomCity8 = Math.floor(Math.random() * 20);
                  randomCity9 = Math.floor(Math.random() * 20);
                  randomCity10 = Math.floor(Math.random() * 20);
                  var img1 = cityArray[randomCity1] + typeArray[randomType1];
                  var img2 = cityArray[randomCity2] + typeArray[randomType1];
                  var img3 = cityArray[randomCity3] + typeArray[randomType1];
                  var img4 = cityArray[randomCity4] + typeArray[randomType1];
                  var img5 = cityArray[randomCity5] + typeArray[randomType1];
                  var img6 = cityArray[randomCity6] + typeArray[randomType1];
                  var img7 = cityArray[randomCity7] + typeArray[randomType1];
                  var img8 = cityArray[randomCity8] + typeArray[randomType1];
                  var img9 = cityArray[randomCity9] + typeArray[randomType1];
                  var img10 = cityArray[randomCity10] + typeArray[randomType1];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 
                  $("#location").empty().append(cityNameArray[randomCity1]);
                  randomType1 = randomType1;
                  randomType2 = randomType1;
                  randomType3 = randomType1;
                  randomType4 = randomType1;
                  randomType5 = randomType1;
                  randomType6 = randomType1;
                  randomType7 = randomType1;
                  randomType8 = randomType1;
                  randomType9 = randomType1;
                  randomType10 = randomType1;
            }
            if(selectedType==2){
                  randomCity1 = Math.floor(Math.random() * 20);
                  randomCity2 = Math.floor(Math.random() * 20);
                  randomCity3 = Math.floor(Math.random() * 20);
                  randomCity4 = Math.floor(Math.random() * 20);
                  randomCity5 = Math.floor(Math.random() * 20);
                  randomCity6 = Math.floor(Math.random() * 20);
                  randomCity7 = Math.floor(Math.random() * 20);
                  randomCity8 = Math.floor(Math.random() * 20);
                  randomCity9 = Math.floor(Math.random() * 20);
                  randomCity10 = Math.floor(Math.random() * 20);
                  var img1 = cityArray[randomCity1] + typeArray[randomType2];
                  var img2 = cityArray[randomCity2] + typeArray[randomType2];
                  var img3 = cityArray[randomCity3] + typeArray[randomType2];
                  var img4 = cityArray[randomCity4] + typeArray[randomType2];
                  var img5 = cityArray[randomCity5] + typeArray[randomType2];
                  var img6 = cityArray[randomCity6] + typeArray[randomType2];
                  var img7 = cityArray[randomCity7] + typeArray[randomType2];
                  var img8 = cityArray[randomCity8] + typeArray[randomType2];
                  var img9 = cityArray[randomCity9] + typeArray[randomType2];
                  var img10 = cityArray[randomCity10] + typeArray[randomType2];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 
                  $("#location").empty().append(cityNameArray[randomCity2]);
                  randomType1 = randomType2;
                  randomType2 = randomType2;
                  randomType3 = randomType2;
                  randomType4 = randomType2;
                  randomType5 = randomType2;
                  randomType6 = randomType2;
                  randomType7 = randomType2;
                  randomType8 = randomType2;
                  randomType9 = randomType2;
                  randomType10 = randomType2;
            }
            if(selectedType==3){
                  randomCity1 = Math.floor(Math.random() * 20);
                  randomCity2 = Math.floor(Math.random() * 20);
                  randomCity3 = Math.floor(Math.random() * 20);
                  randomCity4 = Math.floor(Math.random() * 20);
                  randomCity5 = Math.floor(Math.random() * 20);
                  randomCity6 = Math.floor(Math.random() * 20);
                  randomCity7 = Math.floor(Math.random() * 20);
                  randomCity8 = Math.floor(Math.random() * 20);
                  randomCity9 = Math.floor(Math.random() * 20);
                  randomCity10 = Math.floor(Math.random() * 20);
                  var img1 = cityArray[randomCity1] + typeArray[randomType3];
                  var img2 = cityArray[randomCity2] + typeArray[randomType3];
                  var img3 = cityArray[randomCity3] + typeArray[randomType3];
                  var img4 = cityArray[randomCity4] + typeArray[randomType3];
                  var img5 = cityArray[randomCity5] + typeArray[randomType3];
                  var img6 = cityArray[randomCity6] + typeArray[randomType3];
                  var img7 = cityArray[randomCity7] + typeArray[randomType3];
                  var img8 = cityArray[randomCity8] + typeArray[randomType3];
                  var img9 = cityArray[randomCity9] + typeArray[randomType3];
                  var img10 = cityArray[randomCity10] + typeArray[randomType3];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 
                  $("#location").empty().append(cityNameArray[randomCity3]);
                  randomType1 = randomType3;
                  randomType2 = randomType3;
                  randomType3 = randomType3;
                  randomType4 = randomType3;
                  randomType5 = randomType3;
                  randomType6 = randomType3;
                  randomType7 = randomType3;
                  randomType8 = randomType3;
                  randomType9 = randomType3;
                  randomType10 = randomType3;
            }
            if(selectedType==4){
                  randomCity1 = Math.floor(Math.random() * 20);
                  randomCity2 = Math.floor(Math.random() * 20);
                  randomCity3 = Math.floor(Math.random() * 20);
                  randomCity4 = Math.floor(Math.random() * 20);
                  randomCity5 = Math.floor(Math.random() * 20);
                  randomCity6 = Math.floor(Math.random() * 20);
                  randomCity7 = Math.floor(Math.random() * 20);
                  randomCity8 = Math.floor(Math.random() * 20);
                  randomCity9 = Math.floor(Math.random() * 20);
                  randomCity10 = Math.floor(Math.random() * 20);
                  var img1 = cityArray[randomCity1] + typeArray[randomType4];
                  var img2 = cityArray[randomCity2] + typeArray[randomType4];
                  var img3 = cityArray[randomCity3] + typeArray[randomType4];
                  var img4 = cityArray[randomCity4] + typeArray[randomType4];
                  var img5 = cityArray[randomCity5] + typeArray[randomType4];
                  var img6 = cityArray[randomCity6] + typeArray[randomType4];
                  var img7 = cityArray[randomCity7] + typeArray[randomType4];
                  var img8 = cityArray[randomCity8] + typeArray[randomType4];
                  var img9 = cityArray[randomCity9] + typeArray[randomType4];
                  var img10 = cityArray[randomCity10] + typeArray[randomType4];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 
                  $("#location").empty().append(cityNameArray[randomCity4]);
                  randomType1 = randomType4;
                  randomType2 = randomType4;
                  randomType3 = randomType4;
                  randomType4 = randomType4;
                  randomType5 = randomType4;
                  randomType6 = randomType4;
                  randomType7 = randomType4;
                  randomType8 = randomType4;
                  randomType9 = randomType4;
                  randomType10 = randomType4;
            }
            if(selectedType==5){
                  randomCity1 = Math.floor(Math.random() * 20);
                  randomCity2 = Math.floor(Math.random() * 20);
                  randomCity3 = Math.floor(Math.random() * 20);
                  randomCity4 = Math.floor(Math.random() * 20);
                  randomCity5 = Math.floor(Math.random() * 20);
                  randomCity6 = Math.floor(Math.random() * 20);
                  randomCity7 = Math.floor(Math.random() * 20);
                  randomCity8 = Math.floor(Math.random() * 20);
                  randomCity9 = Math.floor(Math.random() * 20);
                  randomCity10 = Math.floor(Math.random() * 20);
                  var img1 = cityArray[randomCity1] + typeArray[randomType5];
                  var img2 = cityArray[randomCity2] + typeArray[randomType5];
                  var img3 = cityArray[randomCity3] + typeArray[randomType5];
                  var img4 = cityArray[randomCity4] + typeArray[randomType5];
                  var img5 = cityArray[randomCity5] + typeArray[randomType5];
                  var img6 = cityArray[randomCity6] + typeArray[randomType5];
                  var img7 = cityArray[randomCity7] + typeArray[randomType5];
                  var img8 = cityArray[randomCity8] + typeArray[randomType5];
                  var img9 = cityArray[randomCity9] + typeArray[randomType5];
                  var img10 = cityArray[randomCity10] + typeArray[randomType5];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 
                  $("#location").empty().append(cityNameArray[randomCity5]);
                  randomType1 = randomType5;
                  randomType2 = randomType5;
                  randomType3 = randomType5;
                  randomType4 = randomType5;
                  randomType5 = randomType5;
                  randomType6 = randomType5;
                  randomType7 = randomType5;
                  randomType8 = randomType5;
                  randomType9 = randomType5;
                  randomType10 = randomType5;
            }
            if(selectedType==6){
                  randomCity1 = Math.floor(Math.random() * 20);
                  randomCity2 = Math.floor(Math.random() * 20);
                  randomCity3 = Math.floor(Math.random() * 20);
                  randomCity4 = Math.floor(Math.random() * 20);
                  randomCity5 = Math.floor(Math.random() * 20);
                  randomCity6 = Math.floor(Math.random() * 20);
                  randomCity7 = Math.floor(Math.random() * 20);
                  randomCity8 = Math.floor(Math.random() * 20);
                  randomCity9 = Math.floor(Math.random() * 20);
                  randomCity10 = Math.floor(Math.random() * 20);
                  var img1 = cityArray[randomCity1] + typeArray[randomType6];
                  var img2 = cityArray[randomCity2] + typeArray[randomType6];
                  var img3 = cityArray[randomCity3] + typeArray[randomType6];
                  var img4 = cityArray[randomCity4] + typeArray[randomType6];
                  var img5 = cityArray[randomCity5] + typeArray[randomType6];
                  var img6 = cityArray[randomCity6] + typeArray[randomType6];
                  var img7 = cityArray[randomCity7] + typeArray[randomType6];
                  var img8 = cityArray[randomCity8] + typeArray[randomType6];
                  var img9 = cityArray[randomCity9] + typeArray[randomType6];
                  var img10 = cityArray[randomCity10] + typeArray[randomType6];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 
                  $("#location").empty().append(cityNameArray[randomCity6]);
                  randomType1 = randomType6;
                  randomType2 = randomType6;
                  randomType3 = randomType6;
                  randomType4 = randomType6;
                  randomType5 = randomType6;
                  randomType6 = randomType6;
                  randomType7 = randomType6;
                  randomType8 = randomType6;
                  randomType9 = randomType6;
                  randomType10 = randomType6;
            }
            if(selectedType==7){
                  randomCity1 = Math.floor(Math.random() * 20);
                  randomCity2 = Math.floor(Math.random() * 20);
                  randomCity3 = Math.floor(Math.random() * 20);
                  randomCity4 = Math.floor(Math.random() * 20);
                  randomCity5 = Math.floor(Math.random() * 20);
                  randomCity6 = Math.floor(Math.random() * 20);
                  randomCity7 = Math.floor(Math.random() * 20);
                  randomCity8 = Math.floor(Math.random() * 20);
                  randomCity9 = Math.floor(Math.random() * 20);
                  randomCity10 = Math.floor(Math.random() * 20);
                  var img1 = cityArray[randomCity1] + typeArray[randomType7];
                  var img2 = cityArray[randomCity2] + typeArray[randomType7];
                  var img3 = cityArray[randomCity3] + typeArray[randomType7];
                  var img4 = cityArray[randomCity4] + typeArray[randomType7];
                  var img5 = cityArray[randomCity5] + typeArray[randomType7];
                  var img6 = cityArray[randomCity6] + typeArray[randomType7];
                  var img7 = cityArray[randomCity7] + typeArray[randomType7];
                  var img8 = cityArray[randomCity8] + typeArray[randomType7];
                  var img9 = cityArray[randomCity9] + typeArray[randomType7];
                  var img10 = cityArray[randomCity10] + typeArray[randomType7];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 
                  $("#location").empty().append(cityNameArray[randomCity7]);
                  randomType1 = randomType7;
                  randomType2 = randomType7;
                  randomType3 = randomType7;
                  randomType4 = randomType7;
                  randomType5 = randomType7;
                  randomType6 = randomType7;
                  randomType7 = randomType7;
                  randomType8 = randomType7;
                  randomType9 = randomType7;
                  randomType10 = randomType7;
            }
            if(selectedType==8){
                  randomCity1 = Math.floor(Math.random() * 20);
                  randomCity2 = Math.floor(Math.random() * 20);
                  randomCity3 = Math.floor(Math.random() * 20);
                  randomCity4 = Math.floor(Math.random() * 20);
                  randomCity5 = Math.floor(Math.random() * 20);
                  randomCity6 = Math.floor(Math.random() * 20);
                  randomCity7 = Math.floor(Math.random() * 20);
                  randomCity8 = Math.floor(Math.random() * 20);
                  randomCity9 = Math.floor(Math.random() * 20);
                  randomCity10 = Math.floor(Math.random() * 20);
                  var img1 = cityArray[randomCity1] + typeArray[randomType8];
                  var img2 = cityArray[randomCity2] + typeArray[randomType8];
                  var img3 = cityArray[randomCity3] + typeArray[randomType8];
                  var img4 = cityArray[randomCity4] + typeArray[randomType8];
                  var img5 = cityArray[randomCity5] + typeArray[randomType8];
                  var img6 = cityArray[randomCity6] + typeArray[randomType8];
                  var img7 = cityArray[randomCity7] + typeArray[randomType8];
                  var img8 = cityArray[randomCity8] + typeArray[randomType8];
                  var img9 = cityArray[randomCity9] + typeArray[randomType8];
                  var img10 = cityArray[randomCity10] + typeArray[randomType8];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 
                  $("#location").empty().append(cityNameArray[randomCity8]);
                  randomType1 = randomType8;
                  randomType2 = randomType8;
                  randomType3 = randomType8;
                  randomType4 = randomType8;
                  randomType5 = randomType8;
                  randomType6 = randomType8;
                  randomType7 = randomType8;
                  randomType8 = randomType8;
                  randomType9 = randomType8;
                  randomType10 = randomType8;
            }
            if(selectedType==9){
                  randomCity1 = Math.floor(Math.random() * 20);
                  randomCity2 = Math.floor(Math.random() * 20);
                  randomCity3 = Math.floor(Math.random() * 20);
                  randomCity4 = Math.floor(Math.random() * 20);
                  randomCity5 = Math.floor(Math.random() * 20);
                  randomCity6 = Math.floor(Math.random() * 20);
                  randomCity7 = Math.floor(Math.random() * 20);
                  randomCity8 = Math.floor(Math.random() * 20);
                  randomCity9 = Math.floor(Math.random() * 20);
                  randomCity10 = Math.floor(Math.random() * 20);
                  var img1 = cityArray[randomCity1] + typeArray[randomType9];
                  var img2 = cityArray[randomCity2] + typeArray[randomType9];
                  var img3 = cityArray[randomCity3] + typeArray[randomType9];
                  var img4 = cityArray[randomCity4] + typeArray[randomType9];
                  var img5 = cityArray[randomCity5] + typeArray[randomType9];
                  var img6 = cityArray[randomCity6] + typeArray[randomType9];
                  var img7 = cityArray[randomCity7] + typeArray[randomType9];
                  var img8 = cityArray[randomCity8] + typeArray[randomType9];
                  var img9 = cityArray[randomCity9] + typeArray[randomType9];
                  var img10 = cityArray[randomCity10] + typeArray[randomType9];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 
                  $("#location").empty().append(cityNameArray[randomCity9]);
                  randomType1 = randomType9;
                  randomType2 = randomType9;
                  randomType3 = randomType9;
                  randomType4 = randomType9;
                  randomType5 = randomType9;
                  randomType6 = randomType9;
                  randomType7 = randomType9;
                  randomType8 = randomType9;
                  randomType9 = randomType9;
                  randomType10 = randomType9;
            }
            if(selectedType==10){
                  randomCity1 = Math.floor(Math.random() * 20);
                  randomCity2 = Math.floor(Math.random() * 20);
                  randomCity3 = Math.floor(Math.random() * 20);
                  randomCity4 = Math.floor(Math.random() * 20);
                  randomCity5 = Math.floor(Math.random() * 20);
                  randomCity6 = Math.floor(Math.random() * 20);
                  randomCity7 = Math.floor(Math.random() * 20);
                  randomCity8 = Math.floor(Math.random() * 20);
                  randomCity9 = Math.floor(Math.random() * 20);
                  randomCity10 = Math.floor(Math.random() * 20);
                  var img1 = cityArray[randomCity1] + typeArray[randomType10];
                  var img2 = cityArray[randomCity2] + typeArray[randomType10];
                  var img3 = cityArray[randomCity3] + typeArray[randomType10];
                  var img4 = cityArray[randomCity4] + typeArray[randomType10];
                  var img5 = cityArray[randomCity5] + typeArray[randomType10];
                  var img6 = cityArray[randomCity6] + typeArray[randomType10];
                  var img7 = cityArray[randomCity7] + typeArray[randomType10];
                  var img8 = cityArray[randomCity8] + typeArray[randomType10];
                  var img9 = cityArray[randomCity9] + typeArray[randomType10];
                  var img10 = cityArray[randomCity10] + typeArray[randomType10];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 
                  $("#location").empty().append(cityNameArray[randomCity10]);
                  randomType1 = randomType10;
                  randomType2 = randomType10;
                  randomType3 = randomType10;
                  randomType4 = randomType10;
                  randomType5 = randomType10;
                  randomType6 = randomType10;
                  randomType7 = randomType10;
                  randomType8 = randomType10;
                  randomType9 = randomType10;
                  randomType10 = randomType10;
                
                  clickedThisCity=randomCity10;
                  clickedThisVerb=randomType10;
                  
            }
        outOfTen++;
            $("#outOfTen").empty().append(outOfTen);
            if(outOfTen>10){
              $("#screenNum").empty().append(bigCount+" OUT OF 10");
              $("#big").attr("src", savedImage1);    
              $("#bigText, #big, #restart, #bigTextVerb1, #endtop, #endbottom, .downloadbits").show();    
              $("#location, .wrapper").hide();
              $("#verb1").empty().append(savedVerb1);
              $("#verb2").empty().append(savedVerb2);
              $("#verb3").empty().append(savedVerb3);
              $("#verb4").empty().append(savedVerb4);
              $("#verb5").empty().append(savedVerb5);
              $("#verb6").empty().append(savedVerb6);
              $("#verb7").empty().append(savedVerb7);
              $("#verb8").empty().append(savedVerb8);
              $("#verb9").empty().append(savedVerb9); 
              $("#verb10").empty().append(savedVerb10);   
              $("#place1").empty().append(savedCity1);
              $("#place2").empty().append(savedCity2);
              $("#place3").empty().append(savedCity3);
              $("#place4").empty().append(savedCity4);
              $("#place5").empty().append(savedCity5);
              $("#place6").empty().append(savedCity6);
              $("#place7").empty().append(savedCity7);
              $("#place8").empty().append(savedCity8);
              $("#place9").empty().append(savedCity9); 
              $("#place10").empty().append(savedCity10);
                
              
            }
            $("#1, #2, #3, #4, #5, #6, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
            $("#selected, #type, #city").hide();
            
    });
    
    //click on Big to see the images
    
     $("#bigTextVerb1").click(function() {
      bigCount++;
      $("#screenNum").empty().append(bigCount+" OUT OF 10");
         if(bigCount==2){
             $("#big").attr("src", savedImage2);
             $("#verb1").empty().append(savedVerb2);
             $("#place1").empty().append(savedCity2);
         }
         if(bigCount==3){
             $("#big").attr("src", savedImage3);
             $("#verb1").empty().append(savedVerb3);
             $("#place1").empty().append(savedCity3);
         }
         if(bigCount==4){
             $("#big").attr("src", savedImage4);
             $("#verb1").empty().append(savedVerb4);
             $("#place1").empty().append(savedCity4);
         }
         if(bigCount==5){
             $("#big").attr("src", savedImage5);
             $("#verb1").empty().append(savedVerb5);
             $("#place1").empty().append(savedCity5);
         }
         if(bigCount==6){
             $("#big").attr("src", savedImage6);
             $("#verb1").empty().append(savedVerb6);
             $("#place1").empty().append(savedCity6);
         }
         if(bigCount==7){
             $("#big").attr("src", savedImage7);
             $("#verb1").empty().append(savedVerb7);
             $("#place1").empty().append(savedCity7);
         }
         if(bigCount==8){
             $("#big").attr("src", savedImage8);
             $("#verb1").empty().append(savedVerb8);
             $("#place1").empty().append(savedCity8);
         }
         if(bigCount==9){
             $("#big").attr("src", savedImage9);
             $("#verb1").empty().append(savedVerb9);
             $("#place1").empty().append(savedCity9);
         }
         if(bigCount==10){
             $("#big").attr("src", savedImage10);
             $("#verb1").empty().append(savedVerb10);
             $("#place1").empty().append(savedCity10);
         }
         if(bigCount==11){
             $("#big").attr("src", savedImage1); 
             bigCount=1;
             $("#screenNum").empty().append(bigCount+" OUT OF 10");
             $("#verb1").empty().append(savedVerb1);
             $("#place1").empty().append(savedCity1);
         }
     });
    
    //change images upon hitting "explore"
    
    
    $("#city").click(function() {
            
          $(".left, .right, .middle").hover(function() {
          $("#hover12, #hover3, #hover45, #hover67, #hover8, #hover910").hide();
          $("#location").empty().append("LOCATION");
       });
        
    $("#1").hover(function() {
          $("#hover12").show();
          $("#hover12").attr("src", img1);
          $("#1").attr("style", "outline:1px solid white;");
          $("#hover3, #hover45, #hover67, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity1]);
       },
    function(){
        if(selectedCity==1){
          $("#1").attr("style", "outline:1px solid white;");
        } else {
          $("#1").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#2").hover(function() {
          $("#hover12").show();
          $("#hover12").attr("src", img2);
          $("#2").attr("style", "outline:1px solid white;");
          $("#hover3, #hover45, #hover67, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity2]);
       },
    function(){
          if(selectedCity==2){
          $("#2").attr("style", "outline:1px solid white;");
        } else {
          $("#2").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#3").hover(function() {
          $("#hover3").show();
          $("#hover3").attr("src", img3);
          $("#3").attr("style", "outline:1px solid white;");
          $("#hover12, #hover45, #hover67, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity3]);
       },
    function(){
          if(selectedCity==3){
          $("#3").attr("style", "outline:1px solid white;");
        } else {
          $("#3").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#4").hover(function() {
          $("#hover45").show();
          $("#hover45").attr("src", img4);
          $("#4").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover67, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity4]);
       },
    function(){
          if(selectedCity==4){
          $("#4").attr("style", "outline:1px solid white;");
        } else {
          $("#4").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#5").hover(function() {
          $("#hover45").show();
          $("#hover45").attr("src", img5);
          $("#5").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover67, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity5]);
       },
    function(){
          if(selectedCity==5){
          $("#5").attr("style", "outline:1px solid white;");
        } else {
          $("#5").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#6").hover(function() {
          $("#hover67").show();
          $("#hover67").attr("src", img6);
          $("#6").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover45, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity6]);
       },
    function(){
          if(selectedCity==6){
          $("#6").attr("style", "outline:1px solid white;");
        } else {
          $("#6").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#7").hover(function() {
          $("#hover67").show();
          $("#hover67").attr("src", img7);
          $("#7").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover45, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity7]);
       },
    function(){
          if(selectedCity==7){
          $("#7").attr("style", "outline:1px solid white;");
        } else {
          $("#7").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#8").hover(function() {
          $("#hover8").show();
          $("#hover8").attr("src", img8);
          $("#8").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover45, #hover67, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity8]);
       },
    function(){
          if(selectedCity==8){
          $("#8").attr("style", "outline:1px solid white;");
        } else {
          $("#8").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#9").hover(function() {
          $("#hover910").show();
          $("#hover910").attr("src", img9);
          $("#9").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover45, #hover67, #hover8").hide();
          $("#location").empty().append(cityNameArray[randomCity9]);
       },
    function(){
          if(selectedCity==9){
          $("#9").attr("style", "outline:1px solid white;");
        } else {
          $("#9").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#10").hover(function() {
          $("#hover910").show();
          $("#hover910").attr("src", img10);
          $("#10").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover45, #hover67, #hover8").hide();
          $("#location").empty().append(cityNameArray[randomCity10]);
       },
    function(){
          if(selectedCity==10){
          $("#10").attr("style", "outline:1px solid white;");
        } else {
          $("#10").attr("style", "outline:0px solid white;");  
        }
    });
             $("#1").click(function() {
          $("#clicked").attr("src", img1);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType1]);
          $("#1").attr("style", "outline:1px solid white;");
          selectedCity = 1;
          selectedType = 1;
          $("#1").attr("style", "outline:1px solid white;");
          $("#2, #3, #4, #5, #6, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
          
       });
    
     $("#2").click(function() {
          $("#clicked").attr("src", img2);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType2]);
          $("#2").attr("style", "outline:1px solid white;");
          selectedCity = 2;
          selectedType = 2;
          $("#2").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #5, #6, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
       });
    
    $("#3").click(function() {
          $("#clicked").attr("src", img3);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType3]);
          selectedCity = 3;
          selectedType = 3;
          $("#3").attr("style", "outline:1px solid white;");
          $("#1, #2, #4, #5, #6, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
       });
    
    $("#4").click(function() {
          $("#clicked").attr("src", img4);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType4]);
          selectedCity = 4;
          selectedType = 4;
          $("#4").attr("style", "outline:1px solid white;");
          $("#1, #3, #2, #5, #6, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
        
       });
    
    $("#5").click(function() {
          $("#clicked").attr("src", img5);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType5]);
          selectedCity = 5;
          selectedType = 5;
          $("#5").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #2, #6, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
       });
    
    $("#6").click(function() {
          $("#clicked").attr("src", img6);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType6]);
          selectedCity = 6;
          selectedType = 6;
          $("#6").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #2, #5, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
       });
    
    $("#7").click(function() {
          $("#clicked").attr("src", img7);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType7]);
          selectedCity = 7;
          selectedType = 7;
          $("#7").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #2, #6, #5, #8, #9, #10").attr("style", "outline:0px solid white;");
       });
    
    $("#8").click(function() {
          $("#clicked").attr("src", img8);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType8]);
          selectedCity = 8;
          selectedType = 8;
          $("#8").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #2, #6, #7, #5, #9, #10").attr("style", "outline:0px solid white;");
       });
    
    $("#9").click(function() {
          $("#clicked").attr("src", img9);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType9]);
          selectedCity = 9;
          selectedType = 9;
          $("#9").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #2, #6, #7, #8, #5, #10").attr("style", "outline:0px solid white;");
       });
    
    $("#10").click(function() {
          $("#clicked").attr("src", img10);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType10]);
          selectedCity = 10;
          selectedType = 10;
          $("#10").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #2, #6, #7, #8, #9, #5").attr("style", "outline:0px solid white;");
       });
            
            if(selectedCity==1){
                  randomType1 = Math.floor(Math.random() * 30);
                  randomType2 = Math.floor(Math.random() * 30);
                  randomType3 = Math.floor(Math.random() * 30);
                  randomType4 = Math.floor(Math.random() * 30);
                  randomType5 = Math.floor(Math.random() * 30);
                  randomType6 = Math.floor(Math.random() * 30);
                  randomType7 = Math.floor(Math.random() * 30);
                  randomType8 = Math.floor(Math.random() * 30);
                  randomType9 = Math.floor(Math.random() * 30);
                  randomType10 = Math.floor(Math.random() * 30);
                  var img1 = cityArray[randomCity1] + typeArray[randomType1];
                  var img2 = cityArray[randomCity1] + typeArray[randomType2];
                  var img3 = cityArray[randomCity1] + typeArray[randomType3];
                  var img4 = cityArray[randomCity1] + typeArray[randomType4];
                  var img5 = cityArray[randomCity1] + typeArray[randomType5];
                  var img6 = cityArray[randomCity1] + typeArray[randomType6];
                  var img7 = cityArray[randomCity1] + typeArray[randomType7];
                  var img8 = cityArray[randomCity1] + typeArray[randomType8];
                  var img9 = cityArray[randomCity1] + typeArray[randomType9];
                  var img10 = cityArray[randomCity1] + typeArray[randomType10];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 
                  $("#location").empty().append(cityNameArray[randomCity1]);
                  randomCity1 = randomCity1;
                  randomCity2 = randomCity1;
                  randomCity3 = randomCity1;
                  randomCity4 = randomCity1;
                  randomCity5 = randomCity1;
                  randomCity6 = randomCity1;
                  randomCity7 = randomCity1;
                  randomCity8 = randomCity1;
                  randomCity9 = randomCity1;
                  randomCity10 = randomCity1;
            }
            if(selectedCity==2){
                  randomType1 = Math.floor(Math.random() * 30);
                  randomType2 = Math.floor(Math.random() * 30);
                  randomType3 = Math.floor(Math.random() * 30);
                  randomType4 = Math.floor(Math.random() * 30);
                  randomType5 = Math.floor(Math.random() * 30);
                  randomType6 = Math.floor(Math.random() * 30);
                  randomType7 = Math.floor(Math.random() * 30);
                  randomType8 = Math.floor(Math.random() * 30);
                  randomType9 = Math.floor(Math.random() * 30);
                  randomType10 = Math.floor(Math.random() * 30);
                  var img1 = cityArray[randomCity2] + typeArray[randomType1];
                  var img2 = cityArray[randomCity2] + typeArray[randomType2];
                  var img3 = cityArray[randomCity2] + typeArray[randomType3];
                  var img4 = cityArray[randomCity2] + typeArray[randomType4];
                  var img5 = cityArray[randomCity2] + typeArray[randomType5];
                  var img6 = cityArray[randomCity2] + typeArray[randomType6];
                  var img7 = cityArray[randomCity2] + typeArray[randomType7];
                  var img8 = cityArray[randomCity2] + typeArray[randomType8];
                  var img9 = cityArray[randomCity2] + typeArray[randomType9];
                  var img10 = cityArray[randomCity2] + typeArray[randomType10];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 $("#location").empty().append(cityNameArray[randomCity2]);
                  randomCity1 = randomCity2;
                  randomCity2 = randomCity2;
                  randomCity3 = randomCity2;
                  randomCity4 = randomCity2;
                  randomCity5 = randomCity2;
                  randomCity6 = randomCity2;
                  randomCity7 = randomCity2;
                  randomCity8 = randomCity2;
                  randomCity9 = randomCity2;
                  randomCity10 = randomCity2;
            }
            if(selectedCity==3){
                  randomType1 = Math.floor(Math.random() * 30);
                  randomType2 = Math.floor(Math.random() * 30);
                  randomType3 = Math.floor(Math.random() * 30);
                  randomType4 = Math.floor(Math.random() * 30);
                  randomType5 = Math.floor(Math.random() * 30);
                  randomType6 = Math.floor(Math.random() * 30);
                  randomType7 = Math.floor(Math.random() * 30);
                  randomType8 = Math.floor(Math.random() * 30);
                  randomType9 = Math.floor(Math.random() * 30);
                  randomType10 = Math.floor(Math.random() * 30);
                  var img1 = cityArray[randomCity3] + typeArray[randomType1];
                  var img2 = cityArray[randomCity3] + typeArray[randomType2];
                  var img3 = cityArray[randomCity3] + typeArray[randomType3];
                  var img4 = cityArray[randomCity3] + typeArray[randomType4];
                  var img5 = cityArray[randomCity3] + typeArray[randomType5];
                  var img6 = cityArray[randomCity3] + typeArray[randomType6];
                  var img7 = cityArray[randomCity3] + typeArray[randomType7];
                  var img8 = cityArray[randomCity3] + typeArray[randomType8];
                  var img9 = cityArray[randomCity3] + typeArray[randomType9];
                  var img10 = cityArray[randomCity3] + typeArray[randomType10];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 $("#location").empty().append(cityNameArray[randomCity3]);
                  randomCity1 = randomCity3;
                  randomCity2 = randomCity3;
                  randomCity3 = randomCity3;
                  randomCity4 = randomCity3;
                  randomCity5 = randomCity3;
                  randomCity6 = randomCity3;
                  randomCity7 = randomCity3;
                  randomCity8 = randomCity3;
                  randomCity9 = randomCity3;
                  randomCity10 = randomCity3;
            }
            if(selectedCity==4){
                  randomType1 = Math.floor(Math.random() * 30);
                  randomType2 = Math.floor(Math.random() * 30);
                  randomType3 = Math.floor(Math.random() * 30);
                  randomType4 = Math.floor(Math.random() * 30);
                  randomType5 = Math.floor(Math.random() * 30);
                  randomType6 = Math.floor(Math.random() * 30);
                  randomType7 = Math.floor(Math.random() * 30);
                  randomType8 = Math.floor(Math.random() * 30);
                  randomType9 = Math.floor(Math.random() * 30);
                  randomType10 = Math.floor(Math.random() * 30);
                  var img1 = cityArray[randomCity4] + typeArray[randomType1];
                  var img2 = cityArray[randomCity4] + typeArray[randomType2];
                  var img3 = cityArray[randomCity4] + typeArray[randomType3];
                  var img4 = cityArray[randomCity4] + typeArray[randomType4];
                  var img5 = cityArray[randomCity4] + typeArray[randomType5];
                  var img6 = cityArray[randomCity4] + typeArray[randomType6];
                  var img7 = cityArray[randomCity4] + typeArray[randomType7];
                  var img8 = cityArray[randomCity4] + typeArray[randomType8];
                  var img9 = cityArray[randomCity4] + typeArray[randomType9];
                  var img10 = cityArray[randomCity4] + typeArray[randomType10];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 $("#location").empty().append(cityNameArray[randomCity4]);
                  randomCity1 = randomCity4;
                  randomCity2 = randomCity4;
                  randomCity3 = randomCity4;
                  randomCity4 = randomCity4;
                  randomCity5 = randomCity4;
                  randomCity6 = randomCity4;
                  randomCity7 = randomCity4;
                  randomCity8 = randomCity4;
                  randomCity9 = randomCity4;
                  randomCity10 = randomCity4;
            }
            if(selectedCity==5){
                  randomType1 = Math.floor(Math.random() * 30);
                  randomType2 = Math.floor(Math.random() * 30);
                  randomType3 = Math.floor(Math.random() * 30);
                  randomType4 = Math.floor(Math.random() * 30);
                  randomType5 = Math.floor(Math.random() * 30);
                  randomType6 = Math.floor(Math.random() * 30);
                  randomType7 = Math.floor(Math.random() * 30);
                  randomType8 = Math.floor(Math.random() * 30);
                  randomType9 = Math.floor(Math.random() * 30);
                  randomType10 = Math.floor(Math.random() * 30);
                  var img1 = cityArray[randomCity5] + typeArray[randomType1];
                  var img2 = cityArray[randomCity5] + typeArray[randomType2];
                  var img3 = cityArray[randomCity5] + typeArray[randomType3];
                  var img4 = cityArray[randomCity5] + typeArray[randomType4];
                  var img5 = cityArray[randomCity5] + typeArray[randomType5];
                  var img6 = cityArray[randomCity5] + typeArray[randomType6];
                  var img7 = cityArray[randomCity5] + typeArray[randomType7];
                  var img8 = cityArray[randomCity5] + typeArray[randomType8];
                  var img9 = cityArray[randomCity5] + typeArray[randomType9];
                  var img10 = cityArray[randomCity5] + typeArray[randomType10];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 $("#location").empty().append(cityNameArray[randomCity5]);
                  randomCity1 = randomCity5;
                  randomCity2 = randomCity5;
                  randomCity3 = randomCity5;
                  randomCity4 = randomCity5;
                  randomCity5 = randomCity5;
                  randomCity6 = randomCity5;
                  randomCity7 = randomCity5;
                  randomCity8 = randomCity5;
                  randomCity9 = randomCity5;
                  randomCity10 = randomCity5;
            }
            if(selectedCity==6){
                  randomType1 = Math.floor(Math.random() * 30);
                  randomType2 = Math.floor(Math.random() * 30);
                  randomType3 = Math.floor(Math.random() * 30);
                  randomType4 = Math.floor(Math.random() * 30);
                  randomType5 = Math.floor(Math.random() * 30);
                  randomType6 = Math.floor(Math.random() * 30);
                  randomType7 = Math.floor(Math.random() * 30);
                  randomType8 = Math.floor(Math.random() * 30);
                  randomType9 = Math.floor(Math.random() * 30);
                  randomType10 = Math.floor(Math.random() * 30);
                  var img1 = cityArray[randomCity6] + typeArray[randomType1];
                  var img2 = cityArray[randomCity6] + typeArray[randomType2];
                  var img3 = cityArray[randomCity6] + typeArray[randomType3];
                  var img4 = cityArray[randomCity6] + typeArray[randomType4];
                  var img5 = cityArray[randomCity6] + typeArray[randomType5];
                  var img6 = cityArray[randomCity6] + typeArray[randomType6];
                  var img7 = cityArray[randomCity6] + typeArray[randomType7];
                  var img8 = cityArray[randomCity6] + typeArray[randomType8];
                  var img9 = cityArray[randomCity6] + typeArray[randomType9];
                  var img10 = cityArray[randomCity6] + typeArray[randomType10];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 $("#location").empty().append(cityNameArray[randomCity6]);
                  randomCity1 = randomCity6;
                  randomCity2 = randomCity6;
                  randomCity3 = randomCity6;
                  randomCity4 = randomCity6;
                  randomCity5 = randomCity6;
                  randomCity6 = randomCity6;
                  randomCity7 = randomCity6;
                  randomCity8 = randomCity6;
                  randomCity9 = randomCity6;
                  randomCity10 = randomCity6;
            }
            if(selectedCity==7){
                  randomType1 = Math.floor(Math.random() * 30);
                  randomType2 = Math.floor(Math.random() * 30);
                  randomType3 = Math.floor(Math.random() * 30);
                  randomType4 = Math.floor(Math.random() * 30);
                  randomType5 = Math.floor(Math.random() * 30);
                  randomType6 = Math.floor(Math.random() * 30);
                  randomType7 = Math.floor(Math.random() * 30);
                  randomType8 = Math.floor(Math.random() * 30);
                  randomType9 = Math.floor(Math.random() * 30);
                  randomType10 = Math.floor(Math.random() * 30);
                  var img1 = cityArray[randomCity7] + typeArray[randomType1];
                  var img2 = cityArray[randomCity7] + typeArray[randomType2];
                  var img3 = cityArray[randomCity7] + typeArray[randomType3];
                  var img4 = cityArray[randomCity7] + typeArray[randomType4];
                  var img5 = cityArray[randomCity7] + typeArray[randomType5];
                  var img6 = cityArray[randomCity7] + typeArray[randomType6];
                  var img7 = cityArray[randomCity7] + typeArray[randomType7];
                  var img8 = cityArray[randomCity7] + typeArray[randomType8];
                  var img9 = cityArray[randomCity7] + typeArray[randomType9];
                  var img10 = cityArray[randomCity7] + typeArray[randomType10];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 $("#location").empty().append(cityNameArray[randomCity7]);
                  randomCity1 = randomCity7;
                  randomCity2 = randomCity7;
                  randomCity3 = randomCity7;
                  randomCity4 = randomCity7;
                  randomCity5 = randomCity7;
                  randomCity6 = randomCity7;
                  randomCity7 = randomCity7;
                  randomCity8 = randomCity7;
                  randomCity9 = randomCity7;
                  randomCity10 = randomCity7;
            }
            if(selectedCity==8){
                  randomType1 = Math.floor(Math.random() * 30);
                  randomType2 = Math.floor(Math.random() * 30);
                  randomType3 = Math.floor(Math.random() * 30);
                  randomType4 = Math.floor(Math.random() * 30);
                  randomType5 = Math.floor(Math.random() * 30);
                  randomType6 = Math.floor(Math.random() * 30);
                  randomType7 = Math.floor(Math.random() * 30);
                  randomType8 = Math.floor(Math.random() * 30);
                  randomType9 = Math.floor(Math.random() * 30);
                  randomType10 = Math.floor(Math.random() * 30);
                  var img1 = cityArray[randomCity8] + typeArray[randomType1];
                  var img2 = cityArray[randomCity8] + typeArray[randomType2];
                  var img3 = cityArray[randomCity8] + typeArray[randomType3];
                  var img4 = cityArray[randomCity8] + typeArray[randomType4];
                  var img5 = cityArray[randomCity8] + typeArray[randomType5];
                  var img6 = cityArray[randomCity8] + typeArray[randomType6];
                  var img7 = cityArray[randomCity8] + typeArray[randomType7];
                  var img8 = cityArray[randomCity8] + typeArray[randomType8];
                  var img9 = cityArray[randomCity8] + typeArray[randomType9];
                  var img10 = cityArray[randomCity8] + typeArray[randomType10];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 $("#location").empty().append(cityNameArray[randomCity8]);
                  randomCity1 = randomCity8;
                  randomCity2 = randomCity8;
                  randomCity3 = randomCity8;
                  randomCity4 = randomCity8;
                  randomCity5 = randomCity8;
                  randomCity6 = randomCity8;
                  randomCity7 = randomCity8;
                  randomCity8 = randomCity8;
                  randomCity9 = randomCity8;
                  randomCity10 = randomCity8;
            }
            if(selectedCity==9){
                  randomType1 = Math.floor(Math.random() * 30);
                  randomType2 = Math.floor(Math.random() * 30);
                  randomType3 = Math.floor(Math.random() * 30);
                  randomType4 = Math.floor(Math.random() * 30);
                  randomType5 = Math.floor(Math.random() * 30);
                  randomType6 = Math.floor(Math.random() * 30);
                  randomType7 = Math.floor(Math.random() * 30);
                  randomType8 = Math.floor(Math.random() * 30);
                  randomType9 = Math.floor(Math.random() * 30);
                  randomType10 = Math.floor(Math.random() * 30);
                  var img1 = cityArray[randomCity9] + typeArray[randomType1];
                  var img2 = cityArray[randomCity9] + typeArray[randomType2];
                  var img3 = cityArray[randomCity9] + typeArray[randomType3];
                  var img4 = cityArray[randomCity9] + typeArray[randomType4];
                  var img5 = cityArray[randomCity9] + typeArray[randomType5];
                  var img6 = cityArray[randomCity9] + typeArray[randomType6];
                  var img7 = cityArray[randomCity9] + typeArray[randomType7];
                  var img8 = cityArray[randomCity9] + typeArray[randomType8];
                  var img9 = cityArray[randomCity9] + typeArray[randomType9];
                  var img10 = cityArray[randomCity9] + typeArray[randomType10];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 $("#location").empty().append(cityNameArray[randomCity9]);
                  randomCity1 = randomCity9;
                  randomCity2 = randomCity9;
                  randomCity3 = randomCity9;
                  randomCity4 = randomCity9;
                  randomCity5 = randomCity9;
                  randomCity6 = randomCity9;
                  randomCity7 = randomCity9;
                  randomCity8 = randomCity9;
                  randomCity9 = randomCity9;
                  randomCity10 = randomCity9;
            }
            if(selectedCity==10){
                  randomType1 = Math.floor(Math.random() * 30);
                  randomType2 = Math.floor(Math.random() * 30);
                  randomType3 = Math.floor(Math.random() * 30);
                  randomType4 = Math.floor(Math.random() * 30);
                  randomType5 = Math.floor(Math.random() * 30);
                  randomType6 = Math.floor(Math.random() * 30);
                  randomType7 = Math.floor(Math.random() * 30);
                  randomType8 = Math.floor(Math.random() * 30);
                  randomType9 = Math.floor(Math.random() * 30);
                  randomType10 = Math.floor(Math.random() * 30);
                  var img1 = cityArray[randomCity10] + typeArray[randomType1];
                  var img2 = cityArray[randomCity10] + typeArray[randomType2];
                  var img3 = cityArray[randomCity10] + typeArray[randomType3];
                  var img4 = cityArray[randomCity10] + typeArray[randomType4];
                  var img5 = cityArray[randomCity10] + typeArray[randomType5];
                  var img6 = cityArray[randomCity10] + typeArray[randomType6];
                  var img7 = cityArray[randomCity10] + typeArray[randomType7];
                  var img8 = cityArray[randomCity10] + typeArray[randomType8];
                  var img9 = cityArray[randomCity10] + typeArray[randomType9];
                  var img10 = cityArray[randomCity10] + typeArray[randomType10];
                  $("#1").attr("src", img1);
                  $("#2").attr("src", img2);
                  $("#3").attr("src", img3);
                  $("#4").attr("src", img4);
                  $("#5").attr("src", img5);
                  $("#6").attr("src", img6);
                  $("#7").attr("src", img7);
                  $("#8").attr("src", img8);
                  $("#9").attr("src", img9);
                  $("#10").attr("src", img10);                 $("#location").empty().append(cityNameArray[randomCity10]);
                  randomCity1 = randomCity10;
                  randomCity2 = randomCity10;
                  randomCity3 = randomCity10;
                  randomCity4 = randomCity10;
                  randomCity5 = randomCity10;
                  randomCity6 = randomCity10;
                  randomCity7 = randomCity10;
                  randomCity8 = randomCity10;
                  randomCity9 = randomCity10;
                  randomCity10 = randomCity10;
            }
        
           outOfTen++;
            $("#outOfTen").empty().append(outOfTen);
            if(outOfTen>10){
              $("#screenNum").empty().append(bigCount+" OUT OF 10");
              $("#big").attr("src", savedImage1);    
              $("#bigText, #big, #restart, #bigTextVerb1, #endtop, #endbottom, .downloadbits").show();
              $("#location, .wrapper").hide();
              $("#verb1").empty().append(savedVerb1);
              $("#verb2").empty().append(savedVerb2);
              $("#verb3").empty().append(savedVerb3);
              $("#verb4").empty().append(savedVerb4);
              $("#verb5").empty().append(savedVerb5);
              $("#verb6").empty().append(savedVerb6);
              $("#verb7").empty().append(savedVerb7);
              $("#verb8").empty().append(savedVerb8);
              $("#verb9").empty().append(savedVerb9); 
              $("#verb10").empty().append(savedVerb10);   
              $("#place1").empty().append(savedCity1);
              $("#place2").empty().append(savedCity2);
              $("#place3").empty().append(savedCity3);
              $("#place4").empty().append(savedCity4);
              $("#place5").empty().append(savedCity5);
              $("#place6").empty().append(savedCity6);
              $("#place7").empty().append(savedCity7);
              $("#place8").empty().append(savedCity8);
              $("#place9").empty().append(savedCity9); 
              $("#place10").empty().append(savedCity10);
              
              
            }
            $("#1, #2, #3, #4, #5, #6, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
            $("#selected, #type, #city").hide();
        });
    
    
    
    
    //hover functions
        
    $(".left, .right, .middle").hover(function() {
          $("#hover12, #hover3, #hover45, #hover67, #hover8, #hover910").hide();
          $("#location").empty().append("LOCATION");
       });
        
    $("#1").hover(function() {
          $("#hover12").show();
          $("#hover12").attr("src", img1);
          $("#1").attr("style", "outline:1px solid white;");
          $("#hover3, #hover45, #hover67, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity1]);
       },
    function(){
        if(selectedCity==1){
          $("#1").attr("style", "outline:1px solid white;");
        } else {
          $("#1").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#2").hover(function() {
          $("#hover12").show();
          $("#hover12").attr("src", img2);
          $("#2").attr("style", "outline:1px solid white;");
          $("#hover3, #hover45, #hover67, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity2]);
       },
    function(){
          if(selectedCity==2){
          $("#2").attr("style", "outline:1px solid white;");
        } else {
          $("#2").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#3").hover(function() {
          $("#hover3").show();
          $("#hover3").attr("src", img3);
          $("#3").attr("style", "outline:1px solid white;");
          $("#hover12, #hover45, #hover67, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity3]);
       },
    function(){
          if(selectedCity==3){
          $("#3").attr("style", "outline:1px solid white;");
        } else {
          $("#3").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#4").hover(function() {
          $("#hover45").show();
          $("#hover45").attr("src", img4);
          $("#4").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover67, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity4]);
       },
    function(){
          if(selectedCity==4){
          $("#4").attr("style", "outline:1px solid white;");
        } else {
          $("#4").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#5").hover(function() {
          $("#hover45").show();
          $("#hover45").attr("src", img5);
          $("#5").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover67, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity5]);
       },
    function(){
          if(selectedCity==5){
          $("#5").attr("style", "outline:1px solid white;");
        } else {
          $("#5").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#6").hover(function() {
          $("#hover67").show();
          $("#hover67").attr("src", img6);
          $("#6").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover45, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity6]);
       },
    function(){
          if(selectedCity==6){
          $("#6").attr("style", "outline:1px solid white;");
        } else {
          $("#6").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#7").hover(function() {
          $("#hover67").show();
          $("#hover67").attr("src", img7);
          $("#7").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover45, #hover8, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity7]);
       },
    function(){
          if(selectedCity==7){
          $("#7").attr("style", "outline:1px solid white;");
        } else {
          $("#7").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#8").hover(function() {
          $("#hover8").show();
          $("#hover8").attr("src", img8);
          $("#8").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover45, #hover67, #hover910").hide();
          $("#location").empty().append(cityNameArray[randomCity8]);
       },
    function(){
          if(selectedCity==8){
          $("#8").attr("style", "outline:1px solid white;");
        } else {
          $("#8").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#9").hover(function() {
          $("#hover910").show();
          $("#hover910").attr("src", img9);
          $("#9").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover45, #hover67, #hover8").hide();
          $("#location").empty().append(cityNameArray[randomCity9]);
       },
    function(){
          if(selectedCity==9){
          $("#9").attr("style", "outline:1px solid white;");
        } else {
          $("#9").attr("style", "outline:0px solid white;");  
        }
    });
    
    $("#10").hover(function() {
          $("#hover910").show();
          $("#hover910").attr("src", img10);
          $("#10").attr("style", "outline:1px solid white;");
          $("#hover12, #hover3, #hover45, #hover67, #hover8").hide();
          $("#location").empty().append(cityNameArray[randomCity10]);
       },
    function(){
          if(selectedCity==10){
          $("#10").attr("style", "outline:1px solid white;");
        } else {
          $("#10").attr("style", "outline:0px solid white;");  
        }
    });
    
    //selection clicks
        
    $(".left, .right").click(function() {
          $("#selected, #type, #city").hide();
          $("#1, #2, #3, #4, #5, #6, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
       });
    
    $("#1").click(function() {
          $("#clicked").attr("src", img1);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType1]);
          $("#1").attr("style", "outline:1px solid white;");
          selectedCity = 1;
          selectedType = 1;
          $("#1").attr("style", "outline:1px solid white;");
          $("#2, #3, #4, #5, #6, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
          if(outOfTen==1){
                savedVerb1 = verbArray[randomType1];
                savedCity1 = endcityNameArray[randomCity1];
                savedImage1 = cityArray[randomCity1] + typeArray[randomType1];
          }
          if(outOfTen==2){
                savedVerb2 = verbArray[randomType1];
                savedCity2 = endcityNameArray[randomCity1];
                savedImage2 = cityArray[randomCity1] + typeArray[randomType1];
          }
          if(outOfTen==3){
                savedVerb3 = verbArray[randomType1];
                savedCity3 = endcityNameArray[randomCity1];   
                savedImage3 = cityArray[randomCity1] + typeArray[randomType1];
          }
          if(outOfTen==4){
                savedVerb4 = verbArray[randomType1];
                savedCity4 = endcityNameArray[randomCity1]; 
                savedImage4 = cityArray[randomCity1] + typeArray[randomType1];
          }
          if(outOfTen==5){
                savedVerb5 = verbArray[randomType1];
                savedCity5 = endcityNameArray[randomCity1]; 
                savedImage5 = cityArray[randomCity1] + typeArray[randomType1];
          }
          if(outOfTen==6){
                savedVerb6 = verbArray[randomType1];
                savedCity6 = endcityNameArray[randomCity1]; 
                savedImage6 = cityArray[randomCity1] + typeArray[randomType1];
          }if(outOfTen==7){
                savedVerb7 = verbArray[randomType1];
                savedCity7 = endcityNameArray[randomCity1];
                savedImage7 = cityArray[randomCity1] + typeArray[randomType1];
          }
          if(outOfTen==8){
                savedVerb8 = verbArray[randomType1];
                savedCity8 = endcityNameArray[randomCity1]; 
                savedImage8 = cityArray[randomCity1] + typeArray[randomType1];
          }
          if(outOfTen==9){
                savedVerb9 = verbArray[randomType1];
                savedCity9 = endcityNameArray[randomCity1]; 
                savedImage9 = cityArray[randomCity1] + typeArray[randomType1];
          }
          if(outOfTen==10){
                savedVerb10 = verbArray[randomType1];
                savedCity10 = endcityNameArray[randomCity1];   
                savedImage10 = cityArray[randomCity1] + typeArray[randomType1];
              
          }        
       });
    
     $("#2").click(function() {
          $("#clicked").attr("src", img2);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType2]);
          $("#2").attr("style", "outline:1px solid white;");
          selectedCity = 2;
          selectedType = 2;
          $("#2").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #5, #6, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
          if(outOfTen==1){
                savedVerb1 = verbArray[randomType2];
                savedCity1 = endcityNameArray[randomCity2];
                savedImage1 = cityArray[randomCity2] + typeArray[randomType2];
          }
          if(outOfTen==2){
                savedVerb2 = verbArray[randomType2];
                savedCity2 = endcityNameArray[randomCity2];
                savedImage2 = cityArray[randomCity2] + typeArray[randomType2];
          }
          if(outOfTen==3){
                savedVerb3 = verbArray[randomType2];
                savedCity3 = endcityNameArray[randomCity2];   
                savedImage3 = cityArray[randomCity2] + typeArray[randomType2];
          }
          if(outOfTen==4){
                savedVerb4 = verbArray[randomType2];
                savedCity4 = endcityNameArray[randomCity2]; 
                savedImage4 = cityArray[randomCity2] + typeArray[randomType2];
          }
          if(outOfTen==5){
                savedVerb5 = verbArray[randomType2];
                savedCity5 = endcityNameArray[randomCity2]; 
                savedImage5 = cityArray[randomCity2] + typeArray[randomType2];
          }
          if(outOfTen==6){
                savedVerb6 = verbArray[randomType2];
                savedCity6 = endcityNameArray[randomCity2]; 
                savedImage6 = cityArray[randomCity2] + typeArray[randomType2];
          }if(outOfTen==7){
                savedVerb7 = verbArray[randomType2];
                savedCity7 = endcityNameArray[randomCity2];
                savedImage7 = cityArray[randomCity2] + typeArray[randomType2];
          }
          if(outOfTen==8){
                savedVerb8 = verbArray[randomType2];
                savedCity8 = endcityNameArray[randomCity2]; 
                savedImage8 = cityArray[randomCity2] + typeArray[randomType2];
          }
          if(outOfTen==9){
                savedVerb9 = verbArray[randomType2];
                savedCity9 = endcityNameArray[randomCity2]; 
                savedImage9 = cityArray[randomCity2] + typeArray[randomType2];
          }
          if(outOfTen==10){
                savedVerb10 = verbArray[randomType2];
                savedCity10 = endcityNameArray[randomCity2];   
                savedImage10 = cityArray[randomCity2] + typeArray[randomType2];
          }
       });
    
    $("#3").click(function() {
          $("#clicked").attr("src", img3);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType3]);
          selectedCity = 3;
          selectedType = 3;
          $("#3").attr("style", "outline:1px solid white;");
          $("#1, #2, #4, #5, #6, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
          if(outOfTen==1){
                savedVerb1 = verbArray[randomType3];
                savedCity1 = endcityNameArray[randomCity3];
                savedImage1 = cityArray[randomCity3] + typeArray[randomType3];
          }
          if(outOfTen==2){
                savedVerb2 = verbArray[randomType3];
                savedCity2 = endcityNameArray[randomCity3];
                savedImage2 = cityArray[randomCity3] + typeArray[randomType3];
          }
          if(outOfTen==3){
                savedVerb3 = verbArray[randomType3];
                savedCity3 = endcityNameArray[randomCity3];   
                savedImage3 = cityArray[randomCity3] + typeArray[randomType3];
          }
          if(outOfTen==4){
                savedVerb4 = verbArray[randomType3];
                savedCity4 = endcityNameArray[randomCity3]; 
                savedImage4 = cityArray[randomCity3] + typeArray[randomType3];
          }
          if(outOfTen==5){
                savedVerb5 = verbArray[randomType3];
                savedCity5 = endcityNameArray[randomCity3]; 
                savedImage5 = cityArray[randomCity3] + typeArray[randomType3];
          }
          if(outOfTen==6){
                savedVerb6 = verbArray[randomType3];
                savedCity6 = endcityNameArray[randomCity3]; 
                savedImage6 = cityArray[randomCity3] + typeArray[randomType3];
          }if(outOfTen==7){
                savedVerb7 = verbArray[randomType3];
                savedCity7 = endcityNameArray[randomCity3];
                savedImage7 = cityArray[randomCity3] + typeArray[randomType3];
          }
          if(outOfTen==8){
                savedVerb8 = verbArray[randomType3];
                savedCity8 = endcityNameArray[randomCity3]; 
                savedImage8 = cityArray[randomCity3] + typeArray[randomType3];
          }
          if(outOfTen==9){
                savedVerb9 = verbArray[randomType3];
                savedCity9 = endcityNameArray[randomCity3]; 
                savedImage9 = cityArray[randomCity3] + typeArray[randomType3];
          }
          if(outOfTen==10){
                savedVerb10 = verbArray[randomType3];
                savedCity10 = endcityNameArray[randomCity3];   
                savedImage10 = cityArray[randomCity3] + typeArray[randomType3];
          }
       });
    
    $("#4").click(function() {
          $("#clicked").attr("src", img4);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType4]);
          selectedCity = 4;
          selectedType = 4;
          $("#4").attr("style", "outline:1px solid white;");
          $("#1, #3, #2, #5, #6, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
          if(outOfTen==1){
                savedVerb1 = verbArray[randomType4];
                savedCity1 = endcityNameArray[randomCity4];
                savedImage1 = cityArray[randomCity4] + typeArray[randomType4];
          }
          if(outOfTen==2){
                savedVerb2 = verbArray[randomType4];
                savedCity2 = endcityNameArray[randomCity4];
                savedImage2 = cityArray[randomCity4] + typeArray[randomType4];
          }
          if(outOfTen==3){
                savedVerb3 = verbArray[randomType4];
                savedCity3 = endcityNameArray[randomCity4];   
                savedImage3 = cityArray[randomCity4] + typeArray[randomType4];
          }
          if(outOfTen==4){
                savedVerb4 = verbArray[randomType4];
                savedCity4 = endcityNameArray[randomCity4]; 
                savedImage4 = cityArray[randomCity4] + typeArray[randomType4];
          }
          if(outOfTen==5){
                savedVerb5 = verbArray[randomType4];
                savedCity5 = endcityNameArray[randomCity4]; 
                savedImage5 = cityArray[randomCity4] + typeArray[randomType4];
          }
          if(outOfTen==6){
                savedVerb6 = verbArray[randomType4];
                savedCity6 = endcityNameArray[randomCity4]; 
                savedImage6 = cityArray[randomCity4] + typeArray[randomType4];
          }if(outOfTen==7){
                savedVerb7 = verbArray[randomType4];
                savedCity7 = endcityNameArray[randomCity4];
                savedImage7 = cityArray[randomCity4] + typeArray[randomType4];
          }
          if(outOfTen==8){
                savedVerb8 = verbArray[randomType4];
                savedCity8 = endcityNameArray[randomCity4]; 
                savedImage8 = cityArray[randomCity4] + typeArray[randomType4];
          }
          if(outOfTen==9){
                savedVerb9 = verbArray[randomType4];
                savedCity9 = endcityNameArray[randomCity4]; 
                savedImage9 = cityArray[randomCity4] + typeArray[randomType4];
          }
          if(outOfTen==10){
                savedVerb10 = verbArray[randomType4];
                savedCity10 = endcityNameArray[randomCity4];   
                savedImage10 = cityArray[randomCity4] + typeArray[randomType4];
          }
       });
    
    $("#5").click(function() {
          $("#clicked").attr("src", img5);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType5]);
          selectedCity = 5;
          selectedType = 5;
          $("#5").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #2, #6, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
          if(outOfTen==1){
                savedVerb1 = verbArray[randomType5];
                savedCity1 = endcityNameArray[randomCity5];
                savedImage1 = cityArray[randomCity5] + typeArray[randomType5];
          }
          if(outOfTen==2){
                savedVerb2 = verbArray[randomType5];
                savedCity2 = endcityNameArray[randomCity5];
                savedImage2 = cityArray[randomCity5] + typeArray[randomType5];
          }
          if(outOfTen==3){
                savedVerb3 = verbArray[randomType5];
                savedCity3 = endcityNameArray[randomCity5];   
                savedImage3 = cityArray[randomCity5] + typeArray[randomType5];
          }
          if(outOfTen==4){
                savedVerb4 = verbArray[randomType5];
                savedCity4 = endcityNameArray[randomCity5]; 
                savedImage4 = cityArray[randomCity5] + typeArray[randomType5];
          }
          if(outOfTen==5){
                savedVerb5 = verbArray[randomType5];
                savedCity5 = endcityNameArray[randomCity5]; 
                savedImage5 = cityArray[randomCity5] + typeArray[randomType5];
          }
          if(outOfTen==6){
                savedVerb6 = verbArray[randomType5];
                savedCity6 = endcityNameArray[randomCity5]; 
                savedImage6 = cityArray[randomCity5] + typeArray[randomType5];
          }if(outOfTen==7){
                savedVerb7 = verbArray[randomType5];
                savedCity7 = endcityNameArray[randomCity5];
                savedImage7 = cityArray[randomCity5] + typeArray[randomType5];
          }
          if(outOfTen==8){
                savedVerb8 = verbArray[randomType5];
                savedCity8 = endcityNameArray[randomCity5]; 
                savedImage8 = cityArray[randomCity5] + typeArray[randomType5];
          }
          if(outOfTen==9){
                savedVerb9 = verbArray[randomType5];
                savedCity9 = endcityNameArray[randomCity5]; 
                savedImage9 = cityArray[randomCity5] + typeArray[randomType5];
          }
          if(outOfTen==10){
                savedVerb10 = verbArray[randomType5];
                savedCity10 = endcityNameArray[randomCity5];   
                savedImage10 = cityArray[randomCity5] + typeArray[randomType5];
          }
       });
    
    $("#6").click(function() {
          $("#clicked").attr("src", img6);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType6]);
          selectedCity = 6;
          selectedType = 6;
          $("#6").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #2, #5, #7, #8, #9, #10").attr("style", "outline:0px solid white;");
          if(outOfTen==1){
                savedVerb1 = verbArray[randomType6];
                savedCity1 = endcityNameArray[randomCity6];
                savedImage1 = cityArray[randomCity6] + typeArray[randomType6];
          }
          if(outOfTen==2){
                savedVerb2 = verbArray[randomType6];
                savedCity2 = endcityNameArray[randomCity6];
                savedImage2 = cityArray[randomCity6] + typeArray[randomType6];
          }
          if(outOfTen==3){
                savedVerb3 = verbArray[randomType6];
                savedCity3 = endcityNameArray[randomCity6];   
                savedImage3 = cityArray[randomCity6] + typeArray[randomType6];
          }
          if(outOfTen==4){
                savedVerb4 = verbArray[randomType6];
                savedCity4 = endcityNameArray[randomCity6]; 
                savedImage4 = cityArray[randomCity6] + typeArray[randomType6];
          }
          if(outOfTen==5){
                savedVerb5 = verbArray[randomType6];
                savedCity5 = endcityNameArray[randomCity6]; 
                savedImage5 = cityArray[randomCity6] + typeArray[randomType6];
          }
          if(outOfTen==6){
                savedVerb6 = verbArray[randomType6];
                savedCity6 = endcityNameArray[randomCity6]; 
                savedImage6 = cityArray[randomCity6] + typeArray[randomType6];
          }if(outOfTen==7){
                savedVerb7 = verbArray[randomType6];
                savedCity7 = endcityNameArray[randomCity6];
                savedImage7 = cityArray[randomCity6] + typeArray[randomType6];
          }
          if(outOfTen==8){
                savedVerb8 = verbArray[randomType6];
                savedCity8 = endcityNameArray[randomCity6]; 
                savedImage8 = cityArray[randomCity6] + typeArray[randomType6];
          }
          if(outOfTen==9){
                savedVerb9 = verbArray[randomType6];
                savedCity9 = endcityNameArray[randomCity6]; 
                savedImage9 = cityArray[randomCity6] + typeArray[randomType6];
          }
          if(outOfTen==10){
                savedVerb10 = verbArray[randomType6];
                savedCity10 = endcityNameArray[randomCity6];   
                savedImage10 = cityArray[randomCity6] + typeArray[randomType6];
          }
       });
    
    $("#7").click(function() {
          $("#clicked").attr("src", img7);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType7]);
          selectedCity = 7;
          selectedType = 7;
          $("#7").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #2, #6, #5, #8, #9, #10").attr("style", "outline:0px solid white;");
          if(outOfTen==1){
                savedVerb1 = verbArray[randomType7];
                savedCity1 = endcityNameArray[randomCity7];
                savedImage1 = cityArray[randomCity7] + typeArray[randomType7];
          }
          if(outOfTen==2){
                savedVerb2 = verbArray[randomType7];
                savedCity2 = endcityNameArray[randomCity7];
                savedImage2 = cityArray[randomCity7] + typeArray[randomType7];
          }
          if(outOfTen==3){
                savedVerb3 = verbArray[randomType7];
                savedCity3 = endcityNameArray[randomCity7];   
                savedImage3 = cityArray[randomCity7] + typeArray[randomType7];
          }
          if(outOfTen==4){
                savedVerb4 = verbArray[randomType7];
                savedCity4 = endcityNameArray[randomCity7]; 
                savedImage4 = cityArray[randomCity7] + typeArray[randomType7];
          }
          if(outOfTen==5){
                savedVerb5 = verbArray[randomType7];
                savedCity5 = endcityNameArray[randomCity7]; 
                savedImage5 = cityArray[randomCity7] + typeArray[randomType7];
          }
          if(outOfTen==6){
                savedVerb6 = verbArray[randomType7];
                savedCity6 = endcityNameArray[randomCity7]; 
                savedImage6 = cityArray[randomCity7] + typeArray[randomType7];
          }if(outOfTen==7){
                savedVerb7 = verbArray[randomType7];
                savedCity7 = endcityNameArray[randomCity7];
                savedImage7 = cityArray[randomCity7] + typeArray[randomType7];
          }
          if(outOfTen==8){
                savedVerb8 = verbArray[randomType7];
                savedCity8 = endcityNameArray[randomCity7]; 
                savedImage8 = cityArray[randomCity7] + typeArray[randomType7];
          }
          if(outOfTen==9){
                savedVerb9 = verbArray[randomType7];
                savedCity9 = endcityNameArray[randomCity7]; 
                savedImage9 = cityArray[randomCity7] + typeArray[randomType7];
          }
          if(outOfTen==10){
                savedVerb10 = verbArray[randomType7];
                savedCity10 = endcityNameArray[randomCity7];   
                savedImage10 = cityArray[randomCity7] + typeArray[randomType7];
          }
       });
    
    $("#8").click(function() {
          $("#clicked").attr("src", img8);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType8]);
          selectedCity = 8;
          selectedType = 8;
          $("#8").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #2, #6, #7, #5, #9, #10").attr("style", "outline:0px solid white;");
          if(outOfTen==1){
                savedVerb1 = verbArray[randomType8];
                savedCity1 = endcityNameArray[randomCity8];
                savedImage1 = cityArray[randomCity8] + typeArray[randomType8];
          }
          if(outOfTen==2){
                savedVerb2 = verbArray[randomType8];
                savedCity2 = endcityNameArray[randomCity8];
                savedImage2 = cityArray[randomCity8] + typeArray[randomType8];
          }
          if(outOfTen==3){
                savedVerb3 = verbArray[randomType8];
                savedCity3 = endcityNameArray[randomCity8];   
                savedImage3 = cityArray[randomCity8] + typeArray[randomType8];
          }
          if(outOfTen==4){
                savedVerb4 = verbArray[randomType8];
                savedCity4 = endcityNameArray[randomCity8]; 
                savedImage4 = cityArray[randomCity8] + typeArray[randomType8];
          }
          if(outOfTen==5){
                savedVerb5 = verbArray[randomType8];
                savedCity5 = endcityNameArray[randomCity8]; 
                savedImage5 = cityArray[randomCity8] + typeArray[randomType8];
          }
          if(outOfTen==6){
                savedVerb6 = verbArray[randomType8];
                savedCity6 = endcityNameArray[randomCity8]; 
                savedImage6 = cityArray[randomCity8] + typeArray[randomType8];
          }if(outOfTen==7){
                savedVerb7 = verbArray[randomType8];
                savedCity7 = endcityNameArray[randomCity8];
                savedImage7 = cityArray[randomCity8] + typeArray[randomType8];
          }
          if(outOfTen==8){
                savedVerb8 = verbArray[randomType8];
                savedCity8 = endcityNameArray[randomCity8]; 
                savedImage8 = cityArray[randomCity8] + typeArray[randomType8];
          }
          if(outOfTen==9){
                savedVerb9 = verbArray[randomType8];
                savedCity9 = endcityNameArray[randomCity8]; 
                savedImage9 = cityArray[randomCity8] + typeArray[randomType8];
          }
          if(outOfTen==10){
                savedVerb10 = verbArray[randomType8];
                savedCity10 = endcityNameArray[randomCity8];   
                savedImage10 = cityArray[randomCity8] + typeArray[randomType8];
          }
       });
    
    $("#9").click(function() {
          $("#clicked").attr("src", img9);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType9]);
          selectedCity = 9;
          selectedType = 9;
          $("#9").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #2, #6, #7, #8, #5, #10").attr("style", "outline:0px solid white;");
          if(outOfTen==1){
                savedVerb1 = verbArray[randomType9];
                savedCity1 = endcityNameArray[randomCity9];
                savedImage1 = cityArray[randomCity9] + typeArray[randomType9];
          }
          if(outOfTen==2){
                savedVerb2 = verbArray[randomType9];
                savedCity2 = endcityNameArray[randomCity9];
                savedImage2 = cityArray[randomCity9] + typeArray[randomType9];
          }
          if(outOfTen==3){
                savedVerb3 = verbArray[randomType9];
                savedCity3 = endcityNameArray[randomCity9];   
                savedImage3 = cityArray[randomCity9] + typeArray[randomType9];
          }
          if(outOfTen==4){
                savedVerb4 = verbArray[randomType9];
                savedCity4 = endcityNameArray[randomCity9]; 
                savedImage4 = cityArray[randomCity9] + typeArray[randomType9];
          }
          if(outOfTen==5){
                savedVerb5 = verbArray[randomType9];
                savedCity5 = endcityNameArray[randomCity9]; 
                savedImage5 = cityArray[randomCity9] + typeArray[randomType9];
          }
          if(outOfTen==6){
                savedVerb6 = verbArray[randomType9];
                savedCity6 = endcityNameArray[randomCity9]; 
                savedImage6 = cityArray[randomCity9] + typeArray[randomType9];
          }if(outOfTen==7){
                savedVerb7 = verbArray[randomType9];
                savedCity7 = endcityNameArray[randomCity9];
                savedImage7 = cityArray[randomCity9] + typeArray[randomType9];
          }
          if(outOfTen==8){
                savedVerb8 = verbArray[randomType9];
                savedCity8 = endcityNameArray[randomCity9]; 
                savedImage8 = cityArray[randomCity9] + typeArray[randomType9];
          }
          if(outOfTen==9){
                savedVerb9 = verbArray[randomType9];
                savedCity9 = endcityNameArray[randomCity9]; 
                savedImage9 = cityArray[randomCity9] + typeArray[randomType9];
          }
          if(outOfTen==10){
                savedVerb10 = verbArray[randomType9];
                savedCity10 = endcityNameArray[randomCity9];   
                savedImage10 = cityArray[randomCity9] + typeArray[randomType9];
          }
       });
    
    $("#10").click(function() {
          $("#clicked").attr("src", img10);
          $("#selected, #type, #city").show();
          $("#type").empty().append(typeButtonArray[randomType10]);
          selectedCity = 10;
          selectedType = 10;
          $("#10").attr("style", "outline:1px solid white;");
          $("#1, #3, #4, #2, #6, #7, #8, #9, #5").attr("style", "outline:0px solid white;");
          if(outOfTen==1){
                savedVerb1 = verbArray[randomType10];
                savedCity1 = endcityNameArray[randomCity10];
                savedImage1 = cityArray[randomCity10] + typeArray[randomType10];
          }
          if(outOfTen==2){
                savedVerb2 = verbArray[randomType10];
                savedCity2 = endcityNameArray[randomCity10];
                savedImage2 = cityArray[randomCity10] + typeArray[randomType10];
          }
          if(outOfTen==3){
                savedVerb3 = verbArray[randomType10];
                savedCity3 = endcityNameArray[randomCity10];   
                savedImage3 = cityArray[randomCity10] + typeArray[randomType10];
          }
          if(outOfTen==4){
                savedVerb4 = verbArray[randomType10];
                savedCity4 = endcityNameArray[randomCity10]; 
                savedImage4 = cityArray[randomCity10] + typeArray[randomType10];
          }
          if(outOfTen==5){
                savedVerb5 = verbArray[randomType10];
                savedCity5 = endcityNameArray[randomCity10]; 
                savedImage5 = cityArray[randomCity10] + typeArray[randomType10];
          }
          if(outOfTen==6){
                savedVerb6 = verbArray[randomType10];
                savedCity6 = endcityNameArray[randomCity10]; 
                savedImage6 = cityArray[randomCity10] + typeArray[randomType10];
          }if(outOfTen==7){
                savedVerb7 = verbArray[randomType10];
                savedCity7 = endcityNameArray[randomCity10];
                savedImage7 = cityArray[randomCity10] + typeArray[randomType10];
          }
          if(outOfTen==8){
                savedVerb8 = verbArray[randomType10];
                savedCity8 = endcityNameArray[randomCity10]; 
                savedImage8 = cityArray[randomCity10] + typeArray[randomType10];
          }
          if(outOfTen==9){
                savedVerb9 = verbArray[randomType10];
                savedCity9 = endcityNameArray[randomCity10]; 
                savedImage9 = cityArray[randomCity10] + typeArray[randomType10];
          }
          if(outOfTen==10){
                savedVerb10 = verbArray[randomType10];
                savedCity10 = endcityNameArray[randomCity10];   
                savedImage10 = cityArray[randomCity10] + typeArray[randomType10];
          }
       });
        
    
});

//hover location based on mouseMove

$(document).mousemove(function(e){

    var one = 325;
    var two = 150;
    var three = 25;
    
    $("#hover12").css({left:e.pageX-one, top:e.pageY-one});
    $("#hover3").css({left:e.pageX-two, top:e.pageY-one});
    $("#hover45").css({left:e.pageX+three, top:e.pageY-one});
    $("#hover67").css({left:e.pageX-one, top:e.pageY+three});
    $("#hover8").css({left:e.pageX-two, top:e.pageY+three});
    $("#hover910").css({left:e.pageX+three, top:e.pageY+three});
    
        

});