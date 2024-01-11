import React from 'react'
import styles from '@/app/[slug]/singlePage.module.css'
import Menu from '../components/menu/Menu'
import Image from 'next/image'

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1>React Hooks: UseEffect and UseContext</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src='/food.png' class={styles.image} fill />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}> John Doe</span>
                        <span className={styles.date}> 01.01.2024</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src='/fashion.png' class={styles.image} fill/>  
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}></div>
            <Menu />  
        </div>
    </div>
  )
}

export default SinglePage