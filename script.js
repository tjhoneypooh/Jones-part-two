
var ans1 = prompt ("How many inches of rain fell?");

var asterisk = ("*");

console.log (asterisk.repeat(ans1));

if (ans1 > 20) {

    ans1 = (50 *.9);
}
else if (ans1 < 10) {

    ans1 = (50 *.8);
}

var ans2 = prompt ("Did you use fertilizer? Enter yes or no.");

if (ans2 == "no") {

    console.log("The yield should be" + " "+ ans1 + " bushels per acre.");

} else if (ans2 == "yes") {

    var ans3 = prompt ("Did you use premium or regular fertilizer? Enter premium or regular.");

}

if (ans3 == "premium") {

    ans1 = (ans1 * 1.15);

    console.log("The yield should be" + " "+ ans1.toFixed(2) + " bushels per acre.");

} else if  (ans3 == "regular") {

    ans1 = (ans1 * 1.1);

    console.log("The yield should be" + " "+ ans1.toFixed(2) + " bushels per acre.");

}

    

