import { TJObDetail } from "../../store/service/adhoc/type";

export type TJobCardProps = {
  jobDetail: TJObDetail;
  reference?: (instance: HTMLDivElement | null) => void;
};

export type TJobModalProps = {
  jobDetails: string | null;
};

export type TJobFilter = {
  experience: string | null;
  location: string | null;
  company: string | null;
};

export type TJObFilterProps = {
  filter: TJobFilter;
  setFilter: React.Dispatch<React.SetStateAction<TJobFilter>>;
};
