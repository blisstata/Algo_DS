function DecimalToBinary(num) {
    let res = [];
    let rem = 0;

    while (num > 0) {
        rem = num%2;

        res.unshift(rem);
        num = parseInt(num/2);
    }

    return res.join('');
}

let result = DecimalToBinary(125);

console.log(result);
