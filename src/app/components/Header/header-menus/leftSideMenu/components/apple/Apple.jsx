// Apple.js
import React from 'react';
import CustomDropdown from '../../../../../common/Dropdown/Dropdown';
import { ButtonNameContext, useButtonValueContext } from '../../../../../../contexts/HeaderButtonsProvider';


export default function Apple() {
  const { buttonName, setButtonName } = useButtonValueContext(ButtonNameContext);

  return (
    <>
      <CustomDropdown />
    </>
  );
}
