import { setTitle } from "../../utils/utils";
import { getPromotions, getTop } from "../../services/toursServices";
import { useState, useEffect } from "react";
import { Header } from "../Header/Header";
import { TopOffers } from "./TopOffers/TopOffers";
import { Imagination } from "./Imagination/Imagination";
import { Explore } from "./Explore/Explore";
import { Promotion } from "./Promotion/Promotion";
import { MainLoader } from "../../UI/MainLoader";

const Main = () => {
  document.title = "TraveleR";
  const [tours, setTours] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    getTop()
      .then((data) => {
        setTours(data);
      })
      .then(getPromotions().then((result) => setPromotions(result)))
      .then(
        setTimeout(() => {
          setLoad(false);
        }, 1000)
      );
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main>
        {load && <MainLoader />}
        <TopOffers tours={tours} />
        <Imagination />
        <Explore />
        <Promotion promotions={promotions} />
      </main>
    </>
  );
};

export default Main;
