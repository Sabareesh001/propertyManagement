import { Badge } from "@mui/material";
import "./NotificationIcon.css";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
const NotificationIcon = ({count=1}) => {
  return (
    <div className="notificationIcon">
        <Badge
        
        sx={{
            '& .MuiBadge-anchorOriginTopRightCircular':{
                margin:'4px',
                border:'solid currentColor',
                padding:'3px',
                backgroundColor:'#5078e1',
                borderRadius:'100%'
            }
        }}
        overlap="circular" variant="dot" badgeContent={count}>
          <NotificationsOutlinedIcon className="icon"  sx={{ display: 'block' }} />
        </Badge>
    </div>
  );
};

export default NotificationIcon;
