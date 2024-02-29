import React, { useState, useEffect } from 'react';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

const NotePage = ({ match, history }) => {
    const noteId = match.params.id;
    const [note, setNote] = useState(null);

    useEffect(() => {
        getNote();
    }, [getNote, noteId]);

    const getNote = async () => {
        if (noteId === 'new') return;
        const response = await fetch(`/api/notes/${noteId}/`);
        const data = await response.json();
        setNote(data);
    };

    const createNote = async () => {
        await fetch(`/api/notes/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        });
    };

    const updateNote = async () => {
        await fetch(`/api/notes/${noteId}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        });
    };

    const deleteNote = async () => {
        await fetch(`/api/notes/${noteId}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        history.push('/');
    };

    const handleSubmit = () => {
        if (noteId !== 'new' && note.body === '') {
            deleteNote();
        } else if (noteId !== 'new') {
            updateNote();
        } else if (noteId === 'new' && note.body !== null) {
            createNote();
        }
        history.push('/');
    };

    const handleChange = (value) => {
        setNote(prevNote => ({ ...prevNote, 'body': value }));
    };

    return (
        <div className="note" >
            <div className="note-header">
                <h3>
                    <ArrowLeft onClick={handleSubmit} />
                </h3>
                {noteId !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}
            </div>
            <textarea onChange={(e) => handleChange(e.target.value)} value={note?.body}></textarea>
        </div>
    );
};

export default NotePage;