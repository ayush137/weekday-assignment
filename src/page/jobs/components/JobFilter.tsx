/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, TextField } from "@mui/material";
import styles from "../jobs.module.css";
import { TJObFilterProps } from "../type";
import { TReactProps } from "../../../index.types";

const JobFilter: TReactProps<TJObFilterProps> = (props) => {
  const { filter, setFilter } = props;
  return (
    <div className={styles["job-filter"]}>
      <Autocomplete
        value={filter?.experience}
        onChange={(_, newValue: string | null) => {
          setFilter((pre) => ({ ...pre, experience: newValue }));
        }}
        options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
        sx={{ width: 200 }}
        renderInput={(params) => (
          <TextField type="number" {...params} label="Experience" />
        )}
      />
      <TextField
        label="Company"
        value={filter?.company}
        onChange={(e) =>
          setFilter((pre) => ({ ...pre, company: e.target.value }))
        }
      />
      <TextField
        label="Location"
        value={filter?.location}
        onChange={(e) =>
          setFilter((pre) => ({ ...pre, location: e.target.value }))
        }
      />
    </div>
  );
};

export default JobFilter;
