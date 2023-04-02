import { setTitle } from "../../utils/utils";
import styles from "./Support.module.css";
import { useEffect } from "react";
export const Support = () => {
  setTitle("Support");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header>
        <section className={styles.header}>
          <div className={styles.wrapper}>
            <h1>Support page</h1>
            <p>Have questions? You can find answers bellow!</p>
          </div>
        </section>
      </header>
      <main>
        <div className={styles.mainWrapper}>
          <div className={styles.left}>
            <div className={styles.title}>General</div>

            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    How to use the website?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto minima voluptatibus quaerat. Velit veniam
                      laudantium deleniti illum similique! Repellat explicabo
                      nulla dolorum, optio temporibus laudantium quidem mollitia
                      accusamus impedit itaque?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ab aspernatur numquam labore quis fugit? Facere, unde
                      repellat vel reprehenderit dolorem cumque earum temporibus
                      ipsa hic provident optio, dolorum corporis? Consequuntur!
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    About reservation
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto minima voluptatibus quaerat. Velit veniam
                      laudantium deleniti illum similique! Repellat explicabo
                      nulla dolorum, optio temporibus laudantium quidem mollitia
                      accusamus impedit itaque?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ab aspernatur numquam labore quis fugit? Facere, unde
                      repellat vel reprehenderit dolorem cumque earum temporibus
                      ipsa hic provident optio, dolorum corporis? Consequuntur!
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    How to make a reservation?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto minima voluptatibus quaerat. Velit veniam
                      laudantium deleniti illum similique! Repellat explicabo
                      nulla dolorum, optio temporibus laudantium quidem mollitia
                      accusamus impedit itaque?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ab aspernatur numquam labore quis fugit? Facere, unde
                      repellat vel reprehenderit dolorem cumque earum temporibus
                      ipsa hic provident optio, dolorum corporis? Consequuntur!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>Account</div>

            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingFour"
                >
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    How to create a profile?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto minima voluptatibus quaerat. Velit veniam
                      laudantium deleniti illum similique! Repellat explicabo
                      nulla dolorum, optio temporibus laudantium quidem mollitia
                      accusamus impedit itaque?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ab aspernatur numquam labore quis fugit? Facere, unde
                      repellat vel reprehenderit dolorem cumque earum temporibus
                      ipsa hic provident optio, dolorum corporis? Consequuntur!
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingFive"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFive"
                  >
                    How to manage reservations?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFive"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto minima voluptatibus quaerat. Velit veniam
                      laudantium deleniti illum similique! Repellat explicabo
                      nulla dolorum, optio temporibus laudantium quidem mollitia
                      accusamus impedit itaque?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ab aspernatur numquam labore quis fugit? Facere, unde
                      repellat vel reprehenderit dolorem cumque earum temporibus
                      ipsa hic provident optio, dolorum corporis? Consequuntur!
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSix"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseSix"
                  >
                    How to cancel the reservation?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingSix"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto minima voluptatibus quaerat. Velit veniam
                      laudantium deleniti illum similique! Repellat explicabo
                      nulla dolorum, optio temporibus laudantium quidem mollitia
                      accusamus impedit itaque?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ab aspernatur numquam labore quis fugit? Facere, unde
                      repellat vel reprehenderit dolorem cumque earum temporibus
                      ipsa hic provident optio, dolorum corporis? Consequuntur!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
