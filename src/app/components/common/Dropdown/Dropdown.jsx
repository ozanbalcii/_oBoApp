import * as React from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import { FaApple } from "react-icons/fa";

export default function CustomDropdown({ buttonName }) {
  const createHandleMenuClick = (menuItem) => () => {
    console.log(`Clicked on ${menuItem}`);
  };

  const Listbox = styled("ul")(
    ({ theme }) => `
      font-size: 0.875rem;
      padding: 0.5rem;
      margin: 0.5rem 0;
      min-width: 200px;
      border-radius: 0.5rem;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px); /* Frosted glass effect */
      background-color: rgba(50, 50, 64, 0.7); /* Semi-transparent background */
      border: 1px solid rgba(255, 255, 255, 0.1); /* Light border */
      z-index: 10;
      color: ${theme.palette.mode === "dark" ? "#f3f4f6" : "#1f2937"};
    `
  );

  const MenuItem = styled(BaseMenuItem)(
    ({ theme }) => `
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      font-size: 0.74rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      color: ${theme.palette.mode === "dark" ? "#ffffff" : "#ffffff"};
  
      &:hover {
        background-color: rgba(0, 128, 0, 0.7); 
        color: #ffffff;
      }
  
      &.${menuItemClasses.focusVisible} {
        outline: 3px solid ${theme.palette.mode === "dark" ? "#3399FF" : "#66B2FF"};
      }
  
      &.${menuItemClasses.disabled} {
        color: ${theme.palette.mode === "dark" ? "#6b7280" : "#9ca3af"};
      }
    `
  );

  const MenuButton = styled(BaseMenuButton)(
    ({ theme }) => `
      font-size: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      transition: all 150ms ease-in-out;
      cursor: pointer;
      color: #ffff;
  
      &:hover {
        background-color: rgba(0, 0, 0, 0.7);
      }

      &:focus-visible {
        box-shadow: 0 0 0 4px ${
          theme.palette.mode === "dark" ? "#66B2FF" : "#3399FF"
        };
        outline: none;
      }
    `
  );

  return (
    <Dropdown>
      <MenuButton className="text-white hover:bg-opacity-20">
        <FaApple />
      </MenuButton>

      <Menu slots={{ listbox: Listbox }}>
        {buttonName?.map((option) => (
          <div key={option?.label}>
            <MenuItem onClick={createHandleMenuClick(option?.label)}>
              {option?.label}
            </MenuItem>
            <div className="px-2">
              <hr className="border-t border-gray-600" />
            </div>
          </div>
        ))}
      </Menu>
    </Dropdown>
  );
}
