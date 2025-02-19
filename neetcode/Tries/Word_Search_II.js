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
        this.wordBank = []
        this.board = null
        this.visited = null
    }

    getTrieIndex(word, index = 0) {
        return word.charCodeAt(index) - 97
    }

    validateMoves(moves) {
        const index = 0
        while(i < moves.length) {
            const [i, j] = moves[index]
            let valid = true

            if(i < 0 || j < 0) {
                valid = false
            } else if (i >= this.board.length, j >= this.board[0].length) {
                valid = false
            }
        }
    }

    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        //setup varaibles
        this.generateTrie(words)
        this.board = board
        this.visited = Array.from({ length: board.length }, () => Array(board[0].length).fill(false));

        //check each cell if a word starts with the letter, if it does find the word
        for (let i = 0; i < board.length; i++) {
            const row = board[i]
            for (let j = 0; j < row.length; j++) {
                const index = this.getTrieIndex(row[j])
                if (!this.root.next[index]) continue
                this.visited[i][j] = true
                this.wordSearch(this.root.next[index], [i, j])
                this.visited[i][j] = false
            }
        }
        return this.wordBank
    }

    wordSearch(pointer, prev) {
        //words can contain smaller words, check for a valid word and continue checking
        if (pointer.finalChar) this.wordBank.push(pointer.word)
        const [i, j] = prev;
        const validMoves = this.validateMoves([
            [i + 1, j],
            [i - 1, j],
            [i, j + 1],
            [i, j - 1]
        ]);
        
        
    }

    //create a trie with given words
    generateTrie(words) {
        words.forEach(word => {
            let pointer = this.root
            for (let i = 0; i < word.length; i++) {
                const index = this.getTrieIndex(word, i)
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
