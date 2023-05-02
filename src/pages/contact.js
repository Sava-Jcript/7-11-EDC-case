import Head from "next/head";
import styles from "./Home.module.css";
import { useState } from "react";
import Selected from "@/components/Header/Selected";
import { useContext,useRef } from "react";
import Router from "next/router";



export default function Contact(props) {

const supabaseKey = process.env.SUPABASEKEY;
const formEl= useRef(null);


  const [selectedBuyers, selectBuyers] = useState([...props.selectedList]);

  function removeSelectBuyers(id) {
    selectBuyers((oldList) => {
      return oldList.filter((buyer) => buyer.id !== id);
    });
  }

  function submit(e) {
    e.preventDefault();
    const fetchie = {
      name: e.target.elements.name.value,
      message: e.target.elements.message.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
      consent: true,
      buyers: selectedBuyers,
    };
    console.log(fetchie);

    fetchFunction(fetchie);
  }

  function fetchFunction(Buyers) {
    fetch("https://gbaxrceynntdiffiuoum.supabase.co/rest/v1/Contact-Form", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Prefer: "return=representation",
        apikey:supabaseKey,
      },
      body: JSON.stringify(Buyers),
    })
    .then((data) => data.json())
    .then((data) => (window.location.href = "/thankyou"));

  }

  return (
    <>
      <Head>
        <title>Contact buyer | EDC</title>
      </Head>

      <div className="wrapper">
     
     
        <h1 className={styles.headline1}>
        Contact  <span className={styles.headline}>Potential</span> Buyers
      </h1>
     
     
        <div className={styles.content}>
          <div className={styles.list_section}>
            <h2>Selected Buyers</h2>
            <ul>
              {selectedBuyers.map((buyer) => (
                <Selected
                  {...buyer}
                  key={buyer.id}
                  removeSelectBuyers={removeSelectBuyers}
                ></Selected>
              ))}
            </ul>
          </div>

          <br></br>
          <form
          ref={formEl}
            action="/thankyou"
            method="GET"
            className={styles.form}
            onSubmit={submit}
          >
            <h2>Contact Information</h2>
            <label>
              <span className={styles.label}>Name</span>
              <input type="text" name="name" required />
            </label>
            <br></br>
            <label>
              <span className={styles.label}>Email</span>
              <input type="email" name="email" required />
            </label>{" "}
            <br></br>
            <label>
              <span className={styles.label}>Phone</span>
              <input type="number" name="phone" required />
            </label>{" "}
            <br></br>
            <label>
            <span className={styles.label1}>Private Message      (Optional)</span>
            <input type="text" name="message"  />
          </label>{" "}
            <br></br>
            <br></br>
        
            <br></br>
            <br></br>
            <button className={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

