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
  unitIndex,
  editDiscount,
  isDeleting,
}) => {
  const discountTypeOptions = [
    {
      label: "%",
      value: 2,
      toPercent: (value,total)=>{
         return(value);
      },
      reduce: (percentage, total) => {
        console.log(percentage, total);
        return percentage;
      },
    },
    {
      label: "AED",
      value: 1,
      toPercent: (value,total)=>{
        return((value/total)*100);
     },
      reduce: (percentage, total) => {
        console.log(percentage, total);

        return (percentage / 100) * total;
      },
    },
  ];

  const [selectedDiscountTypeList, setSelectedDiscountTypeList] = useState([]);
  const [discountValueList, setDiscountValueList] = useState([]);
  const { units, setUnits } = useContext(CreateQuotationContext);

  const [unitsCopy, setUnitsCopy] = useState([]);
  function toFixedMax(value, maxDecimals) {
    const decimalPart = value?.toString().split('.')[1];
    if (decimalPart && decimalPart?.length > maxDecimals) {
      return Number(value?.toFixed(maxDecimals));
    }
    return value;
  }
  useEffect(() => {
    setUnitsCopy([...units]);
  }, [units]);


 const [imageList,setImageList] = useState([]);
 

  const [unitDetails, setUnitDetails] = useState([]);
  useEffect(() => {
    console.log(unitsCopy[unitIndex]);
    setUnitDetails({...unitsCopy[unitIndex]});
  }, [unitsCopy, unitIndex]);

  useEffect(()=>{
    setImageList(unitDetails?.image_list);
 },[unitDetails])
 

  const [unitPriceBills, setUnitPricesBills] = useState([]);

  useEffect(() => {

      setSelectedDiscountTypeList(Array(unitPriceBills.length).fill(discountTypeOptions[1]));

      const tempDiscountValues = [];

      unitPriceBills.forEach((data) => {
        tempDiscountValues.push(data.discount);
      });
      setDiscountValueList(tempDiscountValues);
  }, [unitPriceBills]);

  useEffect(() => {
    console.log("Price Bills")
    setUnitPricesBills([
      {
        name: "Primary Pricing",
        amount: unitDetails?.primary_pricing?.uom_value || 0.0,
        discount: unitDetails?.primary_pricing?.discount,
        onDiscountChange: (value) => {
          setUnitsCopy((prev) => {
            const newPrev = [...prev];
            newPrev[unitIndex].primary_pricing.discount = value;
            return newPrev;
          });
        },
        onDelete: () => {
          setUnitsCopy((prev) => {
            const newPrev = [...prev];
            newPrev[unitIndex].primary_pricing.uom_value = 0.0;
            return newPrev;
          });
        },
      }
      ,
      {
        name: "Secondary Pricing",
        amount: unitDetails?.secondary_pricing?.uom_value || 0.0,
        discount: unitDetails?.secondary_pricing?.discount,
        onDiscountChange: (value) => {
          setUnitsCopy((prev) => {
            const newPrev = [...prev];
            newPrev[unitIndex].secondary_pricing.discount = value;
            return newPrev;
          });
        },
        onDelete: () => {
          setUnitsCopy((prev) => {
            const newPrev = [...prev];
            newPrev[unitIndex].secondary_pricing.uom_value = 0.0;
            return newPrev;
          });
        },
      },
      {
        name: "One Time Cost Pricing",
        amount: unitDetails?.one_time_cost_pricing?.uom_value || 0.0,
        discount: unitDetails?.one_time_cost_pricing?.discount,
        onDiscountChange: (value) => {
          setUnitsCopy((prev) => {
            const newPrev = [...prev];
            newPrev[unitIndex].one_time_cost_pricing.discount = value;
            return newPrev;
          });
        },
        onDelete: () => {
          setUnitsCopy((prev) => {
            const newPrev = [...prev];
            newPrev[unitIndex].one_time_cost_pricing.uom_value = 0.0;
            return newPrev;
          });
        },
      },
      {
        name: "Refundable Pricing",
        amount: unitDetails?.refundables_pricing?.uom_value || 0.0,
        discount: unitDetails?.refundables_pricing?.discount,
        onDiscountChange: (value) => {
          setUnitsCopy((prev) => {
            const newPrev = [...prev];
            newPrev[unitIndex].refundables_pricing.discount = value;
            return newPrev;
          });
        },
        onDelete: () => {
          setUnitsCopy((prev) => {
            const newPrev = [...prev];
            newPrev[unitIndex].refundables_pricing.uom_value = 0.0;
            return newPrev;
          });
        },
      },
      {
        name: "Inventory Pricing",
        amount:
          unitDetails?.inventory_pricing?.item_unit_price *
            unitDetails?.inventory_pricing?.quantity || 0.0,
        discount: unitDetails?.inventory_pricing?.discount,
        onDiscountChange: (value) => {
          setUnitsCopy((prev) => {
            const newPrev = [...prev];
            newPrev[unitIndex].inventory_pricing.discount = value;
            return newPrev;
          });
        },
        onDelete: () => {
          setUnitsCopy((prev) => {
            const newPrev = [...prev];
            newPrev[unitIndex].inventory_pricing.item_unit_price = 0.0;
            return newPrev;
          });
        },
      },
      {
        name: "Parking Pricing",
        amount: unitDetails?.parking_pricing?.uom_value || 0.0,
        discount: unitDetails?.parking_pricing?.discount,
        onDiscountChange: (value) => {
          setUnitsCopy((prev) => {
            const newPrev = [...prev];
            newPrev[unitIndex].parking_pricing.discount = value;
            return newPrev;
          });
        },
        onDelete: () => {
          setUnitsCopy((prev) => {
            const newPrev = [...prev];
            newPrev[unitIndex].parking_pricing.uom_value = 0.0;
            return newPrev;
          });
        },
      },
    
      ...(unitDetails?.amenities?.map((amenity, index) => ({
        name:amenity.name,  // Assuming each amenity has a name
        amount: amenity.amount || 0.0,  // Assuming each amenity has a uom_value
        discount: amenity.discount || 0.0, // Assuming each amenity has a discount
        isFree:amenity.isFree,
        onDiscountChange: (value) => {
          setUnitsCopy((prev) => {
            const newPrev = [...prev];
            newPrev[unitIndex].amenities[index].discount = value;  // Updating amenity discount
            return newPrev;
          });
        },
        onDelete: () => {
          setUnitsCopy((prev) => {
            const newPrev = [...prev];
            newPrev[unitIndex].amenities.splice(index,1);
            return newPrev;
          });
        },
      })) || []),
      ...(unitDetails?.utilities?.map((utility, index) => ({
        name:utility.name,  // Assuming each amenity has a name
        amount: utility.amount || 0.0,  // Assuming each amenity has a uom_value
        discount: utility.discount || 0.0, // Assuming each amenity has a discount
        isFree:utility.isFree,
        onDiscountChange: (value) => {
          setUnitsCopy((prev) => {
            const newPrev = [...prev];
            newPrev[unitIndex].utilities[index].discount = value;  // Updating amenity discount
            return newPrev;
          });
        },
        onDelete: () => {
          setUnitsCopy((prev) => {
            const newPrev = [...prev];
            newPrev[unitIndex].utilities.splice(index,1);
            return newPrev;
          });
        },
      })) || [])
    ]);

  },[unitDetails]);
    

  const [finalTotal, setFinalTotal] = useState(0.0);

  useEffect(() => {
    let total = 0.0;
    unitPriceBills.forEach((data) => {
      const discountedAmount = data.amount * (1 - data.discount / 100);
      total += discountedAmount;
    });
    setFinalTotal(total);
  }, [unitPriceBills]);

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
                        src={data}
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
                <div className="units">{unitDetails?.area_in_sqft} Sq.ft</div>
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
                  {unitPriceBills.map((data, i) => {
                    return (
                      ( data.amount>0 || data?.isFree) && (
                        <>
                          <div className="pricingDetailsRow">
                            <div>{data.name}</div>
                            {isDeleting ? (
                              <div className="deleteComponentContainer">
                                <div>{(data?.isFree)?'Free':'$'+Number(data?.amount)?.toFixed(2)}</div>
                                <div
                                  onClick={data.onDelete}
                                  className="deleteButton"
                                >
                                  <DeleteOutlineOutlinedIcon />
                                </div>
                              </div>
                            ) : (
                              <div>{(data?.isFree)?'Free':'$'+Number(data?.amount)?.toFixed(2)}</div>
                            )}
                          </div>
                          {!isDeleting &&
                            (editDiscount || data.discount > 0) && (
                              <div className="pricingDetailsSubRow">
                                <div>Discount</div>
                                {editDiscount ? (
                                  <div className="discountEditAndSelect">
                                    <TextField
                                      type="Number"
                                      fullWidth
                                      sx={{
                                        "& .MuiOutlinedInput-root": {
                                          height: 30,
                                        },
                                      }}
                                      value={
                                       toFixedMax( selectedDiscountTypeList?.[i] !== null
                                          ? discountTypeOptions
                                              ?.find(
                                                (data) =>
                                                  data.value ===
                                                  selectedDiscountTypeList?.[i]
                                                    ?.value
                                              )
                                              ?.reduce(
                                                Number(discountValueList[i]),
                                                data.amount
                                              )
                                          : discountValueList[i],2)
                                      }
                                      onChange={(e) => {
                                        const max = selectedDiscountTypeList?.[i]?.label==="%"?100:data.amount;
                                       
                                        console.log(e.target.value);
                                        const value = Number(e.target.value)
                                        if(value>max || value<0){
                                             return
                                        }
                                        data.onDiscountChange(
                                          selectedDiscountTypeList?.[i] !== null
                                          ? discountTypeOptions
                                              .find(
                                                (data) =>
                                                  data.value ===
                                                  selectedDiscountTypeList?.[i]
                                                    .value
                                              )
                                              .toPercent(
                                                value,
                                                data.amount
                                              )
                                          : value
                                        );
                                      }}
                                    >
                                      {" "}
                                    </TextField>
                                    <StyledSelect
                                      selectedValue={
                                        selectedDiscountTypeList?.[i]
                                      }
                                      setSelectedValue={(value) => {
                                        setSelectedDiscountTypeList((prev) => {
                                          console.log(value);
                                          const newPrev = [...prev];
                                          newPrev[i] = discountTypeOptions.find(
                                            (data) => data.value === value.value
                                          );
                                          return newPrev;
                                        });
                                      }}
                                      options={discountTypeOptions}
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
                    );
                  })}
                </div>
              </div>
              <div className="totalContainer">
                <div>
                  <div>Final Total</div>
                  <div>${finalTotal.toFixed(2)}</div>
                </div>
                {editDiscount && <StyledButton onClickFunc={()=>{
                  setUnits([...unitsCopy]);
                  onClose();
                }} content={"Apply Discount"} />}
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Dialog>
  );
};

export default UnitDetailsModal;
