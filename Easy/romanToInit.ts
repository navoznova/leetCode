// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

const vocabulary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function romanToInt(s: string): number {
    let  sum = 0;
    
    for (let i=0; i< s.length; i++) {
        const keyCurrent: any = s[i];
        const keyNext: any = s[i+1];
        sum += vocabulary[keyCurrent] < vocabulary[keyNext] ? -vocabulary[keyCurrent] : vocabulary[keyCurrent];
    }
    return sum;
};

romanToInt('MCMXCIV')