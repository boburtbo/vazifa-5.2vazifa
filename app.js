// 1 getElementsByTagName
// const listItem = document.getElementsByTagName("body")
// console.log(listItem);
 
// 2) getElementsByClassName
// const listItem = document.getElementsByClassName('list-item');
// console.log(listItem[0]);

// 3) getElementBById
// const clickBtn = document.getElementById('clikc-btn')
// console.log(clickBtn);

//4)querySelector / querySelectorALL
const listItem = document.querySelector('li');
console.log(listItem);

const content = document.querySelector('p')
console.log(content.classList);

content.classList.add('success');
content.classList.add('error');

const para = document.querySelectorAll('p')
para.forEach((text)=>{
if(text.textContent.includes);{
    text.classList.add('success')
}

if(text.textContent.includes('error')){
    text.classList.add('error')
}
})


//togle
const heading = document.querySelector('h1')

heading.classList.toggle('success')
heading.classList.toggle('success')
heading.classList.toggle('success')

/* - - - - - */
const article = document.querySelector('article')
console.log(article.children);

Array.from(article.children).forEach((child) =>{
   child.classList.add('artilce-child')
})

const title = document.querySelector('h2')
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

// chaining
console.log(title.nextElementSibling.parentElement.children);
const li  = document.querySelectorAll("li");
/* random raqam*/
li.forEach(item => {
    item.textContent = Math.trunc(Math.random() * 10);
});

const x = document.getElementById("myDIV");
x.querySelector("h2, h3").style.backgroundColor = "yellow";
