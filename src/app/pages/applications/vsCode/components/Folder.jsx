import * as React from "react";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import SVG from "../../../../assets/svg/SVG";
import SideBarButton from "./SideBarButton";
import {
  FolderContext,
  useFolderContext,
} from "../../../../contexts/vsCode/FolderProvider";

export default function Folder() {
  const { handleOboApp, oBoApp, handleProjects, projects, handleReadme, readme, } = useFolderContext(FolderContext);
  return (
    <TreeView

      defaultCollapseIcon={
        <SVG icon="folder-open" className={"text-blue-500"} size={11} />
      }
      defaultExpandIcon={<SVG icon="folder1" size={11} />}
      sx={{ height: 650, flexGrow: 1, maxWidth: 200, overflowY: "auto" }}
    >
      <TreeItem nodeId="1" label="Guide">
        <TreeItem nodeId="2" label="Readme">
          <SideBarButton
            onClick={() => {
              handleReadme();
            }}
            nodeId="2"
            text="readme.md"
            className={`hover:bg-[#333333] ${readme && "bg-[#333333]"}`}
            icon={<SVG className='text-blue-400' icon="info" size={11} />}
          />
        </TreeItem>
      </TreeItem>
      <TreeItem nodeId="11" label="_oBoApp">
        <TreeItem nodeId="13" label="index">
          <TreeItem nodeId="12" label="index" />
        </TreeItem>
      </TreeItem>
      <TreeItem nodeId="5" label="Projects">
          <SideBarButton
            onClick={() => {
              handleProjects();
            }}
            nodeId="4"
            text="myProjects.js"
            className={`hover:bg-[#333333] ${projects && "bg-[#333333]"}`}
            icon={<SVG icon="javascript" size={11} />}
          />
      </TreeItem>
    </TreeView>
  );
}
