import './Sidebar.css';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import BusinessIcon from '@mui/icons-material/Business';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import BackupIcon from '@mui/icons-material/Backup';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ArticleIcon from '@mui/icons-material/Article';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Person2Icon from '@mui/icons-material/Person2';
import { useState } from 'react';

const Sidebar = () => {

  const [isSideBarOpen,setIsSideBarOpen] = useState(false);

  const menus = [
    { iconOutlined: <DashboardOutlinedIcon />, iconFilled: <DashboardIcon /> , name:'Dashboard'},
    { iconOutlined: <GroupsOutlinedIcon />, iconFilled: <GroupsIcon />,name:'Companies' },
    { iconOutlined: <BusinessOutlinedIcon />, iconFilled: <BusinessIcon />,name:'Owners' },
    { iconOutlined: <Person2OutlinedIcon />, iconFilled: <Person2Icon />,name:'Properties' },
    { iconOutlined: <LocalOfferOutlinedIcon />, iconFilled: <LocalOfferIcon />,name:'Pricing' },
    { iconOutlined: <SettingsOutlinedIcon />, iconFilled: <SettingsIcon />,name:'Setting' },
    { iconOutlined: <BackupOutlinedIcon />, iconFilled: <BackupIcon /> ,name:'Data Management'},
    { iconOutlined: <ArticleOutlinedIcon />, iconFilled: <ArticleIcon />,name:'Reports' },
    { iconOutlined: <FolderCopyOutlinedIcon />, iconFilled: <FolderCopyIcon />,name:'Documents' },
    { iconOutlined: <CommentOutlinedIcon />, iconFilled: <CommentIcon />,name:'Communications' },
  ];

  const [menuHover, setMenuHover] = useState(Array(menus.length).fill(false));

  const handleMouseEnter = (index) => {
    const newHoverState = [...menuHover];
    newHoverState[index] = true;
    setMenuHover(newHoverState);
  };

  const handleMouseLeave = (index) => {
    const newHoverState = [...menuHover];
    newHoverState[index] = false;
    setMenuHover(newHoverState);
  };

  return (
    <div className={`sidebarContainer ${isSideBarOpen?'open':''}`}>
      <div className='sidebarContentContainer'>
        <div className='backButtonContainer'>
            <div className={`projectName ${isSideBarOpen?'visible':''}`}>Property Manager For Startup</div>
           
          <div
         style={{
          left: isSideBarOpen ? '100px' : '0px'
        }}
        
          
          onClick={()=>{setIsSideBarOpen((prev)=>(!prev))}} className='backIcon active'>
            {isSideBarOpen?<ArrowBackIosNewOutlinedIcon fontSize='small'/>:<ArrowForwardIosOutlinedIcon fontSize='small' />}
          
          </div>
      
        </div>
        <div className='horizontalLine'></div>
        <div className='menusContainer'>
          {menus.map((menu, i) => (
            <div className='menuIconContainer'> 
              <div
                key={i}
                className='menuIcon'
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave(i)}
              >
                {menuHover[i] ? menu.iconOutlined : menu.iconFilled}
              
              </div>
              <div className='menuNameContainer'>
              {isSideBarOpen && menu.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
