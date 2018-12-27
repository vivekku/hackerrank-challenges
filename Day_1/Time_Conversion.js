function timeConversion(s) {
    /*
     * Write your code here.
     */
    var time = s.split(":");
    var h = time[0];
    var zone = s.slice(8);

    if (zone == "PM" && h != "12") {
            h = parseInt(h) + 12;
    }
    if (zone == "AM" && h == "12") {
            h = "00";
    }
    return (h + ":" + time[1] + ":" + time[2].slice(0,2));
}