// import styles from "./Main.module.css";
import { getTours } from "../../services/toursServices";
import { useState, useEffect } from "react";
import { Header } from "../Header/Header";
import { TopOffers } from "./TopOffers/TopOffers";
import { Imagination } from "./Imagination/Imagination";
import { Explore } from "./Explore/Explore";
import { Promotion } from "./Promotion/Promotion";

const Main = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    getTours().then((data) => {
      setTours(data);
    });
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
