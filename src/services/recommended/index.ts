import axiosClient from "../axiosClient";
import { QueryParams } from "../models";

const endPoint = "/recommended";

const RecommendedServices = {
  //* GET - Methods
  getFilterList: <T>() => {
    const url = endPoint + "/filters";
    return axiosClient.get<T>(url);
  },
  getPostsList: <T>(params: QueryParams) => {
    const url = endPoint + `/posts`;
    return axiosClient.get<T>(url, { params });
  },
};

export default RecommendedServices;
