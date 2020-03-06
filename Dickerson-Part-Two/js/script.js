var vacaType = prompt("What kind of vacation are you thinking about planning; musical, tropical, or adventurous?");
var groupSize = prompt("How many people will be joining you on your trip?");

var result = "Since you decided on taking a " + vacaType + " vacation of " + groupSize + ", I recommend ";

if (vacaType === "musical") {
    result = result + " a trip to New Orleans to explore a variety of musical genius. ";
}

if (vacaType === "tropical") {
    result = result + " a beach vacation in Mexico. ";
}

if (vacaType === "adventurous") {
    result = result + "Whitewater Rafting the Grand Canyon!";
}

if (groupSize <= 3) {
    result = result + "First Class travel rates are extremely low around this time of year, have fun!";
}
else if (parseInt(groupSize) >= 3 && parseInt(groupSize) <= 5) {
    result = result + "Helicopter travel rates are extremely low around this time of year, enoy your trip!";
}
else {
    result = result + "Charter flight travel rates are extremely low around this time of year, have a safe trip!";
}
console.log(result);
