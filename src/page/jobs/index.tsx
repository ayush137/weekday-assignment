import React from "react";
import { useGetSampleJdJSONQuery } from "../../store/service/adhoc/post";

const Jobs = () => {
  const { data = [] } = useGetSampleJdJSONQuery({
    body: { limit: 10, offset: 15 },
  });
  console.log(data);
  return <div>Jobs</div>;
};

export default Jobs;
