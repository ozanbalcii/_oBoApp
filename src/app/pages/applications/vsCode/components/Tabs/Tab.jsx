import React from "react";
import {
  FolderContext,
  useFolderContext,
} from "../../../../../contexts/vsCode/FolderProvider";
import Button from "../../../../../components/common/Button";
import SVG from "../../../../../assets/svg/SVG";

export default function Tab() {
  const { oBoApp, projects, readme } = useFolderContext(FolderContext);
  
  return (
    <>
    {(oBoApp || projects || readme) && (
     <div className="bg-[#1E1E1E] text-yellow-600  ">
     <div className="bg-[#333333]">
       <div className="p-2 pl-[108px]">
         <div className="border-[0.5px] border-gray-500 hover:bg-[#3e3e3e74] inline-block min-content p-2 rounded-md">
           <div className="flex items-center gap-1">
             <div>
               {oBoApp && (
                 <div>
                   <SVG icon="javascript" size={11} />
                   <span className="pl-1">oBoApp.js</span>
                 </div>
               )}
               {readme && (
                 <div>
                   <SVG
                     className={"text-blue-500"}
                     icon="info"
                     size={11}
                   />
                   <span className="pl-1">readme.md</span>
                 </div>
               )}
               {projects && (
                 <div>
                   <SVG icon="javascript" size={11} />
                   <span className="pl-1">myProjects.js</span>
                 </div>
               )}
             </div>
             <div>
               <Button
                 onClick={() => {
                   handleButtonLinkedin();
                 }}
                 className="ml-auto"
                 icon={<SVG icon="x, cancel, close" size={11} />}
               />
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>

    )}
 
    </>
  );
}