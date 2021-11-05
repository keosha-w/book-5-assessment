//Responsibility - render HTML to the DOM

import { fetchAuthors, fetchRecipients, fetchTopics } from "./dataAccess.js"
import { PenPalSociety } from "./PenPalSociety.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchAuthors()
    .then(() => fetchTopics())
    .then(() => fetchRecipients())
    .then(() => {
            mainContainer.innerHTML = PenPalSociety()
        })
}

render()
