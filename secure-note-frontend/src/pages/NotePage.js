import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton';

const NotePage = ({ match }) => {
    const history = useHistory();

    let noteId = match.params.id;
    let [note, setNote] = useState(null);

    useEffect(() => {
        getNote();
    }, [noteId]);

    let getNote = async () => {
        if (noteId === 'new') return;

        try {
            let response = await fetch(`/api/notes/${noteId}/`);
            let data = await response.json();
            setNote(data);
        } catch (error) {
            console.error('Error fetching note:', error);
        }
    };

    let createNote = async () => {
        try {
            await fetch(`/api/notes/`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(note)
            });
            history.push('/notes'); // Redirect to notes page after creation
        } catch (error) {
            console.error('Error creating note:', error);
        }
    };

    // Define updateNote, deleteNote, handleSubmit, handleChange functions...

    return (
        <div className="note">
            {/* Your JSX for the note page goes here... */}
        </div>
    );
};

export default NotePage;