import React from "react";
import {
  FolderContext,
  useFolderContext,
} from "../../../../../contexts/vsCode/FolderProvider";
import Button from "../../../../../components/common/Button";
import SVG from "../../../../../assets/svg/SVG";

export default function Tab() {
  const {
    handleTabOpenProjects,
    handleTabOpenOboApp,
    handleTabOpenReadme,
    handleTabCloseOboApp,
    handleTabCloseProjects,
    handleTabCloseReadme,
    handleProjects,
    handleReadme,
    handleOboApp,
    tabOBoApp,
    tabProjects,
    tabReadme,
  } = useFolderContext(FolderContext);
  console.log(tabOBoApp, tabProjects, tabReadme, "dsdsdsds");
  return (
    <>
      <div className="bg-[#1E1E1E] text-yellow-500">
        <div className="bg-[#333333]">
          <div className="p-2 pl-[108px]">
            <div className=" gap-1 ">
              <div className="flex items-center gap-[10px]">
                {tabOBoApp && (
                  <div className="flex items-center border-[0.5px] border-gray-500 hover:bg-[#3e3e3e74] p-2 rounded-md cursor-pointer">
                    <div className="inline-block min-content ">
                      <div className="flex items-center">
                        <Button
                          onClick={() => {
                            handleOboApp();
                          }}
                        >
                          <SVG icon="react" size={11} />
                          <span className="pl-2 font-thin">index.jsx</span>
                        </Button>
                        <div>
                          <Button
                            onClick={() => {
                              handleTabCloseOboApp();
                            }}
                            className="ml-auto"
                            icon={<SVG icon="x, cancel, close" size={11} />}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {tabReadme && (
                  <div className="flex items-center border-[0.5px] border-gray-500 hover:bg-[#3e3e3e74] p-2 rounded-md cursor-pointer">
                    <div className="inline-block min-content ">
                      <div className="flex items-center">
                        <Button
                          onClick={() => {
                            handleReadme();
                          }}
                        >
                          <SVG
                            className={"text-blue-500"}
                            icon="info"
                            size={11}
                          />
                          <span className="pl-2 font-thin">readme.md</span>
                        </Button>
                        <div>
                          <Button
                            onClick={() => {
                              handleTabCloseReadme();
                            }}
                            className="ml-auto"
                            icon={<SVG icon="x, cancel, close" size={11} />}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {tabProjects && (
                  <div className="flex items-center border-[0.5px] border-gray-500 hover:bg-[#3e3e3e74] p-2 rounded-md cursor-pointer">
                    <div className="inline-block min-content ">
                      <div className="flex items-center">
                        <Button
                          onClick={() => {
                            handleProjects();
                          }}
                        >
                          <SVG icon="javascript" size={11} />
                          <span className="pl-2 font-thin">myProjects.js</span>
                        </Button>
                        <div>
                          <Button
                            onClick={() => {
                              handleTabCloseProjects();
                            }}
                            className="ml-auto"
                            icon={<SVG icon="x, cancel, close" size={11} />}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
