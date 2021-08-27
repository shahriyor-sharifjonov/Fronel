// scroll enable || disable
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

// Header Menu
const headerButton: HTMLButtonElement =
  document.querySelector(".header__button");
const headerMenu: HTMLUListElement = document.querySelector(".header__list");
let menuOpened = false;
const menuToggle = () => {
  checkMenuClass()
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

function checkMenuClass(){
  if(menuOpened == false){
    disableScroll()
  }else{
    enableScroll()
  }
}

headerButton.onclick = menuToggle;

window.onclick = (e: MouseEvent) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

// Slider
$('.slider_1 ').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1,
      }
    },
  ]
});

//form Dropwown
$(function(){

  $(".dropdown-menu li a").click(function(){

    $(".btn:first-child").text($(this).text());
    $(".btn:first-child").val($(this).text());

 });

});

if(document.getElementsByClassName("register__top-btn")){
  let btn = document.getElementsByClassName("register__top-btn");
  function register(el){
    let login = document.getElementsByClassName('register__login');
    let register = document.getElementsByClassName('register__registration');
    for(let i = 0; i < btn.length; i++){
      btn[i].classList.remove('active');
    }
    el.classList.add('active');
    register[0].classList.add('active')
    login[0].classList.remove('active')
  }
  function login(el){
    let login = document.getElementsByClassName('register__login');
    let register = document.getElementsByClassName('register__registration');
    for(let i = 0; i < btn.length; i++){
      btn[i].classList.remove('active');
    }
    el.classList.add('active');
    login[0].classList.add('active')
    register[0].classList.remove('active')
  }
}