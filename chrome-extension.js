const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
// const listItems = document.getElementById("listitem-el")
var myLeads = []

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads(){
    let listItems = ""
    for (var i=0; i < myLeads.length; i++) {
        // listItems += "<li><a target='_blank' href='#'>" + myLeads[i] + " " + "</li></a>"
        listItems += `
            <li>
            <a target='_blank' href='${myLeads[i]}'>${myLeads[i]} </a>

            </li>
        `
    }
    ulEl.innerHTML = listItems
    
}

