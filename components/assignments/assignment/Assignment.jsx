import styles from "./assignment.module.scss"
import Link from 'next/link'
import Image from 'next/image'

export default function Assignment({ id, title, description, tools, imagePath }) {
  return (
    <li className={styles.assignment}>
      <div className={`${styles.wrapper} ${id % 2 === 0 ? styles.left : styles.right}`}>
        <h2>Assignment { id < 10 ? "0" + id : id }</h2>
        <h1>{ title }</h1>
        <div className={styles.assignmentDescription}>
          <p>{ description }</p>
        </div>
        { tools && (
          <div className={styles.tools}>
            <p>{tools}</p>
          </div>
        )}
        <Link href={"/assignments/a" + id}>
          <a className={`button ${styles.button}`}>Learn More</a>
        </Link>
        
      </div>

      <div className={`${styles.imageWrapper} ${id % 2 === 0 ? styles.left : styles.right}`}>
        <Link href={"/assignments/a" + id}>
          <a className={styles.imageClick}> 
            <img src={imagePath} layout="fill" className={styles.image}/>
          </a>
        </Link>
      </div>
    </li>
    
  )

  }

