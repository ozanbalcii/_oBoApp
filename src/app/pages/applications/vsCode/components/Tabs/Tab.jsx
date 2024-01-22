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
    handleOboApp,
    handleReadme,
    handleProjects,
    projects,
    readme,
    oBoApp,

  } = useFolderContext(FolderContext);
  return (
    <>
        <div className="bg-[#1E1E1E] text-yellow-600  ">
          <div className="bg-[#333333]">
            <div className="p-2 pl-[108px]">
              <div className=" gap-1 ">
                <div className="flex items-center gap-[10px]">
                  { oBoApp && (
                    <div className="flex items-center border-[0.5px] border-gray-500 hover:bg-[#3e3e3e74] p-2 rounded-md cursor-pointer">
                      <div className="inline-block min-content ">
                        <div className="flex items-center">
                          <Button
                          onClick={() => {
                            handleTabOpenOboApp()
                          }}
                          >
                            <SVG icon="react" size={11} />
                            <span className="pl-2 ">index.jsx</span>
                          </Button>
                          <div>
                            <Button
                              onClick={() => {
                                handleOboApp();
                              }}
                              className="ml-auto"
                              icon={<SVG icon="x, cancel, close" size={11} />}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {  readme   && (
                  <div className="flex items-center border-[0.5px] border-gray-500 hover:bg-[#3e3e3e74] p-2 rounded-md cursor-pointer">
                  <div className="inline-block min-content ">
                    <div className="flex items-center">
                          <Button
                              onClick={() => {
                                handleTabOpenReadme()
                              }}
                          >
                            <SVG
                              className={"text-blue-500"}
                              icon="info"
                              size={11}
                            />
                            <span className="pl-2">readme.md</span>
                          </Button>
                          <div>
                            <Button
                              onClick={() => {
                                handleReadme();
                              }}
                              className="ml-auto"
                              icon={<SVG icon="x, cancel, close" size={11} />}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) }
                  {projects  && (
                    <div className="flex items-center border-[0.5px] border-gray-500 hover:bg-[#3e3e3e74] p-2 rounded-md cursor-pointer">
                      <div className="inline-block min-content ">
                        <div className="flex items-center">
                          <Button
                              onClick={() => {
                                handleTabOpenProjects();
                              }}
                          >
                            <SVG icon="javascript" size={11} />
                            <span className="pl-2">myProjects.js</span>
                          </Button>
                          <div>
                            <Button
                              onClick={() => {
                                handleProjects();
                              }}
                              className="ml-auto"
                              icon={<SVG icon="x, cancel, close" size={11} />}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) }
                </div>
              </div>
            </div>
          </div>
        </div>
  
    </>
  );
}
