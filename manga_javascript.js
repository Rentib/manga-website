/*----------------SORTOWANIE LISTY----------------------------------------------------------------------*/
window.onload = function sortList() {
  var list, i, switching, b, shouldSwitch, k;
  list = document.getElementById("lista");
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");
    k = list.getElementsByClassName("tytul");
    for (i = 0; i < (k.length - 1); i++) {
      shouldSwitch = false;
      var s1 = k[i].innerHTML.toLowerCase();
      var s2 = k[i + 1].innerHTML.toLowerCase()
      s1 = s1.replace(/\s/g, '');
      s2 = s2.replace(/\s/g, '');
      if (s1 > s2) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}
/*----------------SCROLL FUNCTION-----------------------------------------------------------------------*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    scrollFunctionMenu();
}
/*----------------MENU HEIGHT CHANGE--------------------------------------------------------------------*/
function scrollFunctionMenu() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 50) {
        document.getElementById("siteHeader").style.height = "5%";
    } else {
        document.getElementById("siteHeader").style.height = "7%";
    }
}
/*----------------PRZYCISK NA GÓRĘ----------------------------------------------------------------------*/
var btn = document.querySelector(".btn");

const navSlide = () => {
  var k = 0;
  const btn = document.querySelector('.topButton');
  btn.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
  }));
  window.addEventListener('scroll', ()=>{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      if(k == 0){
          btn.classList.toggle('topButton-active');
          k = 1;
      }
      }
      else{
        if(k == 1){
          btn.classList.toggle('topButton-active');
          k = 0;
        }
      }
  });
}
navSlide();

/*------------------------------------------------------------------------------------------------------*/
