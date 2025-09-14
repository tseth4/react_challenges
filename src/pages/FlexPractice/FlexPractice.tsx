import styles from './FlexPractice.module.scss';

interface FlexPracticeProps {

}

export default function FlexPractice({ }: FlexPracticeProps) {
  return (
    <div className={styles.flexPracticeContainer}>
      <div className={styles.flexContainer}>
        <div className={styles.child}>
          1
        </div>
        <div className={styles.child}>
          2
        </div>
        <div className={styles.child}>
          3
        </div>
        <div className={styles.child}>
          4
        </div>
      </div>
    </div>
  )
}
