function bonAppetit(bill, k, b) {
    var bill_amt = 0;
    for (var i = 0; i < bill.length; i++){
        if (i != k) {
            bill_amt += bill[i];
        }
    }
    if (bill_amt / 2 == b) {
        console.log("Bon Appetit");
    } else {
        console.log(b - bill_amt/2);
    }
}