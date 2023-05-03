import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../pages/buyers/Buyers.module.css";

import { BuyerCard } from "@/components/Header/BuyerCard";



export default function Buyers(props) {
  const { query } = useRouter();

  const router = useRouter();

  function addSelected(selectedBuyer) {
    props.setSelectedList((prev) => prev.concat(selectedBuyer));
  }

  function removeSelected(buyerID) {
    props.setSelectedList((prev) =>
      prev.filter((buyer) => buyer.id !== buyerID)
    );
  }

  return (
    <>
      <Head>
        <title>Find Buyer  </title>
      </Head>


      <div className="wrapper">

      <button  className={styles.button}  
      onClick={() => {
        router.push("/contact");
      }}
    >
      Contact Selected Buyers 
    </button>   
        <h1 className={styles.headline}>Potential Buyers</h1>
        <BuyerCard addSelected={addSelected} removeSelected={removeSelected} />

      </div>
    </>
  );
}



