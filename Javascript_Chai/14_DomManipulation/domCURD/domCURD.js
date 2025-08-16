const parent = document.querySelector('.parent');
console.log(parent);
console.log(parent.children);
console.log(parent.children[1].innerHTML)

for(let i = 0; i < parent.children.length; i++){
    console.log(parent.children[i].innerHTML);
}

parent.children[1].style.color = "orange";
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const dayOne = document.querySelector('.day');
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

console.log("Nodes: ", parent.childNodes);


/*
div.parent
HTMLCollection(4) [div.day, div.day, div.day, div.day]
Tuesday

Monday
Tuesday
Wednesday
Thursday

div.day
div.day

div.day
div.parent
div.day

NodeList(9) [text, div.day, text, div.day, text, div.day, text, div.day, text]
*/

const div = document.createElement('div')
console.log(div)

div.className = "main"
div.id = Math.round(Math.random() * 10)

div.setAttribute('title', 'generated title');
div.style.backgroundColor = 'green',
div.style.padding = '12px'
// div.innerText = "Chai aur code"

const addText = document.createTextNode("Chai aur code");
div.appendChild(addText);

document.body.appendChild(div);

//add
//brute force approach
function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`                          //when innerHTML use traversing occurs
    document.querySelector('.language').appendChild(li)
}
addLanguage("C++")
addLanguage("Typescript")

//optimized approach
function addLanguage2(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}
addLanguage2("Java");


//edit
const secondLang = document.querySelector("li:nth-child(2)");
// secondLang.innerHTML = "C";                              //same un-optimized(innerHTML, traverse)
const newLi = document.createElement('li');
newLi.textContent = "C";
secondLang.replaceWith(newLi);

//edit 2
const thirdLang = document.querySelector('li:nth-child(3)');
thirdLang.outerHTML = '<li>Phython</li>'


//remove
const lastLang = document.querySelector('li:last-child');
lastLang.remove();
