const $bottNext = document.querySelector('.arrow.next');
const $bottPrev = document.querySelector('.arrow.prev');
const $sliderRow = document.querySelector('.slider-row');
const $slide = document.querySelectorAll('.slide');
const $navButton = document.querySelectorAll('.but');
let distance = 0;
let currentSlide = 0;
let elements = $slide.length;
let widthSlide = document.querySelector('.slider-container').offsetWidth;

$sliderRow.style.width = (widthSlide * elements + 100) + 'px';

$slide.forEach ( function (slide) {
    slide.style.width = widthSlide + 'px';
});
 console.log($navButton);

 function move (x) {
distance = x * widthSlide * (-1);
$sliderRow.style.transform = 'translateX(' + distance + 'px)';
};

$bottNext.addEventListener('click', function(){
    currentSlide++;
    if (currentSlide > (elements - 1) ) {currentSlide = 0}
    move (currentSlide);
});

$bottPrev.addEventListener('click', function(){
    currentSlide--;
    if (currentSlide < 0 ) {currentSlide = (elements - 1)}
    move (currentSlide);
});

$navButton.forEach (function (el) {
    el.addEventListener('click', function () {
        numPic = this.getAttribute('data-position');
        move(numPic-1);
    });
});
