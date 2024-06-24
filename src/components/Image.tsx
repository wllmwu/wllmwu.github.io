import classNames from "classnames";
import styles from "./Image.module.css";

interface ImageProps {
  source: string;
  width: number;
  height: number;
  alt?: string;
  className?: string;
}

function Image({ source, width, height, alt, className }: ImageProps) {
  return (
    <img
      src={source}
      alt={alt}
      decoding="async"
      width={width}
      height={height}
      className={classNames(styles.image, className)}
    />
  );
}

export default Image;
