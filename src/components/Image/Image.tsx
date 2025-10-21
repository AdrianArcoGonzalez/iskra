import { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: ImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  return (
    <img
      src={imageSrc}
      alt={alt}
      onError={() =>
        setImageSrc(
          "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        )
      }
    />
  );
};

export default Image;
