import { ozanBalcipdf } from "../../../../constants/data/ozanBalcipdf";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); //sleep

export const getOzanBalciInfos = async () => {
  try {
        await sleep(50);
        const info = ozanBalcipdf;
        return { success: true, data: info };
  } 
  catch (error) {
        console.log(error, "an error occured while fetching ozanBalciInfos");
        return {
        success: false,
        message: "an error occured while fetching ozanBalciInfos",
     };
  }
};
