import { Heading } from "@chakra-ui/react";
import styles from "../styles/pages/Contact.module.css";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>hugo | Contact</title>
      </Head>
      <div className={styles.contact}>
        <Heading as="h1" className="headingTitle">
          Contact
        </Heading>
        <p>
          <span className={styles.contactName}>Email: </span>
          <a
            className={styles.contactMethod}
            href="mailto:wheredidhugo@proton.me"
          >
            wheredidhugo@proton.me
          </a>
        </p>
      </div>
    </>
  );
}
