import * as React from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import { FaApple } from "react-icons/fa";

export default function CustomDropdown({ loading, buttonName}) {
  const createHandleMenuClick = (menuItem) => {
   
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };
  console.log(buttonName?.map(item =>{item.label}), "buttonName:");

  const blue = {
    50: "#F0F7FF",
    100: "#C2E0FF",
    200: "#99CCF3",
    300: "#66B2FF",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E6",
    700: "#0059B3",
    800: "#004C99",
    900: "#003A75",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };

  const green = {
    50: "#228B22",
  };
  const white = {
    50: "#FFFFFF",
  };

  const Listbox = styled("ul")(
    ({ theme }) => `
      font-size: 0.685rem;
      font-weight: 25; 
      box-sizing: border-box;
      backdrop-filter: opacity(0.6);
      margin: 9px 0;
      min-width: 200px;
      border-radius: 8px;
      z-index: 30;
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
      overflow: auto;
  
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[700] : grey[800]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      box-shadow: 0px 4px 6px ${
        theme.palette.mode === "dark"
          ? "rgba(0,0,0, 0.50)"
          : "rgba(0,0,0, 0.05)"
      };
      z-index: 1;
      border: 0.5px solid ${
        theme.palette.mode === "dark" ? grey[700] : grey[600]
      };
      background-color: rgba(50, 50, 64, 0.5);
    `
  );

  const MenuItem = styled(BaseMenuItem)(
    ({ theme }) => `
    font-family: 'Arial;
    list-style: none;
    padding: 3.5px 15px; 
    border-radius: 3px;
    margin: 4px 4px 4px;
    cursor: default;
    user-select: none;
    display: flex; 
    align-items: center; 
    // box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    color: rgb(255 255 255);
    &.${menuItemClasses.focusVisible} {
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[600] : blue[200]
      };
       background-color: ${
         theme.palette.mode === "dark" ? grey[800] : grey[100]
       };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
  
    &.${menuItemClasses.disabled} {
      color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }

   &:hover:not(.${menuItemClasses.disabled}) {
     background-color: ${theme.palette.mode === "dark" ? green[50] : green[50]};
     color: ${theme.palette.mode === "dark" ? white[50] : white[50]};
     font-weight: 200;
   }
   `
  );

  const MenuButton = styled(BaseMenuButton)(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.975rem;
    line-height: 1.5;
    padding: 6px 10px;
    border-radius: 5px;
    transition: all 150ms ease;
    cursor: pointer;
    // color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
    // background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    // border: 1px solid ${
      theme.palette.mode === "dark" ? grey[700] : grey[200]
    };
    // color: white;

    // &:hover {
    //   background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    //   border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    // }
  
    // &:active {
    //   background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
    // }
  
    &:focus-visible {
      box-shadow: 0 0 0 4px ${
        theme.palette.mode === "dark" ? blue[300] : blue[200]
      };
      outline: none;
    }
    `
  );

  return (
    <Dropdown>
      <MenuButton className="hover:bg-[#F8FAFC] hover:bg-opacity-20 text-white  ">
        <FaApple />
      </MenuButton>
      <Menu slots={{ listbox: Listbox }} className="backdrop-filter pl-2 ">
        {buttonName?.map((options) => (
          <>
          <MenuItem onClick={createHandleMenuClick("Profile")}>
            {options?.label}
          </MenuItem>
          <div className="pr-[0.4rem] pl-[0.4rem]">
          <hr className="border-1 border-[#4c4c61] " />
        </div>
          </>
        ))}
      </Menu>
    </Dropdown>
  );
}
