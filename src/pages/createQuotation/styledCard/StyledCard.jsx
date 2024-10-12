import {
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import "./StyledCard.css";
import CircleIcon from "@mui/icons-material/Circle";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HomeIcon from "@mui/icons-material/Home";

import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useRef, useState } from "react";
import PopperMenu from "../../../atoms/popperMenu/PopperMenu";
import StyledButton from "../../../atoms/styledButton/StyledButton";

const StyledCard = ({ unitDetails ,onClickFunc,cardMenuOptions}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Initially menu is closed
  const anchorRef = useRef(null);
  const popperRef = useRef(null);
  const [isDiscountApplied,setIsDiscountApplied] = useState(true);

  const handleToggle = (e) => {
      setIsMenuOpen((prevOpen) => !prevOpen); // Toggle menu visibility

  };

  const handleClose = (action) => {
    action();
    setIsMenuOpen(false);
  };

  return (
    <div
    onClick={(e)=>{

      if(e.target!==anchorRef.current && e.target !== popperRef.current){
        console.log(popperRef,e.target)
        onClickFunc();
      }
    }}

    className="cardContainer">
      <Card
        sx={{
          padding: "10px",
          width: "100%",
          border:'solid rgba(128, 128, 128, 0.253) 0.5px',
          borderRadius:'10px',
          boxShadow:'none',
          "& .MuiCardContent-root": {
            padding: "0px 10px",
            paddingTop: "10px",
            paddingBottom: "0px",
          },
          "& .MuiCardContent-root:last-child": {
            padding: "0px 10px",
            paddingTop: "10px",
            paddingBottom: "0px",
          },
        }}
      >
        <CardMedia sx={{ height: 100, borderRadius: "5px" ,position:'relative'}} image={unitDetails?.image}>
      {isDiscountApplied &&  <div className="discountAppliedContainer">
        <div> % Discount Applied</div>
      </div>}
        </CardMedia>
       
        <CardContent>
          <div className="cardContentContainer">
            <div className="UnitInfoContainer">
              <div className="nameAndPriceContainer">
                <div>{unitDetails.name}</div>
                <div style={{color:isDiscountApplied?'#FF9340':''}}>$1,200</div>
              </div>
              <div className="companyNameAndEstate">
                <div>{unitDetails.company}</div>
                <CircleIcon className="circle" />
                <div>{unitDetails.area} Sq.Ft</div>
              </div>
            </div>
            <div className="unitsCountContainer">
              <div className="iconAndCountContainer">
                <LocalHotelIcon className="unitIcon" fontSize="inherit" />
                <div>{unitDetails.beds}</div>
              </div>
              <CircleIcon className="circle" fontSize="inherit" />
              <div className="iconAndCountContainer">
                <BathtubIcon className="unitIcon" fontSize="inherit" />
                <div>{unitDetails.baths}</div>
              </div>
              <CircleIcon className="circle" fontSize="inherit" />
              <div className="iconAndCountContainer">
                <HomeIcon className="unitIcon" fontSize="inherit" />
                <div>{unitDetails.bhk} BHK</div>
              </div>
            </div>
            <div className="customizeButtonContainer">
              <StyledButton onClickFunc={handleToggle} reference={anchorRef} haveBorder={false} type="primary" content={<><AddIcon sx={{
                pointerEvents:'none'
              }} /> Customize</>}/>
                
            </div>
          </div>
        </CardContent>
        <PopperMenu ref={popperRef} menuOptions={cardMenuOptions} anchorRef={anchorRef} isMenuOpen={isMenuOpen} handleClose={handleClose} />
      </Card>

      <div className="cardDeleteIconContainer">
        <DeleteOutlineOutlinedIcon fontSize="inherit" />
      </div>
    
    </div>
  );
};

export default StyledCard;
