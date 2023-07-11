import { GitHub } from "@mui/icons-material";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a
        href="https://github.com/aanmeba/boogle"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub sx={{ fontSize: "medium" }} />
      </a>
      <span>Created by Jungah Ahn 2023</span>
    </div>
  );
};

export default Footer;
