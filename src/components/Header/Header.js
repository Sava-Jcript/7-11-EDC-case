import logo from "@/assets/edc-logo.svg";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className="wrapper1">
      <Link href="/" aria-label="EDC">
        <Image
          className={styles.logo}
          src={logo.src}
          width={90}
          height={90}
          alt="EDC"
          priority
        />
      </Link>
    </header>
  );
}
