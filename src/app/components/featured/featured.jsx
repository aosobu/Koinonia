import React from 'react';
import styles from '@/app/components/featured/featured.module.css';
import Image from 'next/image';

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b> Hello YouFaithers! </b><br/> grow your faith by daily reading the testimonies, experiences, and events 
                    in the life of fellow members of the body
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/coding.png" alt="featured image" fill className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                    Code generation design
                    </h1>
                    <p className={styles.postDesc}>
                    You can find (just about) anything on Medium — apparently even a page that doesn’t exist. Maybe these stories about finding what you didn’t know you were looking for will take you somewhere new?
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured