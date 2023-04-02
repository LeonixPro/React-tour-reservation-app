import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { onLogin } from "./services/authServices";
import { onRegister } from "./services/authServices";
import { useState, useEffect } from "react";
import "./assets/styles/main.css";
import { Footer } from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { Top } from "./components/Top/Top";
import { Login } from "./components/Login/Login";
import { Registration } from "./components/Registration/Registration";
import { editUser } from "./services/authServices";
import { About } from "./components/About/About";
import { Services } from "./components/Service/Services";
import { Tours } from "./components/Tours/Tours";
import { Tour } from "./components/Tour/Tour";
import { Terms } from "./components/Terms/Terms";
import { Privacy } from "./components/Privacy/Privacy";
import { Support } from "./components/Support/Support";
import { Contacts } from "./components/Contacts/Contacts";
import { Profile } from "./components/User/Profile/Profile";
import { ProtectedRoutes, GuestsRoutes } from "./services/ProtectedRoutes";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const [loginError, setELoginError] = useState(null);
  const [regError, setRegError] = useState(null);
  const [editMessage, setEditMessage] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setLogged(true);
      setUser(foundUser);
    }
  }, []);
  const login = (data) => {
    onLogin(data).then((res) => {
      if (!res) {
        setELoginError("Invalid credentials");
        setTimeout(() => {
          setELoginError(null);
        }, 3000);
        return;
      }
      setELoginError(null);
      setUser(res);
      localStorage.setItem("user", JSON.stringify(res));
      setLogged(true);
    });
  };
  const registration = (data) => {
    if (!logged) {
      onRegister(data).then((result) => {
        if (result.status === false) {
          setRegError(result.message);
          return;
        }
        setRegError(null);
        setUser(result);
        localStorage.setItem("user", JSON.stringify(result));
        setLogged(true);
      });
    }
  };
  const edit = (data) => {
    editUser(data, user.u_id).then((res) => {
      if (!res) return;
      const profile = {
        ...JSON.parse(localStorage.getItem("user")),
        ...data,
      };
      localStorage.setItem("user", JSON.stringify(profile));
      setEditMessage("Information has been updated");
      setTimeout(() => {
        setEditMessage(null);
      }, 3000);
      setUser(profile);
    });
  };
  const logOut = () => {
    localStorage.clear();
    setLogged(false);
    setUser({});
    navigate("/");
  };
  const context = {
    logged,
    user,
    login,
    registration,
    edit,
    logOut,
    loginError,
    regError,
    editMessage,
  };
  return (
    <AuthContext.Provider value={{ ...context }}>
      <Top />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route element={<GuestsRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tour/:id" element={<Tour />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/support" element={<Support />} />
        <Route element={<ProtectedRoutes />}>
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/profile/*" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
