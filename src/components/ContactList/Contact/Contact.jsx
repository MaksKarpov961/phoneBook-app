import { useId, useState } from "react";
import Modal from "react-modal";
import { RiContactsFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import {
  deleteContacts,
  editContacts,
} from "../../../redux/contacts/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
Modal.setAppElement("#root");
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      "Invalid format! Expected format: XXX-XXX-XXXX"
    )
    .required("Required"),
});

const formatNumber = (value) => {
  const digits = value.replace(/\D/g, "");
  return digits
    .replace(/(\d{3})(\d{3})?(\d{4})?/, (match, g1, g2, g3) =>
      [g1, g2, g3].filter(Boolean).join("-")
    )
    .slice(0, 12);
};

const Contact = ({ name, number, id }) => {
  const initialValues = {
    name,
    number,
  };

  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    const updatedContact = {
      id,
      name: values.name,
      number: values.number,
    };
    console.log(updatedContact); // перевірте, чи коректно передається ID
    dispatch(editContacts(updatedContact)); // передаємо весь об'єкт
    closeModal();
    actions.resetForm();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <button onClick={openModal} className={s.button_edit} type="button">
          Edit
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Contact"
        className={s.modalContent}
        overlayClassName={s.overlay}
      >
        <h2>Edit Contact</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={FeedbackSchema}
        >
          {({ setFieldValue, values }) => (
            <Form className={s.form}>
              <div className={s.label_wrapper}>
                <label className={s.label} htmlFor={nameFieldId}>
                  Name
                </label>
                <Field
                  placeholder="Enter Name"
                  className={s.input}
                  type="text"
                  name="name"
                  id={nameFieldId}
                />
                <ErrorMessage
                  className={s.errprMessage}
                  name="name"
                  component="span"
                />
              </div>
              <div className={s.label_wrapper}>
                <label className={s.label} htmlFor={numberFieldId}>
                  Number
                </label>
                <Field name="number">
                  {({ field }) => (
                    <input
                      {...field}
                      placeholder="Enter Number"
                      className={s.input}
                      id={numberFieldId}
                      type="text"
                      value={formatNumber(values.number)}
                      onChange={(e) =>
                        setFieldValue("number", formatNumber(e.target.value))
                      }
                    />
                  )}
                </Field>
                <ErrorMessage
                  className={s.errprMessage}
                  name="number"
                  component="span"
                />
              </div>
              <button className={s.btn_submite} type="submit">
                Save Contact
              </button>
              <button
                onClick={closeModal}
                className={s.btn_submite}
                type="button"
              >
                Cancel
              </button>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default Contact;
