
var deck = [1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3]
// console.log(deck)
function deckNum(deck) {
    var x = 1;
    var cardCount = undefined;
    deck.sort();
    // console.log(deck)
    for (var i = 0; i < (deck.length - 1); i++) {
        // console.log(deck[i] + "deck")
        // console.log(deck[i+1] + "plus one")
        if (deck[i] == deck[i + 1]) {
            x++;
            //  console.log(x)
        } else {
            if (cardCount == undefined) {
                cardCount = x;
            }else{
                if(cardCount != x){
                    return false
                }
            }
            var x = 1;
        }
    }
    return true
};
console.log(deckNum(deck))