import Head from 'next/head'
import Assignments from '../components/assignments/Assignments'
import Footer from '../components/footer/Footer'
import Intro from '../components/intro/Intro'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CS360 | Colm Lang</title>
      </Head>

      <div className={styles.sections}>
        <div id="home"></div>
        <Intro />
        <Assignments />
      </div>
      <Footer />
    </div>
  )
}
