import { useContext, useEffect, useState } from "react";
import StyledButton from "../../../../atoms/styledButton/StyledButton";
import PricingLabel from "../pricingLabel/PricingLabel";
import "./Pricing.css";
import ToggleButtonList from "../../../../atoms/toggleButton/ToggleButtonList";
import { InputLabel, LinearProgress } from "@mui/material";
import StyledSelect from "../../../../atoms/styledSelect/StyledSelect";
import StyledInput from "../../../../atoms/styledInput/StyledInput";
import { CreateQuotationContext } from "../../../../contexts/createQuotationContext/CreateQuotationContext";

const Pricing = ({
  optionInfo,
  onClose,
  showMinMax = false,
  pricingUnit = "",
  showUOM = true,
  showChangable = false,
  showPricingBasedOn = false,
  showComponentBasedOn = true,
  showUnitAndQty = false,
  unitData,
  unitsCopy,
  reload,
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
  const { units, setUnits } = useContext(CreateQuotationContext);
  const [uomValue, setUomValue] = useState(unitData?.uom_value);
  const [selectedPricingComponent, setSelectedPricingComponent] =
    useState(null);
  const [selectedTaxGroup, setSelectedTaxGroup] = useState(null);
  const [selectedRevenueType, setSelectedRevenueType] = useState(
    unitData?.revenue_type
  );
  const [selectedChangable, setSelectedChangable] = useState(
    unitData?.changable
  );
  const [selectedPricingBasedOn, setSelectedPricingBasedOn] = useState(
    unitData?.pricing_based_on
  );
  const [selectedComponentBasedOn, setSelectedComponentBasedOn] = useState(
    unitData?.component_based_on
  );
  const [selectedItemUnitPrice, setSelectedItemUnitPrice] = useState(
    unitData?.item_unit_price
  );
  const [selectedQuantity, setSelectedQuantity] = useState(unitData?.quantity);

  const [selectedMinimum, setSelectedMinimum] = useState(unitData?.min);
  const [selectedRecommended, setSelecteRecommended] = useState(
    unitData?.recommended
  );
  const [selectedMaximum, setSelectedMaximum] = useState(unitData?.max);
  const [pricingComponentOptions, setPricingComponentOptions] = useState([
    {
      label: "Pricing Component",
      value: 1,
    },
  ]);

  const [taxGroupOptions, setTaxGroupOptions] = useState([
    {
      label: "GST",
      value: 1,
    },
  ]);

  useEffect(() => {
    console.log(selectedPricingComponent);
  }, [selectedPricingComponent]);

  useEffect(() => {
    setSelectedPricingComponent(
      pricingComponentOptions.find(
        (data) => data.value === unitData?.pricing_component
      )
    );
  }, [pricingComponentOptions, unitData]);

  useEffect(() => {
    setSelectedTaxGroup(
      taxGroupOptions.find(
        (data) => data.value === unitData?.tax_group_for_pricing
      )
    );
  }, [taxGroupOptions, unitData]);

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
          <ToggleButtonList
            selectedValue={selectedRevenueType}
            setSelectedValue={(val) => {
              setSelectedRevenueType(val);
              unitData.revenue_type = val;
            }}
            buttonList={revenueTypes}
          />
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
          <StyledSelect
            selectedValue={selectedPricingComponent}
            setSelectedValue={(val) => {
              setSelectedPricingComponent(val);
              unitData.pricing_component = val?.value;
            }}
            options={pricingComponentOptions}
            size={"small"}
            fullWidth={false}
          />
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
          <StyledSelect
            options={taxGroupOptions}
            selectedValue={selectedTaxGroup}
            setSelectedValue={(val) => {
              setSelectedTaxGroup(val);
              unitData.tax_group_for_pricing = val?.value;
            }}
            size={"small"}
            fullWidth={false}
          />
        </div>
        {showChangable && (
          <div className="labelAndComp">
            <InputLabel
              sx={{
                color: "#98A0AC",
                fontSize: "12px",
              }}
            >
              Changable
            </InputLabel>
            <ToggleButtonList
              selectedValue={selectedChangable}
              setSelectedValue={(val) => {
                setSelectedChangable(val);
                unitData.changable = val;
              }}
              buttonList={changeableOptions}
            />
          </div>
        )}
        {showPricingBasedOn && (
          <div className="labelAndComp">
            <InputLabel
              sx={{
                color: "#98A0AC",
                fontSize: "12px",
              }}
            >
              Pricing Based On
            </InputLabel>
            <ToggleButtonList
              selectedValue={selectedPricingBasedOn}
              setSelectedValue={(val) => {
                setSelectedChangable(val);
                unitData.pricing_based_on = val;
              }}
              buttonList={PricingBasedOnOptions}
            />
          </div>
        )}
        {showComponentBasedOn && (
          <div className="labelAndComp">
            <InputLabel
              sx={{
                color: "#98A0AC",
                fontSize: "12px",
              }}
            >
              Component Based On
            </InputLabel>
            <ToggleButtonList
              selectedValue={selectedComponentBasedOn}
              setSelectedValue={(val) => {
                setSelectedComponentBasedOn(val);
                unitData.component_based_on = val;
              }}
              buttonList={componentBasedOnOptions}
            />
          </div>
        )}
        {showUOM && (
          <div style={{ flexBasis: "100%" }} className="labelAndComp">
            <InputLabel
              sx={{
                color: "#98A0AC",
                fontSize: "12px",
              }}
            >
              UOM Value
            </InputLabel>
            <StyledInput
              inputValue={unitData?.uom_value}
              inputType={"Number"}
              setInputValue={(e) => {
                unitData.uom_value = Number(e.target.value);
                setUomValue(e.target.value);
              }}
              fullWidth={true}
              endUnit={pricingUnit}
            />
          </div>
        )}
        {showUnitAndQty && (
          <div className="unitAndQtyContainer">
            <div className="labelAndComp">
              <InputLabel
                sx={{
                  color: "#98A0AC",
                  fontSize: "12px",
                }}
              >
                Item Unit Price
              </InputLabel>
              <StyledInput
                setInputValue={(e) => {
                  setSelectedItemUnitPrice(e.target.value);
                  unitData.item_unit_price = Number(e.target.value);
                }}
                inputValue={selectedItemUnitPrice}
                inputType={"Number"}
                endUnit={"$"}
              />
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
              <StyledInput
                inputType={"Number"}
                inputValue={selectedQuantity}
                setInputValue={(e) => {
                  setSelectedQuantity(e.target.value);
                  unitData.quantity = Number(e.target.value);
                }}
                endUnit={"Qty"}
              />
            </div>
          </div>
        )}
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
              <StyledInput
                inputType={"Number"}
                inputValue={selectedMaximum}
                setInputValue={(e) => {setSelectedMaximum(e.target.value); unitData.max = Number(e.target.value) }}
                startUnit={"$"}
                fullWidth={false}
              />
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
              <StyledInput
                inputType={"Number"}
                inputValue={selectedRecommended}
                setInputValue={(e) => {
                  setSelecteRecommended(e.target.value);
                  unitData.recommended = Number(e.target.value);
                }}
                startUnit={"$"}
                fullWidth={false}
              />
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

              <StyledInput
                inputType={"Number"}
                inputValue={selectedMinimum}
                setInputValue={(e) => {setSelectedMinimum(e.target.value); unitData.min = Number(e.target.value) }}
                startUnit={"$"}
                fullWidth={false}
              />
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
        <StyledButton
          onClickFunc={() => {
            setUnits([...unitsCopy]);
            onClose();
          }}
          content={"Create Pricing Component"}
        />
      </div>
    </div>
  );
};

export default Pricing;
