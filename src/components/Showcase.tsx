import Image from "./Image";
import styles from "../styles/Showcase.module.css";

export interface ShowcaseProps {
  title: string;
  description: string;
  link: string;
  thumbnail: {
    source: string;
    width: number;
    height: number;
  };
}

export interface ShowcaseGridProps {
  children: React.ReactNode;
}

function Showcase({ title, description, link, thumbnail }: ShowcaseProps) {
  return (
    <div className={styles.showcaseBox}>
      <a href={link} tabIndex={-1}>
        <Image
          source={thumbnail.source}
          width={thumbnail.width}
          height={thumbnail.height}
          alt={`Go to the ${title} page`}
          className={styles.showcaseThumbnail}
        />
      </a>
      <div className={styles.showcaseOverlay}>
        <p className={styles.showcaseTitle}>
          <a href={link}>{title}</a>
        </p>
        <p className={styles.showcaseDescription}>{description}</p>
      </div>
    </div>
  );
}

export function ShowcaseGrid({ children }: ShowcaseGridProps) {
  return <div className={styles.showcaseGrid}>{children}</div>;
}

export default Showcase;
