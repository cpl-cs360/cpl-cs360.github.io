import styles from "./assignments.module.scss"
import Assignment from "./assignment/Assignment"
import assignments from "../../data/assignments"

export default function Assignments() {
    return (
        <div className={styles.assignments} id="assignments">
            <ul>
                <li className={styles.labelWrapper}>
                    <h1 className="sectionLabel"><em>02.</em> Assignments</h1>
                </li>
                {
                    assignments.map(a => {
                        return <Assignment key={a.id} id={a.id} title={a.title} description={a.description} tools={a.tools}imagePath={`/images/A${a.id}_hero.png`} />
                    })
                }
            </ul>
        </div>
    )
}
