import { UsersData } from "../../../../constants/data/userData";
import { UserRoles } from "../../../../constants/data/userRoles";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getUserData = async () => {
  try {
    await sleep(50);
    const response = UsersData;
    return { success: true, data: response };
  } catch (error) {
    console.error("An error has occurred:", error);
    return { success: false, message: "An error has occurred." };
  }
};
export const getUserRoles = async () => {
  try {
    await sleep(50);
    const response = UserRoles;
    return { success: true, data: response };
  } catch (error) {
    console.error("An error has occurred:", error);
    return { success: false, message: "An error has occurred." };
  }
};
