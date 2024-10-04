import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(              //adds an eventListener to the main document
    "click",                            //the type of event we're listening for
    (clickEvent) => {                       // runs some code whenever click happens
        const childTarget = clickEvent.target // stores the clicked element into a variable
            
        if (childTarget.dataset.type === "child") {  //check to see if the clicked element has a data attribute of "child"

        window.alert(`${childTarget.dataset.name}'s wish is to ${childTarget.dataset.wish}`) //if true, display this message
        }
    }
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `
            <li data-id="${child.id}" data-type="child" data-name= "${child.name}" data-wish="${child.wish}"> 
            ${child.name}
            </li>`
    }

    html += "</ol>"
    return html
}

