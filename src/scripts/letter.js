//Responsibility - to generate the HTML for the letter input

import { getAuthors, getRecipients, getSentLetters, getTopics, setLetterStr } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

// generates the html for the letter input box
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
// export const RenderSentLetter = () => {
//     const sentLettersList = getSentLetters()

//     return `
//         <label for="topics"><h3>Topics</h3></label>
//         ${
//             sentLettersList.map(
//                 (letter) => {
//                     return `
//                     <div>
//                         <article id="sentLetter--${letter.id}"> ${letter.letter}


//                         </article>
//                     </div>
//                     `
//                 }).join("")
//         }
//     `
// }
// generates the HTML for the sent letters on the bottom of the page
export const RenderSentLetter = () => {
    const sentLettersList = getSentLetters()
    const authors = getAuthors()
    const topics = getTopics()
    const recipients = getRecipients()


    

    return `
    <h3>Letters</h3>
    ${sentLettersList.map(
        (letter) => {
            const foundAuthor = authors.find(
                (author) => {
                    return letter.authorId === author.id
                }
                )
                const foundTopic = topics.find(
                    (topic) => {
                        return letter.topicId === topic.id
                    }
                    )
                    const foundRecipient = recipients.find(
                        (recipient) => {
                            return letter.recipientId === recipient.id
                        }
                    )

            return `
                    <div class="sentLetter">
                        <p>Dear ${foundRecipient.name},</p>
                        <p id="sentLetter--${letter.id}">
                            ${letter.letter}
                        </p>
                        <p>Sincerely, ${foundAuthor.name}</p>
                        <p>topic: ${foundTopic.topic}</p>
                    </div>
                    `

        }

    ).join("")
        }
    `
}