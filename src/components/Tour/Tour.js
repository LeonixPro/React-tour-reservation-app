import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { getOneTour } from "../../services/toursServices";
import { Gallery } from "./Gallery";
import styles from "./Tour.module.css";
import { Booking } from "../Booking/Booking";
import { Loader } from "../../UI/loader";
export const Tour = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [tour, setTour] = useState({});
  const [book, setBook] = useState(false);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    getOneTour(id)
      .then((res) => {
        setTour(res);
      })
      .then(setLoad(false));
  }, [id]);

  const onBookClick = () => {
    setBook(true);
  };
  const close = () => {
    setBook(false);
  };
  return (
    <>
      {load && <Loader />}
      {book && <Booking close={close} tour={tour} user={user} />}
      <header>
        <section className={styles.header}>
          <div className={styles.headerImg}>
            <img src={tour.main_img} alt="Tour Title" />
          </div>
          <div className={styles.headerTop}>
            <h1>{tour.title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              corporis?
            </p>
            <button className={styles.headerButton} onClick={onBookClick}>
              Book now!
            </button>
            <div className={styles.weather}>
              <div className={styles.weatherImg}>
                <span>7°</span> <i className="bi bi-clouds-fill"></i>
              </div>
              <div className={styles.weatherDescription}>Clouds</div>
              <div className={styles.weatherCurrent}>
                Current weather in {tour.destination}
              </div>
            </div>
          </div>
        </section>
      </header>
      <main>
        <section className={styles.mainSection}>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <h2>{tour.title}</h2>
              <span data-type="destination">
                {`${tour.destination}, ${tour.country}`}
              </span>
              <span data-type="duration">{tour.duration}</span>
              <span data-type="category">{tour.category}</span>
            </div>
            <div className={styles.mainBox}>
              <div className={styles.left}>
                <Gallery />

                {/*  */}
                <div className={styles.overview}>
                  <div className={styles.boxTitle}>In price</div>
                  <div className={styles.services}>
                    <div className={styles.service}>
                      <div
                        className={styles.serviceImg}
                        data-type="tickets"
                      ></div>
                      <div className={styles.serviceDesc}>
                        <b>Tickets</b>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Sequi, beatae.
                      </div>
                    </div>
                    <div className={styles.service}>
                      <div
                        className={styles.serviceImg}
                        data-type="hotel"
                      ></div>
                      <div className={styles.serviceDesc}>
                        <b>Hotel</b>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Sequi, beatae.
                      </div>
                    </div>
                    <div className={styles.service}>
                      <div
                        className={styles.serviceImg}
                        data-type="transfer"
                      ></div>
                      <div className={styles.serviceDesc}>
                        <b>Transfer</b>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Sequi, beatae.
                      </div>
                    </div>
                  </div>
                  <div className={styles.boxTitle}>Not in price</div>
                  <div className={styles.services}>
                    <div className={styles.service}>
                      <div
                        className={styles.serviceImg}
                        data-type="insurance"
                      ></div>
                      <div className={styles.serviceDesc}>
                        <b>Insurance</b>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Sequi, beatae.
                      </div>
                    </div>
                    <div className={styles.service}>
                      <div
                        className={styles.serviceImg}
                        data-type="museum"
                      ></div>
                      <div className={styles.serviceDesc}>
                        <b>Museum tickets</b>Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Sequi, beatae.
                      </div>
                    </div>
                    <div className={styles.service}>
                      <div
                        className={styles.serviceImg}
                        data-type="photo"
                      ></div>
                      <div className={styles.serviceDesc}>
                        <b>Photo shoot service</b>Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Sequi, beatae.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.program}>
                  <div className={styles.boxTitle}>Description</div>
                  <p>{tour.description}</p>
                </div>
                <div className={styles.onMap}>
                  <div className={styles.boxTitle}>On Map</div>
                  <div className={styles.mapBox}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1119445.0319402963!2d2.55700870971003!3d49.33129605657809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2z0J_QsNGA0LjQtiwg0KTRgNCw0L3RhtC40Y8!5e0!3m2!1sbg!2sbg!4v1678994590642!5m2!1sbg!2sbg"
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className={styles.reviews}>
                    <div className={styles.boxTitle}>Reviews</div>
                    <div className={styles.reviewBox}>
                      <div className={styles.review}>
                        <div className={styles.reviewTop}>
                          <div className={styles.reviewImg}>IT</div>
                          <div className={styles.reviewInfo}>
                            <b>Ivan Tonev</b>
                            <span>Date: 25.03.2023</span>
                          </div>
                        </div>
                        <div className={styles.reviewMain}>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Veniam, eligendi sunt incidunt, voluptatum
                          laboriosam iusto iure quod, ad voluptates
                          exercitationem molestias asperiores natus commodi
                          minus ab quae. Omnis numquam architecto vitae
                          repudiandae doloribus expedita ratione nisi ipsa
                          facilis? Reiciendis, perferendis!
                        </div>
                      </div>
                      <div className={styles.review}>
                        <div className={styles.reviewTop}>
                          <div className={styles.reviewImg}>IT</div>
                          <div className={styles.reviewInfo}>
                            <b>Ivan Tonev</b>
                            <span>Date: 25.03.2023</span>
                          </div>
                        </div>
                        <div className={styles.reviewMain}>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Veniam, eligendi sunt incidunt, voluptatum
                          laboriosam iusto iure quod, ad voluptates
                          exercitationem molestias asperiores natus commodi
                          minus ab quae. Omnis numquam architecto vitae
                          repudiandae doloribus expedita ratione nisi ipsa
                          facilis? Reiciendis, perferendis!
                        </div>
                      </div>

                      <div className={styles.review}>
                        <div className={styles.reviewTop}>
                          <div className={styles.reviewImg}>IT</div>
                          <div className={styles.reviewInfo}>
                            <b>Ivan Tonev</b>
                            <span>Date: 25.03.2023</span>
                          </div>
                        </div>
                        <div className={styles.reviewMain}>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Veniam, eligendi sunt incidunt, voluptatum
                          laboriosam iusto iure quod, ad voluptates
                          exercitationem molestias asperiores natus commodi
                          minus ab quae. Omnis numquam architecto vitae
                          repudiandae doloribus expedita ratione nisi ipsa
                          facilis? Reiciendis, perferendis!
                        </div>
                      </div>

                      <div className={styles.review}>
                        <div className={styles.reviewTop}>
                          <div className={styles.reviewImg}>IT</div>
                          <div className={styles.reviewInfo}>
                            <b>Ivan Tonev</b>
                            <span>Date: 25.03.2023</span>
                          </div>
                        </div>
                        <div className={styles.reviewMain}>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Veniam, eligendi sunt incidunt, voluptatum
                          laboriosam iusto iure quod, ad voluptates
                          exercitationem molestias asperiores natus commodi
                          minus ab quae. Omnis numquam architecto vitae
                          repudiandae doloribus expedita ratione nisi ipsa
                          facilis? Reiciendis, perferendis!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
              <div className={styles.right}>
                <div className={styles.sale}>On sale</div>
                <div className={styles.duration}>{tour.duration}</div>
                <div className={styles.rate}>
                  {`${tour.destination}, ${tour.country}`} <b>4.9</b> Good
                </div>
                <div className={styles.priceBox}>
                  <span className={styles.price}>
                    Price
                    <b>{tour.price} BGN</b>
                  </span>
                  <span className={styles.discount}>
                    20% Discount <br />
                    Valid until 25.03.2023
                  </span>
                </div>
                <div className={styles.book}>
                  <button onClick={onBookClick}>Book now</button>
                </div>
                <div className={styles.rightBottom}>
                  <b>Special offers</b>
                  Save 20% until 25.03.2023
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
