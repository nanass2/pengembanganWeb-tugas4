import ContactItem from './contactItem';

function ContactList({ contacts, onDelete }) {
  if (contacts.length === 0) return <p>Belum ada kontak.</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default ContactList;