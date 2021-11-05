//Responsibility - Generate HTML for Topics radio buttons

import { getTopics, setTopicId } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")


export const Topics = () => {
    const topics = getTopics()

    return `
        <label for="topics"><h3>Topics</h3></label>
        ${
            topics.map(
                (topic) => {
                    return `
                    <div>
                        <input type="radio" name="topics" value="${topic.id}" /> ${topic.topic}
                    </div>
                    `
                }).join("")
        }
    `
}

//change event - when user selects author - authorName sent to application state
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.type === "radio") {
        setTopicId(parseInt(clickEvent.target.value))
    }
})