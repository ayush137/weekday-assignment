import { Paper } from "@mui/material";
import { useState } from "react";
import styles from "../jobs.module.css";
import Tag from "../../../common/tag";
import { TReactProps } from "../../../index.types";
import { TJobCardProps } from "../type";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  displayExperience,
  displaySalary,
  formatText,
} from "../../../utils/helper";
import JobModal from "./JobModal";
import CustomButton from "../../../common/button/CustomButton";

const JobCard: TReactProps<TJobCardProps> = (props) => {
  const [errorImage, setErrorImage] = useState(false);
  const { jobDetail, reference } = props;
  const salaryExists =
    jobDetail?.minJdSalary ||
    jobDetail?.minJdSalary === 0 ||
    jobDetail?.maxJdSalary ||
    jobDetail?.maxJdSalary === 0;

  const ExperienceExists =
    jobDetail?.minExp ||
    jobDetail?.minExp === 0 ||
    jobDetail?.maxExp ||
    jobDetail?.maxExp === 0;
  return (
    <Paper elevation={1} className={styles["job-card"]} ref={reference}>
      <div>
        <Tag>{`⏳ Posted 10 days ago`}</Tag>
        <div className={styles["primary-details"]}>
          <div className={styles["logo"]}>
            {errorImage || !jobDetail?.logoUrl ? (
              <AccountCircleIcon fontSize="large" />
            ) : (
              <img
                width={30}
                src={jobDetail?.logoUrl}
                alt={jobDetail?.companyName}
                onError={() => setErrorImage(true)}
              />
            )}
          </div>
          <div>
            {jobDetail?.companyName ? (
              <h3>{formatText(jobDetail?.companyName)}</h3>
            ) : null}
            {jobDetail?.jobRole ? <h2>{jobDetail?.jobRole}</h2> : null}
            {jobDetail?.location ? (
              <p className={styles["location"]}>
                {formatText(jobDetail?.location)}
              </p>
            ) : null}
          </div>
        </div>
        {salaryExists ? (
          <div
            className={styles["salary-text"]}
          >{`Estimated Salary: ${displaySalary(
            jobDetail?.minJdSalary,
            jobDetail?.maxJdSalary,
            jobDetail?.salaryCurrencyCode
          )} LPA ✅`}</div>
        ) : (
          ""
        )}
        <div
          className={styles[salaryExists ? "about-wrapper" : "about-wrapper-p"]}
        >
          <p className={styles["jd-about"]}>About company</p>
          <p className={styles["jd-description"]}>
            {jobDetail?.jobDetailsFromCompany || ""}
          </p>
        </div>
        <div className={styles["view-job"]}>
          <JobModal jobDetails={jobDetail?.jobDetailsFromCompany} />
        </div>
        {ExperienceExists ? (
          <div>
            <h3 style={{ marginTop: 10 }}>Required Experience:</h3>
            <h2>{displayExperience(jobDetail?.minExp, jobDetail?.maxExp)}</h2>
          </div>
        ) : null}
      </div>
      <div className={styles["button-wrap"]}>
        <CustomButton type="referral">
          <AccountCircleIcon fontSize="medium" />
          <div style={{ marginLeft: 10 }}>Unlock referral asks</div>
        </CustomButton>
        <CustomButton type="apply">⚡ Easy Apply</CustomButton>
      </div>
    </Paper>
  );
};

export default JobCard;
