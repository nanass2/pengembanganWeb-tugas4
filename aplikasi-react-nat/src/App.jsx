import { useState, useEffect } from 'react';
import ContactForm from './components/contactForm';
import ContactList from './components/contactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('my-contacts');
    if (saved) setContacts(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('my-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, phone) => {
    const newContact = { id: Date.now(), name, phone };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '500px' }}>
      <h1>Aplikasi Daftar Kontak</h1>

      <ContactForm onAdd={addContact} />

      <input
        type="text"
        placeholder="Cari kontak..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
      />

      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;