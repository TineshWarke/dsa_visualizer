'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

interface Note {
    title: string;
    description: string;
}
const Notes: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [newNote, setNewNote] = useState<Note>({ title: '', description: '' });

    const handleAddNote = async () => {
        try {
            if (typeof window !== "undefined") {
                const storedUser = localStorage.getItem("user");
                if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    const response = await axios.post("/api/notes", { email: parsedUser.email, topic: 'Arrays', note: newNote });
                    setNewNote({ title: '', description: '' })
                    getAllNotes();
                    toast.success(response.data.msg);
                }
            } else {
                toast.error("An error occurred");
            }
        } catch (error) {
            const errorMessage =
                axios.isAxiosError(error) && error.response?.data?.error
                    ? error.response.data.error
                    : "An error occurred";
            console.log(errorMessage);
        }
    };

    const getAllNotes = async () => {
        try {
            if (typeof window !== "undefined") {
                const storedUser = localStorage.getItem("user");
                if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    const response = await axios.put("/api/topic", { email: parsedUser.email });
                    const { topicData } = response.data
                    setNotes(topicData[0].notes)
                }
            }
        } catch (error) {
            const errorMessage =
                axios.isAxiosError(error) && error.response?.data?.error
                    ? error.response.data.error
                    : "An error occurred";
            toast.error(errorMessage);
        }
    }

    const deleteNote = async (title: string) => {
        try {
            if (typeof window !== "undefined") {
                const storedUser = localStorage.getItem("user");
                if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    const response = await axios.put("/api/notes", { email: parsedUser.email, topic: 'Arrays', title: title });
                    getAllNotes();
                    toast.success(response.data.msg);
                }
            } else {
                toast.error("An error occurred");
            }
        } catch (error) {
            const errorMessage =
                axios.isAxiosError(error) && error.response?.data?.error
                    ? error.response.data.error
                    : "An error occurred";
            toast.error(errorMessage);
        }
    }

    useEffect(() => {
        getAllNotes();
    }, [])

    return (
        <>
            <ToastContainer position='top-center'/>
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
                            <div className='flex items-center justify-between'>
                                <h4
                                    id={`note-title-${index}`}
                                    className="text-lg text-accent font-bold"
                                >
                                    {note.title}
                                </h4>
                                <button className='text-red-500 hover:text-red-800' onClick={() => deleteNote(note.title)}>Delete</button>
                            </div>
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
                        className={`px-8 py-2 bg-accent text-accent-content rounded-md hover:bg-green-600 active:scale-90`}
                    >
                        Add Note
                    </button>
                </div>
            </div>
        </>
    );
};

export default Notes;
