function checkConfirmPassword() {
    var pass = document.getElementById("regPassword"), confirmPassword = document.getElementById("regConfirmPass");
    if (pass.value !== confirmPassword.value) {
        document.getElementById("regConfirmPass").setCustomValidity("Confirm password does not match");
        return false;
    }
    else {
        document.getElementById("regConfirmPass").setCustomValidity("");
        return true;
    }
}

//    document.getElementById("regEmail").value = localStorage.getItem("storeEmail");
//    document.getElementById("regName").value = localStorage.getItem("storeName");
//    document.getElementById("regPassword").value = localStorage.getItem("storePassword");
//    document.getElementById("regConfirmPass").value = localStorage.getItem("storeConfirmPass");
function checkInput() {
    if (document.getElementById("regEmail").value && document.getElementById("regName").value && document.getElementById("regPassword").value && checkConfirmPassword) {
        document.getElementById("signUpBtn").disabled = false;
    }
    else {
        document.getElementById("signUpBtn").disabled = true;
    }
}

// window.fbAsyncInit = function () {
//     FB.init({
//         appId: '{your-app-id}',
//         cookie: true,
//         xfbml: true,
//         version: '{latest-api-version}'
//     });
//
//     FB.AppEvents.logPageView();
//
// };
//
// (function (d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) {
//         return;
//     }
//     js = d.createElement(s);
//     js.id = id;
//     js.src = "https://connect.facebook.net/en_US/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));


//    function saveInputRegister() {
//        var email = document.getElementById("regEmail").value,
//        name = document.getElementById("regName").value,
//        pass = document.getElementById("regPassword").value,
//        confirmPass = document.getElementById("regConfirmPass").value;
//        localStorage.setItem("storeEmail", email);
//        localStorage.setItem("storeName", name);
//        localStorage.setItem("storePassword", pass);
//        localStorage.setItem("storeConfirmPass", confirmPass);
//        return false;
//