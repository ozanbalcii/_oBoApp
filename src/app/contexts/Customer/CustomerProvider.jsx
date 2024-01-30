import { createContext, useContext, useEffect, useState } from "react";
import {
  getUserData,
  getUserRoles,
  getUserStatus,
} from "../../pages/applications/customer/services/index";

export const CustomerContext = createContext();
export default function CustomerProvider({ children }) {
  const [userRoles, setUserRoles] = useState([]);
  const [userStatus, setUserStatus] = useState([]);
  const [userData, setUserData] = useState();

  const fetchUserRoles = async () => {
    const role = await getUserRoles();
    const userRoles = role?.data?.map((value) => ({
      value: value?.value,
      label: value?.label,
    }));
    setUserRoles(userRoles);
  };

  const fetchUserStatus = async () => {
    const  getStatus = await getUserStatus();
    const statusData = getStatus?.data?.map((value) => ({
      value: value?.value,
      label: value?.label,
    }));
    setUserStatus(statusData);
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
    fetchUserStatus();
  }, []);

  const data = {
    userData,
    setUserData,
    userRoles,
    setUserRoles,
    userStatus,
  };

  return (
    <CustomerContext.Provider value={data}>{children}</CustomerContext.Provider>
  );
}
export const useCustomerContext = () => useContext(CustomerContext);
