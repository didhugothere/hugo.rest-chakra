import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faVuejs,
  faPython,
  faRaspberryPi,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/pages/About.module.css";
import logo from "../public/hugo-half.png";
import Image from "next/image";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>hugo</title>
      </Head>
      <div className={styles.about}>
        <div className={styles.logo}>
          <Image src={logo} alt="Hugo image" width={250} height={250} />
        </div>
        <Heading className="headingTitle" as="h1">
          Hi, I&apos;m Hugo
        </Heading>
        <p>
          Welcome to my website, I don&apos;t really know what to put here right
          now so consider this as a placeholder.
        </p>
        <p>
          I like <FontAwesomeIcon icon={faJs} /> and wrote my website using{" "}
          <FontAwesomeIcon icon={faReact} /> (Next.js but couldn&apos;t find the
          icon).
        </p>
        <p>
          In the past I&apos;ve used <FontAwesomeIcon icon={faVuejs} />, but
          I&apos;m now using <FontAwesomeIcon icon={faReact} /> for multiple
          reasons.
        </p>
        <p>
          I would also enjoy learning more <FontAwesomeIcon icon={faPython} />{" "}
          at school and start making cool projects with it.
        </p>
        <p>
          I would also enjoy getting a <FontAwesomeIcon icon={faRaspberryPi} />{" "}
          4.
        </p>
        <p>
          I don&apos;t really know how to end this but I need lines to finish.
        </p>
        <p>
          Here are my{" "}
          <Link href="/projects" className={styles.visit}>
            <span className={styles.visit}>projects</span>
          </Link>{" "}
          and here&apos;s how to{" "}
          <Link href="/contact" className={styles.visit}>
            <span className={styles.visit}>contact me</span>
          </Link>
        </p>
        <p>
          I&apos;m sorry if the site is messy right now, I will try to improve
          it later.
        </p>
      </div>
    </>
  );
}
