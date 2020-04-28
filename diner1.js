const food1 = 1;
const food2 = 2;
const food3 = 3;

const food4 = 4;
const food5 = 5;
const food6 = 6;

var entree;
var side;

const entreeOrder = false;


while (entreeOrder ==  false) {
    entree = prompt("Please select an entree! (1-3)");
    if (entree < 1 || entree > 3) {
        alert("Please choose an entree on the menu 1-3...");
    } else {
        alert("Great choice!")
        
    } if (entree == 1 || entree == 2 || entree == 3 ) {
        
        side = prompt("Please select a side! (4-6)");

            if (side < 4 || side > 6) {
                alert("Please choose an side on the menu 4-6...");
            } else {
                alert("Great choice!")
            } if (side == 4 || side == 5 || side == 6) {
                order = Number(entree) + Number(side);
                alert("Your total is " + order + ". Thank you, please come again.");
                entreeOrder = true;
            } else {
                alert("I don't get it... try again.");
        }
    }
}



