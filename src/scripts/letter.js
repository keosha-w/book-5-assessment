//Responsibility - to generate the HTML for the letter input

import { setLetterStr } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")


export const Letter = () => {
    return `
        <div id="letterInput">
            <h3><label for"letterInput">Letter</label></h3>
            <textarea id="letterInput" name="letterInput" rows="25" cols="50"></textarea>
        </div>
    `
}

//change event - when user selects author - authorName sent to application state
mainContainer.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "letterInput") {
        setLetterStr(changeEvent.target.value)
    }
})