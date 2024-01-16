import React from "react";
import {
  FolderContext,
  useFolderContext,
} from "../../../../../contexts/vsCode/FolderProvider";
import Button from "../../../../../components/common/Button";
import SVG from "../../../../../assets/svg/SVG";

export default function Tab() {
  const { tabOBoApp, tabProjects, tabReadme } = useFolderContext(FolderContext);
  return (
    <>
      {(tabOBoApp || tabProjects || tabReadme) && (
        <div className="bg-[#1E1E1E] text-yellow-600  ">
          <div className="bg-[#333333]">
            <div className="p-2 pl-[108px]">
              <div className=" gap-1">
                <div className="flex items-center gap-[10px]">
                  {tabOBoApp && (
                    <div className="flex items-center border-[0.5px] border-gray-500 hover:bg-[#3e3e3e74] p-2 rounded-md">
                      <div className="inline-block min-content ">
                        <div className="flex items-center">
                          <div>
                            <SVG icon="react" size={11} />
                            <span className="pl-2">index.jsx</span>
                          </div>
                          <div>
                            <Button
                              onClick={() => {
                                // handleButtonLinkedin();
                              }}
                              className="ml-auto"
                              icon={<SVG icon="x, cancel, close" size={11} />}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {tabReadme ? (
                    <div className="flex items-center border-[0.5px] border-gray-500 hover:bg-[#3e3e3e74] p-2 rounded-md">
                      <div className="inline-block min-content ">
                        <div className="flex items-center">
                          <div>
                            <SVG
                              className={"text-blue-500"}
                              icon="info"
                              size={11}
                            />
                            <span className="pl-2">readme.md</span>
                          </div>
                          <div>
                            <Button
                              onClick={() => {
                                // handleButtonLinkedin();
                              }}
                              className="ml-auto"
                              icon={<SVG icon="x, cancel, close" size={11} />}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {tabProjects ? (
                    <div className="flex items-center border-[0.5px] border-gray-500 hover:bg-[#3e3e3e74] p-2 rounded-md">
                      <div className="inline-block min-content ">
                        <div className="flex items-center">
                          <div>
                            <SVG icon="javascript" size={11} />
                            <span className="pl-2">myProjects.js</span>
                          </div>
                          <div>
                            <Button
                              onClick={() => {
                                // handleButtonLinkedin();
                              }}
                              className="ml-auto"
                              icon={<SVG icon="x, cancel, close" size={11} />}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
