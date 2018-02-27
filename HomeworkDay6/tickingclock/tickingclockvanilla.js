function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var AMPM = (h >= 12) ? " PM" : " AM";
    if (h > 12) h = h - 12;
    if (h < 1) h = h + 12;
    document.getElementById('clock').innerHTML = "The time is: " + h + ":" + m + ":" + s + AMPM;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}