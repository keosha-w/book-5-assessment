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


export const setAuthorId = (id) => {
    applicationState.userChoices.authorId = id
}
export const setTopicId = (id) => {
    applicationState.userChoices.topicId = id
}
export const setRecipientId = (id) => {
    applicationState.userChoices.recipientId = id
}

