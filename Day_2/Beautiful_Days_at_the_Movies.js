function beautifulDays(i, j, k) {
    var countBeautifulDays = 0, rev_num, temp;

    for (var num = i; num <= j; num++) {
        temp = num, rev_num = 0;
        while(temp > 0){
            rev_num = rev_num * 10 + temp % 10;
            temp = Math.trunc(temp / 10);
        }
        if (Math.abs(num - rev_num) % k == 0) {
            countBeautifulDays++;
        }
    }
    return countBeautifulDays;
}