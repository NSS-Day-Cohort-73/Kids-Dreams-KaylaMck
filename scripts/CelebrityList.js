import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li 
                    data-id="${celebrities.id}" 
                    data-type="celebrity"
                    data-sport="${celebrities.sport}"
                    id="star--${celebrities.id}">
                    ${celebrities.name}
                </li>`
    }

    html += "</ol>"
    return html
}
