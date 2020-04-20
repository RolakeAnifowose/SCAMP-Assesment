//Using the Formula Xn = Xn-1 + Xn-2
let x = 10; //Variable declaration

//Function to calculate the Fibonnaci value of 10
function Fibonnaci(x) {
    if (x <= 1) {   //If x is less than or equal to 1, return x since we can't calculate the Fibonnaci sequence for numbers less than 1
        return x;
    } else {
        return Fibonnaci(x - 1) + Fibonnaci(x - 2); //Compute the Fibonnaci value by adding the previous term + the term before that (In this case, X(9) + X(8))
    }
}
console.log(Fibonnaci(x)); //Console log the Fibonnaci value of the declared number at the top