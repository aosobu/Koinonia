import React from 'react';
import styles from '@/app/components/CardLIst/cardlist.module.css';
import Pagination from '../pagination/Pagination';
import Image from 'next/image';

const CardList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}></h1>
            <div className={styles.posts}>
                
            </div>
            <Pagination />
        </div>
    )
}

export default CardList