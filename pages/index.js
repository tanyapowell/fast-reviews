import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { auth } from 'firebase';
import { useAuth } from '../lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>Fast Reviews</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fast Reviews</h1>
        <p>
          Current User: <code>{auth?.user?.email}</code>
        </p>
        {auth.user ? (
          <button onClick={(e) => auth.signout()}>Sign Out</button>
        ) : (
          <button onClick={(e) => auth.signinWithGithub()}>Sign In</button>
        )}
      </main>
    </div>
  );
};

export default Home;
