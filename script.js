const textarea = document.querySelector("#textarea");
const paragraphs = document.querySelector("#paragraph");
const sentences = document.querySelector("#sentence");
const spaces = document.querySelector("#space");
const letters = document.querySelector('#letter');
const words = document.querySelector('#word');
const digits = document.querySelector('#digit');
const specialChar = document.querySelector('#special-character');
const characters = document.querySelector('#character');

textarea.addEventListener("input", () => {
    const input = textarea.value;

    let sent = input.split(/[.!?]/).filter(sentence => sentence.trim().length > 0).length;
    sentences.textContent = sent;

    let space = (input.match(/ /g) || []).length;
    spaces.textContent = space;

    let para = input.split('\n').filter(paras => paras.trim().length > 0).length;
    paragraphs.textContent = para;

    let lett = (input.match(/[a-zA-Z]/g) || []).length;
    letters.textContent = lett;

    let word = input.trim().split(/\s+/).filter(word => word.length > 0).length;
    words.textContent = word;

    let digi = (input.match(/\d/g) || []).length;
    digits.textContent = digi;

    let sChar = (input.match(/[^a-zA-Z\d\s]/g) || []).length;
    specialChar.textContent = sChar;

    let char = input.length;
    characters.textContent = char;
});
