import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Natural Immunity Exemption</title>
        <meta name="description" content="Natural Immunity Exemption" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Natural Immunity Exemption</h1>

        <p className={styles.description}>
          Natural Immunity Exemption for NHS and Care Home Staff
        </p>

        <Image
          src="/testingcapacity.png"
          alt="Antibody Testing Capacity"
          width={850}
          height={400}
        />
        <p>
          The UK has the capacity to process over <b>120,000</b> antibody tests
          <b> every day!</b>
        </p>
      </main>
    </div>
  );
}
