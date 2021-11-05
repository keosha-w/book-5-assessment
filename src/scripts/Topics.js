//Responsibility - Generate HTML for Topics radio buttons

import { getTopics } from "./dataAccess.js"

export const Topics = () => {
    const topics = getTopics()

    return `
        <label for="topics"><h3>Topics</h3></label>
        ${
            topics.map(
                (topic) => {
                    return `
                    <div>
                        <input type="radio" value="${topic.id}" /> ${topic.topic}
                    </div>
                    `
                }).join("")
        }
    `
}