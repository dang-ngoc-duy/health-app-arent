import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "src/services/models";
import UserServices from "src/services/users";

export const useUserLogin = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const userProfileFromLocalStorage = localStorage.getItem("USER_PROFILE");
    return userProfileFromLocalStorage
      ? JSON.parse(userProfileFromLocalStorage)
      : null;
  });
  const navigate = useNavigate();

  const login = useCallback(
    async (username: string, password: string) => {
      try {
        const response = await UserServices.login({ username, password });
        const token = response?.data?.token;

        if (token) {
          // Use the token to get the user profile
          const profileResponse = await UserServices.getProfile(token);

          if (profileResponse?.data) {
            // Save the user profile to local storage
            localStorage.setItem(
              "USER_PROFILE",
              JSON.stringify(profileResponse.data)
            );
            // Update the state
            setUserProfile(profileResponse.data);
            navigate("/");
          }
        }
      } catch (error) {
        console.error("An error occurred during login:", error);
      }
    },
    [navigate]
  );

  return { login, userProfile };
};
