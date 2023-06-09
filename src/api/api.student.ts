import { IStudent } from "../model/student.model";
import { apiDelete, apiGet, apiPost, apiPut } from "./api.Axios";

const URL = "student";

export const getPagination = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  let _url = URL + "/pagination";
  if (page && limit) {
    _url += "?" + page + "&" + limit;
  }
  return apiGet<IStudent[]>(_url);
};

export const getAllStudent = async () => {
  return apiGet<IStudent[]>(URL);
};

export const getStudent = async (id: string) => {
  const _url = URL + "/" + id;
  return apiGet<IStudent>(_url);
};

export const getResultStudent = async (id: string) => {
  const _url = URL + "/" + id + "/result";
  return apiGet<IStudent>(_url);
};

export const postStudent = async (body: IStudent) => {
  return apiPost<IStudent>(URL, body);
};
export const putStudent = async ({
  id,
  body,
}: {
  id: string | undefined;
  body: IStudent;
}) => {
  const _url = URL + "/" + id;
  return apiPut<IStudent>(_url, body);
};

export const deleteStudent = async (id: string) => {
  const _url = URL + "/" + id;
  return apiDelete<IStudent>(_url);
};
