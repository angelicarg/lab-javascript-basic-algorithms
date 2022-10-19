console.log("I'm ready!");

// Iteration 1: Names and Input

const hacker1 = 'Angélica';

console.log(`The driver's name is ${hacker1}.`);

const hacker2 = 'Google Chrome';

console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

console.log(hacker1.length);
console.log(hacker2.length);

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
}

if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}

if (hacker1.length == hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

console.log(hacker1[0]);
let inverso = '';
for (let i = hacker1.length - 1; i >= 0; i--) {
  console.log(hacker1[i]);
  inverso += hacker1[i];
}
console.log(inverso);

console.log(hacker2[0]);
let inverso2 = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  console.log(hacker2[i]);
  inverso2 += hacker2[i];
}
console.log(inverso2);
