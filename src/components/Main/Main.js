import { setTitle } from "../../utils/utils";
import { getPromotions, getTop } from "../../services/toursServices";
import { useState, useEffect } from "react";
import { Header } from "../Header/Header";
import { TopOffers } from "./TopOffers/TopOffers";
import { Imagination } from "./Imagination/Imagination";
import { Explore } from "./Explore/Explore";
import { Promotion } from "./Promotion/Promotion";

const Main = () => {
  document.title = "TraveleR";
  const [tours, setTours] = useState([]);
  const [promotions, setPromotions] = useState([]);
  useEffect(() => {
    getTop()
      .then((data) => {
        setTours(data);
      })
      .then(getPromotions().then((result) => setPromotions(result)));
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main>
        <TopOffers tours={tours} />
        <Imagination />
        <Explore />
        <Promotion promotions={promotions} />
      </main>
    </>
  );
};

export default Main;
