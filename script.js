let bigbutton = document.querySelector('.bigbutton'); 
let list = document.querySelector('.window')

function addline () {
    let newline = document.createElement('div')
    newline.classList.add('lineitem')
    let newInput = document.createElement('input')
    newInput.classList.add('activity')
    let newLilButton = document.createElement('img')
    newLilButton.src = "/pics/Group 77.svg"
    newLilButton.addEventListener('mouseover', () => {
        newLilButton.src = "/pics/Group 70.svg"
    })
    newLilButton.addEventListener('mouseout', () => {
        newLilButton.src = "/pics/Group 77.svg"
    })
    
    newLilButton.classList.add('lilbutton')
    newline.append(newInput)
    newline.append(newLilButton)
    list.append(newline) 

    newLilButton.addEventListener('click', () => {

        let parent = document.querySelector('.window') 
        if (parent.childElementCount !== 1) {
            newline.remove()
        }
        
    })
}
bigbutton.addEventListener('click', () => {

    let parent = document.querySelector('.window')         
    if (parent.lastElementChild && parent.lastElementChild.firstElementChild.value !== '') {
        addline()    
    }
})
addline()


let sortButton = document.querySelector('.filter1')
sortButton.addEventListener('mouseover', () => {
    sortButton.src = "./pics/Group 73.svg"
})
sortButton.addEventListener('mouseout', () => {
    sortButton.src = "./pics/Group 74.svg"
})

let multiplier = 1

sortButton.addEventListener('click', () =>{
    let arr = []
    let lineitems = document.querySelectorAll('.lineitem')         
    lineitems.forEach((lineitem) => { 
        arr.push(lineitem)       
    })
    arr.sort((a, b) =>{
        let textA = a.firstElementChild.value
        let textB = b.firstElementChild.value

        return textA.localeCompare(textB) * multiplier
    })

    multiplier = multiplier * -1
    arr.forEach((el) => {
        el.remove()
        list.append(el)
    })
    if (multiplier === 1) {
        sortButton.src = "./pics/Group 74.svg"
        sortButton.addEventListener('mouseover', () =>{
            sortButton.src = "./pics/Group 73.svg"
        })
        sortButton.addEventListener('mouseout', () =>{
            sortButton.src = "./pics/Group 74.svg"
        })
    } else {
        sortButton.src = "./pics/Group 90.svg"
        sortButton.addEventListener('mouseover', () =>{
            sortButton.src = "./pics/Group 91.svg"
        })
        sortButton.addEventListener('mouseout', () =>{
            sortButton.src = "./pics/Group 90.svg"
    })} 
})
