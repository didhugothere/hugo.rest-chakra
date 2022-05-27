import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/components/Footer.module.css";
import { useEffect, useState } from "react";
import { useColorMode } from "@chakra-ui/react";

export default function Footer() {
  const { colorMode } = useColorMode();
  const [border, setBorder] = useState();
  useEffect(() => {
    setBorder(colorMode === "light" ? styles.borderLight : styles.border);
  }, [colorMode]);
  return (
    <div className={border}>
      <div className={styles.footer}>
        <div className={styles.socials}>
          <a href="https://github.com/wheredidhugo" className={styles.social}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://npmjs.com/~wheredidhugo" className={styles.social}>
            <FontAwesomeIcon icon={faNpm} />
          </a>
          <a
            href="https://github.com/wheredidhugo/hugo.rest"
            className={styles.social}
          >
            <FontAwesomeIcon icon={faCode} />
          </a>
        </div>
      </div>
    </div>
  );
}
