import Featured from "./components/featured/featured";
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";
import Menu from "./components/menu/Menu";
import styles from "./homepage.module.css";

export default function Home() {
  return (
        <div>
          <Featured />
          <CategoryList />
          <div className={styles.content}>
            <CardList />
            <Menu />
          </div>
         </div>
        );
}
