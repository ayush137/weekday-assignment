export type TGetSampleJdJSONPayload = {
  limit: number;
  offset: number;
};

export type TGetSampleJdJSONResponse = {
  jdList: Array<TJObDetail>;
  totalCount: number;
};

export type TJObDetail = {
  jdUid: string;
  jdLink: string | null;
  jobDetailsFromCompany: string | null;
  maxJdSalary: number | null;
  minJdSalary: number | null;
  salaryCurrencyCode: string | "INR" | null;
  location: string | null;
  minExp: number | null;
  maxExp: number | null;
  jobRole: string | null;
  companyName: string;
  logoUrl: string | null;
};
