// open for extention but closed for modification

//does not use principle
function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description)
        switch (question.type) {
            case 'boolean':
                console.log('1. True')
                console.log('2. False')
                break
            case 'multipleChoice':
                question.options.forEach((option, index) => {
                    console.log(`${index+1} ${option}`)
                })
                break
            case 'text':
                console.log('Answer: _______________________')
                break
        }
        console.log('')
    });
}

let questions = [
    { 
        type: 'boolean',
        description: 'boolean question'
    },
    {
        type: 'multipleChoice',
        description: 'best coding lang',
        options: ['Python', 'JS', 'C', 'Rust']
    }
]

//printQuiz(questions)

// to add new querstion type we need to change the switch statement in the printQuiz function
//need to break the types into each of thier own class

class booleanQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log('1. True')
        console.log('2. False')
    }
}

class multipleChoiceQuestion {
    constructor(description, options) {
        this.description = description
        this.options = options
    }

    printQuestionChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index+1} ${option}`)
        })
    }
}

class textQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log('Answer: _______________________')
    }
}

function newPrintQuiz(questions) {
    questions.forEach(question => {
            console.log(question.description)
            question.printQuestionChoices()
            console.log('')
    });
}

questions = [
    new booleanQuestion('this is a boolean question'),
    new multipleChoiceQuestion('best coding lang', ['Python', 'JS', 'C', 'Rust']),
    new textQuestion('why do you love coding?')
]

newPrintQuiz(questions)