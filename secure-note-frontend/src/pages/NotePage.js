import React, { useState, useEffect } from 'react';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { useParams, useHistory } from 'react-router-dom';

const NotePage = () => {
  const { id } = useParams();
  const history = useHistory();

  const [note, setNote] = useState(null);

  useEffect(() => {
    if (id !== 'new') {
      getNote();
    }
  }, [id]);

  const getNote = async () => {
    try {
      const response = await fetch(`/api/notes/${id}`);
      const data = await response.json();
      setNote(data);
    } catch (error) {
      console.error('Error fetching note:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      if (id === 'new') {
        await createNote();
      } else {
        await updateNote();
      }
      history.push('/');
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const createNote = async () => {
    try {
      const response = await fetch(`/api/notes/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      });
      if (response.ok) {
        const data = await response.json();
        console.log('New note created:', data);
      } else {
        console.error('Failed to create note:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const updateNote = async () => {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Note updated:', data);
      } else {
        console.error('Failed to update note:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const handleChange = (value) => {
    setNote(prevNote => ({ ...prevNote, body: value }));
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        <button onClick={handleSubmit}>{id === 'new' ? 'Create' : 'Update'}</button>
      </div>
      <textarea onChange={(e) => handleChange(e.target.value)} value={note?.body || ''}></textarea>
    </div>
  );
};

export default NotePage;