import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { useHistory, useParams } from 'react-router-dom';

const NotePage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetchNote();
  }, []);

  const fetchNote = async () => {
    try {
      const response = await axios.get(`/api/notes/${id}/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      });
      setNote(response.data);
    } catch (error) {
      console.error('Error fetching note:', error);
    }
  };

  const createNote = async () => {
    try {
      await axios.post(`/api/notes/`, note, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      });
      history.push('/');
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const updateNote = async () => {
    try {
      await axios.put(`/api/notes/${id}/`, note, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      });
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const deleteNote = async () => {
    try {
      await axios.delete(`/api/notes/${id}/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      });
      history.push('/');
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const handleSubmit = () => {
    if (!note) return;
    if (id === 'new' && note.body) {
      createNote();
    } else if (id !== 'new' && note.body === '') {
      deleteNote();
    } else {
      updateNote();
    }
  };

  const handleChange = (value) => {
    setNote(prevNote => ({ ...prevNote, 'body': value }));
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        {id !== 'new' ? (
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