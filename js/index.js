const $bottNext = document.querySelector('.arrow.next');
const $bottPrev = document.querySelector('.arrow.prev');
const $sliderRow = document.querySelector('.slider-row');
let distance = 0;
let currentSlide = 0;
let elements = document.querySelectorAll('.slide').length;
 console.log(elements);

 function move (x) {
distance = x * 800 * (-1);
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

