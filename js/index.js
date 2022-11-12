const $bottNext = document.querySelector('.arrow.next');
const $bottPrev = document.querySelector('.arrow.prev');
const $sliderRow = document.querySelector('.slider-row');
let distance = 0;
let currentSlide = 0;
 console.log($bottNext);

 function move (x) {
distance = x * 800 * (-1);
$sliderRow.style.transform = 'translateX(' + distance + 'px)';
};

$bottNext.addEventListener('click', function(){
    currentSlide++;
    move (currentSlide);
});

$bottPrev.addEventListener('click', function(){
    currentSlide--;
    move (currentSlide);
});