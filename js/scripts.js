function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDate();
    let month = today.getMonth() + 1;
    month = checkTime(month);
    document.getElementById('time').innerHTML = checkTime(d) + "." + month + "." + today.getFullYear() + " " + checkTime(h) + ":" + checkTime(m) + ":" + checkTime(s);
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

//cookie stuff
function acceptCookies() {
    document.getElementById('footer-cookie').style.display = 'none';
    setCookie("ac", new Date().toLocaleDateString("de-DE"));
}

function setCookie(name, value, expireDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length >= 2)
        return parts.pop().split(";").shift();
}