import Head from "next/head";
import styles from "./Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { estateTypes } from "@/data/estateTypes";

export default function Home() {
  const [size, setSize] = useState("");
  const [estateType, setEstateType] = useState("1");
  const [zipCode, setZipCode] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  const ZipCodeGenerator = (event) => {
    setZipCode(event.target.value);
  };

  const estateGenerator = (event) => {
    setEstateType(event.target.value);
  };

  const SizeGenerator = (event) => {
    setSize(event.target.value);
  };

  const priceGenerator = (event) => {
    setPrice(event.target.value);
  };

  const submitGenerator = (event) => {
    event.preventDefault();
    router.push({
      pathname: "/buyers",
      query: { zipCode, estateType, size, price },
    });
  };

  return (
    <>
      <Head>
        <title>EDC Buyer Research Generator</title>
      </Head>
      <div className="Header"></div>
      <div className="wrapper">
      <h1 className={styles.headline1}>
      Welcome To <span className={styles.headline}>EDC</span> Buyer Generator 
    </h1>
        <div className={styles.content}>
        <p>Insert Your Estate Relative Data</p>
          <form onSubmit={submitGenerator} className={styles.form}>
            
          
          
          <label>
              <span className={styles.label}>Zip Code</span>
              <input
                value={zipCode}
                onChange={ZipCodeGenerator}
                name="zipCode"
                required
              />
            </label>
            <br />
            <label>
              <span className={styles.label}>Price</span>
              <input
                value={price}
                onChange={priceGenerator}
                name="price"
                required
              />
            </label>
            <label className={styles.sizeIcon}>
              <span className={styles.label}>Size</span>
              <input
                value={size}
                onChange={SizeGenerator}
                name="size"
                required
              />
            </label>
            <label>
              <span val className={styles.label}>
                Estate type
              </span>

              <select
                value={estateType}
                onChange={estateGenerator}
                name="estateType"
                required
              >
                {estateTypes.map(({ id, name }) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
            <button className={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
