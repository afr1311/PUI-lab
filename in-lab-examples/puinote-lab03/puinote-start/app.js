console.log('Started Application.');

function updateElement() {
    console.log('Running the updateElement function!')

    notecard.element = document.querySelector('#notecard-one');

    const noteImageElement = notecard.element.querySelector('.notecard-thumbnail');
    const noteTitleElement = notecard.element.querySelector('.note-title');
    const noteBodyElement = notecard.element.querySelector('.note-body');

    noteImageElement.src = notecard.noteImageURL;
    noteTitleElement.innerText = notecard.noteTitle;
    noteBodyElement.innerText = notecard.noteBody;
}


const notecard =
{
    noteTitle: 'This is the Title of the Note!',
    noteBody: 'And here is the body of the note.',
    noteImageURL: 'assets/warhol-ram.png'
};


function submitNote() {
    console.log("This is where we wil grab input and then update the notecard.");

    updateElement();
}