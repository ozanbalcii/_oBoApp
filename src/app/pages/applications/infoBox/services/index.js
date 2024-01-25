// import axios from 'axios';
// import { getStoredBearerToken } from "../../../../services/axios/index";
import { infoBoxData } from "../../../../constants/data/infoBoxData";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); //sleep

export const getInfoBoxData = async () => {
  try {
    await sleep(50);
    const res = infoBoxData;
    return { success: true, data: res };
  } catch (error) {
    console.log(error, "An error occured while fetching InfoBox Data");
    return {
      success: false,
      message: "An error occured while fetchinng InfoBox Data",
    };
  }
};
