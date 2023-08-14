import { AuthContext } from "../providers";
import { useState, useEffect, useContext } from "react";
import { ShowToast } from "../components";
import ShortUniqueId from "short-unique-id";
import { firebaseGetUser, firebaseLogout } from "../config/firebaseAuth";
import { setData } from "../config/firebaseFirestore";
/* eslint-disable no-unused-vars */

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const uid = new ShortUniqueId({ length: 5, dictionary: "number" });

  const referralCode = new ShortUniqueId({
    length: 6,
    dictionary: "alphanum_upper",
  });

  const getUser = async () => {
    setLoading(true);
    firebaseGetUser(setUser, setLoading);
  };
  useEffect(() => {
    getUser();
  }, []);

  const register = async (data) => {
    try {
      await setData("CAs", user.user.uid, data);
      ShowToast("Registered Successfully");
      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await firebaseLogout();
    setUser(null);
    ShowToast("Logged out successfully");
  };

  return {
    user,
    logout,
    register,
    loading,
  };
};
