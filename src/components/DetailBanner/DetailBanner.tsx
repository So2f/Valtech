import React from "react";
import Image from "next/image";
import styles from "./detailBanner.module.css"; // Import the CSS module
import { useArticleContent } from "@/context/ArticleContext"; // Import the context

const DetailBanner = () => {
  // Access the article data from the context
  const articleContent = useArticleContent();

  // Extract relevant content types
  const heroContent = articleContent?.content.find(
    (item) => item.type === "HERO_ARTICLE"
  );

  // Return null if no hero content is found
  if (!heroContent) return null;

  return (
    <div className={styles.bannerContainer}>
      <Image
        src={`${heroContent?.sideAsset?.url}/png`}
        alt="Side Image"
        width={466}
        height={480}
      />
      <div className={styles.backgroundContainer}>
        <Image
          src={`${heroContent?.backgroundAsset?.url}/png`}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className={styles.backgroundImage}
        />
        <div className={styles.textContainer}>
          <p className={styles.subtitle}>{heroContent?.subtitle}</p>
          <h1 className={styles.title}>{heroContent?.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default DetailBanner;
