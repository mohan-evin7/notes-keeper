import React, { useState } from 'react';
import './App.css';

import Header from '../src/components/Header'
import Note from './components/Note'
import Create from './components/Create'


function App() {

  

  const [notes, setNotes] = useState([]);

  function addnote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <Create  onAdd={addnote}/>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          
          />
        );
      })}
    </div>
  );
}

export default App;
