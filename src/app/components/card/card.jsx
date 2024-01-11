import React from 'react'
import styles from '@/app/components/card/card.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Card() {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/fashion.png" fill class={styles.image}/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2023</span>
                <span className={styles.category}>Culture</span>
            </div>
            <Link href="/">
                <h1> Bonds and Bond Yields</h1>
            </Link>
            <p  className={styles.description}>
                Bonds are loans, short and simple, and as such, tell us about the money flow between all the
                various market participants. Put simply, it is a market which not only reveals the cost of money,
                but also reveals a variety of deeper trends including market sentiment and risk.     
            </p>
            <Link href="/" className={styles.link}> Read More </Link>
        </div>
    </div>
  )
}

export default Card