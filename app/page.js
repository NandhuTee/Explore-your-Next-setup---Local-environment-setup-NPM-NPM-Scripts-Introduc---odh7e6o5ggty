// page.js

import Head from 'next/head'; // Import Head component from Next.js
import styles from './page.module.css'; // Import CSS module

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>First Page of Next JS</title> {/* Set page title */}
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>First Page of Next JS</h1> {/* Display title */}
      </main>
    </div>
  );
}
