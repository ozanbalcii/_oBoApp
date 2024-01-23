// import axios from 'axios';
// import { getStoredBearerToken } from "../../../../services/axios/index";
import { extensionsData } from "../../../../constants/data/extensionsData";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); //sleep

export const getExtensionsData = async () => {
  try {
    await sleep(50);
    const res = extensionsData;
    return { success: true, data: res };
  } catch (error) {
    console.log(error, "An error occured while fetching Extensions Data");
    return {
      success: false,
      message: "An error occured while fetchinng Extensions Data",
    };
  }
};
