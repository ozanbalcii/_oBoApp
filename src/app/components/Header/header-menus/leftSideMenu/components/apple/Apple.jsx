import React, { useEffect, useState } from "react";
import CustomDropdown from "../../../../../common/Dropdown/Dropdown";
import {
  ButtonNameContext,
  useButtonValueContext,
} from "../../../../../../contexts/HeaderButtonsProvider";
import { getHeaderButtonsData } from "../../../../../../services/axios/index";

export default function Apple() {
  const [loading, setLoading] = useState(true);

  const { buttonName, setButtonName } = useButtonValueContext(ButtonNameContext);

  const fetchHeaderButtonsOptions = async () => {
    try {
      setLoading(true);
      const optionsData = await getHeaderButtonsData();
      const results = optionsData?.data?.map((item) => {
        if (item.type === 'apple') {
          return {
            value: item.id,
            label: item?.title || null,
          };
        }
        return null; 
      }).filter(Boolean); 
      console.log(results, 'resultsresults');
      setButtonName(results);
    } catch (error) {
      console.log("An error occurred", error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchHeaderButtonsOptions();
  }, []);

  return (
    <>
      <CustomDropdown
       loading={loading}
       buttonName={buttonName}
        />
    </>
  );
}
