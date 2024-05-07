import { FetchArgs } from "@reduxjs/toolkit/query";
import { TAPIMethods, TGetModuleReturn } from "../index.types";
import { CURRENCY_SYMBOL_MAP } from "./currency-symbol-map";

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

export const formatText = (text?: string) => {
  return text
    ? text
        ?.split(" ")
        ?.map(
          (item) =>
            `${item?.charAt(0)?.toUpperCase()}${item
              ?.substring(1)
              ?.toLowerCase()}`
        )
        .join(" ")
    : "";
};

export const displaySalary = (
  minSalary: number | null,
  maxSalary: number | null,
  currency: string | null
) => {
  const minSalaryExists = minSalary || minSalary === 0;
  const maxSalaryExists = minSalary || minSalary === 0;
  const salary = `${
    CURRENCY_SYMBOL_MAP?.[currency || "INR"] //providing inr as default
  }${
    minSalaryExists && maxSalaryExists
      ? `${minSalary} - ${maxSalary}`
      : minSalaryExists
      ? minSalary.toString()
      : maxSalary?.toString()
  }`;
  return salary;
};

export const displayExperience = (
  minExperience: number | null,
  maxExperience: number | null
) => {
  const minExperienceExists = minExperience || minExperience === 0;
  const maxExperienceExists = minExperience || minExperience === 0;
  const experience = `${
    minExperienceExists && maxExperienceExists
      ? `${minExperience} - ${maxExperience}`
      : minExperienceExists
      ? minExperience.toString()
      : maxExperience?.toString()
  } years`;
  return experience;
};
