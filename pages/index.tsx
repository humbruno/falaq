import SEO from 'components/SEO';
import styles from 'styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <SEO
        tabName="Falaq"
        title="Falaq"
        description="Create value for your business."
      />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Home page</h1>
        </main>
      </div>
    </>
  );
}
