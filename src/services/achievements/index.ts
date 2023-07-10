import axiosClient from "../axiosClient";
import { QueryParams } from "../models";

const endPoint = "/achievements";

const AchievementsServices = {
  //* GET - Methods
  getActionList: <T>() => {
    const url = endPoint + "/actions";
    return axiosClient.get<T>(url);
  },
  getBodyRecordData: <T>() => {
    const url = endPoint + "/body_record";
    return axiosClient.get<T>(url);
  },
  getExerciseList: <T>() => {
    const url = endPoint + `/exercise`;
    return axiosClient.get<T>(url);
  },
  getDiaryList: <T>(params: QueryParams) => {
    const url = endPoint + `/diary`;
    return axiosClient.get<T>(url, { params });
  },
};

export default AchievementsServices;
