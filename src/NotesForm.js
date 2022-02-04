import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function NotesForm({select}) {
  const [notes, setNotes] = useState("");

  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      notes: notes
    };
console.log(select)
    fetch(`https://crypto-mock-server.herokuapp.com/currencies/${select}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newNotes) => {
        history.push('/favorites')
      }
      )
    }


  return (
    <FormStyle>
      <form onSubmit={handleSubmit}>
        <label style={{fontSize: '18px'}}>
          Notes: 
          <input
            type="text"
            id="notes"
            placeholder="Insert notes here"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            style={{fontSize: '18px'}}
          />
        </label>
        <button type="submit" style={{fontSize: '18px'}}>Add Notes</button>
      </form>
    </FormStyle>
  );
}

export default NotesForm;

const FormStyle = styled.div` 
    margin-left: 34%;
    width: 40%;
    padding: 10px;
`