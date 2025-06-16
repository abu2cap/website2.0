/* <<<----- Memory ----->>> */

// Fisher Yates Shuffle //

function fisherYatesShuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
    
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

// Karten Array //

let cards = [];
for (let i = 0; i < 12; i++) {
    cards.push(i);
    cards.push(i);
}
