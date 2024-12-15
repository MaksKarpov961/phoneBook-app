import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home page</NavLink>
          </li>
          <li>
            <NavLink to={"/contacts"}>Contacts</NavLink>
          </li>
          {!isLoggedIn && (
            <ul>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>
          )}
        </ul>
      </nav>
      {isLoggedIn && <h2>Welcome: {user.name}</h2>}
      {isLoggedIn && <button onClick={() => dispatch(logout())}>Logout</button>}
    </header>
  );
};

export default Header;
