import IcoMoon from "react-icomoon";
import iconSet from "./selection.json";

const SVG = ({ icon, size = 45, color = "currentColor", className}) => {
  return (
    <IcoMoon 
    iconSet={iconSet}
    icon={icon}
    color={color}
    size={size}
    className={className}
     />
  );
};

export default SVG;
