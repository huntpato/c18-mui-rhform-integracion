import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Inicio from './components/Inicio/Inicio'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>c18</title>
        <meta name="description" content="Clase 18" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Inicio/>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
