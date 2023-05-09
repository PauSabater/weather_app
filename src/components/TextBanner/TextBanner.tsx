import styles from "./TextBanner.module.scss"

export function TextBanner({ text }: { text: string}) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp} >
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    );
  }