function timeInWords(h, m) {
    var num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    var tens = "twenty thirty fourty fifty".split(" ");
    function numInWords(n) {
        if (n < 20) {
            return num[n];
        }
        var digit = n % 10;
        if (n <= 59) {
            return tens[Math.floor(n / 10) - 2] + (digit ? " " + num[digit] : "");
        }
    }
    var hour, minutes, time;
    if (m > 30) {
        hour = numInWords(h + 1);
    } else {
        hour = numInWords(h);
    }
    if (m != 0 && m != 15 && m != 30 && m != 45) {
        if (m < 30) {
            minutes = numInWords(m);            
        } else {
            minutes = numInWords(60 - m);
        }
    }
    if (m == 0) {
        minutes = "o' clock";
        time = hour + " " + minutes;
    } else if (m == 15) {
        minutes = "quarter past";
        time = minutes + " " + hour;
    }
    else if (m == 30) {
        minutes = "half past";
        time = minutes + " " + hour;
    } else if (m == 45) {
        minutes = "quarter to";
        time = minutes + " " + hour;
    } else if (m < 30) {
        if (h == 1) {
            minutes += " minute past";            
        } else {
            minutes += " minutes past";
        }
        time = minutes + " " + hour;
    } else if (m > 30) {
        if (h == 1) {
            minutes += " minute to";
        } else {
            minutes += " minutes to";
        }
        time = minutes + " " + hour;
    }
    return time;
}