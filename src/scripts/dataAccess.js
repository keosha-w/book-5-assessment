//Responsibility - Access to the data

const mainContainer = document.querySelector("#container")

const applicationState = {
    authors: [],
    topics: [],
    userChoices : {
        authorId: 0,
        letter: "",
        topicId: 0,
        recipientId: 0,
    }
}

export const SentLetter = () => {
    const date = new Date().toLocaleDateString()
    applicationState.userChoices.dateSent = date
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(applicationState.userChoices)
    }


    return fetch(`${API}/sentLetters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

        })
}

//Fetch - getting Authors
const API = "http://localhost:8088"

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (authors) => {
                applicationState.authors = authors
            }
        )
}
//Fetch - getting Topics
export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (topics) => {
                applicationState.topics = topics
            }
        )
}
//Fetch - getting Recipients
export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (recipients) => {
                applicationState.recipients = recipients
            }
        )
}
//Fetch - getting SentLetters
export const fetchSentLetters = () => {
    return fetch(`${API}/sentLetters`)
        .then(response => response.json())
        .then(
            (sentLetters) => {
                applicationState.sentLetters = sentLetters
            }
        )
}

//export function that returns a copy of the application state authors
export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}
//export function that returns a copy of the application state topics
export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}
//export function that returns a copy of the application state recipients
export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}
//export function that returns a copy of the application state sentLetters
export const getSentLetters = () => {
    return applicationState.sentLetters.map(sentLetter => ({...sentLetter}))
}


export const setAuthorId = (id) => {
    applicationState.userChoices.authorId = id
}
export const setTopicId = (id) => {
    applicationState.userChoices.topicId = id
}
export const setRecipientId = (id) => {
    applicationState.userChoices.recipientId = id
}
export const setLetterStr = (str) => {
    applicationState.userChoices.letter = str
}

