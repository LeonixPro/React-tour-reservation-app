// import styles from "./Main.module.css";
import { Header } from "../Header/Header";
import { TopOffers } from "./TopOffers/TopOffers";
import { Imagination } from "./Imagination/Imagination";
import { Explore } from "./Explore/Explore";
import { Promotion } from "./Promotion/Promotion";

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <TopOffers />
        <Imagination />
        <Explore />
        <Promotion />
      </main>
    </>
  );
};

export default Main;
