import Image from "next/image";
import hugo from "../../public/hugo-half.png";
import styles from "../../styles/components/Project.module.css";

export default function ProjectImage({
  className,
  href,
  icon,
  name,
  description,
  width,
  height,
  src,
  layout,
}) {
  return (
    <a href={href} className={`${className} ${styles.project}`}>
      <div>
        <div className={styles.image}>
          <Image
            src={src ? src : hugo}
            alt={`${name} logo`}
            width={width ? width : "250px"}
            height={height ? height : "250px"}
            layout={layout ? layout : ""}
          />
        </div>
        <span className={styles.name}>{name}</span>
        <p>{description}</p>
        {icon}
      </div>
    </a>
  );
}
