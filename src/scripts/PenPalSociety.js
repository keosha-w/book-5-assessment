//Responsibility -- generate HTML for the overll webpage

import { Authors } from "./Authors.js"
import { Letter, RenderSentLetter } from "./letter.js"
import { Recipients } from "./Recipients.js"
import { SendLetter } from "./SendLetter.js"
import { Topics } from "./Topics.js"

export const PenPalSociety = () => {
    return `
    <h1>Pen Pal Society</h1>
        <section class="authorsDropdown">
        <h3>Author</h3>
        ${Authors()}
        ${Letter()}
        ${Topics()}
        ${Recipients()}
        ${SendLetter()}
        ${RenderSentLetter()}
        </section>
    `
}