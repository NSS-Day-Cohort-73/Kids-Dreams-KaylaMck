import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (clickEvent) => {
        const childTarget = clickEvent.target

        const childName = childTarget.dataset.name
        const childWish = childTarget.dataset.wish

        if (childTarget.dataset.type === "child") {

        window.alert(`${childName}'s wish is to ${childWish}`)
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

