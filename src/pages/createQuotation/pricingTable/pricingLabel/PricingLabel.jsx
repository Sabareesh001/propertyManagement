import "./PricingLabel.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Tooltip } from "@mui/material";
const PricingLabel = ({
  name,
  action,
  background,
  color,
  index,
  showNext = true,
}) => {
  return (
    <div
      className="pricingLabelContainer"
      style={{
        color: color,
        backgroundColor: background,
      }}
      onClick={action}
    >
      <div className="indexAndNameContainer">
        {index !== undefined && (
          <div
            style={{
              color: "white",
              padding: "5px",
              borderRadius: "20px",

              backgroundColor: color,
            }}
          >
            {(index + 1).toString().padStart(2, "0")}
          </div>
        )}
        {name}
      </div>
      <div className="infoAndNextIconContainer">
        <Tooltip
         componentsProps={{
          tooltip: {
            sx: {
              bgcolor: 'common.white',
              color:'common.black',
              padding:'10px',
              fontSize:'12px',
              '& .MuiTooltip-arrow': {
                color: 'common.black',
              },
            },
          },
        }}
        
        placement="top" title="Base rent or monthly rental amount. you can have only one primary pricing component per property.">
          <InfoOutlinedIcon
            fontSize="inherit"
            sx={{
              color: "#CED3DD",
            }}
          />
        </Tooltip>
        {showNext && <ArrowForwardIosOutlinedIcon fontSize="inherit" />}
      </div>
    </div>
  );
};

export default PricingLabel;
