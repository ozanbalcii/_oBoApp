import { createContext, useContext, useEffect, useState } from "react";
import { getUserData, getUserRoles } from "../../pages/applications/customer/services/index";


export const CustomerContext = createContext();
export default function CustomerProvider({ children }) {
    const [userRoles, setUserRoles] = useState();
    const [userData, setUserData] = useState();

    const fetchUserRoles = async () => { 
        const role = await getUserRoles();
        console.log(role, 'role')
        const userRoles = role?.data?.map((value) => ({
            id: value?.id,
            title: value?.title,
        }))
        setUserRoles(userRoles)
    }


    const fetchUserData = async () => {
        const res = await getUserData();
        const users = res?.data?.map((item) => ({
            id: item?.id,
            name: item?.name,
            surname: item?.surname,
            birthdate: item?.birthdate,
            confirmPassword: item?.confirmPassword,
            email: item?.email,
            fkBankAccount: item?.fkBankAccount,
            lastSeen: item?.lastSeen,
            phone: item?.phone,
            fkRole: item?.fkRole,

            role: userRoles?.find((k) => k?.id === 3)?.title,

            status: item?.status,
            createdAt: item?.createdAt,
            updatedAt: item?.updatedAt,
        }))
        setUserData(users)
        }

 

    useEffect(() => {
        fetchUserData()
        fetchUserRoles()
    }, []) 



       

        console.log(userRoles?.find((k) => k?.id == (userData?.map((pp) => pp?.fkRole)))?.title , 'vvvv')

    console.log(userRoles?.find((k) => k?.id == 3)?.title, '??')
    console.log(userData, 'assasasasasasaas')







  const data = {};

  return (
    <CustomerContext.Provider value={data}>
      {children}
    </CustomerContext.Provider>
  );
}
export const useCustomerContext = () => useContext(CustomerContext);
