import { Route, Routes } from "react-router-dom";
import ContactsPage from "../../Pages/ContactsPage/ContactsPage";
import Layout from "../Layout";
import HomePage from "../../Pages/HomePage/HomePage";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
