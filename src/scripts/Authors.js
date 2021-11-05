//Responsibility - Generate HTML for Authors

import { getAuthors, setAuthorId } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const convertAuthorsToListElement = (author) => {
    return `<option id="author" value="${author.id}">${author.name}</option>`
}

export const Authors = () => {
    const authors = getAuthors()

    let html = `

    <select>
        <option value="0">Choose an Author</option>
        ${
            authors.map(convertAuthorsToListElement).join("")
        }
    </select>
    `
    return html
}

//change event - when user selects author - authorName sent to application state
mainContainer.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "author") {
        setAuthorId(parseInt(changeEvent.target.value))
    }
})
