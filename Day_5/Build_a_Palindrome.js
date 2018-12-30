function buildPalindrome(a, b) {
    /*
     * Write your code here.
     */
    //check a chars are not contained in b chars
    const containsCharOfA = containsAnyChaOfString(a,b);
    if ( !containsCharOfA) return -1;

    //generate substrings of a string
    let asubstrings = generateAllSubstrings(a);
    let bsubstrings = generateAllSubstrings(b);
    let palindromes = [];
    for (let i = 0; i < asubstrings.length; i++) {
        for (let j = 0; j < bsubstrings.length; j++) {
            const word = asubstrings[i] + bsubstrings[j];
            if (isPalindrome(word)) {
                palindromes.push(word);
            } 
        }
    }
    palindromes = palindromes.sort(sortDesc);
    
    return ( palindromes.length == 0 ? -1 : palindromes[0]);
}
const containsAnyChaOfString = (a,b) => {
    let charsFound = 0;
    for(let i= 0; i < a.length; i++) {
        if ( b.indexOf(a[i]) > -1 )
           charsFound++;
    }
    return charsFound == 0 ? false : true;

};

const sortDesc = (a, b) => {
    if (a.length < b.length) return 1;
    if (a.length > b.length) return -1;
    //same length, order alphabetically
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

const generateAllSubstrings = (s) => {
    let substrings = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            substrings.push(s.slice(i, j + 1));
        }
    }
    return substrings;
};


const isPalindrome = (word) =>   {

    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] != word[word.length - 1 - i])
            return false;
    }
    return true;
}
