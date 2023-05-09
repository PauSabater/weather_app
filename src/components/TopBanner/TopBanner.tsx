import styles from "./TopBanner.module.scss"

export function TopBanner({ title }: { title: string}) {
    return (
        <div className={styles.wrapp} >
            <h1 className={styles.title}>{ title }</h1>
        </div>
    )
}