import { Fragment } from "react";
import { Skeleton } from "@mui/material";
import styles from "./Loading.module.scss";

const Loading = () => {
  const dummyList = Array.from(new Array(5));
  return (
    <Fragment className={styles.container}>
      {dummyList.map((_, index) => (
        <div key={index}>
          <Skeleton
            variant="rectangular"
            height={250}
            sx={{
              borderRadius: "0.7rem",
              marginBottom: "0.5rem",
            }}
          />
          <Skeleton />
          <Skeleton width="60%" />
        </div>
      ))}
    </Fragment>
  );
};

export default Loading;
