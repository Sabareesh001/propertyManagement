import {
  Box,
  Button,
  Dialog,
  Divider,
  ImageList,
  ImageListItem,
  Input,
  Modal,
  TextField,
} from "@mui/material";
import "./UnitDetailsModal.css";
import CloseIcon from "@mui/icons-material/Close";
import CircleIcon from "@mui/icons-material/Circle";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HomeIcon from "@mui/icons-material/Home";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import StyledChip from "../../../atoms/styledChip/StyledChip";
import BookIcon from "@mui/icons-material/BookOutlined";
import StyledButton from "../../../atoms/styledButton/StyledButton";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import StyledSelect from "../../../atoms/styledSelect/StyledSelect";
import { useContext, useEffect, useState } from "react";
import { CreateQuotationContext } from "../../../contexts/createQuotationContext/CreateQuotationContext";
const UnitDetailsModal = ({
  isOpen = false,
  onClose,
  imageList,
  unitIndex,
  editDiscount,
  isDeleting,
}) => {
  const {units,setUnits} = useContext(CreateQuotationContext);
  const [unitDetails,setUnitDetails] = useState([]);
  useEffect(()=>{
    setUnitDetails(units[unitIndex]);
  },[units,unitIndex])


  const [unitPriceBills,setUnitPricesBills] = useState([])


  useEffect(()=>{
     setUnitPricesBills([{
      name:'Primary Pricing',
      amount:unitDetails?.primary_pricing?.uom_value || 0.00,
      discount: unitDetails?.primary_pricing?.discount,
      onDelete: ()=>{
         setUnits((prev)=>{
          const newPrev = [...prev];
          newPrev[unitIndex].primary_pricing.uom_value = 0.00;
          return(newPrev)
         })
      }
    },
    {
      name:'Secondary Pricing',
      amount:unitDetails?.secondary_pricing?.uom_value || 0.00,
      discount: unitDetails?.secondary_pricing?.discount,
      onDelete: ()=>{
        setUnits((prev)=>{
         const newPrev = [...prev];
         newPrev[unitIndex].secondary_pricing.uom_value = 0.00
         return(newPrev)
        })
     }
    },
    {
      name:'One Time Cost Pricing',
      amount:unitDetails?.otcp_pricing?.uom_value || 0.00,
      discount:unitDetails?.otcp_pricing?.discount,
      onDelete: ()=>{
        setUnits((prev)=>{
         const newPrev = [...prev];
         newPrev[unitIndex].otcp_pricing.uom_value = 0.00
         return(newPrev)
        })
     }
    },
    {
      name:'Refundable Pricing', 
      amount:unitDetails?.refundables_pricing?.uom_value || 0.00,
      discount:unitDetails?.refundables_pricing?.discount,
      onDelete: ()=>{
        setUnits((prev)=>{
         const newPrev = [...prev];
         newPrev[unitIndex].refundables_pricing.uom_value = 0.00
         return(newPrev)
        })
     }
    },
    {
      name:'Inventory Pricing',
      amount:unitDetails?.inventory_pricing?.item_unit_price * unitDetails?.inventory_pricing?.quantity || 0.00,
      discount:unitDetails?.inventory_pricing?.discount,
      onDelete: ()=>{
        setUnits((prev)=>{
         const newPrev = [...prev];
         newPrev[unitIndex].inventory_pricing.item_unit_price = 0.00
         return(newPrev)
        })
     }
    },
    {
      name:'Parking Pricing',
      amount:unitDetails?.parking_pricing?.uom_value || 0.00,
      discount:unitDetails?.parking_pricing?.discount,
      onDelete: ()=>{
        setUnits((prev)=>{
         const newPrev = [...prev];
         newPrev[unitIndex].parking_pricing.uom_value = 0.00
         return(newPrev)
        })
     }
    },])
  },[unitDetails,units])

  const [finalTotal,setFinalTotal] =  useState(0.00);

  useEffect(()=>{
    let total = 0.00;
    unitPriceBills.forEach((data) => {
      const discountedAmount = data.amount * (1 - data.discount / 100); 
      total += discountedAmount; 
    });
    setFinalTotal(total);
    
  },[unitPriceBills])

  return (
    <Dialog maxWidth open={isOpen} onClose={onClose}>
      <Box
        width={900}
        sx={{
          padding: "15px",
          display: "flex",

          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div className="titleAndCloseIcon">
          <div>Unit Details</div>
          <CloseIcon onClick={onClose} />
        </div>
        <Divider />
        <div className="billAndImagesContainer">
          <div className="leftSectionContainer">
            <ImageList sx={{}} cols={4}>
              {imageList &&
                imageList?.map((data, i) => {
                  return i < 5 ? (
                    <ImageListItem
                      rows={i === 0 ? 2 : null}
                      cols={i === 0 ? 2 : null}
                    >
                      <img
                        style={{ position: "relative", borderRadius: "5px" }}
                        src={data?.image}
                      ></img>
                      {i === 4 && imageList.length - 5 > 0 && (
                        <div className="moreLabelContainer">
                          +{imageList.length - 5}
                        </div>
                      )}
                    </ImageListItem>
                  ) : (
                    <></>
                  );
                })}
            </ImageList>
            <div className="nameAndIdContainer">
              {unitDetails?.name}
              <div className="unitIdLabel">{unitDetails?.unitId}</div>
            </div>
            <div>{unitDetails?.address}</div>
            <div
              style={{
                justifyContent: "normal",
                gap: "10px",
              }}
              className="unitsCountContainer"
            >
              <div
                style={{
                  justifyContent: "normal",
                }}
                className="iconAndCountContainer"
              >
                <LocalHotelIcon className="unitIcon" fontSize="inherit" />
                <div className="units">{unitDetails?.beds}</div>
              </div>
              <CircleIcon className="circle" fontSize="inherit" />
              <div className="iconAndCountContainer">
                <BathtubIcon className="unitIcon" fontSize="inherit" />
                <div className="units">{unitDetails?.baths}</div>
              </div>
              <CircleIcon className="circle" fontSize="inherit" />
              <div className="iconAndCountContainer">
                <HomeIcon className="unitIcon" fontSize="inherit" />
                <div className="units">{unitDetails?.bhk} BHK</div>
              </div>
              <CircleIcon className="circle" fontSize="inherit" />
              <div className="iconAndCountContainer">
                <SelectAllIcon className="unitIcon" fontSize="inherit" />
                <div className="units">{unitDetails?.area} Sq.ft</div>
              </div>
            </div>
            <Divider />
            <div className="handbookAndDownloadButtonContainer">
              <div className="bookIconContainer">
                <BookIcon sx={{ fontSize: "20px" }} fontSize="inhereit" />{" "}
                Handbook
              </div>
              <StyledButton
                haveBorder={false}
                type="primary"
                content={"View / Download"}
              />
            </div>
          </div>
          <div className="secondSectionContainer">
            <div className="secondInnerContainer">
              <div className="pricingDetailsTableContainer">
                <div
                  style={{
                    color: "#091B29",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    paddingBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Unit Price Details
                </div>
                <div className="pricingDetailsRowContainer">
                  {
                    unitPriceBills.map((data)=>{
                      return(
                       (data.amount>0 )&& <>
                         <div className="pricingDetailsRow">
                    <div>{data.name}</div>
                    {isDeleting ? (
                      
                      <div className="deleteComponentContainer">
                         <div>${data.amount.toFixed(2)}</div>
                        <div onClick={data.onDelete} className="deleteButton">
                          <DeleteOutlineOutlinedIcon />
                        </div>
                      </div>
                    ) : (
                      <div>${data.amount.toFixed(2)}</div>
                    )}
                  </div>
                  {!isDeleting && (
                    (editDiscount || data.discount>0) &&<div className="pricingDetailsSubRow">
                       <div>Discount</div>
                      {editDiscount ? (
                        <div className="discountEditAndSelect">
                          <TextField
                            sx={{
                              "& .MuiOutlinedInput-root": { height: 30 },
                            }}
                            value={1000}
                          >
                            {" "}
                          </TextField>
                          <StyledSelect
                            sx={{
                              "& .MuiOutlinedInput-input": {
                                height: "1.8em",
                                minHeight: "0em",
                                padding: "0px",
                              },
                            }}
                          />
                        </div>
                      ) : (
                        <div>{data.discount}%</div>
                      )}
                    </div>
                  )}
                <Divider />

                        </>
                      )
                    })
                  }
                 
                </div>
                
              </div>
              <div className="totalContainer">
                <div>
                  <div>Final Total</div>
                  <div>${finalTotal.toFixed(2)}</div>
                </div>
                {editDiscount && <StyledButton content={"Apply Discount"} />}
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Dialog>
  );
};

export default UnitDetailsModal;
