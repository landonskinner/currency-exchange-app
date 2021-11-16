import React, { useState } from "react";

function NotesForm() {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    const formData = { description }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Notes:
          <input
            type="text"
            id="notes"
            placeholder="Insert notes here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Add Notes</button>
      </form>
    </div>
  );
}

export default NotesForm;
