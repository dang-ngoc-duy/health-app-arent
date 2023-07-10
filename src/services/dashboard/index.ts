import axiosClient from "../axiosClient";
import { QueryParams } from "../models";

const endPoint = "/dashboard";

const DashboardServices = {
  //* GET - Methods
  getProgressBarData: <T>() => {
    const url = endPoint + "/progress_circle";
    return axiosClient.get<T>(url);
  },
  getLineChartData: <T>() => {
    const url = endPoint + "/chart_line";
    return axiosClient.get<T>(url);
  },
  getFilterList: <T>() => {
    const url = endPoint + `/filters`;
    return axiosClient.get<T>(url);
  },
  getMealList: <T>(params: QueryParams) => {
    const url = endPoint + `/meals`;
    return axiosClient.get<T>(url, { params });
  },
};

export default DashboardServices;
