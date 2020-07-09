function min(a, b) {
    return (a < b) ? a : b;
}

function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}

const x = prompt('x?');
const y = prompt('y?');
alert(`${x} ** ${y} = ${pow(x, y)}`);
