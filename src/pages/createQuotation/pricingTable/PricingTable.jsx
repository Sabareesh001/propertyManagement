import { Box, Dialog, Divider } from "@mui/material";
import "./PricingTable.css";
import CloseIcon from "@mui/icons-material/Close";
import PricingLabel from "./pricingLabel/PricingLabel";
import { useState } from "react";
import Pricing from "./pricing/Pricing";
const PricingTable = ({ isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const PricingOptions = [
    {
      name: "Primary",
      background: "#FEEAEA80",
      color: "#B3776D",
      action: (data) => {
        setSelectedOption(
          <Pricing
            pricingUnit="SAR / Total"
            showMinMax={true}
            onClose={() => {
              setSelectedOption(null);
            }}
            optionInfo={data}
            
          />
        );
      },
      component: <Pricing />,
    },
    {
      name: "Secondary",
      background: "#EDE4FE80",
      color: "#896DB3",
      action: (data) => {
        setSelectedOption(
          <Pricing
          pricingUnit="$ / Monthly"
            onClose={() => {
              setSelectedOption(null);
            }}
            optionInfo={data}
          />
        );
      },
      component: <Pricing />,
    },
    {
      name: "One time Charges",
      background: "#DBF0F180",
      color: "#6DAFB3",
      action: (data) => {
        setSelectedOption(
          <Pricing
          pricingUnit="$ / Monthly"
            onClose={() => {
              setSelectedOption(null);
            }}
            optionInfo={data}
          />
        );
      },
      component: <Pricing />,
    },
    {
      name: "Refundables",
      background: "#E4EDFF80",
      color: "#6D80B3",
      action: (data) => {
        setSelectedOption(
          <Pricing
          pricingUnit="$ / Monthly"
            onClose={() => {
              setSelectedOption(null);
            }}
            showChangable={false}
            optionInfo={data}
          />
        );
      },
      component: <Pricing />,
    },
    {
      name: "Inventory Item",
      background: "#FFFAD880",
      color: "#B3A16D",
      action: (data) => {
        setSelectedOption(
          <Pricing
          showChangable={false}
          showPricingBasedOn={true}
          showComponentBasedOn={false}
          showUnitAndQty={true}
          showUOM={false}
            onClose={() => {
              setSelectedOption(null);
            }}
            optionInfo={data}
          />
        );
      },
      component: <Pricing />,
    },
    {
      name: "Parking Slot",
      background: "#FEEAEA80",
      color: "#B3776D",
      action: (data) => {
        setSelectedOption(
          <Pricing
          pricingUnit="$ / Monthly"
            onClose={() => {
              setSelectedOption(null);
            }}
            optionInfo={data}
          />
        );
      },
      component: <Pricing />,
    },
  ];
  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setSelectedOption(null);
        onClose();
      }}
    >
      <Box
        maxWidth={530}
        minWidth={530}
        maxHeight={630}
        minHeight={530}
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div className="titleAndCloseButtonContainer">
          <div>Pricing Table</div>
          <CloseIcon
            onClick={() => {
              setSelectedOption(null);
              onClose();
            }}
          />
        </div>
        <Divider />
        {!selectedOption ? (
          <div className="pricingLabelsContainer">
            {PricingOptions.map((data, i) => {
              return (
                <PricingLabel
                  name={data.name}
                  background={data.background}
                  color={data.color}
                  action={() => {
                    data.action(data);
                  }}
                  index={i}
                />
              );
            })}
          </div>
        ) : (
          <div className="pricingPageContainer">{selectedOption}</div>
        )}
      </Box>
    </Dialog>
  );
};

export default PricingTable;
