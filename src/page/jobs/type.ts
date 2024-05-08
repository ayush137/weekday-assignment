import { TJObDetail } from "../../store/service/adhoc/type";

export type TJobCardProps = {
  jobDetail: TJObDetail;
  reference?: (instance: HTMLDivElement | null) => void;
};

export type TJobModalProps = {
  jobDetails: string | null;
};
