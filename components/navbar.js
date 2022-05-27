import { useState, useEffect, useWindowSize } from "react";
import styles from "../styles/components/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  Button,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  useColorMode,
} from "@chakra-ui/react";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [wheredid, setWhereDid] = useState();
  const [icon, setIcon] = useState(colorMode === "dark" ? faSun : faMoon);
  const [width, setWidth] = useState();

  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
    }
  });

  useEffect(() => {
    colorMode === "dark" ? setIcon(faSun) : setIcon(faMoon);
  }, [colorMode]);

  function navbar() {
    // Small Screen
    if (width <= 500) {
      return (
        <Menu className={styles.dropdown}>
          <MenuButton className={styles.dropdown} as={Button}>
            <FontAwesomeIcon icon={faBars} />
          </MenuButton>
          <MenuList className={styles.dropdown}>
            <Link href="/">
              <MenuItem>About</MenuItem>
            </Link>
            <Link href="/projects">
              <MenuItem>Projects</MenuItem>
            </Link>
            <Link href="/contact">
              <MenuItem>Contact</MenuItem>
            </Link>
            <MenuItem onClick={toggleColorMode}>
              <FontAwesomeIcon icon={icon} />
            </MenuItem>
          </MenuList>
        </Menu>
      );
      // Big Screen
    } else if (width > 500) {
      return (
        <div className={styles.projectsBar}>
          <Link href="/">
            <Button>
              <p>About</p>
            </Button>
          </Link>
          <Link href="/projects">
            <Button>
              <p>Projects</p>
            </Button>
          </Link>
          <Link href="/contact">
            <Button>
              <p>Contact</p>
            </Button>
          </Link>
          <Button className={styles.mode} onClick={toggleColorMode}>
            <FontAwesomeIcon icon={icon} />
          </Button>
        </div>
      );
    }
  }

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <span
          className={styles.title}
          onMouseEnter={() => setWhereDid("wheredid")}
          onMouseLeave={() => setWhereDid()}
        >
          {wheredid}hugo
        </span>
      </Link>
      <div className={styles.projects}>{navbar()}</div>
    </div>
  );
}
