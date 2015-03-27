/**
 * Created by BA.Ayers on 3/24/2015.
 */
/*
 Capitalizes first letter of a string
 'str': String
 returns 'String'
 */
function capitalizeFirstLetter(str){
    var firstLetter = str.charAt(0);
    var otherChars = str.substr(1);

    return firstLetter.toUpperCase + otherChars;
}

capitalizeFirstLetter("colorado");
