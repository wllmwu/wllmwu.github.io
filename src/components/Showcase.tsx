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
    <ul className={styles.showcaseList}>
      {items.map(({ title, description, link, thumbnail }, index) => (
        <li key={index} className={styles.showcaseItem}>
          <Image
            source={thumbnail?.source ?? "/images/default-thumbnail.png"}
            width={thumbnail?.width ?? 1067}
            height={thumbnail?.height ?? 600}
            alt=""
            className={styles.showcaseThumbnail}
          />
          <div className={styles.showcaseTextWrapper}>
            <p className={styles.showcaseTitle}>
              <Link to={link} className="fancy">
                {title}
              </Link>
            </p>
            <p className={styles.showcaseDescription}>{description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Showcase;
