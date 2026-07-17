function fizzBuzz(arr){
    arr.forEach( val => {
        if (val%3===0 && val%5===0){ console.log(" FizzBuzz ");}
        else if (val%3===0){ console.log(" Fizz ");}
        else if (val%5===0){ console.log(" Buzz ");}
    });
}
fizzBuzz([10,20,30,33,50])