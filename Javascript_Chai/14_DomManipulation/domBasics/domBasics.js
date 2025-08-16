/*
document.getElementById('title')
<h1 id=​"title" class=​"heading">​DOM learning on Chai aur code​</h1>​

document.getElementById('title').id
'title'

document.getElementById('title').class
undefined

document.getElementById('title').className
'heading'

document.getElementById('title').getAttribute('id')
'title'

document.getElementById('title').getAttribute('class')
'heading'

document.getElementById('title').setAttribute('class', 'test')
undefined (but actually class='test' is added and overrided heading)

document.getElementById('title').setAttribute('class', 'test heading')
undefined  (now both setted)

tt
<h1 id=​"title" class=​"test heading">​DOM learning on Chai aur code​</h1>​

tt.style.backgroundColor = 'green'
'green'

tt.style.padding = '15px'
'15px'

tt.style.borderRadius = '15px'
'15px'

title.innerText                   //shows only visible text
'DOM learning on Chai aur code'

title.textContent                 //show all text without its own css
'DOM learning on Chai aur code textContent'

title.innerHTML                   //show all text with its own css
'DOM learning on Chai aur code <span style="display: none;">textContent</span>'

document.querySelector('#title')
<h1 id="title" class="heading">DOM learning on Chai aur code <span style="display: none;">textContent</span></h1>

document.querySelector('.heading')
<h1 id="title" class="heading">DOM learning on Chai aur code <span style="display: none;">textContent</span></h1>

document.querySelector('ul')
<ul>​…​</ul>​

const myul = document.querySelector('ul')
undefined

myul
<ul>​…​</ul>​

myul.querySelector('li')
<li>​…​</li>​

myli.style.backgroundColor = 'green'
'green'

const myli = document.querySelectorAll('li')
undefined

myli
NodeList(3) [li, li, li]

myli[0].style.backgroundColor = 'red'
'red

const liList = document.querySelectorAll('li')
undefined

liList.forEach((l)=>{
    l.style.backgroundColor = 'red'
})

liList
NodeList(3) [li, li, li]

Array.from(liList)
(3) [li, li, li]

const liArr = Array.from(liList)
undefined

liArr
(3) [li, li, li]

liArr.forEach((l)=>{
    l.style.backgroundColor = 'orange'
})
*/
