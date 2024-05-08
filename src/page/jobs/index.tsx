import React, { useEffect, useMemo, useState } from "react";
import { useGetSampleJdJSONQuery } from "../../store/service/adhoc/post";
import JobCard from "./components/JobCard";
import styles from "./jobs.module.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import JobCardSkeleton from "./components/JobCardSkeleton";
import JobFilter from "./components/JobFilter";
import { TJobFilter } from "./type";
import { useDebounce } from "../../hooks/useDebounce";

const Jobs = () => {
  const LIMIT = 12;
  const [filter, setFilter] = useState<TJobFilter>({
    experience: null,
    company: null,
    location: null,
  });
  const debouncedFilter = useDebounce(filter);

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

  const filteredList = useMemo(() => {
    return data?.jdList?.filter((item) => {
      const validExperience = !debouncedFilter?.experience
        ? true
        : (item?.minExp || 0) >= Number(debouncedFilter?.experience || 0);
      const validLocation = !debouncedFilter?.location
        ? true
        : item?.location &&
          item?.location
            ?.toLowerCase()
            ?.includes(debouncedFilter?.location?.toLowerCase());
      const validCompany = !debouncedFilter?.company
        ? true
        : item?.companyName &&
          item?.companyName
            ?.toLowerCase()
            ?.includes(debouncedFilter?.company?.toLowerCase());
      return validCompany && validExperience && validLocation;
    });
  }, [debouncedFilter, data?.jdList?.length]);

  const jobList = useMemo(() => {
    return filteredList?.map((item, index) => {
      return (
        <JobCard
          jobDetail={item}
          reference={
            index === filteredList?.length - 1 ? observerRef : undefined
          }
        />
      );
    });
  }, [data?.jdList?.length, filteredList]);

  return (
    <div>
      <JobFilter filter={filter} setFilter={setFilter} />
      <div className={styles["jobcard-wrapper"]}>
        {jobList}
        {isUninitialized || isLoading || isFetching ? (
          <JobCardSkeleton />
        ) : null}
      </div>
    </div>
  );
};

export default Jobs;
