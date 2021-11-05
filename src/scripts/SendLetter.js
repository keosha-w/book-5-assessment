//Responsibility - Generate HTML for send letter button

import { SentLetter } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")


export const SendLetter = () => {
    return `
        <div>
            <button id="send">Send Letter</button>
        </div>    
    `
}

//change event - when user selects author - authorName sent to application state
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "send") {
        
    }
})