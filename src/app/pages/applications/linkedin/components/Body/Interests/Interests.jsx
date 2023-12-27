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
import Button from "../../../../../../components/common/Button";
import SVG from "../../../../../../assets/svg/SVG";
import ReadMoreButton from "../../../../../../components/common/ReadmoreButton/ReadMoreButton";

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
          {/* {console.log(data?.interests?.map((inter) => (inter?.companies)?.map((end)=> end.name)), 'interests')} */}
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
              {data?.interests?.map((inter) =>
                inter?.companies?.map(
                  (end) =>
                    ["0", "1"].includes(end.id) && (
                      <CustomTabPanel value={value} index={0}>
                        <div className="flex">
                          <div className="col-span-1">
                            <div className=" xl:hidden 2xl:flex md:hidden">
                              <img
                                src={end?.picture}
                                alt="linkedin-company-picture"
                                className="fill  w-[45px] h-[45px] cursor-pointer"
                              />
                            </div>
                          </div>
                          <div className="col-span-1 pl-3 pb-2">
                            <Button className="hover:text-blue-700 hover:underline !p-0">
                              {end?.name}
                            </Button>
                            <div>{end?.followers}</div>
                          </div>
                        </div>
                        <Button className="font-normal text-[14.5px] border border-gray-700 rounded-[1rem] p-1  hover:border-darky hover:bg-slate-300">
                          <SVG
                            icon="add"
                            className="rounded-md font-bold transition-all"
                            size={15.5}
                          />{" "}
                          Follow
                        </Button>
                      </CustomTabPanel>
                    )
                )
              )}

              {data?.interests?.map((inter) =>
                inter?.groups?.map(
                  (end) =>
                    ["0", "1"].includes(end.id) && (
                      <CustomTabPanel value={value} index={1}>
                        <div className="flex">
                          <div className="col-span-1">
                            <div className=" xl:hidden 2xl:flex md:hidden">
                              <img
                                src={end?.picture}
                                alt="linkedin-company-picture"
                                className="fill  w-[45px] h-[45px] cursor-pointer"
                              />
                            </div>
                          </div>
                          <div className="col-span-1 pl-3 pb-2">
                            <Button className="hover:text-blue-700 hover:underline !p-0">
                              {end?.name}
                            </Button>
                            <div>{end?.followers}</div>
                          </div>
                        </div>
                        <Button className="font-normal text-[14.5px] border border-gray-700 rounded-[1rem] p-1  hover:border-darky hover:bg-slate-300">
                          <SVG
                            icon="add"
                            className="rounded-md font-bold transition-all"
                            size={15.5}
                          />{" "}
                          Join
                        </Button>
                      </CustomTabPanel>
                    )
                )
              )}
              {data?.interests?.map((inter) =>
                inter?.newsletters?.map(
                  (end) =>
                    ["0", "1"].includes(end.id) && (
                      <CustomTabPanel value={value} index={2}>
                        <div className="flex">
                          <div className="col-span-1">
                            <div className=" xl:hidden 2xl:flex md:hidden">
                              <img
                                src={end?.picture}
                                alt="linkedin-company-picture"
                                className="fill w-[65px] h-[35px] cursor-pointer"
                              />
                            </div>
                          </div>
                          <div className="col-span-1 pl-3 pb-2">
                            <Button className="hover:text-blue-700 hover:underline !p-0">
                              {end?.name}
                            </Button>
                            <div className="text-gray-400 text-sm">
                              {end?.text}
                            </div>
                          </div>
                        </div>
                        <Button className="font-normal text-[14.5px] border border-gray-700 rounded-[1rem] p-1  hover:border-darky hover:bg-slate-300">
                          <SVG
                            icon="add"
                            className="rounded-md font-bold transition-all"
                            size={15.5}
                          />{" "}
                          Subscribe
                        </Button>
                      </CustomTabPanel>
                    )
                )
              )}
              {data?.interests?.map((inter) =>
                inter?.groups?.map(
                  (end) =>
                    ["0", "1"].includes(end.id) && (
                      <CustomTabPanel value={value} index={3}>
                        <div className="flex">
                          <div className="col-span-1">
                            <div className=" xl:hidden 2xl:flex md:hidden">
                              <img
                                src={end?.picture}
                                alt="linkedin-company-picture"
                                className="fill  w-[45px] h-[45px] cursor-pointer"
                              />
                            </div>
                          </div>
                          <div className="col-span-1 pl-3 pb-2">
                            <Button className="hover:text-blue-700 hover:underline !p-0">
                              {end?.name}
                            </Button>
                            <div>{end?.followers}</div>
                          </div>
                        </div>
                        <Button className="font-normal text-[14.5px] border border-gray-700 rounded-[1rem] p-1  hover:border-darky hover:bg-slate-300">
                          <SVG
                            icon="add"
                            className="rounded-md font-bold transition-all"
                            size={15.5}
                          />{" "}
                          Follow
                        </Button>
                      </CustomTabPanel>
                    )
                )
              )}
            </Box>
          </div>
        </>
      ))}
    </>
  );
}
