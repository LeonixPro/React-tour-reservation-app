import styles from "./Terms.module.css";
import { useEffect } from "react";
export const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header>
        <section className={styles.header}>
          <div className={styles.wrapper}>
            <h1>Terms of use</h1>
            <p>Please, read terms of use bellow</p>
          </div>
        </section>
      </header>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <h2>General information</h2>
          <p>
            <b>Item 1</b>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore a
            ad delectus voluptatem perspiciatis enim iusto quisquam reiciendis,
            doloremque numquam magnam dolorem ea asperiores eveniet similique
            dolore expedita quaerat libero! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Labore a ad delectus voluptatem
            perspiciatis enim iusto quisquam reiciendis, doloremque numquam
            magnam dolorem ea asperiores eveniet similique dolore expedita
            quaerat libero!
          </p>
          <p>
            <b>Item 2</b>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore a
            ad delectus voluptatem perspiciatis enim iusto quisquam reiciendis,
            doloremque numquam magnam dolorem ea asperiores eveniet similique
            dolore expedita quaerat libero! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Labore a ad delectus voluptatem
            perspiciatis enim iusto quisquam reiciendis, doloremque numquam
            magnam dolorem ea asperiores eveniet similique dolore expedita
            quaerat libero!
          </p>
          <p>
            <b>Item 3</b>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore a
            ad delectus voluptatem perspiciatis enim iusto quisquam reiciendis,
            doloremque numquam magnam dolorem ea asperiores eveniet similique
            dolore expedita quaerat libero! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Labore a ad delectus voluptatem
            perspiciatis enim iusto quisquam reiciendis, doloremque numquam
            magnam dolorem ea asperiores eveniet similique dolore expedita
            quaerat libero!
          </p>
          <p>
            <b>Item 4</b>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore a
            ad delectus voluptatem perspiciatis enim iusto quisquam reiciendis,
            doloremque numquam magnam dolorem ea asperiores eveniet similique
            dolore expedita quaerat libero! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Labore a ad delectus voluptatem
            perspiciatis enim iusto quisquam reiciendis, doloremque numquam
            magnam dolorem ea asperiores eveniet similique dolore expedita
            quaerat libero!
          </p>
          <p>
            <b>Item 5</b>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore a
            ad delectus voluptatem perspiciatis enim iusto quisquam reiciendis,
            doloremque numquam magnam dolorem ea asperiores eveniet similique
            dolore expedita quaerat libero! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Labore a ad delectus voluptatem
            perspiciatis enim iusto quisquam reiciendis, doloremque numquam
            magnam dolorem ea asperiores eveniet similique dolore expedita
            quaerat libero!
          </p>
        </div>
      </main>
    </>
  );
};
