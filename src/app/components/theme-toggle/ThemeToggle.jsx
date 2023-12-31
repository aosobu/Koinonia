"use client"

import Image from 'next/image';
import styles from '@/app/components/theme-toggle/themetoggle.module.css';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { AppConstants } from '@/commons/AppConstants';

const ThemeToggle = () => {
    const {toggle, theme} = useContext(ThemeContext);
    console.log("theme toggle >> " + theme);

    return (
        <div className={styles.container}
             onClick={toggle}
             style = {
                theme  === AppConstants.DARK_THEME ?
                { backgroundColor: "white"} :
                { backgroundColor: "black"}
            }>
            <Image src="/moon.png" alt="moon" width={14} height={14}/>
            <div className={styles.ball}
                style = {
                    theme  === AppConstants.DARK_THEME ?
                    { left : 1, backgroundColor: "#0f172a"} :
                    { right : 1, backgroundColor: "#fff"}
                }
            ></div>
            <Image src="/sun.png" alt="sun" width={14} height={14}/>
        </div>
    )
}

export default ThemeToggle