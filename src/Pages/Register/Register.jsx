import RegisterForm from "../../components/RegisterForm/RegisterForm";
import phoneImage from "../../Img/4298345.png";
import s from "./Register.module.css";
const Register = () => {
  return (
    <div>
      <img className={s.img} src={phoneImage} alt="Phone" />
      <RegisterForm />
    </div>
  );
};

export default Register;
