const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-collapse");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-basic");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
