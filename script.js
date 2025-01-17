// Select DOM elements
const noteForm = document.getElementById("noteForm");
const noteInput = document.getElementById("noteInput");
const noteColor = document.getElementById("noteColor");
const wall = document.getElementById("wall");

// Function to create a new sticky note
function createStickyNote(content, color) {
  // Create a new note element
  const note = document.createElement("div");
  note.classList.add("note");
  note.style.backgroundColor = color;

  // Add content to the note
  const noteText = document.createElement("p");
  noteText.textContent = content;
  note.appendChild(noteText);

  // Create a delete button for the note
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.onclick = function () {
    note.remove(); // Remove the note when the button is clicked
  };
  note.appendChild(deleteButton);

  // Append the note to the wall
  wall.appendChild(note);
}

// Event listener to handle form submission
noteForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the page from refreshing on form submission

  const noteContent = noteInput.value.trim(); // Get the note content
  const noteBgColor = noteColor.value; // Get the color selected by the user

  // Check if the input is not empty before creating the note
  if (noteContent) {
    createStickyNote(noteContent, noteBgColor);
  }

  // Clear the input field after submitting
  noteInput.value = "";
});
