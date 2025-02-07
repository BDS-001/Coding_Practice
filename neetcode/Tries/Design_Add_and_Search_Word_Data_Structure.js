class Node {
    constructor(letter, finalChar=false) {
        this.letter = letter;
        this.finalChar = finalChar;
        this.next = new Array(26).fill(null);
    }
}

class WordDictionary {
    constructor() {
        this.root = new Node(null)
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
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
                return
            }
            
            pointer = letterPosition
        }
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word, index = 0, pointer = this.root) {
        if (word.length === index) return pointer.finalChar
        const letter = word[index]
        const letterIndex = word.charCodeAt(index) - 97
        if (letter === '.') {
            return pointer.next.some(letterNode => 
                letterNode && this.search(word, index + 1, letterNode)
            );
        }

        const letterNode = pointer.next[letterIndex]
        if (letterNode) return this.search(word, index + 1, letterNode)
        return false

    }
}
