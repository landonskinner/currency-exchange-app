import React, { useState } from "react";

function NotesForm() {
  const [notes, setNotes] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      notes: notes
    };

    fetch("http://localhost:4000/currencies/1", {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newNotes) => {
        console.log(newNotes);
      }
      )}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Notes:
          <input
            type="text"
            id="notes"
            placeholder="Insert notes here"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </label>
        <button type="submit">Add Notes</button>
      </form>
    </div>
  );
}

export default NotesForm;
