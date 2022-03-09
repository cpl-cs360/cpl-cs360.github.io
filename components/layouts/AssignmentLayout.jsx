import styles from "./assignmentLayout.module.scss"
import Link from "next/link"

export default function AssignmentLayout({ meta, children }) {
    const { id, title, description } = meta;
    return (
        <div className={styles.assignment}>
            <div className={styles.backWrapper}>
                <Link href={"/#assignments"}>
                    <a className="button">Back to Assignments</a>
                </Link>
            </div>
            <div className={styles.headingWrapper}>
                <h3>Assignment { id < 10 ? "0" + id : id }</h3>
                <h1>{ title }</h1>
            </div>
            <div className={styles.body}>
                <p>{ description }</p>
                { children }
            </div>

        </div>
    )
}
