import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import s from "./Header.module.css";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const navigete = useNavigate();
  const dispatch = useDispatch();
  const logoutClick = () => {
    dispatch(logout());
    navigete("/login");
  };
  return (
    <header className={s.header}>
      {isLoggedIn && (
        <h2 className={s.title}>
          Welcome: <span>{user.name}</span>
        </h2>
      )}
      {isLoggedIn && (
        <button className={s.button} onClick={logoutClick}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
