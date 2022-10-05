<<<<<<< Updated upstream
// We use this class to represent our notecards. Each notecard object contains
// data for a single note, and a reference to a DOM element corresponding to
// that notecard.
=======
// Below is the final code from last week's exercise:

// difference between array and set - can't repeat elements in set

>>>>>>> Stashed changes
class Notecard {
  title;
  body;
  imageURL;
  element;

  constructor(title, body, imageURL) {
    this.title = title;
    this.body = body;
    this.imageURL = imageURL;
  }

  createElement() {
    console.log('creating');
  }

}

let notecardSet = new Set();

function addNewNote(title, body, imageURL) {
  let notecard = new Notecard(title, body, imageURL);
  notecardSet.add(notecard);
  return notecard;
}

let notecardOne = addNewNote(
  "My first note",
  "My first note is very short",
  "assets/warhol-rhino.png"
);

console.log(notecardSet);

<<<<<<< Updated upstream
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
    const template = document.querySelector('#notecard-template');
    const clone = template.content.cloneNode(true);
    notecard.element = clone.querySelector('.notecard');
  
    const btnDelete = notecard.element.querySelector('.icon-delete');
    console.log(btnDelete);
    btnDelete.addEventListener('click', () => {
      deleteNote(notecard);
    });
  
    const notecardListElement = document.querySelector('#notecard-list');
    notecardListElement.prepend(notecard.element);
  
    updateElement(notecard);
  }
  

  // functions within a class are called methods, so you use different syntax and don't call them functions
  function updateElement(notecard) {
    const noteImageElement = notecard.element.querySelector('.notecard-thumbnail');
    const noteTitleElement = notecard.element.querySelector('.note-title');
    const noteBodyElement = notecard.element.querySelector('.note-body');
  
    noteImageElement.src = notecard.noteImageURL;
    noteTitleElement.innerText = notecard.noteTitle;
    noteBodyElement.innerText = notecard.noteBody;
  }
  
  function deleteNote(notecard) {
    notecard.element.remove();
    notecardSet.delete(notecard);
  }
  
  const notecardOne = addNewNote(
    "./assets/warhol-rhino.png",
    "The first note title",
    "The first note body"
  );
  const notecardTwo = addNewNote(
    "./assets/warhol-frog.png",
    "The second note title",
    "The second note body"
  );
  
  for (const notecard of notecardSet) {
    console.log(notecard);
    createElement(notecard);
  }

//   for (let item of notecardSet) {
//     ClipboardItem.createElement(() => {
//         deleteNote(item);
//     });
=======
// looping
for (let notecard of notecardSet) {
  notecard.createElement();

}



// class Notecard {
//   title;
//   body;
//   imageURL;
//   element;

//   constructor(imageURL, title, body, footer, elementID) {
//     this.noteImageURL = imageURL;
//     this.noteTitle = title;
//     this.noteBody = body;
// 		this.noteFooter = footer;

//     this.element = document.querySelector(elementID);
  
//     const btnExpand = this.element.querySelector('.icon-expand');
//     const btnCollapse = this.element.querySelector('.icon-collapse');
//     const btnDelete = this.element.querySelector('.icon-delete');

// 	  btnExpand.onclick = this.expandNote.bind(this);
// 	  btnCollapse.onclick = this.collapseNote.bind(this);
//     btnDelete.onclick = this.deleteNote.bind(this);

//     this.updateElement();
//   }

//   updateElement() {    
// 	  const noteImageElement = this.element.querySelector('.notecard-thumbnail');
// 	  const noteTitleElement = this.element.querySelector('.note-title');
// 	  const noteBodyElement = this.element.querySelector('.note-body');
// 	  const noteFooterElement = this.element.querySelector('.notecard-footer');

// 	  noteImageElement.src = this.noteImageURL;
// 	  noteTitleElement.innerText = this.noteTitle;
// 	  noteBodyElement.innerText = this.noteBody;
//     noteFooterElement.innerText = this.noteFooter;
// 	}

//   expandNote() {
//     this.element.classList.add('expanded');
//   }

//   collapseNote() {
//     this.element.classList.remove('expanded');
//   }

//   deleteNote() {
//     this.element.remove();
//   }

// }
>>>>>>> Stashed changes
