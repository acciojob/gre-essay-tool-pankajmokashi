//your code here
let input = document.getElementById("evaluatedText")
let h3 = document.getElementById("wordCount")
h3.innerText = 0
function textInside() {
    let line = input.value
    let arr = line.trim()
    arr = arr.split(" ")
    arr = arr.filter(function(item) {
        return item !== ''
    })
    h3.innerText = arr.length
}
input.addEventListener("keyup", textInside)