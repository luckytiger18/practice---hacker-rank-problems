function vowelsAndConsonants(s) {
    var vowel = ["a", "e", "i", "o", "u"];
    var consonant = [];
    for (var i = 0; i < s.length; i++){
        if (vowel.includes(s.charAt(i))){
            console.log(s.charAt(i))
        }
    }
    for (var i = 0; i < s.length; i++){
        if (!vowel.includes(s.charAt(i))){
            console.log(s.charAt(i))
        }
    }
    
}

vowelsAndConsonants("jivssecuroptlps")