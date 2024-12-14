import { RiContactsFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../../redux/contacts/operations";
const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrapperContact}>
      <div className={s.wrapperdescr}>
        <div className={s.descr}>
          <RiContactsFill className={s.icon} />
          <p className={s.descr_text}>{name}</p>
        </div>
        <a className={s.descr} href={`tel:${number}`}>
          <FaPhone className={s.icon} />
          <p className={s.descr_text}>{number}</p>
        </a>
      </div>
      <div className={s.buttonsWrapper}>
        <button
          onClick={() => dispatch(deleteContacts(id))}
          className={s.button_delete}
          type="button"
        >
          Delete
        </button>
        <button className={s.button_edit} type="button">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Contact;
