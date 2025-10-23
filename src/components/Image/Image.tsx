import { useState } from "react";
import classes from "./Image.module.css";

interface ImageProps {
  src: string;
  alt: string;
}

const placeholderImage =
  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

const Image = ({ src, alt }: ImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  return (
    <img
      src={imageSrc ?? placeholderImage}
      alt={alt}
      height={245}
      width={368}
      className={classes.image}
      onError={() => setImageSrc(placeholderImage)}
    />
  );
};

export default Image;
