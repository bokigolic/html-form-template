
//const images = document.getElementsByTagName('img')
//console.log(images)
////const anchors = document.getElementsByTagName('a')
//console.log(anchors)
//const paragraph = document.getElementsByTagName('p')
//console.log(paragraph)
//const heading = document.getElementById('heading')
//heading.innerHTML = "Hello"

let main = document.getElementById('content')

let newH = document.createElement('h2')
let newP = document.createElement('p')

newH.innerHTML = "This is the title we add and delete the clickon on the buttons"
newP.innerHTML = "This is the text that we add to the button, as a rule, it should be longer than the title, so I will add it Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum error excepturi fuga laboriosam, quis quo"


const addBtnTitle = document.getElementById("myBtnA")
addBtnTitle.onclick = (() => {
  main.appendChild(newH)
})

const addBtnText = document.getElementById("myBtnTA");
addBtnText.onclick = (() => {
  main.appendChild(newP)

})



const btn = document.getElementById('myBtn');
btn.onclick = (() => {
  main.removeChild(newH);
});

const btn2 = document.getElementById("myBtnT");
btn2.onclick = (() => {
  main.removeChild(newP)
})