import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton';

const NotesListPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('/api/notes/', {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      });
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  return (
    <div>
      <h2>Notes List</h2>
      <ul>
        {notes.map(note => (
          <ListItem key={note.id} note={note} />
        ))}
      </ul>
      <AddButton />
    </div>
  );
};

export default NotesListPage;