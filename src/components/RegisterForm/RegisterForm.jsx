import { Field, Form, Formik } from "formik";
import s from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const navigete = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => {
        toast(`Welcome ${res?.user?.name}`);
        navigete("/");
      })
      .catch(() => toast.error("Failed to register!"));
    options.resetForm();
  };
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <div className={s.wrapper}>
      <h2>Register</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field name="name" placeholder="Enter name" />
          <Field name="email" placeholder="Enter email" />
          <Field name="password" type="password" placeholder="Enter pass" />
          <button type="submit">Register</button>
          <p className={s.descr}>or</p>
          <button
            type="button"
            onClick={() => {
              navigete("/login");
            }}
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default RegisterForm;
