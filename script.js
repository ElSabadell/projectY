window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "2px 10px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("logo").style.paddingLeft = "30px";
  } else {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("logo").style.paddingLeft = "100px";
    document.getElementById("navigation").style.padding = "100px 100px 100px 100px";


  }
}

function showNav() {
  document.getElementsByClassName("navigation")[0].classList.toggle("active");
}

//Hide Navbar after <a> click
function hideNav() {
  document.getElementsByClassName("navigation")[0].classList.toggle("active");
}


$(window).scroll(function () {
  $('#navigation').toggleClass('scrolled', $(this).scrollTop() > 80);
});

$(window).scroll(function () {
  $('#btn-up').toggleClass('scrolled', $(this).scrollTop() > 80);
});

$(window).scroll(function () {
  $('.container-home').toggleClass('scrolled', $(this).scrollTop() > 40);
});

$(window).scroll(function () {
  $('.btn-src').toggleClass('scrolled', $(this).scrollTop() > 80);
});





