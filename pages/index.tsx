import Head from 'next/head';
import styles from 'styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Falaq</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Home page</h1>
        </main>
      </div>
    </>
  );
}
