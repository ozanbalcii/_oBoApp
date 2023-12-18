import { headerButtonsData } from "../../constants/data/headerButtonsData";

// const API_URL = process.env.REACT_APP_API_URL;
// export const getStoredBearerToken = localStorage?.getItem("bearerToken");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); //sleep

//! sample of a the request
// export const exampleRequest = async () => {
//   try {
//     await sleep(50);
//     const response = await fetch(`${API_URL}/fakeEndpoint`, {
//       headers: {
//         Authorization: `Bearer ${getStoredBearerToken}`,
//       },
//     });
//     return { success: true, data: response.data };
//   } catch (error) {
//     console.error("An error has occurred:", error);
//     return { success: false, message: "An error has occurred." };
//   }
// };

export const getHeaderButtonsData = async () => {
  try {
    await sleep(50);
    const response = headerButtonsData;
    return {success: true, data: response };
  } catch (error) {
    console.error("An error has occurred:", error);
    return { success: false, message: "An error has occurred." };
  }
};
