// Header Menu
const headerButton: HTMLButtonElement =
  document.querySelector(".header__button");
const headerMenu: HTMLUListElement = document.querySelector(".header__list");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

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