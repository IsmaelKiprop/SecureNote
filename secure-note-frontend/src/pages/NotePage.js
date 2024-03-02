import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { useParams } from 'react-router-dom'; // Removed useHistory import

const NotePage = () => {
  const { pk } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    fetchNote();
  }, []); // Empty dependency array

  const fetchNote = async () => {
    try {
      const response = await axios.get(`/api/notes/${pk}/`, {
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
      await axios.post(`/api/notes/create`, note, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      });
      window.location.href = '/notes'; // Navigate to '/notes' page
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const updateNote = async () => {
    try {
      await axios.put(`/api/notes/${pk}/update/`, note, {
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
      await axios.delete(`/api/notes/${pk}/delete/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      });
      window.location.href = '/notes'; // Navigate to '/notes' page
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const handleSubmit = () => {
    if (!note) return;
    if (!pk && note.body) {
      createNote();
    } else if (pk && !note.body) {
      deleteNote();
    } else {
      updateNote();
    }
  };

  const handleChange = (value) => {
    setNote(prevNote => ({ ...prevNote, 'body': value }));
  };

  const handleArrowLeftClick = () => {
    handleSubmit();
  };

  const handleDeleteButtonClick = () => {
    deleteNote();
  };

  const handleDoneButtonClick = () => {
    handleSubmit();
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleArrowLeftClick} />
        </h3>
        {pk ? (
          <button onClick={handleDeleteButtonClick}>Delete</button>
        ) : (
          <button onClick={handleDoneButtonClick}>Done</button>
        )}
      </div>
      <textarea onChange={(e) => handleChange(e.target.value)} value={note?.body}></textarea>
    </div>
  );
};

export default NotePage;