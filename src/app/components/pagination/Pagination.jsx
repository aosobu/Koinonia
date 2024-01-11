import React from 'react';
import styles from '@/app/components/Pagination/pagination.module.css';

const Pagination = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button}>
                previous
            </button>
            <button className={styles.button}>
                next
            </button>
        </div>
    )
}

export default Pagination