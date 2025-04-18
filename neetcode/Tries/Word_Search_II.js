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
        this.wordBank = new Set
        this.board = null
        this.visited = null
    }

    getTrieIndex(word, index = 0) {
        return word.charCodeAt(index) - 97
    }

    validateMoves(moves) {
        return moves.filter(([i, j]) => 
          i >= 0 && 
          j >= 0 && 
          i < this.board.length && 
          j < this.board[0].length && 
          !this.visited[i][j]
        );
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
        return [...this.wordBank]
    }

    wordSearch(pointer, prev) {
        //words can contain smaller words, check for a valid word and continue checking
        if (pointer.finalChar) this.wordBank.add(pointer.word)
        const [i, j] = prev;

        this.visited[i][j] = true
        const validMoves = this.validateMoves([
            [i + 1, j],
            [i - 1, j],
            [i, j + 1],
            [i, j - 1]
        ]);
        
        validMoves.forEach(([i, j]) => {
            const charIndex = this.getTrieIndex(this.board[i][j])
            if(pointer.next[charIndex]) this.wordSearch(pointer.next[charIndex], [i,j])
        });
        this.visited[i][j] = false
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
