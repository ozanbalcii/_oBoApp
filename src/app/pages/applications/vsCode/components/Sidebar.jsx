import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
      sx={{ flexGrow: 1, display: "flex", height: 524 }}
    >
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
          label="Item One"
          {...a11yProps(0)}
        />
        <Tab
          sx={{
            color: "#D1D5DA",
            "&:hover": {
              color: "white",
            },
          }}
          label="Item Two"
          {...a11yProps(1)}
        />
        <Tab
          sx={{
            color: "#D1D5DA",
            "&:hover": {
              color: "white",
            },
          }}
          label="Item Three"
          {...a11yProps(2)}
        />
        <Tab
          sx={{
            color: "#D1D5DA",
            "&:hover": {
              color: "white",
            },
          }}
          label="Item Four"
          {...a11yProps(3)}
        />
        <Tab
          sx={{
            color: "#D1D5DA",
            "&:hover": {
              color: "white",
            },
          }}
          label="Item Five"
          {...a11yProps(4)}
        />
      </Tabs>

      <div className="bg-[#252526] text-white">
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
