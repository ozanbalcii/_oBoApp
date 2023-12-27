import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  LinkedinPageDataContext,
  useLinkedinPageDataContext,
} from "../../../../../../contexts/LinkedinPageProvider";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Interests() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { mainDataOfUser } = useLinkedinPageDataContext(
    LinkedinPageDataContext
  );

  return (
    <>
      {mainDataOfUser?.map((data) => (
        <>
        {console.log(data, 'xd')}
          <div className="bg-white rounded-[0.495rem] border-[0.1rem]">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={value} onChange={handleChange}>
                  <Tab
                    className="font-bold"
                    label="Companies"
                    {...a11yProps(0)}
                  />
                  <Tab label="Groups" {...a11yProps(1)} />
                  <Tab label="Newsletters" {...a11yProps(2)} />
                  <Tab label="Schools" {...a11yProps(3)} />
                </Tabs>
              </Box>
              {data?.companies?.map((edu) => (
                  <CustomTabPanel value={value} index={0}>
                    <div className="grid grid-cols-2">
                      <div className="col-span-1 ">
                        <div>{edu?.name} sd</div>
                      </div>
                      <div className="col-span-1 ">
                        <div>2</div>
                      </div>
                    </div>
                  </CustomTabPanel>
              ))}

              <CustomTabPanel value={value} index={1}>
                Item Two
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Item Three
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                Item Three
              </CustomTabPanel>
            </Box>
          </div>
        </>
      ))}
    </>
  );
}
