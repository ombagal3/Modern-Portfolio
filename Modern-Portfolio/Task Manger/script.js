

//CRUD Operation create read update delete....

const note_container = document.getElementById("note-container");
const add_note_button = document.getElementById("add-note-button");
const titleInput = document.getElementById("title")
const descriptionInput = document.getElementById("description")
let isUpdate = false; 
let updateIndex = 0;

 let notes = [
//   {
//     title: "India Tech Today 2025",
//     description: "Lorem ipsum doler sitm amet consecture adisicing elit."

//   },
// {
//   title: "Om bagal Eng student",
//   description: "om bagal @93223918 call now and vist konw"

// },


];




const addNote = () => {
    const title = titleInput.value;
    const description = descriptionInput.value;
    const note = {
      title: title,
      description: description
    };
    notes.push(note)

    localStorage.setItem("notes-array", JSON.stringify(notes));

    displayNotes();

    titleInput.value = "";
  descriptionInput.value ="";

}
const displayNotes = () => {
  note_container.innerHTML = ""; 

  const data = localStorage.getItem("notes-array");

  if (data) {
    notes = JSON.parse(data);
  }



  notes.forEach((note,i) => {
    const div = document.createElement("div");
    div.className = "card w-50 m-2";
    div.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${note.title}</h5>
        <p class="card-text">${note.description}</p>
        <a href="#" onclick="startUpdate(${i})" class="btn btn-success">Edit</a>
        <a href="#" onclick="deleteNote(${i})" class="btn btn-danger">Delete</a>
      </div>`;
    note_container.appendChild(div);
  });
}

const deleteNote = (i) => {
  notes.splice(i, 1);
  localStorage.setItem("notes-array", JSON.stringify(notes));
  displayNotes();

}

const startUpdate = (i) => {
  isUpdate = true;
  updateIndex = i;
  titleInput.value = notes[i].title;
  descriptionInput.value = notes[i].description;
  add_note_button.textContent = "Update Note";


}
const updateNote = () => {
  notes[updateIndex].title = titleInput.value;
  notes[updateIndex].description = descriptionInput.value;
  localStorage.setItem("notes-array", JSON.stringify(notes));
  displayNotes();
  isUpdate = false;
  titleInput.value = "";
  descriptionInput.value = "";
  add_note_button.textContent = "Add Note"
}

displayNotes();

const handleAdd = () => {
  if(isUpdate){
    updateNote();

  }else{
    addNote();


  }
}

add_note_button.addEventListener("click", handleAdd);



















