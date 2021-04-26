setTimeout(myFunction, 2800);
setTimeout(fun2, 1800);
function myFunction(){
    var myobj = document.getElementById("rmv");
    myobj.remove();
}
function fun2(){
    var x = document.getElementById("bg1");
    x.style.filter="blur(9px)";
}

window.onscroll = function() {scrollFunction()};
var x = document.getElementsByClassName("nav-item");
var full = document.getElementById("fullnav");
var i;

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      for (i = 0; i < x.length; i++) {
        x[i].style.padding = "10px 23px";
      }
      full.style.background = "rgba(0,0,0,0.9)";
    } else {
      for (i = 0; i < x.length; i++) {
        x[i].style.padding = "50px 23px 5px";
      }
      full.style.background = "rgba(0,0,0,0)";
    }
}
/* function toggleDropdown (e) {
  const _d = $(e.target).closest('.dropdown'),
    _m = $('.dropdown-menu', _d);
  setTimeout(function(){
    const shouldOpen = e.type !== 'click' && _d.is(':hover');
    _m.toggleClass('show', shouldOpen);
    _d.toggleClass('show', shouldOpen);
    $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
  }, e.type === 'mouseleave' ? 300 : 0);
}

$('body')
  .on('mouseenter mouseleave','.dropdown',toggleDropdown)
  .on('click', '.dropdown-menu a', toggleDropdown); */