// DOM = Document Object Model 

// get element by id (getElementByID)
// get element by class name 
// get element by tag  

// const a = document.getElementsByTagName('h1')
// console.log(a[0])

const paragraph = document.getElementsByClassName('basic-p');
// console.log(paragraph[0].innerText)
// change value 
// paragraph[0].innerText = "welcome welcome"

// Using ID 

// const heading = document.getElementById('heading');
// heading.style.backgroundColor = 'red'
// heading.style.color = 'white'
// add class 
// heading.classList.add('font-bold')


// get inner text 
const courseName = document.getElementById('course');
const getText = courseName.innerText
console.log(getText)

// for of loop 
const heading = document.getElementsByTagName('h1');
for (const item of heading){
    item.style.backgroundColor = 'red'
}


// to create any tag to use = createElement 
// to get text from input field use value 

// function for receive email 
function receiveEmail () {
    const inputValue = document.getElementById('input')
    const value = inputValue.value;
    console.log(value)
    const displayDiv = document.getElementById('display-email')
    const paragrapg = document.createElement('p')
    paragrapg.classList.add('text-red-600', 'font-bold', 'text-6xl')
    paragrapg.innerText = value;
    displayDiv.appendChild(paragrapg)
}