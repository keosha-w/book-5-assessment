//Responsibility - Generate HTML for Recipient dropdown

import { getRecipients, setRecipientId } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const convertRecipientsToListElement = (recipient) => {
    return `<option value="${recipient.id}">${recipient.name}</option>`
}

export const Recipients = () => {
    const recipients = getRecipients()

    let html = `

    <h3>Recipient</h3>
    <select id="recipient">
        <option value="0">Choose Recipient...</option>
        ${
            recipients.map(convertRecipientsToListElement).join("")
        }
    </select>
    `
    return html
}

//change event - when user selects author - authorName sent to application state
mainContainer.addEventListener("change", changeEvent => {
    if (changeEvent.target.id.startsWith("recipient")) {
        setRecipientId(parseInt(changeEvent.target.value))
    }
})