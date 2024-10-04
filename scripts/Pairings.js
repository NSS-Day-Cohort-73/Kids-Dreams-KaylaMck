import { getChildren, getCelebrities } from "./database.js"    //get copies of children and celebrities array

const kids = getChildren()    //save array in kids variable
const celebrities = getCelebrities() // save array in celebrities variable

const findCelebrityMatch = (children, celebrities) => {   //declares a function where the children object and celebrities array are the argument
    let celebrityMatch = null               //create variable to store a match once its found

    for (const celebrity of celebrities) {          //iterates through each celebrity of the celebrities array
        if (celebrity.id === children.celebrityId) {        //check if the id of the celebrity matches the celebrityId of the children object
            celebrityMatch = celebrity          //if it does, assign that celebrity to the celebrityMatch variable
        }
    }

    return celebrityMatch // return the found celebrity
}

export const Pairings = () => { //declaring a Pairing() function
    let html = ""       //initializing an empty string
    html = "<ul>"       //updating string to be an unordered list

    for (const kid of kids) {       //iterating through the kid of the kids array
        const kidsStar = findCelebrityMatch(kid, celebrities) //the findCelebrityMatch function is called w/ the current kid and the celebrities array as arguments searches for a celebrity who's id matches the celebrityId of the current kid and stores the celebrity object in the kidStar variable
        html += `  
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

