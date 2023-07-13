import { Skeleton } from "@mui/material";

const Loading = () => {
  const dummyList = Array.from(new Array(5));
  return (
    <>
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
    </>
  );
};

export default Loading;
