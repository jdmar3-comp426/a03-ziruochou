import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let result=0;
    for(let i=0; i<array.length; i++){
        result += array[i];
    }
    return result;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let result;
    array.sort(function(a, b){return a - b});
    if(array.length%2==0){
        result=(array[(array.length/2)-1]+array[(1+(array.length/2))-1])/2;
    }else{
        result=array[array.length/2];
    }
return result;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let result = {};
    let mean=array.getSum/array.length;

    result["length"]=array.length;
    result["sum"]=array.getSum;
    result["medium"]=array.getMedian;
    result["min"]=Math.min(array);
    result["max"]=Math.max(array);
    result["variance"]=variance(array,mean);
    result["standard_deviation"]=math.standard_deviation(array);
    return result;
}

