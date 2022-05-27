import { Heading } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/pages/404.module.css";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>hugo | 404</title>
      </Head>
      <div className={styles.notfound}>
        <Heading as="h1">404 - Page not found</Heading>
        <Link href="/">
          <span className={styles.goBackButton}>Go back home</span>
        </Link>
      </div>
    </>
  );
}
