// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
     if (words.length === 0) {
        return null;
     }

     let longestWord = words[0];

     for (let i = 1; i < longestWord.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
     }
     return longestWord
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function sumNumbers(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;

function averageNumbers(numbers) {
   if (numbers.length === 0);
   return null; 
}

const sum = sumNumbers(numbers);
const average = sum / numbers.length;
return average; 

}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, wordToFind) {
    for (let i = 0; i < words.length; i++) {
        if (words[i] === wordToFind) {
            return true;
        }
    }
    else return false;
}
