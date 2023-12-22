import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Button from "../../../../components/common/Button";
import SVG from "../../../../assets/svg/SVG";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function LinkedinHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color=""
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color=""
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="bg-white flex justify-center ">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          ></Typography>

          <div className="flex items-center justify-center">
            {/* begin header left side  */}
            <div className="flex items-center justify-center p-2">
              <Button
                icon={<SVG icon="linkedin" className="rounded-md " size={35} />}
              />
              <input
                type="text"
                placeholder=" Search"
                className="bg-[#EDF3F7] border border-white text-darky rounded-md w-3/9 h-9 hover:border  hover:border-blue-400"
              />
            </div>
            {/* end header left side  */}

            {/* begin header right side */}
            <div className=" ml-[120px] text-darky ">
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <div className="flex items-center gap-5">
                  <div className="flex flex-col items-center justify-center">
                    <Button
                      icon={
                        <SVG
                          icon="home3"
                          className="text-[#666666] hover:text-darky"
                          size={23}
                        />
                      }
                    />
                    <div className="text-[12px] text-center">Home</div>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <Button
                      icon={
                        <SVG
                          icon="people"
                          className="text-[#666666] hover:text-darky"
                          size={23}
                        />
                      }
                    />
                    <div className="text-[12px] text-center ">My Network</div>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <Button
                      icon={
                        <SVG
                          icon="bag"
                          className="text-[#666666] hover:text-darky"
                          size={23}
                        />
                      }
                    />
                    <div className="text-[13px] text-center">Jobs</div>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <Button
                      icon={
                        <SVG
                          icon="message"
                          className="text-[#666666] hover:text-darky"
                          size={23}
                        />
                      }
                    />
                    <div className="text-[12px]">Message</div>
                  </div>

                  <div className="relative flex flex-col items-center justify-center">
                    <Button
                      icon={
                        <SVG
                          icon="bell"
                          className="text-[#666666] hover:text-darky"
                          size={23}
                        />
                      }
                    />
                    <span className="inline-flex items-center justify-center absolute top-0 right-0 -mt-[5.5px] mr-[12px] rounded-full bg-red-400 h-[17px] w-[17px]">
                      <span className="text-white">8</span>
                    </span>

                    <div className="text-[12px] text-center">Notifications</div>
                  </div>

                  <div className="flex flex-col items-center justify-center border-r border-gray-400">
                    <Button
                      icon={
                        <SVG
                          icon="profile"
                          className="text-[#666666] hover:text-darky"
                          size={23}
                        />
                      }
                    />
                    <div className="text-[11px] text-center ">Me</div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <Button
                      icon={
                        <SVG
                          icon="menu"
                          className="text-[#666666] hover:text-darky"
                          size={28}
                        />
                      }
                    />
                    <div className="text-[12px] text-center">For business</div>
                  </div>
                  <Button className="text-[#C6AA88] font-cantarell text-[11.5px] underline hover:text-darky transition-all whitespace-pre-line text-center">
                    Try Premium for <br /> 0$
                  </Button>
                </div>
              </Box>
            </div>
            {/* end header right side */}
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
