document.addEventListener("DOMContentLoaded", () => {

    jQuery(function ($) {
        var launch = new Date(2020, 5, 1, 12, 00, 00);
        var days = $("#days");
        var hours = $("#hours");
        var minutes = $("#minutes");
        var seconds = $("#seconds");
        setDate();

        function setDate() {
            var now = new Date();
            var s = (launch.getTime() - now.getTime()) / 1000;


            var d = Math.floor(s / 86400);
            days.html("<strong>" + d + "</strong></br>J");
            s -= d * 86400;

            var h = Math.floor(s / 3600);
            hours.html("<strong>" + h + "</strong></br>H");
            s -= h * 3600;

            var m = Math.floor(s / 60);
            minutes.html("<strong>" + m + "</strong></br>M");
            s -= m * 60;

            var s = Math.floor(s);
            seconds.html("<strong>" + s + "</strong></br>S");
            setTimeout(setDate);
        }
    });
})