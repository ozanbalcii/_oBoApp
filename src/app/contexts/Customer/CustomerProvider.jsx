import { createContext, useContext, useEffect, useState } from "react";
import {
  getUserData,
  getUserRoles,
} from "../../pages/applications/customer/services/index";

export const CustomerContext = createContext();
export default function CustomerProvider({ children }) {
  const [userRoles, setUserRoles] = useState();
  const [userData, setUserData] = useState();

  const fetchUserRoles = async () => {
    const role = await getUserRoles();
    const userRoles = role?.data?.map((value) => ({
      id: value?.id,
      title: value?.title,
    }));
    setUserRoles(userRoles);
  };

  const fetchUserData = async () => {
    const res = await getUserData();
    const users = res?.data?.map((item) => ({
      id: item?.id,
      name: item?.name,
      surname: item?.surname,
      birthdate: item?.birthdate,
      password: item?.password,
      confirmPassword: item?.confirmPassword,
      email: item?.email,
      fkBankAccount: item?.fkBankAccount,
      lastSeen: item?.lastSeen,
      phone: item?.phone,
      role: item?.role, 
      status: item?.status,
    }));
    setUserData(users);
  };

  useEffect(() => {
    fetchUserData();
    fetchUserRoles();
  }, []);


  const data = {
    userData,
    setUserData,
  };

  return (
    <CustomerContext.Provider value={data}>{children}</CustomerContext.Provider>
  );
}
export const useCustomerContext = () => useContext(CustomerContext);
