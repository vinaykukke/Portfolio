import { useState, SyntheticEvent } from "react";
import Head from "next/head";
import { ClipboardError, ClipboardSuccess } from "components/Logos/Clipboard";
import {} from "./";
import styles from "styles/contact.module.scss";

enum STATUS {
  success = "SUCCESS",
  error = "ERROR",
  default = "",
}

enum STATUS_MESSAGE {
  success = "Success: Item successfully copied to clipboard!",
  error = "Error: Item not copied to clipboard!",
  default = "",
}

const Contact = () => {
  const [copiedToCpilboard, setCopiedState] = useState(false);
  const [clipboardApiStatus, setStatus] = useState({
    status: STATUS.default,
    message: STATUS_MESSAGE.default,
  });

  const copyToClipBoard = async (
    e: SyntheticEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    /* Copy the text inside the text field */
    const email = e.currentTarget.attributes.getNamedItem("data-email").value;
    try {
      await navigator.clipboard.writeText(email);
      setCopiedState(true);
      setStatus({
        status: STATUS.success,
        message: STATUS_MESSAGE.success,
      });
    } catch (_) {
      setStatus({
        status: STATUS.error,
        message: STATUS_MESSAGE.error,
      });
    }
    setTimeout(() => {
      setStatus({
        status: STATUS.default,
        message: STATUS_MESSAGE.default,
      });
      setCopiedState(false);
    }, 2500);
  };

  return (
    <section id="contact" className="section-main__wrapper">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {copiedToCpilboard && clipboardApiStatus && (
        <div
          className={styles.clipboardStatus}
          data-status={clipboardApiStatus.status}
        >
          {clipboardApiStatus.status === STATUS.success && <ClipboardSuccess />}
          {clipboardApiStatus.status === STATUS.error && <ClipboardError />}
          <span className={styles.status_message}>
            {clipboardApiStatus.message}
          </span>
        </div>
      )}
      <h1>
        Let's make something <span className={styles.great}>great</span>
        <span className={styles.exclamation}>!</span>
      </h1>
      <div>
        <h3>Contact</h3>
        <p>
          I'm seeking out opportunities to collaborate with companies / agencies
          / individuals, not just work for them. I favor open-minded
          collaborators. I want to bring my collective work experience to the
          table where we can work together to solve real business-problems in a
          way that optimizes all of our respective experience and knowledge.
        </p>
        <p>
          If that all sounds about right, then lets see how we can work together
          and make a difference.
        </p>
        <p>Feel free to reach out through any platforms bellow:</p>
        <div className={styles.contactLinks}>
          <a
            className={styles.contact__email}
            onClick={copyToClipBoard}
            data-email="kukke06@gmail.com"
          />
          <a
            href="https://www.linkedin.com/in/vinay-kukke"
            target="_blank"
            className={styles.contact__linkedin}
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/vinaykukke"
            target="_blank"
            className={styles.contact__instagram}
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
