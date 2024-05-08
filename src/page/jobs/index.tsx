import React, { useEffect, useMemo, useState } from "react";
import { useGetSampleJdJSONQuery } from "../../store/service/adhoc/post";
import JobCard from "./components/JobCard";
import styles from "./jobs.module.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import JobCardSkeleton from "./components/JobCardSkeleton";

const Jobs = () => {
  const LIMIT = 12;
  const { isIntersecting, observer, observerRef } = useIntersectionObserver();
  const [offset, setOffset] = useState(0);
  const { data, isUninitialized, isLoading, isFetching } =
    useGetSampleJdJSONQuery({
      limit: 12,
      offset: offset,
    });
  const hasMore = (data?.totalCount || 0) >= offset + LIMIT;

  useEffect(() => {
    if (isIntersecting && hasMore) {
      setOffset((pre) => pre + LIMIT);
      observer?.disconnect();
    }
  }, [isIntersecting]);

  const jobList = useMemo(() => {
    return data?.jdList?.map((item, index) => {
      return (
        <JobCard
          jobDetail={item}
          reference={
            index === data?.jdList?.length - 4 ? observerRef : undefined
          }
        />
      );
    });
  }, [data?.jdList?.length]);

  return (
    <div className={styles["jobcard-wrapper"]}>
      {jobList}
      {isUninitialized || isLoading || isFetching ? <JobCardSkeleton /> : null}
    </div>
  );
};

export default Jobs;
