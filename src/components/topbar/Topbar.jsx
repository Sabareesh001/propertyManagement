import './Topbar.css';
import Logo from '../../assets/dnet-logo.svg'
import SearchBar from '../../atoms/searchBar/SearchBar';
import NotificationIcon from '../../atoms/notificationIcon/NotificationIcon';
import ProfileIcon from '../../atoms/profileIcon/ProfileIcon';
import ManImage from '../../assets/man.jpg';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const Topbar = ()=>{
    return(
        <div className='topbarContainer'>
            <div className='logoAndNameContainer'>
                <img src={Logo}>
                </img>
                <div className='verticalLine'></div>
                <div className='companyName'>PROPERTY MANAGEMENT SOLUTION</div>
                </div>
                <div className='searchbarDiv'>
                    <SearchBar/>
                </div>
                <div className='profileOptionsContainer'>
                   <NotificationIcon/>
                   <div className='verticalLine'></div>
                   <div className='userDetailsContainer'>
                   <div className='profileIconContainer'>
                       <ProfileIcon type="circular" image={ManImage}/>
                   </div>
                       <div className='userDetails'>
                        <div className='name'>Bala Ganesh</div>
                        <div className='role'>Super Admin</div>
                       </div>
                       <div className='dropDownProfileIcon'>
                           <KeyboardArrowDownOutlinedIcon
                       
                            style={{color:'white'}}
                           />
                       </div>
                   </div>
                </div>
        </div>
    )
}

export default Topbar;