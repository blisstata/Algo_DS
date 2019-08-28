function IsPrime(num) {
    let flag = true;

    for(let i=2; i<Math.sqrt(num); i++) {
        if(num%i === 0) {
            flag = false;
        }
    }

    if (flag) {
        console.log("Number is Prime");
    } else {
        console.log("Number is not Prime");
    }
}

IsPrime(40);
