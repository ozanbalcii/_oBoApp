import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import SVG from "../../../../assets/svg/SVG";
import SideBarButton from "./SideBarButton";

export default function FirstComponent() {
  return (
    <TreeView
      defaultCollapseIcon={
        <SVG icon="folder-open" className={"text-blue-500"} size={11} />
      }
      defaultExpandIcon={<SVG icon="folder1" size={11} />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      <TreeItem nodeId="1" label="_oBoApp">
        <SideBarButton nodeId="2" text="ddd"  icon={<SVG icon="react" size={11} />}/>
      </TreeItem>
      <TreeItem nodeId="11" label="_oBoApp">
        <TreeItem nodeId="13" label="index">
          <TreeItem nodeId="12" label="index" />
        </TreeItem>
      </TreeItem>

      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="6" label="MUI">
          <TreeItem nodeId="8" label="index.js" />
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}
