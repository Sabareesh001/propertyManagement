import { Card, CardMedia,CardContent } from "@mui/material";
import "./StyledCard.css";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const StyledCard = ({ image }) => {
  return (
    <div className="cardContainer">
    <Card sx={{
        padding:'10px',
    }}>
      <CardMedia sx={{ height: 100, width: 240,borderRadius:'5px' }} image={image} />
      <CardContent>
          <div className="nameAndPriceContainer">
            <div>Jumeriah Estate</div>
            <div>$1,200</div>
          </div>
      </CardContent>
    </Card>
    <div className="cardDeleteIconContainer">
    <DeleteOutlineOutlinedIcon/>
    </div>
    </div>
    
  );
};

export default StyledCard;
