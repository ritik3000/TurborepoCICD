
import Image from "next/image";
import styles from "./page.module.css";
import urvashiMain from "./images/urvashi.jpg";
import urvashiSecond from "./images/urvashi_1.png";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <p className={styles.smallText}>For my beloved wife</p>
        <h1 className={styles.heading}>
          Gol mooh, you are the heart of my world.
        </h1>

        <p className={styles.bodyText}>
          Every day with you is a gift I never take for granted. You are my{" "}
          <span className={styles.highlight}>calm in every storm</span>, my
          loudest laughter, and the quiet strength behind everything I do. Your
          kindness, your courage, and the way you love so deeply make my life
          richer than I ever imagined.
        </p>

        <p className={styles.bodyText}>
          When life feels heavy, it&apos;s your voice that brings me peace.
          When I dream about the future, it&apos;s your hand I see in mine.
          You are not just important to my life —{" "}
          <span className={styles.highlight}>you are my life</span>, the
          greatest blessing I will ever know.
        </p>

        <p className={styles.quote}>
          &ldquo;If I found you again in another lifetime, I would still choose
          you, every single time.&rdquo;
        </p>

        <p className={styles.signature}>
          With all my love,
          <br />
          <span className={styles.signatureName}>RD</span>
        </p>

        <div className={styles.gallery}>
          <figure className={styles.photo}>
            <Image
              src={urvashiMain}
              alt="Urvashi smiling, cherished in my heart"
              className={styles.photoImg}
              placeholder="blur"
              sizes="(max-width: 900px) 100vw, 360px"
            />
          </figure>
          <figure className={styles.photo}>
            <Image
              src={urvashiSecond}
              alt="Another moment with Urvashi that I treasure"
              className={styles.photoImg}
              placeholder="blur"
              sizes="(max-width: 900px) 100vw, 360px"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}