import { Paper, Skeleton, Stack } from "@mui/material";
import styles from "../jobs.module.css";

const JobCardSkeleton = () => {
  return (
    <>
      {[...Array(6)]?.map(() => (
        <Paper elevation={1} className={styles["job-card-skeleton"]}>
          <Stack spacing={1}>
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem" }}
              height={20}
              width={98}
            />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="text" height={30} />
            <Skeleton variant="text" height={30} />
            <Skeleton variant="text" height={30} />
            <Skeleton variant="text" height={30} />
            <Skeleton variant="text" height={30} />
            <Skeleton variant="text" height={30} />
            <Skeleton variant="rounded" width={210} />
            <Skeleton variant="text" height={80} />
            <Skeleton variant="text" height={80} />
          </Stack>
        </Paper>
      ))}
    </>
  );
};

export default JobCardSkeleton;
