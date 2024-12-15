import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

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
    <header>
      {isLoggedIn && <h2>Welcome: {user.name}</h2>}
      {isLoggedIn && <button onClick={logoutClick}>Logout</button>}
    </header>
  );
};

export default Header;
