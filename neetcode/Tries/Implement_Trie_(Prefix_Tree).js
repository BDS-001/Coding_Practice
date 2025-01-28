class Node {
    constructor(letter, finalChar=false) {
        this.letter = letter;
        this.finalChar = finalChar;
        this.next = new Array(26).fill(null);
    }
}

class PrefixTree {
    constructor() {
        this.root = new Node(null)
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
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
    search(word) {
        let pointer = this.root
        for (let i = 0; i < word.length; i++) {
            const letterPosition = pointer.next[word.charCodeAt(i) - 97]
            if (!letterPosition) return false
            if (i === word.length - 1) return letterPosition.finalChar
            pointer = letterPosition
        }
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let pointer = this.root
        for (let i = 0; i < prefix.length; i++) {
            const letterPosition = pointer.next[prefix.charCodeAt(i) - 97]
            if (!letterPosition) return false
            pointer = letterPosition
        }
        return true
    }
}
