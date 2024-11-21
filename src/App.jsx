import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import contactsData from "./components/Contact/contact.json";
import "./App.css";

const App = () => {
  // const [contacts, setContacts] = useState(contactsData);
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : contactsData;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  //   console.log(contacts);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="containerApp">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;