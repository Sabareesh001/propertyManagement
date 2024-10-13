import { useState } from "react";
import StyledButton from "../../../../atoms/styledButton/StyledButton";
import PricingLabel from "../pricingLabel/PricingLabel";
import "./Pricing.css";
import ToggleButtonList from "../../../../atoms/toggleButton/ToggleButtonList";
import { InputLabel, LinearProgress } from "@mui/material";
import StyledSelect from "../../../../atoms/styledSelect/StyledSelect";
import StyledInput from "../../../../atoms/styledInput/StyledInput";

const Pricing = ({
  optionInfo,
  unitData,
  onClose,
  showMinMax = false,
  pricingUnit = "",
  showUOM = true,
  showChangable = false,
  showPricingBasedOn=false,
  showComponentBasedOn = true,
  showUnitAndQty = false,
}) => {
  const [revenueTypes, setRevenueTypes] = useState([
    {
      name: "Lease",
      value: 1,
    },
    {
      name: "Sales",
      value: 2,
    },
    {
      name: "Manage",
      value: 3,
    },
  
  ]);

  const [pricingComponentOptions,setPricingComponentOptions] = useState([
    {
      label:'Pricing Component',
      value:1
    }
  ])

  const [taxGroupOptions,setTaxGroupOptions] = useState([
    {
      label:'GST',
      value:1
    }
  ])

  const [changeableOptions, setChangableOptions] = useState([
    {
      name: "Yes",
      value: 1,
    },
    {
      name: "No",
      value: 2,
    },
  ]);

  const [componentBasedOnOptions, setComponentBasedOnOptions] = useState([
    {
      name: "Amount",
      value: 1,
    },
    {
      name: "UOM",
      value: 2,
    },
    {
      name: "%",
      value: 3,
    },
  ]);

  const [PricingBasedOnOptions, setPricingBasedOnOptions] = useState([
    {
      name: "Monthly",
      value: 1,
    },
    {
      name: "Total",
      value: 2,
    },

  ]);

  return (
    <div className="pricingContainer">
      <div>
          <PricingLabel
            background={optionInfo?.background}
            color={optionInfo?.color}
            name={optionInfo?.name + " Pricing Component"}
            showNext={false}
          />
      </div>
      <div className="pricingOptionsContainer">
        <div className="labelAndComp">
          <InputLabel
            sx={{
              color: "#98A0AC",
              fontSize: "12px",
            }}
          >
            Revenue Type
          </InputLabel>
          <ToggleButtonList value={unitData?.revenue_type}  buttonList={revenueTypes} />
        </div>
        <div className="labelAndComp">
          <InputLabel
            sx={{
              color: "#98A0AC",
              fontSize: "12px",
            }}
          >
            Pricing Component
          </InputLabel>
          <StyledSelect value={unitData?.pricing_component} options={pricingComponentOptions} size={"small"} fullWidth={false}/>
        </div>
        <div className="labelAndComp">
          <InputLabel
            sx={{
              color: "#98A0AC",
              fontSize: "12px",
            }}
          >
            Tax Group for Pricing Component
          </InputLabel>
          <StyledSelect options={taxGroupOptions} value={unitData?.tax_group_for_pricing} size={"small"} fullWidth={false} />
        </div>
       {showChangable && <div className="labelAndComp">
          <InputLabel
            sx={{
              color: "#98A0AC",
              fontSize: "12px",
            }}
          >
            Changable
          </InputLabel>
          <ToggleButtonList value={unitData?.changable} buttonList={changeableOptions} />
        </div>}
      {showPricingBasedOn && <div className="labelAndComp">
          <InputLabel
            sx={{
              color: "#98A0AC",
              fontSize: "12px",
            }}
          >
             Pricing Based On
          </InputLabel>
          <ToggleButtonList value={unitData?.pricing_based_on} buttonList={PricingBasedOnOptions} />
        </div>}
       {showComponentBasedOn && <div className="labelAndComp">
          <InputLabel
            sx={{
              color: "#98A0AC",
              fontSize: "12px",
            }}
          >
            Component Based On
          </InputLabel>
          <ToggleButtonList value={unitData?.component_based_on} buttonList={componentBasedOnOptions} />
        </div>}
        {showUOM && (
          <div style={{flexBasis:'100%'}} className="labelAndComp">
            <InputLabel
              sx={{
                color: "#98A0AC",
                fontSize: "12px",
              }}
            >
              UOM Value
            </InputLabel>
            <StyledInput inputType={"Number"} value={unitData?.uom_value} fullWidth={true} endUnit={pricingUnit} />
          </div>
        )}
       {  showUnitAndQty && <div className="unitAndQtyContainer">
             <div className="labelAndComp">
                <InputLabel
                  sx={{
                    color: "#98A0AC",
                    fontSize: "12px",
                  }}
                >
                 Item Unit Price
                </InputLabel>
                <StyledInput inputType={'Number'} value={unitData?.item_unit_price} endUnit={"$"} />
              </div>
              <div className="labelAndComp">
                <InputLabel
                  sx={{
                    color: "#98A0AC",
                    fontSize: "12px",
                  }}
                >
                  Quantity
                </InputLabel>
                <StyledInput  inputType={'Number'} value={unitData?.quantity} endUnit={"Qty"} />
              </div>
         </div>}
        {showMinMax && (
          <div className="minMaxRecContainer">
            <div>
              <InputLabel
                sx={{
                  color: "#98A0AC",
                  fontSize: "12px",
                }}
              >
                Maximum
              </InputLabel>
              <LinearProgress
                sx={{
                  backgroundColor: "#E4E8EE",
                  borderRadius: "10px",
                  "& .MuiLinearProgress-bar": {
                    borderRadius: "10px",
                    background: "#FF4B4B",
                  },
                }}
                value={100}
                variant="determinate"
              />
              <StyledInput inputType={"Number"} value={unitData?.max} startUnit={"$"} fullWidth={false} />
              <InputLabel
                sx={{
                  color: "#98A0AC",
                  fontSize: "12px",
                }}
              >
                Sq. Yard/Monthly
              </InputLabel>
            </div>
            <div>
              <InputLabel
                sx={{
                  color: "#98A0AC",
                  fontSize: "12px",
                }}
              >
                Recommended
              </InputLabel>
              <LinearProgress
                sx={{
                  backgroundColor: "#E4E8EE",
                  borderRadius: "10px",
                  "& .MuiLinearProgress-bar": {
                    borderRadius: "10px",
                    background: "#5AC782",
                  },
                }}
                value={75}
                variant="determinate"
              />
              <StyledInput inputType={"Number"} value={unitData?.recommended} startUnit={"$"} fullWidth={false} />
              <InputLabel
                sx={{
                  color: "#98A0AC",
                  fontSize: "12px",
                }}
              >
                Sq. Yard/Monthly
              </InputLabel>
            </div>
            <div>
              <InputLabel
                sx={{
                  color: "#98A0AC",
                  fontSize: "12px",
                }}
              >
                Minimum
              </InputLabel>
              <LinearProgress
                sx={{
                  backgroundColor: "#E4E8EE",
                  borderRadius: "10px",
                  "& .MuiLinearProgress-bar1Determinate": {
                    // The progress bar itself in determinate mode
                    borderRadius: "10px", // Rounded corners for the bar
                    backgroundColor: "#FF9340", // Color of the progress bar
                  },
                }}
                value={25}
                variant="determinate"
              />

              <StyledInput inputType={"Number"} value={unitData?.min} startUnit={"$"} fullWidth={false} />
              <InputLabel
                sx={{
                  color: "#98A0AC",
                  fontSize: "12px",
                }}
              >
                Sq. Yard/Monthly
              </InputLabel>
            </div>
          </div>
        )}
      </div>
      <div className="backAndCreatePricingComponent">
        <StyledButton onClickFunc={onClose} type="outlined" content={"Back"} />
        <StyledButton content={"Create Pricing Component"} />
      </div>
    </div>
  );
};

export default Pricing;
