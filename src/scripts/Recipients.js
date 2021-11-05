//Responsibility - Generate HTML for Recipient dropdown

import { getRecipients } from "./dataAccess.js"

const convertRecipientsToListElement = (recipient) => {
    return `<option value="${recipient.id}">${recipient.name}</option>`
}

export const Recipients = () => {
    const recipients = getRecipients()

    let html = `

    <h3>Recipient</h3>
    <select>
        <option value="0">Choose Recipient...</option>
        ${
            recipients.map(convertRecipientsToListElement).join("")
        }
    </select>
    `
    return html
}
