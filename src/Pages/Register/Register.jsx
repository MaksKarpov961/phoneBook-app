import RegisterForm from "../../components/RegisterForm/RegisterForm";
import phoneImage from "../../Img/4298345.png";
import s from "./Register.module.css";
const Register = () => {
  return (
    <div>
      <h1 className={s.title}>Welcome to Phonebook </h1>
      <img className={s.img} src={phoneImage} alt="Phone" />
      <RegisterForm />
    </div>
  );
};

export default Register;
