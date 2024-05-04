const originalArray: number[] = [1, 2, 3, 4, 5];

function reverseArray(array: any[]): any[] {
    const reversedArray: any[] = [];
    for (let i= array.length -1; i>= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

const reversedArray = reverseArray(originalArray);
console.log(reversedArray);
