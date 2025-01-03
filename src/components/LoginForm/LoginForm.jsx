import { Field, Form, Formik } from "formik";
import s from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const LoginForm = () => {
  const navigete = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(login(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome ${res?.user?.name}`);
        navigete("/");
      })
      .catch(() => toast.error("Failed to Login!"));
    options.resetForm();
  };
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className={s.wrapper}>
      <h2>Login</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field required name="email" placeholder="Enter email" />
          <Field
            required
            name="password"
            type="password"
            placeholder="Enter pass"
          />
          <button className={s.btnLoggin} type="submit">
            Login
          </button>
          <p className={s.descr}>or</p>
          <button
            className={s.btnLink}
            type="button"
            onClick={() => {
              navigete("/register");
            }}
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
