var itemList = [];
var knife = 0;
var rope = 0;
var hammer = 0;
var nail = 0;
var kirk = 0;
var water = 0;

for (i=0;i<3;i++){
    switch (i) {
        case 0: 
            var choice = prompt("It's a big evil rock, what did u take with U to climb it? You gonna take only 3 items with you, choose wisely!").toLowerCase();
            break;
        case 1:
            var choice = prompt("first item was taken, what is second?").toLowerCase();
            break;
        case 2:
            var choice = prompt("And the third one?").toLowerCase();
            break;
}  
    
    switch (choice) {
        case 'knife':
            confirm("it was not neccessary, unless you gonna cut something, but it's still ok");
            knife = 1;
            break;
        case 'rope':
            confirm("wise choice, you'll need it!");
            rope = 1;
            break;
        case 'hammer':
            confirm("nice choise, have you got the rope and nails with you?");
            hammer = 1;
            break;
        case 'kirk':
            confirm("U can use it, but no neccesery!");
            kirk = 1;
            break;
        case 'water':
            confirm("This is essential element of your success!");
            water = 1;
            break;
        case 'nail':
            confirm("it's important thing, but only if you gotta hammer and rope!");
            nail = 1;;
            break;
        default: 
            confirm("I do not understand Your choice, try it again!");
            wrong = 0; 
            i--;
        }
        itemList.push(choice);
}
confirm(itemList);


 var success = function() {    
            if (rope && hammer && nail) {
                confirm("it's pity - you did it to the top, but gonna die from the dehydration ! :( ");
            } else if (water && knife) {
                confirm("Nice work, you'd make it!!! But U can do it without knife also!");
            } else if (kirk && water) {
                confirm("Nice work, you'd make it!!! Kirk was useless, anyway :) ");
            } else if (water) {
                confirm("You'd make it PERFECTLY!");
                }
            else if (nail || hammer && !rope){
                confirm("You forgot the rope!");
                }
            else if (nail || hammer || rope){
                confirm("Without water you gonna die!");
            } else {
                confirm("You accidentally fall!");
                }
    };

success();
