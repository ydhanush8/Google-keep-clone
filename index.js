const addTitle = document.getElementById('addTitle');
const add = document.getElementById('addText');
const addNoteButton = document.getElementById('addNote');
const notesDiv = document.getElementById('notes');

showNotes();

function addNotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notes = [];
    }
    else{
        notes = JSON.parse(notes);
    }
    if(addText.value == ''){
        alert('Add your note')
        return;
    }

    const noteObj = {
        title: addTitle.value,
        note: addText.value,
    }
    addTitle.value = '';
    addText.value = '';
    notes.push(noteObj)
    localStorage.setItem('notes',JSON.stringify(notes));
    showNotes();
}

function showNotes(){
    let notes = localStorage.getItem('notes');
    if(notes === null){
        return;
    }
    else{
        notes = JSON.parse(notes);
    }
    let notesHTML = '';

    // let date = new Date().toLocaleDateString("de-DE"); 12-1-23
    // let date = new Date().toLocaleDateString(); // 12/1/23  
    let date = new Date().toLocaleDateString();
    for(let i=0; i<notes.length; i++){
        notesHTML += `
        <div class="note">
        <div class="date">${date}</div>
        <button class="deleteNote" id=${i} onclick = "deleteNote(${i})" >Delete</button>
        <div class="title">${notes[i].title === ""?'-' : notes[i].title}</div>
        <div class="text">${notes[i].note}</div>
        </div>
        `
    }
    notesDiv.innerHTML = notesHTML;
    
}
function deleteNote(ind){
    let notes = localStorage.getItem('notes');
    if(notes === null){
        return;
    }
    else{
        notes = JSON.parse(notes);
    }
    notes.splice(ind, 1);
    localStorage.setItem('notes',JSON.stringify(notes));
    showNotes();
}

addNoteButton.addEventListener('click',addNotes);

// assignment

/*
1. Delete notes implementation  
*/