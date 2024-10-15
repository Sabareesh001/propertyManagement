import { Checkbox, Divider, Switch } from "@mui/material";
import ProfileIcon from "../../../atoms/profileIcon/ProfileIcon";
import "./SubUnitSelect.css";
import CircleIcon from "@mui/icons-material/Circle";
import { styled } from "@mui/material/styles";
import { useContext, useEffect, useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { CreateQuotationContext } from "../../../contexts/createQuotationContext/CreateQuotationContext";
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

const SubUnitSelect = ({subbUnitDetails,type,unitsCopy,setUnitsCopy}) => {
  const [selected, setSelected] = useState(false);
  const [checked,setChecked] = useState(false);
  useEffect(()=>{
    const target =  unitsCopy[currentUnit]?.[type].find((data)=>(data.id===subbUnitDetails?.id)) || null
    if(target){
      setSelected(true);
      console.log(target?.amount === 0.00)
      if(target?.isFree){
        setChecked(true);
      }
    }
  },[subbUnitDetails])
  const {currentUnit} = useContext(CreateQuotationContext);

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
          onChange={(e,value) => {
            if(value){
              unitsCopy[currentUnit]?.[type].push(
                { id:subbUnitDetails?.id,
                  name:subbUnitDetails?.name,
                  amount:subbUnitDetails.price,
                  discount:0.00,
                  isFree:false
               }
               )
            }
            else{
               const removeIndex =  unitsCopy[currentUnit]?.[type].findIndex((data)=>(data.id===subbUnitDetails?.id)) 
               if(removeIndex>=0){
                unitsCopy[currentUnit]?.[type].splice(removeIndex,1);
               }
            }
          
            setSelected(value);

          }}
          checked={selected}
        />
      </div>
      {subbUnitDetails?.isFree && selected && (
        <>
          <Divider />
          <div className="checkAndPrice">
            <Checkbox 
    checked={checked}
    onChange={(e,val)=>{
      console.log(val)
      setChecked(val);
     
        const targetIndex =  unitsCopy[currentUnit]?.[type].findIndex((data)=>(data.id===subbUnitDetails?.id))
        if(val){
        unitsCopy[currentUnit][type][targetIndex].amount = 0.00
        unitsCopy[currentUnit][type][targetIndex].isFree = true
   
    }
  else{
    unitsCopy[currentUnit][type][targetIndex].amount = subbUnitDetails?.price
    unitsCopy[currentUnit][type][targetIndex].isFree = false
  }
  }}
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
