import styles from "../styles/Banner.module.css";

interface BannerProps {
  title: string;
}

function Banner({ title }: BannerProps) {
  return (
    <div className={styles.bannerBackground}>
      <h1 className={styles.bannerTitle}>{title}</h1>
    </div>
  );
}

export default Banner;
