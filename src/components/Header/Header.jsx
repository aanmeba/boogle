import Title from "../Title/Title";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <Title />
      <SearchBar />
    </header>
  );
};

export default Header;
