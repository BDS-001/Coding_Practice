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

const questions = [
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

printQuiz(questions)