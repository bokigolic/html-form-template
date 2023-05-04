
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

newH.innerHTML = "Add New title wiyh JS"
newP.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum error excepturi fuga laboriosam, quis quo"

main.appendChild(newH)
main.appendChild(newP)