///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the last week at an apple orchard. 
    You will be using your coding skills to gain insights into its daily 
    operations.

    Below are three arrays each containing 7 numbers. You will use them and the 
    price variables to complete the problems in this file.

    The indexes of the arrays correspond with a day of the week.
    The first array is named fujiAcres. Notice that the first item in this array 
    is 2, meaning that 2 acres of Fuji apples were picked on Monday of this week.
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]





// PROBLEM 1

/*
    Using a for loop, calculate the total number of acres picked for the entire 
    week.

    Save the number to a variable called `totalAcres`.
    Log `totalAcres` to the console.
*/

let allAcres = [fujiAcres, galaAcres, pinkAcres]
let totalAcres = 0

for (const row of allAcres) {
    for (const value of row){
        totalAcres += value;
    }
}

console.log(totalAcres);



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    (Remember that the average is the total divided by the number of days)

    Save the answer to a variable called 
    `averageDailyAcres`, and log `averageDailyAcres` to the console.
*/


const averageDailyAcres = totalAcres/21;
console.log(averageDailyAcres)



// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number of acres that still have apples left. 
    
    The `days` variable represents how many more days of work are left. It's 
    initialized at 0 because we're going to be using it as a counter.
    
    Write a while loop that will continue to run while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to calculate this number. You might
    think about other ways you could do it more mathematically.
*/

let acresLeft = 174 
let days = 0

while (acresLeft > 0) {
    days += 1;
    acresLeft -= averageDailyAcres;
}
console.log(days)



// PROBLEM 4

/*
    Your next task is to create 3 arrays that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store your new arrays. Make sure that you
    don't modify the original arrays on lines 36 - 38.

    Log each of your arrays to the console.

    (Hint: loop over the original arrays, calculate the tons for that day, then
    add that number into the new list)
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

// code calculates tons each day for fuji apples
for (let i = 0; i < fujiAcres.length; i++) {
    fujiTons.push(fujiAcres[i] * 6.5);
}

// code calculates tons each day for gala apples
for (let i = 0; i < galaAcres.length; i++) {
    galaTons.push(galaAcres[i] * 6.5);
}

// code calculates tons each day for pink apples
for (let i = 0; i < pinkAcres.length; i++) {
    pinkTons.push(pinkAcres[i] * 6.5);
}

// log each day in tons for each farm to console
console.log(fujiTons);
console.log(galaTons);
console.log(pinkTons);


// PROBLEM 5

/*
    Next, calculate the TOTAL number of pounds picked per variety.

    You'll need to add up the tons per each variety and convert the number 
    into pounds -- store that number in the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// there weren't any variables given so I created my own
fujiPoundTotal= 0
galaPoundTotal= 0
pinkPoundTotal= 0


// code block to calculate total tons for FUJI
for (i = 0; i< fujiTons.length; i++) {
    const addFuji = fujiTons[i] * 2000;
    fujiPoundTotal += addFuji;
}

// code block to calculate total tons for GALA
for (i = 0; i< galaTons.length; i++) {
    const addGala = galaTons[i] * 2000;
    galaPoundTotal += addGala;
}

// code block to calculate total tons for PINK
for (i = 0; i< pinkTons.length; i++) {
    const addPink = pinkTons[i] * 2000;
    pinkPoundTotal += addPink;
}

// log each total to the console
console.log(fujiPoundTotal)
console.log(galaPoundTotal)
console.log(pinkPoundTotal)

// PROBLEM 6

/*
    Now that you know the total pounds per variety, use the prices below to 
    figure out how much you'll make from selling each type of apple. 

    The prices are per pound and are written in cents. 

    Log each of the profits to the console. 
*/
const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55


// calculating revenue by multiplying pounds by price per pound
let fujiProfit = fujiPoundTotal * fujiPrice;
let galaProfit = galaPoundTotal * galaPrice;
let pinkProfit = pinkPoundTotal * pinkPrice;

// logging each profit 
console.log(fujiProfit);
console.log(galaProfit);
console.log(pinkProfit);


// PROBLEM 7

/*
    Add up all your profits and save  the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

//calculating total profit and logging it to console
const totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(totalProfit) 

