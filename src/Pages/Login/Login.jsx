import LoginForm from "../../components/LoginForm/LoginForm";
import phoneImage from "../../Img/4298345.png";
import s from "./Login.module.css";

const Login = () => {
  return (
    <div>
      <img className={s.img} src={phoneImage} alt="Phone" />
      <LoginForm />
    </div>
  );
};

export default Login;
