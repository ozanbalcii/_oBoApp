import { UsersData } from "../../../../constants/data/userData";
import { UserRoles } from "../../../../constants/data/userRoles";
import { UserStatus } from "../../../../constants/data/userStatusData";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getUserData = async () => {
  try {
    await sleep(1000);
    const response = UsersData;
    return { success: true, data: response };
  } catch (error) {
    console.error("An error has occurred:", error);
    return { success: false, message: "An error has occurred." };
  }
};
export const getUserRoles = async () => {
  try {
    await sleep(1000);
    const response = UserRoles;
    return { success: true, data: response };
  } catch (error) {
    console.error("An error has occurred:", error);
    return { success: false, message: "An error has occurred." };
  }
};

export const getUserStatus = async () => {
  try {
    await sleep(1000);
    const response = UserStatus;
    return { success: true, data: response };
  } catch (error) {
    console.error("An error has occurred:", error);
    return { success: false, message: "An error has occurred." };
  }
};

export const deleteCustomer = async (id) => {
  try {
    await sleep(1000);
    const response = UsersData.filter((item) => item.id !== id);
    return { success: true, data: response };
  } catch (error) {
    console.error("An error has occurred:", error);
    return { success: false, message: "An error has occurred." };
  }
};
