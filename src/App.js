import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { onLogin } from "./services/toursServices";
import { useState, useEffect } from "react";
import "./assets/styles/main.css";
import { Footer } from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { Top } from "./components/Top/Top";
import { Login } from "./components/Login/Login";
import { Registration } from "./components/Registration/Registration";
import { About } from "./components/About/About";
import { Services } from "./components/Serv/Services";
import { Tours } from "./components/Tours/Tours";
import { Tour } from "./components/Tour/Tour";
import { Terms } from "./components/Terms/Terms";
import { Privacy } from "./components/Privacy/Privacy";
import { Support } from "./components/Support/Support";
import { Contacts } from "./components/Contacts/Contacts";

function App() {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState("");
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
        setError("Invalid credentials");
        return;
      }
      setError("");
      setUser(res);
      localStorage.setItem("user", JSON.stringify(res));
      setLogged(true);
    });
  };
  const context = {
    logged,
    user,
    login,
    error,
  };
  return (
    <AuthContext.Provider value={{ ...context }}>
      <Top />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tour/:id" element={<Tour />} />
        <Route path="/user" element={<Registration />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<h1>Page doesn't exist!</h1>} />
      </Routes>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;