/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
return a+" + "+ b+" = "+(a+b);
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    const array = []
    for (let i=0; i<endNumber-startNumber+1; i++){
    array[i]=startNumber+i;
    }
    return array;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
   const min=0;
   const max=0;
   for (let i=0; i<numbers.length; i++){
    if(numbers[i]>max){
        max=numbers[i];
    }
    if (numbers[i]<min){
        min=numbers[i];
    }
    }
    return "{min: "+ min +", max: "+max+"}";
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    /* an array to keep track of the numbers occured"*/
    const array1 = [];
    /* an array to keep counting the times of occurance"*/
    const array2 = [];

    for (let i=0; i<numbers.length; i++){
        const hasoccured = false;
        for (let j=0; j<array1.length; j++){
            if(numbers[i]==array1[j]){
            array2[j]++;
            hasoccured = true
            }
        }
        if (hasoccured==false){
            array1[array1.length]=numbers[i];
            array2[array2.length]=1;
        }
    }

    const answer;
    
    for(let i=0; i<array1.length; i++){
        answer[array1[i]]=array[2];
    }

    return answer;
    
}
