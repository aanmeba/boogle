import { Skeleton } from "@mui/material";

const Loading = () => {
  const dummyList = Array.from(new Array(4));
  return (
    <>
      {dummyList.map((_, index) => (
        <div key={index}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={200}
            sx={{ borderRadius: "0.7rem", marginBottom: "0.5rem" }}
          />
          <Skeleton />
          <Skeleton width="60%" />
        </div>
      ))}
    </>
  );
};

export default Loading;
