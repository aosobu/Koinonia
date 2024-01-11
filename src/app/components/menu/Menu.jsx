import React from 'react';
import styles from '@/app/components/Menu/menu.module.css';
import MenuPost from '../menuPosts/MenuPost';
import MenuCategories from '../menuCategories/MenuCategories';

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <h1>Most Polpular</h1>
            <MenuPost withImage={false} />


            <h2 className={styles.subtitle}>Discover by topic</h2>
            <h1>Categories</h1>
            <MenuCategories />
            


            <h2 className={styles.subtitle}>Chosen by Author</h2>
            <h1>Editor's Pick</h1>
            <MenuPost withImage={true} />
            
        </div>
    )
}

export default Menu