import Image from "next/image";
import styles from "./styles.module.scss";

export function HomePage() {
  return (
    <div className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏🏻 Hey, welcome</span>
        <h1>
          News about the <span>React</span> world
        </h1>
        <p>
          Get acess to all the publications <br />
          <span>for $9,90</span>
        </p>
      </section>
      <Image
        src="/images/avatar.svg"
        width={336}
        height={521}
        alt="Girl Coding"
      />
    </div>
  );
}
