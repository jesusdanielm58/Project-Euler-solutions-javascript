
function pythagoreanTriplets(top){
    var a=0; b=0; c=0;
    var m = 2;
    while (c< top){
        for (var n = 1; n < m; n++)
        {
            a = m*m - n*n;
            b = 2*m*n;
            c = m*m + n*n;
            if (c > top){break}
                if (c+a+b===1000){
            console.log(a+" "+b+" "+c)
        }
    }
        m++;
    }
}
pythagoreanTriplets(1000)
