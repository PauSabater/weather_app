import styles from "./TopBanner.module.scss"

export function TopBanner({ title, lines }: { title: string, lines: string[]}) {
    return (
        <div className={styles.wrapp} >
            <h1 className={styles.title}>{ title }</h1>
            { lines.map( line => <div><p className={styles.line}>{ line }</p><br></br></div> ) }
        </div>
    )
}