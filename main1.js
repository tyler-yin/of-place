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


    //arrays of text and images
    
    var cityHome = ["baghdad.gif", "bangkok.gif", "berlin.gif", "busan.gif", "capetown.gif", "istanbul.gif", "london.gif", "losAngeles.gif", "madrid.gif", "mexicoCity.gif", "mumbai.gif", "nairobi.gif", "newYork.gif", "pyongyang.gif", "saintPetersburg.gif", "saopaulo.gif", "shenzhen.gif", "singapore.gif", "tianjin.gif", "yokohama.gif"];


    var randomCity = Math.floor(Math.random() * 20);

    function randomWholeNum() {
        return Math.random();
    }
    var imageStringBeginning = "images/gifs/"
    var img1 = imageStringBeginning + cityHome[randomCity];
    
    $("#homeIMG").attr("src", img1);
    
                  
});

