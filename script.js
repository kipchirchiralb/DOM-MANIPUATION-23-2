const headingOne = document.querySelector("h1")
const listItems = document.querySelectorAll("li") // nodelist
/**
 * getElementById("")
 * getElementsByClassName("") -- html collection
 * getElementByTagName("")
 */ 
console.log(headingOne)
console.log(listItems)

//modify content
headingOne.textContent = "Welcome to JS"
document.querySelector("h2").innerHTML = "<a href='https://www.tiktok.com' >Visit TikTok</a>"

// modify attributes
document.querySelector("a").setAttribute("href", "https://www.instagram.com")
document.querySelector("a").setAttribute("id", "social-link")

document.querySelector("a").setAttribute("class", "e-links")

// for loop

listItems.forEach(function(item, index){
        if((index+1)%2 === 0){
            item.style.color = "red"
            item.style.fontSize = "30px"
        }
})

