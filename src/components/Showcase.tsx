import { Link } from "react-router-dom";
import Image from "./Image";
import styles from "./Showcase.module.css";

export interface ShowcaseItem {
  title: string;
  description: string;
  link: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
}

export interface ShowcaseProps {
  items: ShowcaseItem[];
}

function Showcase({ items }: ShowcaseProps) {
  return (
    <div className={styles.showcaseList}>
      {items.map(({ title, description, link, thumbnail }, index) => (
        <div key={index} className={styles.showcaseItem}>
          <Link to={link} tabIndex={-1}>
            <Image
              source={thumbnail?.source ?? "/images/default-thumbnail.png"}
              width={thumbnail?.width ?? 1067}
              height={thumbnail?.height ?? 600}
              alt={`Go to the ${title} page`}
              className={styles.showcaseThumbnail}
            />
          </Link>
          <div className={styles.showcaseOverlay}>
            <p className={styles.showcaseTitle}>
              <Link to={link}>{title}</Link>
            </p>
            <p className={styles.showcaseDescription}>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Showcase;
