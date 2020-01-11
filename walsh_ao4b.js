/* Tyler Walsh
walsh_ao4b.js
19WI_INFO_2124_WW
Thoendel
1/9/2019 */

const firstName = "Tyler"; //A constant with a value equal to my first name.
let weight = "160.50"; //A variable String for my weight. 
let height = 68.0; //A variable floating integer for my height.
let age = "20"; //A variable string for my age.

const marsGravity = 0.38; //A constant to compare the gravity of Mars to the gravity of Earth.
const inchesToMeters = 2.54; //A constant to easily compare a length of inches to a length in meters, or vice versa.

let ageDays = parseInt(age) * 365; //A variable to store my age in days as an integer. I used a variable for easier adjustment in part 4.b
console.log(ageDays); //Outputs my age in days.

console.log(ageDays / 687); //Outputs my age in "Mars Days" instead of earth days.

console.log(parseFloat(weight) * marsGravity); //Calculates my "Mars Weight" by multiplying my regular weight (which is first converted to a floating point number) by the gravity of Mars.

console.log(`
Hello there, ${firstName}! On Earth, you weigh ${parseFloat(weight)} pounds.
But, since gravity is weaker on Mars, you would only weigh ${Number(weight) * marsGravity} pounds there!

Neat, huh? Want to know what else is neat?

Mars takes longer to rotate around the sun than Earth does. This means a Mars year is actually
longer than our "Terran" year. So although you are ${Number(age)} years old on Earth, you're only
${ageDays / 687 } years old on Mars.

Did you know, the European Space Agency requires potential astronauts to measure between
153 and 190 cm? Just in case you ever move to Europe and decide to be an astronaut,
your height in cm is ${String(height * inchesToMeters)}.`);