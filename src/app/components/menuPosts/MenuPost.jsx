import React from 'react'
import Image from 'next/image';
import styles from '@/app/components/menuPosts/menupost.module.css'
import Link from 'next/link';

function MenuPost({withImage}) {
  return (
    <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    {withImage && <div className={styles.imageContainer}>
                        <Image src="/culture.png" fill className={styles.image} />
                    </div>}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Travel
                        </span>
                        <h3 className={styles.postTitle}> Consistent Hashing Algorithms: The secret to horizontal scaling in distributed systems </h3>
                        <div className={styles.details}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>10.03.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    {withImage && <div className={styles.imageContainer}>
                        <Image src="/culture.png" fill className={styles.image} />
                    </div>}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.culture}`}>
                            Culture
                        </span>
                        <h3 className={styles.postTitle}> Consistent Hashing Algorithms: The secret to horizontal scaling in distributed systems </h3>
                        <div className={styles.details}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>10.03.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    {withImage && <div className={styles.imageContainer}>
                        <Image src="/culture.png" fill className={styles.image} />
                    </div>}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>
                            Food
                        </span>
                        <h3 className={styles.postTitle}> Consistent Hashing Algorithms: The secret to horizontal scaling in distributed systems </h3>
                        <div className={styles.details}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>10.03.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    {withImage && <div className={styles.imageContainer}>
                        <Image src="/culture.png" fill className={styles.image} />
                    </div> }
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.fashion}`}>
                            fashion
                        </span>
                        <h3 className={styles.postTitle}> Consistent Hashing Algorithms: The secret to horizontal scaling in distributed systems </h3>
                        <div className={styles.details}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>10.03.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    { withImage && <div className={styles.imageContainer}>
                        <Image src="/culture.png" fill className={styles.image} />
                    </div> }
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.culture}`}>
                            Culture
                        </span>
                        <h3 className={styles.postTitle}> Consistent Hashing Algorithms: The secret to horizontal scaling in distributed systems </h3>
                        <div className={styles.details}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>10.03.2023</span>
                        </div>
                    </div>
                </Link>
            </div>
  )
}

export default MenuPost