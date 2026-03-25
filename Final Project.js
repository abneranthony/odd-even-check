//Function to check in number is even
function isEven(num) {
    return num % 2 ==0;
}
//Function to check if number is odd
function isOdd(num) {
  return num % 2 !== 0; 
}

function start(){
    //Asks user for a number to insert into the program
    var number = readInt("Enter a number between 0 and 10: ");
    //If the number is not in the parameters it'll ask to input them again
        while (number < 0 || number > 10) {
            println("Not valid wrtite again!");
            number = readInt("Enter a number between 0 and 10: ");
        }
    //If its even it'll print it is and if its odd it'll print it is
        if (isEven(number)) {
            println("You have an even number!");
        } else if(isOdd(number)) {
            println("You have an odd number!");
        }
        
    //Defines a list of secret numbers the user is trying to guess
    var arr = [3, 8, 5];
    //Checks if the number the user put in is in the list or not and then prints if it is
        if (arr.includes(number)) {
            println("YES this number is the secret number!");
         } else {
            println("NO this number is not the secret number!");
        }
    //Asks if the user wants to keep playing the game or not
    var play = readLine("Do you want to keep playing [Yes/No]: ");
    while (play != "Yes" && play != "No") {
            println("Not valid wrtite again!");
            play = readLine("Do you want to keep playing [Yes/No]: ");
        }
    while (play == "Yes") {
        //Asks user for a number to insert into the program
        var number = readInt("Enter a number between 0 and 10: ");
        //If the number is not in the parameters it'll ask to input them again
        while (number < 0 || number > 10) {
            println("Not valid wrtite again!");
            number = readInt("Enter a number between 0 and 10: ");
        }
        //If its even it'll print it is and if its odd it'll print it is
        if (isEven(number)) {
            println("You have an even number!");
        } else if(isOdd(number)) {
            println("You have an odd number!");
        }
        //Asks if the user wants to keep playing the game or not
        var play = readLine("Do you want to keep playing [Yes/No]: ");
        //If the # is not in the parameters it'll ask to input them again
        while (play != "Yes" && play != "No") {
            println("Not valid wrtite again!");
            play = readLine("Do you want to keep playing [Yes/No]: ");
        }
    }
    //Thanks the user for playing
    println("Thank you for playing!");
}
