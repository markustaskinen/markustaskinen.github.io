var dat = null;
var slide = 0;
var play = true;
var slides = null;
var interval = null;


window.onload = function() {

$.getJSON( "https://taskinm2-17232.firebaseio.com/.json" , function (data) {
    dat = data;
    slides = dat.news.length;
    showSlide(slide);
    $("#playicon").hide();
    
   if (play) {
        playSlides();
    }
    
    });

}

function showSlide(n) {
    $("#fade").hide();
    
    $("#topic").html(dat.news[n].header);
    $("#date").html(dat.news[n].date);
    $("#content").html(dat.news[n].content);
    
    $("#fade").fadeIn(1000);
    
    slide++;
    if (slide === slides) { slide = 0 }
}

function nextSlide() {
    if (slide < slides - 1) {
        slide++;
        forceSlide(slide);
    }
    else {
        slide = 0;
        forceSlide(slide);
        console.log(slide)
        console.log("elsessä")
        
    }
}

function prevSlide() {
    if (slide === 0) {
        slide = (slides - 1);
        forceSlide(slide)
    }
    else {
        slide--;
        forceSlide(slide);
    }
}

function forceSlide(n) {
    $("#fade").hide();
    
    $("#topic").html(dat.news[n].header);
    $("#date").html(dat.news[n].date);
    $("#content").html(dat.news[n].content);
    
    $("#fade").fadeIn(1000);
}

function playSlides() {
    interval = window.setInterval(function() {showSlide(slide)}, 4000);
}

function togglePlay() {
    if (play) {
        window.clearInterval(interval);
        play = false;
        $("#playicon").show();
        $("#pauseicon").hide();
    }
    else {
        playSlides();
        play = true;
        $("#playicon").hide();
        $("#pauseicon").show();
    }
}