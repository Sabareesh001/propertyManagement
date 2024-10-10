import { Avatar } from "@mui/material";
import "./ProfileIcon.css";

const ProfileIcon = ({ image, type, height, width }) => {
  return (
    <Avatar
      variant={type}
      sx={{ height: height, width: width,aspectRatio:'1/1' }}
      src={image}
    ></Avatar>
  );
};

export default ProfileIcon;
