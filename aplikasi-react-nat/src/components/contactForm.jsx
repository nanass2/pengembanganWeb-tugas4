import { useState } from 'react';

function ContactForm({ onAdd }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    onAdd(name, phone);
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '15px' }}>
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '8px', marginRight: '5px' }}
      />
      <input
        type="text"
        placeholder="No. HP"
        value={phone}
        onChange={(e) => {
          const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
          setPhone(onlyNumbers)
        }}
        style={{ padding: '8px', marginRight: '5px' }}
      />
      <button type="submit" style={{ padding: '8px' }}>Tambah</button>
    </form>
  );
}

export default ContactForm;