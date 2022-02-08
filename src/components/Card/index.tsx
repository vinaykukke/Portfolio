import * as React from "react";
import Image from "next/image";
import { ICardProps } from "./types";
import styles from "./card.module.scss";

const Card = (props: ICardProps) => {
  const {
    showMoreInfo,
    src,
    specs: { title, description, price },
  } = props;
  const shouldShowMoreInfo = () => (
    <div className={styles.productFeatures}>
      <div className={styles.feature}>
        <div className={styles.featureIcon} />
        <div className={styles.featureText}>
          <p>
            {" "}
            <strong>Available in</strong>
          </p>
          <p>Multiple Flaours</p>
        </div>
      </div>
      <div className={styles.feature}>
        <div className={styles.featureIcon} />
        <div className={styles.featureText}>
          <p>
            {" "}
            <strong>Built-in</strong>
          </p>
          <p>Microphone</p>
        </div>
      </div>
      <div className={styles.feature}>
        <div className={styles.featureIcon} />
        <div className={styles.featureText}>
          <p>
            {" "}
            <strong>Haptic</strong>
          </p>
          <p>Feedback</p>
        </div>
      </div>
      <div className={styles.feature}>
        <div className={styles.featureIcon} />
        <div className={styles.featureText}>
          <p>
            {" "}
            <strong>Fast charge</strong>
          </p>
          <p>USB-C port</p>
        </div>
      </div>
    </div>
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles.overviewInfo}>
        <div className={styles.actions}>
          <div className={`${styles.cartbutton} ${styles.neurobutton}`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                fill="currentColor"
              />
              <path
                d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                fill="currentColor"
              />
              <path
                d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <div className={styles.productinfo}>
          <div className={styles.info}>
            <div className={styles.grouptext}>
              <h3>TYPE</h3>
              <p>{title}</p>
            </div>
            <div className={styles.grouptext}>
              <h3>Net Weight</h3>
              <p>250g</p>
            </div>
            <div className={styles.grouptext}>
              <h3>PRICE</h3>
              <p>₹{price}</p>
            </div>
          </div>
          <div className={styles.productImage}>
            <Image
              alt={title}
              src={src}
              width={220}
              height={300}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className={styles.productSpecifications}>
        <h1>{title}</h1>
        <p className={styles.productDescription}>{description}</p>
        {showMoreInfo && shouldShowMoreInfo()}
        <div className={styles.checkoutButton}>
          <div className={styles.priceTag}>
            <span>₹</span>
            {price}
          </div>
          <a className={styles.preorder} href="tel:+919353215031">
            <p>Preorder **</p>
            <div className={styles.buttonaction}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.preorderCondition}>
        ** All preorders are only available through phone for the moment. Our
        shopping cart is under development and will be online soon. Thank you
        for your patience.
      </div>
    </div>
  );
};

export default Card;
