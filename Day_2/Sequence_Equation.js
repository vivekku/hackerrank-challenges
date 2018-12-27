function permutationEquation(p) {
    var sequence = [];
    for (var i = 0; i < p.length; i++){
        sequence[i] = p.indexOf(p.indexOf(i + 1) + 1) + 1;
    }
    return sequence;
}