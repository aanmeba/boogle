import { NavLink, useLocation } from "react-router-dom";
import styles from "./Title.module.scss";

const Title = () => {
  const location = useLocation();

  const handleClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
    }
  };
  return (
    <>
      <NavLink
        to="/"
        onClick={handleClick}
        style={{ textDecoration: "none" }}
        disabled={location.pathname === "/"}
      >
        <h1 className={styles.title}>Boogle_</h1>
      </NavLink>
    </>
  );
};

export default Title;
