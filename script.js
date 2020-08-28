window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("logo").style.paddingLeft = "30px";
    document.getElementById("links").style.paddingRight = "0px";

  } else {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("links").style.paddingRight = "100px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("logo").style.paddingLeft = "100px";

  }
}
