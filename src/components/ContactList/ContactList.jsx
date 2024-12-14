import { useSelector } from "react-redux";
import Contact from "./Contact/Contact";

import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contactList = useSelector(selectFilteredContacts);
  if (!contactList) return;

  return (
    <section>
      <ul className={s.contactsList}>
        {contactList.map(({ id, name, number }) => (
          <li key={id}>
            <Contact name={name} number={number} id={id} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactList;
