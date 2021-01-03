checkCookie();

var popupBg = document.querySelector('.popup');
var setCookieBtn = document.querySelector('.popup_success');
var popupCloseBtn = document.querySelector('.popup_danger');

popupBg.addEventListener('click', function (e) {
    if (e.target.matches('.popup')) closePopup();
});
popupCloseBtn.addEventListener('click', closePopup);
setCookieBtn.addEventListener('click', setCookie);

function showPopup() {
    document.querySelector('.popup').classList.add('popup-show');
}

function closePopup() {
    document.querySelector('.popup').classList.add('popup-close');
}

function setCookie() {
    var d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();

    document.cookie = "age" + "=" + "fullage" + ";" + expires + ";path=/";
    closePopup();
}

function getCookie() {
    var name = "age=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var age = getCookie();
    if (age == "") {
        showPopup();
    }
}

//navbar
function showNav() {
    document.querySelector('.navigation_nav').classList.toggle('show-nav');
    document.querySelector('.nav_icon').classList.toggle('close_icon');
    document.querySelector('.backdrop').classList.toggle('backdrop-show');
}
function closeNav() {
    document.querySelector('.navigation_nav').classList.remove('show-nav');
    document.querySelector('.nav_icon').classList.remove('close_icon');
    document.querySelector('.backdrop').classList.remove('backdrop-show');
}
document.querySelector('.nav_icon').addEventListener('click', showNav)
document.querySelector('.backdrop').addEventListener('click', closeNav)




