const bucketSize = 32

function hash(key) {
    let hashCode = 0

    const primeNumber = 31
    for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % bucketSize
    }

    return hashCode
}

console.log(hash('Hello, world!'));
console.log(hash('Welcome to ChatGPT!'));
console.log(hash('OpenAI is awesome'));
console.log(hash('GPT-4 is powerful'));
console.log(hash('Artificial Intelligence'));
console.log(hash('Machine Learning'));
console.log(hash('Deep Learning'));
console.log(hash('Natural Language Processing'));
console.log(hash('Computer Vision'));
console.log(hash('Reinforcement Learning'));
console.log(hash('Generative Models'));
console.log(hash('Transformers are cool'));
console.log(hash('Data Science'));
console.log(hash('Big Data'));
console.log(hash('Cloud Computing'));
console.log(hash('Cybersecurity'));
console.log(hash('Blockchain Technology'));
console.log(hash('Internet of Things'));
console.log(hash('Quantum Computing'));
console.log(hash('Augmented Reality'));



const test = []
console.log(test)
test[4] = 'four'
console.log(test)
test[0] = 'zero'
console.log(test)
for (let i = 0; i < test.length; i++) {
    console.log(test[i])
    
}