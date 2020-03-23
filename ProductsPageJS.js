/*nav bar fade effect & hide effect*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function(){fadeFunc()};
function fadeFunc(){
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    document.getElementById("navBar").className = "test1";
  }else{
    document.getElementById("navBar").className = "test";
  }
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBar").style.visibility = "visible";
    document.getElementById("navBar").style.opacity = "1";
  } else {
    document.getElementById("navBar").style.visibility = "hidden";
    document.getElementById("navBar").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
}



