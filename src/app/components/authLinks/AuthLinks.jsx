"use client"

import React from 'react';
import styles from '@/app/components/authLinks/authlink.module.css';
import Link from 'next/link';
import { useState } from 'react';

const AuthLinks = () => {

    const [open, setOpen] = useState(false);
    const loginStatus = false;

    return (
    <>
        {
            loginStatus == false ? 
            ( <Link href="/login" className={styles.link}> Login </Link> ) : 
            ( <>
                <Link href="/write"> Write </Link>
                <span className={styles.link} > Logout </span>
            </>
            )
        }
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
        {
            open && (
                <div className={styles.responsiveMenu}>
                    <Link href="/"> Home </Link>
                    <Link href="/"> Contact </Link>
                    <Link href="/"> About </Link>
                    {
                        loginStatus == false ? 
                        ( <Link href="/login"> Login </Link> ) : 
                        ( <>
                            <Link href="/write"> Write </Link>
                            <span className={styles.link} > Logout </span>
                        </>
                        )
                    }
                </div>
            )
        }    
    </>);
        
}

export default AuthLinks