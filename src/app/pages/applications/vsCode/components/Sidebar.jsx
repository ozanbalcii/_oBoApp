import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "../../../../components/common/Button";
import SVG from "../../../../assets/svg/SVG";

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
        <Box sx={{ p: 3 }}>
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      className="bg-[#333333] text-white"
      sx={{ flexGrow: 1, display: "flex", height: 664, width: 550 }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{ borderLeft: 1, borderColor: "divider" }}
        >
          <Tab
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
        </Tabs>{" "}
      </div>

      <div className="bg-[#252526] text-white w-full">
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
      </div>
    </Box>
  );
}
