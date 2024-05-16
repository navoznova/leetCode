//isPolidrom

function isPolidrom(str) {
    // const revrtedString = str.toLowerCase().split(' ').sort().join('');
    // console.log(revrtedString);
    // return str===revrtedString

    for(let i = 0; i < str.length/2; i++){
        let first = str[i];
        let last = str[str.length - i - 1];

        if(first !== last) {
            return false;
        }
    }
    return true;
};

isPolidrom('каак');