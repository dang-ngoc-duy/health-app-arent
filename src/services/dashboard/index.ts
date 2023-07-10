import { AxiosResponse } from "axios";
import axiosClient from "../axiosClient";
import { QueryParams } from "../models";

const endPoint = "/dashboard";

const DashboardServices = {
  //* GET - Methods
  getProgressBarData: () => {
    const url = endPoint + "/chart/pie";
    return axiosClient.get(url);
  },
  getLineChartData: () => {
    const url = endPoint + "/chart/line";
    return axiosClient.get(url);
  },
  getFilterList: () => {
    const url = endPoint + `/filters`;
    return axiosClient.get(url);
  },
  getMeals: <T>(params: QueryParams) => {
    const url = endPoint + `/meals`;
    return axiosClient.get<T>(url, { params });
  },
};

export default DashboardServices;
