import { useSelector } from "react-redux";
import Contact from "./Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";
const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter?.toLowerCase())
  );

  return (
    <ul className={s.contactList}>
      {filteredData.map((contact) => (
        <li key={contact.id} className={s.contactListItem}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
