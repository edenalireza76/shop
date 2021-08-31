var slideIndex = 1;
var items;
var time;
slideshow(slideIndex);


function slideshow(n) {
    console.log('slideIndex =>' + slideIndex);
    console.log('n =>' + n);
    var slides = document.getElementsByClassName('slideshow__slide');
    // console.log(slides);
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    console.log('slideIndex =>' + slideIndex);

    for (i = 0; i < slides.length; i++) {
        console.log(i);
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = "block";
    progress(slideIndex - 1);
}

function move(a) {
    clearInterval(time);
    items[slideIndex - 1].style.width = 0;
    slideIndex = slideIndex + a;
    slideshow(slideIndex);
}

function progress(slideId) {
    items = document.getElementsByClassName('slideshow__item-inner');
    var width = 0;
    time = setInterval(timer, 10);

    function timer() {
        if (width >= 100) {
            clearInterval(time);
            items[slideId].style.width = 0;
            slideIndex++;
            slideshow(slideIndex);
        } else {
            width++;
            items[slideId].style.width = width + "%";
        }
    }
}