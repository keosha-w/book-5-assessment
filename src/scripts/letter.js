//Responsibility - to generate the HTML for the letter input

export const Letter = () => {
    return `
        <div>
            <h3><label for"letterInput">Letter</label></h3>
            <textarea id="letterInput" name="letterInput" rows="25" cols="50"></textarea>
        </div>
    `
}