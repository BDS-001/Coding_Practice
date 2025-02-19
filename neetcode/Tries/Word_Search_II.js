class Node {
    constructor(letter, finalChar=false, word='') {
        this.letter = letter;
        this.finalChar = finalChar;
        this.word = word
        this.next = new Array(26).fill(null);
    }
}

class Solution {
    constructor() {
        this.root = new Node(null)
    }


    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        this.generateTrie(words)
        for (let i = 0; i < board.length; i++) {
            const row = board[i]
            for (let j = 0; j < row.length; j++) {
                
            }
        }
    }

    setWordBank(words) {

    }

    generateTrie(words) {
        words.forEach(word => {
            let pointer = this.root
            for (let i = 0; i < word.length; i++) {
                const index = word.charCodeAt(i) - 97
                const finalChar = i === word.length - 1
                let letterPosition = pointer.next[index]
                if (!letterPosition) {
                    letterPosition = new Node(word[i], finalChar)
                    pointer.next[index] = letterPosition
                }
    
                if (finalChar) {
                    letterPosition.finalChar = true
                    letterPosition.word = word
                    return
                }
                
                pointer = letterPosition
            }
        });
    }
}
