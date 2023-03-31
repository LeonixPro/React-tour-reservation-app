// import styles from "./Main.module.css";
import { getTop } from "../../services/toursServices";
import { useState, useEffect } from "react";
import { Header } from "../Header/Header";
import { TopOffers } from "./TopOffers/TopOffers";
import { Imagination } from "./Imagination/Imagination";
import { Explore } from "./Explore/Explore";
import { Promotion } from "./Promotion/Promotion";

const Main = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    getTop().then((data) => {
      setTours(data);
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main>
        <TopOffers tours={tours} />
        <Imagination />
        <Explore />
        <Promotion />
      </main>
    </>
  );
};

export default Main;
