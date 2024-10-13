import { Checkbox, Divider, Switch } from "@mui/material";
import ProfileIcon from "../../../atoms/profileIcon/ProfileIcon";
import "./SubUnitSelect.css";
import CircleIcon from "@mui/icons-material/Circle";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
const IOSSwitch = styled((props) => (
  <Switch
    size="small"
    focusVisibleClassName=".Mui-focusVisible"
    disableRipple
    {...props}
  />
))(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& .MuiSwitch-thumb": {
        backgroundColor: "#5AC782",
      },
      "& + .MuiSwitch-track": {
        backgroundColor: "#EEF9EE",
        opacity: 1,
        border: "solid #6682666c 1px",
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      backgroundColor: "#E4E8EE",
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 15,
    backgroundColor: "#98A0AC",
    height: 15,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E4E8EE",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

const SubUnitSelect = ({subbUnitDetails}) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="SubUnitSelectContainer">
      <div className="SubUnitSelect">
        <div className="profileAndInfoContainer">
          <ProfileIcon image={subbUnitDetails.image} type={"rounded"} />
          <div className="nameAndDateContainer">
            <div>
              <b>{subbUnitDetails.name}</b>
            </div>
            <div className="priceAndDateContainer">
              $ {subbUnitDetails.price}
              <CircleIcon className="circleIcon" />
              Valid {subbUnitDetails.start_date} - {subbUnitDetails.end_date}
            </div>
          </div>
        </div>
        <IOSSwitch
          onChange={() => {
            setSelected((prev) => !prev);
          }}
          checked={selected}
        />
      </div>
      {selected && (
        <>
          <Divider />
          <div className="checkAndPrice">
            <Checkbox 
    
 checkedIcon={<CheckCircleIcon sx={{color:'#5078E1'}}/>}
 icon={<RadioButtonUncheckedIcon />}
              />
            Free Applicability
          </div>
        </>
      )}
    </div>
  );
};

export default SubUnitSelect;
