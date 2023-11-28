function arraySum(array){
    return array.reduce((acc, current) => acc + current, 0);
}

let numbers = [3, 6, 7, 4, 5];
let sum = arraySum(numbers);
console.log(`sum of the array elements: ${sum}`);