function crosswordPuzzle(crossword, hints) {
    const words = hints.split(";").filter(s => s !== "");
    if (words.length === 0) {
        return crossword;
    }
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const newHints = words.slice(0, i).concat(words.slice(i+1)).join(";");
        for (let row = 0; row < crossword.length; row++) {
            for (let col = 0; col < crossword[0].length; col++) {
                for (let horizontal of [false, true]) {
                    const newCrossword = place(crossword, word, row, col, horizontal);
                    if (newCrossword) {
                        const finalCrossword = crosswordPuzzle(newCrossword, newHints);
                        if (finalCrossword) {
                            return finalCrossword;
                        }
                    }
                }
            }
        }
    }
    return null;
}

function place(crossword, word, row, col, horizontal) {
    let dRow, dCol;
    if (horizontal) {
        dRow = 0;
        dCol = 1;
    } else {
        dRow = 1;
        dCol = 0;
    }
    const newCrossword = crossword.map(line => line.split(""));
    for (let i = 0; i < word.length; i++) {
        if (row >= crossword.length || 
            col >= crossword[0].length ||
            (crossword[row][col] !== "-" && crossword[row][col] !== word[i])) {
           return null;
        }
        newCrossword[row][col] = word[i];
        row += dRow;
        col += dCol;
    }
    return newCrossword.map(lineArray => lineArray.join(""));
}