
function countWordOccurrences(sentence: string, word: string): number {
    const words = sentence.toLowerCase().split(" ");
    const targetWord = word.toLowerCase();
    return words.filter(w => w === targetWord).length;
}


const result = countWordOccurrences("Jhankar bhai is a best mentor. I love Jhankar bhai.", "Jhankar");

// console.log(result);
