/* eslint-disable react/prop-types */
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

// eslint-disable-next-line react/prop-types
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.ul}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => onDeleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;