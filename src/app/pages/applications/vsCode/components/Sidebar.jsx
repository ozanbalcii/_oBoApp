import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SVG from "../../../../assets/svg/SVG";
import Folder from "./Folder";
import {
  FolderContext,
  useFolderContext,
} from "../../../../contexts/vsCode/FolderProvider";
import Search from "./Search";
import SourceControl from "./SourceControl";
import Bug from "./Bug";
import Extensions from "./Extensions";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const { handleSidebarToggle, toggle } = useFolderContext(FolderContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    
        <Box
          className="bg-[#292929] text-white"
          sx={{ flexGrow: 1, display: "flex", height: 664, width: 470 }}
        >
          <div style={{ border:'1px', display: "flex", justifyContent: "center" }}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              sx={{ borderLeft: 1, borderColor: "divider" }}
            >
              <Tab
                onClick={() => handleSidebarToggle()}
                sx={{
                  color: "#D1D5DA",
                  "&:hover": {
                    color: "white",
                  },
                }}
                icon={<SVG icon="documents" size={20} />}
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  color: "#D1D5DA",
                  "&:hover": {
                    color: "white",
                  },
                }}
                icon={<SVG icon="search" size={20} />}
                {...a11yProps(1)}
              />
              <Tab
                sx={{
                  color: "#D1D5DA",
                  "&:hover": {
                    color: "white",
                  },
                }}
                icon={<SVG icon="branch" size={20} />}
                {...a11yProps(2)}
              />
              <Tab
                sx={{
                  color: "#D1D5DA",
                  "&:hover": {
                    color: "white",
                  },
                }}
                icon={<SVG icon="bug" size={20} />}
                {...a11yProps(3)}
              />
              <Tab
                sx={{
                  color: "#D1D5DA",
                  "&:hover": {
                    color: "white",
                  },
                }}
                icon={<SVG icon="puzzle" size={20} />}
                {...a11yProps(4)}
              />
              <Tab
                sx={{
                  color: "#D1D5DA",
                  "&:hover": {
                    color: "white",
                  },
                }}
                icon={<SVG icon="folder" size={20} />}
                {...a11yProps(4)}
              />
            </Tabs>
          </div>
          {/* {!toggle && (  )} */}
          <div className="bg-[#252526] text-white w-full">
            <TabPanel value={value} index={0}>
            <Folder /> 
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Search />
            </TabPanel>
            <TabPanel value={value} index={2}>
            <SourceControl />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Bug/>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Extensions />
            </TabPanel>
          </div>
        </Box>
     
    </>
  );
}
