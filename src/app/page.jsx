import styles from "./homepage.module.css";
import Featured from "./components/featured/featured";
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";
import Menu from "./components/menu/Menu";

export default function Home() {
  return (
        <div>
          <Featured />
          <CategoryList />
          <div className="flex-container">
            <CardList />
            <Menu />
          </div>
         </div>
        );
}
