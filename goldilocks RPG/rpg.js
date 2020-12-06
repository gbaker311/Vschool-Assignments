const ask = require('readline-sync');

function playGame() {
    var enterCabin = confirm("You come across a strange looking cabin in the woods. Do you want to go in?")

    if (enterCabin == true) {
        let porridgeChoice = prompt("You walk into the cabin and see a lovely kitchen. On the table there are three bowls of porridge. Do you try 1, 2, or 3");

        if (porridgeChoice == "1") {
            console.log("This porridge is way too damn hot! The end");
        }   else if (porridgeChoice == "2") {
            console.log("The porridge is to cold! The end")
        }   else {
            console.log("The porridge is just right!")

            //if you eat the 'just right' porridge we want to go sit in some chairs
            let chairChoice = prompt("You walk into the living room and see three chairs. A big one, medium one and small one. Which one do you choose?");

            if (chairChoice == "big") {
                console.log("The chair is way too big! The end");
            } else if (chairChoice == "medium") {
                alert("The chair is way too small! The beginning");
            }   else {
                alert("The chair is just right....");
                let bedChoice = prompt("You walk into the next room over and see three beds, a big one, a medium one and a small one. Which one do you like? ")

                if(bedChoice == "big") {
                    alert("The chair is way to big! The end");
                }   else if(bedChoice == "medium") {
                    alert("Its too soft and you cant sleep. The end!");
                }   else {
                    alert("Its just right and you fall asleep into a deep slumber")
                    alert("You wake up to see three bears looking at you")
                    alert("Shocked you get up and run away never to return again")
                }
            }
        }
    } else {
        alert("You dont go into the cabin. Well...Thats all folks, The end")
    }  
}
playGame()