import React from 'react'
import styles from "@/app/components/footer/footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="YouFaith" width={50} height={50} />
            <h1 className={styles.logoText}>YouFaith</h1>
          </div>
          <div className={styles.description}>
          You can find (just about) anything on Medium — apparently even a page that doesn’t exist. Maybe these stories about finding what you didn’t know you were looking for will take you somewhere new?
          </div>
          <div className={styles.icons}>
            <Image src="/facebook.png" alt="" width={18} height={18} />
            <Image src="/instagram.png" alt="" width={18} height={18} />
            <Image src="/tiktok.png" alt="" width={18} height={18} />
            <Image src="/youtube.png" alt="" width={18} height={18} />
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}> Links </span>
            <Link href="/">Homepage</Link>
            <Link href="/">Blog</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}> Tags </span>
            <Link href="/">Style</Link>
            <Link href="/">Fashion</Link>
            <Link href="/">Coding</Link>
            <Link href="/">Travel</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}> Social </span>
            <Link href="/">Facebook</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">TikTok</Link>
            <Link href="/">Youtube</Link>
          </div>
        </div>
    </div>
  )
}

export default Footer