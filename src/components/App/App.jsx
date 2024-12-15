import { Route, Routes } from "react-router-dom";
import ContactsPage from "../../Pages/ContactsPage/ContactsPage";
import Layout from "../Layout";

import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import PrivateRoute from "../PrivateRoute";
import RestrictedRoute from "../RestrictedRoute";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="/login"
        element={<RestrictedRoute component={<Login />} redirectTo="/" />}
      />
      <Route
        path="/register"
        element={<RestrictedRoute component={<Register />} redirectTo="/" />}
      />
    </Routes>
  );
};

export default App;
