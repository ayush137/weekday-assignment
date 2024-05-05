import { ReactNode } from "react";

export type TReactProps<Type = object> = React.FC<
  Type & { children?: ReactNode }
>;

export type TAPIMethods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export type TGetModuleReturn = {
  subModule?: string;
  body?: Record<string, unknown>;
  header?: Record<string, string>;
  params?: Record<string, string>;
  query?: Record<string, string>;
  toastOnError?: boolean;
  toastOnSuccess?: boolean;
};
