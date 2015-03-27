/**
 * Created by BA.Ayers on 3/25/2015.
 */

var holes = {
    a: 1,b: 1,d: 1,e: 1,g: 1,o: 1,p: 1,q: 1 // lower case
    ,A: 1,B: 2,D: 1,O: 1,P: 1,Q: 1,R: 1 // upper case
    ,0: 1,4: 1,6: 1,8: 2,9: 1 // numbers
};

// string we are checking for holes  var str = "";

function numHoles(str) {
    var total = 0; // initialize return value to 0
    var chars = str.split(""); //turn string into array

    chars.forEach(function(letter) { //take a letter from string to compare
        total += holes[letter]|| 0;
    });

    return total;
}


