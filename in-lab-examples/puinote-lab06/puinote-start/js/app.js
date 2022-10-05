// We use this class to represent our notecards. Each notecard object contains
// data for a single note, and a reference to a DOM element corresponding to
// that notecard.
class Notecard {

  // When we create a new Notecard object, the "constructor"
  // function is run. In the constructor, "this" refers to the
  // newly created Notecard object.
  constructor(imageURL, title, body) {
    this.noteImageURL = imageURL;
    this.noteTitle = title;
    this.noteBody = body;

    this.element = null;
  }
}

// Create an empty Set, which will hold all of our notecard objects. A Set is
// similar to an Array, but in a Set, an item can only be added once (there
// are no duplicates). Sets also allow for easy removal of items, using the
// Set.delete(item) function.
const notecardSet = new Set();

// This function creates a new Notecard object, and adds it to notecardSet.
function addNewNote(imageURL, title, body) {
  // Create a new notecard object. The Notecard constructor takes three
  // arguments: the image URL, title text,  and body text.
  const notecard = new Notecard(imageURL, title, body);

  // Add the notecard object to our notecard Set, which keeps track of all
  // the notecards in our application.
  notecardSet.add(notecard);

  return notecard;
}

function createElement(notecard) {
  // make a clone of the notecard template
  const template = document.querySelector('#notecard-template');
  const clone = template.content.cloneNode(true);
  
  // connect this clone to our notecard.element
  // from this point we only need to refer to notecard.element
  notecard.element = clone.querySelector('.notecard');

  const btnDelete = notecard.element.querySelector('.icon-delete');
  console.log(btnDelete);
  btnDelete.addEventListener('click', () => {
    deleteNote(notecard);
  });
  
  // add the notecard clone to the DOM
  // find the notecard parent (#notecard-list) and add our notecard as its child
  const notecardListElement = document.querySelector('#notecard-list');
  notecardListElement.prepend(notecard.element);
  
  // populate the notecard clone with the actual notecard content
  updateElement(notecard);
}

function updateElement(notecard) {
  // get the HTML elements that need updating
  const noteImageElement = notecard.element.querySelector('.notecard-thumbnail');
  const noteTitleElement = notecard.element.querySelector('.note-title');
  const noteBodyElement = notecard.element.querySelector('.note-body');
  
  // copy our notecard content over to the corresponding HTML elements
  noteImageElement.src = notecard.noteImageURL;
  noteTitleElement.innerText = notecard.noteTitle;
  noteBodyElement.innerText = notecard.noteBody;
}

function deleteNote(notecard) {
  // remove the notecard DOM object from the UI
  notecard.element.remove();

  // remove the actual Notecard object from our set of notecards
  notecardSet.delete(notecard);

  saveToLocalStorage();
}


/**** EXERCISE 6 CODE BELOW ***************************************************/

// gathering all the info we need to make a new note
// then calling on addNewNote function to create a new Notecard object
function submitNote() {

  // for the elements that we are interested in selecting
  // queryselector to grab a reference to title input element
  const noteEditorTitle = document.querySelector('#note-editor-title');
  // read the value (user input) and store it in a variable
  const editorTitleText = noteEditorTitle.value;

  // for the note body
  const noteEditorBody = document.querySelector('#note-editor-body');
  const editorBodyText = noteEditorBody.value;

  // for the note image -- here we want to store the src attribute
  const noteEditorImage = document.querySelector('#note-editor-image');
  const editorImageURL = noteEditorImage.src;

  // create .notecard element and add it ot browser window
  const notecard = addNewNote(editorImageURL, editorTitleText, editorBodyText);
  createElement(notecard);

  // Nothing here yet!
  console.log("Submitted Note!")

  // call saveToLocalStorage whenever note is created
  saveToLocalStorage();
}


// saving notes with local storage -- turn notecardSet into a string of text that we can save using JSON.stringify() function
function saveToLocalStorage() {

  // converting our notecardSet into an Array of objects -- will be easier to turn into text
  const notecardArray = Array.from(notecardSet);
  console.log(notecardArray);

  // using JSON.stringify() to convert JS array into string of text
  // log the results (both Array + the string)
  const notecardArrayString = JSON.stringify(notecardArray);
  console.log(notecardArrayString);

  // use locatStorage.setItem to save this text
  // use the key storedNotes to save this string
  localStorage.setItem('storedNotes', notecardArrayString);
}


// retrieving notes from local storage

function retrieveFromLocalStorage() {

  // grabbing note data string and storing it as a variable
  const notecardArrayString = localStorage.getItem('storedNotes');

  // change notecardArrayString into a JS array
  const notecardArray = JSON.parse(notecardArrayString);

  // for each object in the array, we will create a new notecared object and add a .notecard element to window
  // use a for...of loop to iterate through notecardArray,
  // use addNewNote + createElement funcitons to repopulation page
  for (const noteData of notecardArray) {
    cost notecard = addNewNote(noteData.noteImageURL, notedata.noteTitle, noteData.notebody);
    createElement(notecard);
  }
}
// update localStorage after a note has been removved