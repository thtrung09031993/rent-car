function addBtnCssOnclick(container, elm) {
    var btnContainer = document.getElementById(container);
    var btns = document.getElementsByClassName(elm);
    for (var i = 0;i < btns.length; i++) {
        btns[i].addEventListener("click",function () {
          var curr = document.getElementsByClassName(elm + " active");
          curr[0].className = curr[0].className.replace(" active","");
          this.className = elm + " active";
        });
    }
}

function confirmCancel(){
    if (window.confirm("Do you want to cancel this order? We're sorry for this inconvenience...")) {
        return true;
    }
    return false;
}
