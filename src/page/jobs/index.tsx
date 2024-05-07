import React, { useState } from "react";
import { useGetSampleJdJSONQuery } from "../../store/service/adhoc/post";
import JobCard from "./components/JobCard";
import styles from "./jobs.module.css";

const Jobs = () => {
  const [offset, setOffset] = useState(0);
  const { data, isUninitialized, isLoading } = useGetSampleJdJSONQuery({
    limit: 12,
    offset: offset,
  });
  console.log(data);
  //   setInterval(() => setOffset((pre) => pre + 10), 5000);

  return (
    <div className={styles["jobcard-wrapper"]}>
      {data?.jdList?.map((item) => (
        <JobCard jobDetail={item} />
      ))}
    </div>
  );
};

export default Jobs;
