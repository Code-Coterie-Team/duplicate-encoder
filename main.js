function duplicateEncode(word){
    word=word.toLowerCase();
    let count={};
    for (char in word){
        count[char]=(count[char]||0)+1;

    }
    let newword="";
    for(char in word){
        newword+=count[char]===1 ?'(':')';

    }
    return newword;
}