// Apple.js
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

  const fetchHeaderButtonsOptions= async () => {
    try {
      setLoading(true);
      const opitonsData = await getHeaderButtonsData();
      const results = opitonsData?.data?.map((item) => ({
        value: item.id,
        label: item?.title ? item?.title : null,
      }))
      console.log(results,'resultsresults')
      setButtonName(results)
    } catch (error) {
      console.log("an error occured", error);
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
       setButtonName={setButtonName}
       buttonName={buttonName}
        />
    </>
  );
}
