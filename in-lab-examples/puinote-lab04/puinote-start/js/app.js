console.log('Started Applicaiton.');

function updateElement() {
    console.log('Running the updateElement function!')

    const noteImageElement = document.querySelector('.notecard-thumbnail');
    console.log(noteImageElement);

    const noteImageElement = document.querySelector('.notecard-thumbnail');
    const noteTitleElement = document.querySelector('.note-title');
    const noteBodyElement = document.querySelector('.note-body');

    noteImageElement.src = notecard.noteImageURL;
    noteTitleElement.innerText = notecard.noteTitle;
    noteBodyElement.innerText = notecard.noteBody
}

const notecard =
{
    noteTitle: 'This is the Title of the Note!',
    noteBody: 'And here is the body of the note.',
    noteImageURL: 'assets/warhol-orangutan.png',
};