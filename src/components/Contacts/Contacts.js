import styles from "./Contacts.module.css";
export const Contacts = () => {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.headerWrapper}>
          <h1>Contacts</h1>
          <p>Have a question? Contacts us!</p>
        </div>
      </section>
      <main>
        <div className={styles.contactWrap}>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <form action="">
                <label htmlFor="name">Your full name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your full name"
                />
                <label htmlFor="email">Your email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your email"
                />
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
                <label htmlFor="message">Message</label>
                <textarea
                  name="text"
                  id="message"
                  placeholder="Message here..."
                ></textarea>
                <button>Send an email</button>
              </form>
              <div>
                By sending an email, you confirm that you have read and agree
                width <a href="">Terms of use</a> and{" "}
                <a href="">Privacy Policy</a>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.title}>
                <div>TraveleR LTD</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  illo nemo nisi reprehenderit reiciendis incidunt vitae fuga
                  sit delectus, aliquid aperiam, soluta praesentium! Doloribus
                  dicta expedita doloremque dignissimos optio pariatur.
                </p>
              </div>
              <div className={styles.details}>
                <ul>
                  <span>Address</span>
                  <li>
                    <b>France</b>
                    10 Street, Something here 0000 <br />
                    Paris, France
                  </li>
                  <li>
                    <b>Italy</b>
                    10 Street, Something here 0000 <br />
                    Rome, Italy
                  </li>
                  <li>
                    <b>Spain</b>
                    10 Street, Something here 0000 <br />
                    Madrid, Spain
                  </li>
                </ul>
                <ul>
                  <span>Contacts</span>
                  <li>
                    <b>Email and Phone:</b>
                    test@mail.com <br /> 00 111 222 333
                  </li>
                  <li>
                    <b>Email and Phone:</b>
                    test@mail.com <br /> 00 111 222 333
                  </li>
                  <li>
                    <b>Email and Phone:</b>
                    test@mail.com <br /> 00 111 222 333
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
