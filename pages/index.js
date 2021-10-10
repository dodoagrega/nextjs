import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Olá estou alterando o codigo pronto da vercel <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h2>versao 2.0</h2>
     </main>
    </div>
  )
}