import { Heading } from "@chakra-ui/react";
import styles from "../../styles/components/Project.module.css";

export default function Project({ href, icon, name, description, className }) {
  return (
    <a href={href} className={`${className} ${styles.textProject}`}>
      <Heading as="h1">{name}</Heading>
      <p>{description}</p>
      {icon}
    </a>
  );
}
