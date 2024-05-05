import { FetchArgs } from "@reduxjs/toolkit/query";
import { TAPIMethods, TGetModuleReturn } from "../index.types";

export const replaceStringField = (
  text: string,
  replacer: Record<string, string>
) => {
  const replacerKeys = Object.keys(replacer);
  let newString = text;
  for (const key of replacerKeys) {
    newString = newString.replace(`{{${key}}}`, replacer[key]);
  }
  return newString;
};

export const appendQuery = (
  endpoint: string,
  query?: Record<string, string>
) => {
  let newString = endpoint;
  if (query) {
    Object.keys(query)
      ?.filter((item) => query[item])
      ?.map((item, index) => {
        if (!index) {
          newString =
            newString + "?" + item + "=" + encodeURIComponent(query[item]);
        } else {
          newString =
            newString + "&" + item + "=" + encodeURIComponent(query[item]);
        }
      });
  }
  return newString;
};

export const getModule = (module: string, method: TAPIMethods) => {
  return (data: TGetModuleReturn) => {
    const { body, subModule, params, query } = data;

    let url = `/${module}/${subModule}`;
    if (params) {
      url = replaceStringField(url, params);
    }
    if (query) {
      url = appendQuery(url, query);
    }
    console.log({ body, url, method });
    return { body, url, method } as FetchArgs;
  };
};
