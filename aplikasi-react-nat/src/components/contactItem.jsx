function ContactItem({ contact, onDelete }) {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        marginBottom: '8px',
      }}
    >
      <div>
        <strong>{contact.name}</strong>
        <br />
        <small>{contact.phone}</small>
      </div>
      <button
        onClick={() => onDelete(contact.id)}
        style={{ color: 'red', cursor: 'pointer' }}
      >
        Hapus
      </button>
    </li>
  );
}

export default ContactItem;