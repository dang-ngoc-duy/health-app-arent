import axiosClient from "../axiosClient";
import { UserLoginRequest, UserLoginResponse, UserProfile } from "../models";

const endPoint = "/users";

const UserServices = {
  //* GET - Methods
  getProfile: (token?: string) => {
    const url = endPoint + "/user_profile";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return axiosClient.get<UserProfile>(url, config);
  },
  login: (data: UserLoginRequest) => {
    const url = endPoint + "/login";
    return axiosClient.post<UserLoginResponse>(url, data);
  },
};

export default UserServices;
