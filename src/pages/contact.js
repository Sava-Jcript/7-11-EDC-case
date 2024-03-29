import Head from "next/head";
import styles from "./Home.module.css";
import { useState, useRef } from "react";
import SelectButton from "@/components/Header/deleteFun";
import { useRouter } from "next/router";

export default function Contact(props) {
  const formEl = useRef(null);
  const [selectedBuyers, setSelectedBuyers] = useState([...props.selectedList]);

  const router = useRouter();
  const { query } = router;

  function removeSelectedBuyers(id) {
    setSelectedBuyers((oldList) => {
      return oldList.filter((buyer) => buyer.id !== id);
    });
  }

  function submit(e) {
    e.preventDefault();
    const payload = {
      zipCode: query.zipCode,
      estateType: query.estateType,
      price: query.price,
      size: query.size,
      name: formEl.current.name.value,
      email: formEl.current.email.value,
      phone: formEl.current.phone.value,
      consent: true,
    };
    console.log(payload);
    fetch("/api/newSeller", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.push("/thankyou");
      });
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
                <SelectButton
                  {...buyer}
                  key={buyer.id}
                  removeSelectedBuyers={removeSelectedBuyers}
                ></SelectButton>
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

