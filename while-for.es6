// 1

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) alert(i);
// }

// 2

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }

// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }

// Repeat until the input is correct
// let input;
// while (true) {
//     input = prompt('Enter a number greater than 100.');
//     if (input > 100 || input === '') break;
// }
// alert(`You entered ${input}!`);

// Output prime numbers
const n = prompt('Input `n`');
outer:
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i - 1; j++) {
            if (i % j === 0) continue outer;
        }
        alert(i);
    }