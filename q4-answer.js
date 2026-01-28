const input = `14 1
5 8 2 13 15 4 5 14 4 4 3 4 15`;

function removeDuplicates(input) {
    const inputLines = input.split('\n');
    const cards = inputLines[1].split(' ').map(Number);
    const uniqueCards = [...new Set(cards)];
    const uniqueInput = `${inputLines[0]}\n${uniqueCards.length > 0 ? uniqueCards.join(' ') : ''}`;
    return uniqueInput;
}

function longestRun(input) {
    const uniqueInput = removeDuplicates(input);
    const inputLines = uniqueInput.split('\n');
    const nK = inputLines[0].split(' ').map(Number);
    var n = nK[0];
    var k = nK[1];
    var cards = inputLines[1].split(' ').map(Number);
    const arrayCount = n - k;
    
    // Sort the given cards
    cards.sort((a, b) => a - b);
    cards = cards.filter((item,index)=> cards.indexOf(item)=== index);
    let maxLength = 0;
    let currentLength = 0;
    for (let i = 0; i < arrayCount - 1; i++) {
        const nextArray = cards[i] + 1;
        
        if (nextArray === cards[i + 1]) {
            currentLength += 1;
        } else if (nextArray < cards[i + 1]) {
            const gap = cards[i + 1] - nextArray - 1;
            if (gap <= k) {
                currentLength += gap + 1;
                k -= gap;
            } else {
                currentLength += k;
                k = 0;
                maxLength = Math.max(maxLength, currentLength);
                break;
            }
        }
    }

    maxLength = Math.max(maxLength, currentLength + k);

    return maxLength;
}

const result = longestRun(input);
console.log('Length of the longest run:', result);