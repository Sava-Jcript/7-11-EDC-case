import Head from "next/head";
import styles from "./Home.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Thank You</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Thank You for your inquiry</h1>{" "}
        <div className={styles.content}>
          <h2>You will hear from us ASAP</h2>
        </div>
      </div>
    </>
  );
}
