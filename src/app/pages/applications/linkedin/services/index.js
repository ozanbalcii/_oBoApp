// import axios from 'axios';
import { linkedinUsersData } from "../../../../constants/data/linkedinUsersData";
// import { getStoredBearerToken } from "../../../../services/axios/index";

// const API_URL = process.env.REACT_APP_API_URL;
// export const getStoredBearerToken = localStorage?.getItem("bearerToken");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); //sleep

export const getLinkedinUsersData = async () => {
  try {
    await sleep(50);
    const res = linkedinUsersData;
    return { success: true, data: res };
  } catch (error) {
    console.log("An erro occured while fetchinng linkedin users data");
    return {
      success: false,
      message: "An erro occured while fetchinng linkedin users data",
    };
  }
};
