import { Card, CardMedia, CardContent, Button } from "@mui/material";
import "./StyledCard.css";
import CircleIcon from "@mui/icons-material/Circle";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HomeIcon from "@mui/icons-material/Home";

import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useContext, useEffect, useRef, useState } from "react";
import PopperMenu from "../../../atoms/popperMenu/PopperMenu";
import StyledButton from "../../../atoms/styledButton/StyledButton";
import { CreateQuotationContext } from "../../../contexts/createQuotationContext/CreateQuotationContext";

const StyledCard = ({
  unitDetails,
  onClickFunc,
  unitIndex,
  cardMenuOptions,
  onClickDef,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Initially menu is closed
  const anchorRef = useRef(null);
  const popperRef = useRef(null);
  const deleteRef = useRef(null);
  const { currentUnit, setCurrentUnit } = useContext(CreateQuotationContext);
  const handleToggle = (e) => {
    setIsMenuOpen((prevOpen) => !prevOpen); // Toggle menu visibility
  };

  const [total, setTotal] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0.0);
  const {units,setUnits} = useContext(CreateQuotationContext)
  useEffect(() => {
    let total = 
      unitDetails?.primary_pricing?.uom_value +
        unitDetails?.secondary_pricing?.uom_value +
        unitDetails?.one_time_cost_pricing?.uom_value +
        unitDetails?.refundables_pricing?.uom_value +
       ( unitDetails?.inventory_pricing?.item_unit_price *
          unitDetails?.inventory_pricing?.quantity) +
        unitDetails?.parking_pricing?.uom_value || 0.0
    unitDetails?.amenities?.forEach((data)=>{
        total+= data?.amount || 0.00;
    })
    setTotal(total);
    setTotalDiscount(
      (unitDetails?.primary_pricing?.uom_value || 0.0) *
        ((unitDetails?.primary_pricing?.discount || 0) / 100) +
        (unitDetails?.secondary_pricing?.uom_value || 0.0) *
          ((unitDetails?.secondary_pricing?.discount || 0) / 100) +
        (unitDetails?.otcp_pricing?.uom_value || 0.0) *
          ((unitDetails?.otcp_pricing?.discount || 0) / 100) +
        (unitDetails?.refundables_pricing?.uom_value || 0.0) *
          ((unitDetails?.refundables_pricing?.discount || 0) / 100) +
        (unitDetails?.inventory_pricing?.item_unit_price || 0.0) *
          (unitDetails?.inventory_pricing?.quantity || 0) *
          ((unitDetails?.inventory_pricing?.discount || 0) / 100) +
        (unitDetails?.parking_pricing?.uom_value || 0.0) *
          ((unitDetails?.parking_pricing?.discount || 0) / 100) || 0.0
    );
  }, [unitDetails,units]);

  const handleClose = (action) => {
    if(typeof(action) === 'function'){
      action(unitDetails?.id);
      setCurrentUnit(unitIndex);
    }
    setIsMenuOpen(false);
  };

  return (
    <div
      onClick={(e) => {
        if (e.target !== anchorRef.current && e.target !== popperRef.current && e.target !== deleteRef.current) {
          console.log(popperRef, e.target);

          onClickFunc();
        }
      }}
      className="cardContainer"
    >
      <Card
        sx={{
          padding: "10px",
          width: "100%",
          border: "solid rgba(128, 128, 128, 0.253) 0.5px",
          borderRadius: "10px",
          boxShadow: "none",
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
        <CardMedia
          sx={{ height: 100, borderRadius: "5px", position: "relative" }}
          image={unitDetails?.main_image}
        >
          {(totalDiscount>0) && (
            <div className="discountAppliedContainer">
              <div> % Discount Applied</div>
            </div>
          )}
        </CardMedia>

        <CardContent>
          <div className="cardContentContainer">
            <div className="UnitInfoContainer">
              <div className="nameAndPriceContainer">
                <div>{unitDetails.companies.name}</div>
                <div
                  style={{
                    color: (totalDiscount>0) ? "#FF9340" : "",
                  }}
                >
                  $ {(total-totalDiscount).toFixed(2)}
                </div>
              </div>
              <div className="companyNameAndEstate">
                <div>{unitDetails.name}</div>
                <CircleIcon className="circle" />
                <div>{unitDetails.area_in_sqft} Sq.Ft</div>
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
              <StyledButton
                onClickFunc={handleToggle}
                reference={anchorRef}
                haveBorder={false}
                type="primary"
                content={
                  <>
                    <AddIcon
                      sx={{
                        pointerEvents: "none",
                      }}
                    />{" "}
                    Customize
                  </>
                }
              />
            </div>
          </div>
        </CardContent>
        <PopperMenu
          onClickDef={onClickDef}
          ref={popperRef}
          menuOptions={cardMenuOptions}
          anchorRef={anchorRef}
          isMenuOpen={isMenuOpen}
          handleClose={handleClose}
        />
      </Card>

      <div ref={deleteRef} onClick={()=>{
        setUnits((prev)=>{
          const newPrev = [...prev];
          newPrev.splice(unitIndex,1);
          return(newPrev);
        })
      }} className="cardDeleteIconContainer">
        <DeleteOutlineOutlinedIcon sx={{pointerEvents:'none'}} fontSize="inherit" />
      </div>
    </div>
  );
};

export default StyledCard;
