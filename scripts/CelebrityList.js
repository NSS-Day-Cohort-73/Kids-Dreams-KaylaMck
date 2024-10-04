import { getCelebrities } from "./database.js"  //importing celebrities array from database

const celebrities = getCelebrities()  //saving array of celebrities in a variable called celebrities

document.addEventListener(  //attaching an event listener to the doc
    "click", 
    (clickEvent) => {
        const celebrityTarget = clickEvent.target  // saving clickEvent element target in celebrityTarget variable

        if (celebrityTarget.dataset.type === "celebrity") {    //if the element that was clicked has a dataset and that dataset has a type that === "celebrity"
        window.alert(`${celebrityTarget.dataset.name} is a ${celebrityTarget.dataset.sport} star`) //display window alert
        }
    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}"
                    data-name="${celebrity.name}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
