import "./PricingLabel.css";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const PricingLabel = ({ name, action, background, color, index ,showNext=true}) => {
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
       {index!==undefined &&  <div
          style={{
            color: 'white',
            padding:'5px',
            borderRadius:'20px',
            
            backgroundColor: color,
          }}
        >
          {(index + 1).toString().padStart(2, "0")}
        </div>}
        {name}
      </div>
      <div className="infoAndNextIconContainer">
          <InfoOutlinedIcon 
          fontSize="inherit"
          sx={{
            color:'#CED3DD'
          }}/>
         {showNext && <ArrowForwardIosOutlinedIcon fontSize="inherit"/>}
      </div>
    </div>
  );
};

export default PricingLabel;
