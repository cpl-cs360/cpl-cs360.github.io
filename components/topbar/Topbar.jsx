import styles from "./topbar.module.scss"
import Link from "next/link"

export default function Topbar() {
  return (
    <div className={styles.topbar}>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <Link href="/">
                    <a className={styles.logo}>cpl.</a>
                </Link>
            </div>
            <div className={styles.right}>
                <ul>
                    <Link href="/#intro">
                        <a><li>01. <span>Intro</span></li></a>
                    </Link>
                    <Link href="/#assignments">
                        <a><li>02. <span>Assignments</span></li></a>
                    </Link>
                    <a href="pdfs/Colm_Lang_Software_Engineer_Intern.pdf" target="_blank" className={styles.button + " button"}>Resume</a>
                </ul>
            </div>
        </div>
    </div>
  )
}
