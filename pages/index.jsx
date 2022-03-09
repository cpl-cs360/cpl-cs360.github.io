import Head from 'next/head'
import Assignments from '../components/assignments/Assignments'
import Intro from '../components/intro/Intro'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CS360 | Colm Lang</title>
      </Head>

      <div className={styles.sections}>
        <Intro />
        <Assignments />
      </div>

    </div>
  )
}
