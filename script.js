let undoStack = [];
let redoStack = [];
const textArea = document.getElementById('textArea');
const textContent = document.getElementById('textContent');
textArea.addEventListener('input', () => {
    undoStack.push(textContent.innerHTML);
});
document.getElementById('undo').addEventListener('click', () => {
    if (undoStack.length > 0) {
        const lastState = undoStack.pop();
        redoStack.push(textContent.innerHTML);
        textContent.innerHTML = lastState;
    }
});
document.getElementById('redo').addEventListener('click', () => {
    if (redoStack.length > 0) {
        const lastState = redoStack.pop();
        undoStack.push(textContent.innerHTML);
        textContent.innerHTML = lastState;
    }
});
document.getElementById('fontStyle').addEventListener('change', (e) => {
    textContent.style.fontFamily = e.target.value;
});
document.getElementById('fontSize').addEventListener('input', (e) => {
    textContent.style.fontSize = e.target.value + 'px';
});
document.getElementById('boldText').addEventListener('click', () => {
    textContent.style.fontWeight = textContent.style.fontWeight === 'bold' ? 'normal' : 'bold';
});
document.getElementById('italicText').addEventListener('click', () => {
    textContent.style.fontStyle = textContent.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

document.getElementById('underlineText').addEventListener('click', () => {
    textContent.style.textDecoration = textContent.style.textDecoration === 'underline' ? 'none' : 'underline';
});