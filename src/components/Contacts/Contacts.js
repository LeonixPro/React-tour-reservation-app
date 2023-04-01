import { setTitle } from "../../utils/utils";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Contacts.module.css";
export const Contacts = () => {
  const [success, setSuccess] = useState(false);
  setTitle("Contacts");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "onBlur",
  });

  const submit = (data) => {
    console.log(data);
    setSuccess(true);
    reset();
  };
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
          {success && (
            <div className={styles.success}>
              Thank for the message! You message has been sent successfully!
            </div>
          )}
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <form onSubmit={handleSubmit(submit)}>
                <label htmlFor="name">Your full name</label>
                {errors?.name?.message && (
                  <span className={styles.error}>{errors?.name?.message}</span>
                )}
                <input
                  type="text"
                  className={errors?.name?.message && styles.errorInput}
                  {...register("name", {
                    required: "Name can not be empty!",
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "You can  not use symbols or numbers",
                    },
                    maxLength: {
                      value: 30,
                      message: "Max length is 80",
                    },
                    minLength: {
                      value: 8,
                      message: "Min length is 8",
                    },
                  })}
                  placeholder="Your name"
                  id="name"
                />
                <label htmlFor="email">Your email</label>
                {errors?.email?.message && (
                  <span className={styles.error}>{errors?.email?.message}</span>
                )}
                <input
                  type="email"
                  className={errors?.email?.message && styles.errorInput}
                  {...register("email", {
                    required: "Email can not be empty!",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email provided",
                    },
                  })}
                  placeholder="Your name"
                  id="email"
                />
                <label htmlFor="subject">Subject</label>
                {errors?.subject?.message && (
                  <span className={styles.error}>Please, enter your name!</span>
                )}
                <input
                  type="text"
                  className={errors?.subject?.message && styles.errorInput}
                  {...register("subject", {
                    required: "subject can not be empty!",
                  })}
                  placeholder="Your name"
                  id="subject"
                />
                <label htmlFor="message">Message</label>
                {errors?.message?.message && (
                  <span className={styles.error}>Please, enter your name!</span>
                )}
                <textarea
                  className={errors?.message?.message && styles.errorInput}
                  {...register("message", {
                    required: "message can not be empty!",
                  })}
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis accusantium veritatis, soluta error officiis unde,
                  maiores enim earum asperiores, ipsum sunt eaque porro possimus
                  reprehenderit eius explicabo voluptas necessitatibus aliquid.
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
