import createHttpAxiosInstance from "../utils/http";
const http = createHttpAxiosInstance();

export const apiGet = async <T,>(url: string) => {
  try {
    const response = await http.get(`${url}`);
    if (!response) {
      throw new Error("Request not found!!!");
    }
    const data: T = response.data;
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const apiPost = async <T,>(url: string, body: any) => {
  try {
    const response = await http.post(`${url}`, body);
    if (!response) {
      throw new Error("Request not found!!!");
    }
    const data: T = response.data;
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const apiPut = async <T,>(url: string, body: any) => {
  try {
    const response = await http.put(`${url}`, body);
    if (!response) {
      throw new Error("Request not found!!!");
    }
    const data: T = response.data;
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const apiDelete = async <T,>(url: string) => {
  try {
    const response = await http.delete(`${url}`);
    if (response.status !== 200) {
      throw new Error("Request failed");
    }
    const deleteData: T = response.data;
    return deleteData;
  } catch (error: any) {
    throw new Error(error);
  }
};
