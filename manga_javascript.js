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
    scrollFunctionButton();
    scrollFunctionMenu();
}
/*----------------PRZYCISK NA GÓRĘ----------------------------------------------------------------------*/
function scrollFunctionButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topButton").style.display = "flex";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
}
const btn = document.getElementById('topButton');
btn.addEventListener('click', () => window.scrollTo({
  top: 0,
  behavior: 'smooth',
}));
/*----------------MENU HEIGHT CHANGE--------------------------------------------------------------------*/
function scrollFunctionMenu() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 50) {
        document.getElementById("siteHeader").style.height = "5%";
    } else {
        document.getElementById("siteHeader").style.height = "7%";
    }
}
/*------------------------------------------------------------------------------------------------------*/
