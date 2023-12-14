import React, { useState } from 'react'
import { FaApple } from 'react-icons/fa'
import Button from '../../../../../common/Button';
import Dropdown from '../../../../../common/Dropdown/Dropdown';

export default function Apple() {
const[dropdownOpen, setDropdownOpen] = useState(false);   
  return (
    <>
        <Dropdown/>
    </>
  )
}




