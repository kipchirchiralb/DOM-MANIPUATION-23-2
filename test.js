document.getElementById("one").addEventListener("mouseenter", function(){
    console.log("mouse is over box")
})

document.addEventListener("keydown", function(e){
    console.log(e.key)
})

document.querySelectorAll(".box").forEach(box=>{
    box.addEventListener("click", function(trigger){
        console.log(trigger.target.textContent)
    })
})

// difference between a nodelist, htmlcollection and an array
// event propagation - - bubbling, capturing