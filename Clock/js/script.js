var hr = document.getElementById("hr");
var mn = document.getElementById("mn");
var sec = document.getElementById("sec");

setInterval(function() {

    var date = new Date();
    var hour = date.getHours() % 12;
    var minute = date.getMinutes();
    var second = date.getSeconds();

    hr.style.transform = `rotateZ(${(hour/12)*360}deg)`;
    mn.style.transform = `rotateZ(${(minute/60)*360}deg)`;
    sec.style.transform = `rotateZ(${(second/60)*360}deg)`;

}, 10);