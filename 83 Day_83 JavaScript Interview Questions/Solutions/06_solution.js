// 6. The Vowel Counter:
// You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function vowelsCounter(string) {
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let count = 0;
    for (const chr of string) {
        for (const vowel of vowels) {
            if (chr == vowel) {
                count += 1;
            }
        }
    }
    return count;
}

let str = "I am Abuzar Alvi";
console.log(vowelsCounter(str));