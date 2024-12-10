'use client'
import React, { useState } from 'react';

const Notes: React.FC = () => {
  const [notes, setNotes] = useState([
    {
      title: "1. Bubble Sort",
      description:
        'Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order'
    },
    {
      title: '2. Selection Sort',
      description:
        'Selection Sort is an intuitive sorting algorithm that works by selecting the smallest (or largest) element from the unsorted part of the array and moving it to the sorted part.',
    },
  ]);

  const [newNote, setNewNote] = useState({ title: '', description: '' });

  const handleAddNote = () => {
    if (newNote.title.trim() && newNote.description.trim()) {
      setNotes([...notes, newNote]);
      setNewNote({ title: '', description: '' }); // Reset the input fields
    } else {
      alert('Please fill in both the title and description.');
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto my-20 px-4">
      <section aria-labelledby="notes-title">
        <h2 id="notes-title" className="text-2xl font-bold text-center mb-8">
          Notes
        </h2>
        {notes.map((note, index) => (
          <article
            key={index}
            className="rounded-box glass p-4 px-8 my-4 hover:scale-105 transition-transform"
            role="region"
            aria-labelledby={`note-title-${index}`}
          >
            <h4
              id={`note-title-${index}`}
              className="text-lg text-accent font-bold"
            >
              {note.title}
            </h4>
            <p className="text-justify">{note.description}</p>
          </article>
        ))}
      </section>

      {/* Add Note Section */}
      <div className="bg-gray-800 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-semibold mb-4">Add a New Note</h3>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Title"
            value={newNote.title}
            onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
            className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            placeholder="Description"
            value={newNote.description}
            onChange={(e) => setNewNote({ ...newNote, description: e.target.value })}
            className="w-full p-2 border rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-accent"
          ></textarea>
        </div>
        <button
          onClick={handleAddNote}
          className="px-4 py-2 bg-accent text-accent-content rounded-md hover:bg-green-600"
        >
          Add Note
        </button>
      </div>
    </div>
  );
};

export default Notes;