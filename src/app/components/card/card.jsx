import React from 'react'
import styles from "./card.modules.css";

function card() {
  return (
    <div className={styles.container}>
        <div className={styles.post}>
            <div className={styles.imageContainer}>
                <Image src="/food.png" fill />
            </div>
            <div className={styles.textContainer}>
                            
            </div>
        </div>
    </div>
  )
}

export default card