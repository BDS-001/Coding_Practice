const body = document.querySelector('body')

let p = document.createElement('p')
p.setAttribute('style', 'color: red;')
p.innerText = 'This is red'
body.appendChild(p)


const h3 = document.createElement('h3')
h3.setAttribute('style', 'color: blue;')
h3.innerText = 'im a blue h3!'
body.appendChild(h3)

let div = document.createElement('div')
div.setAttribute('style', 'border: 1px solid black; background-color: pink;')
body.appendChild(div)

const h1 = document.createElement('h1')
h1.innerText = 'im in a div'
div.appendChild(h1)

p = document.createElement('p')
p.innerText = 'me too'
div.appendChild(p)