import { Switch } from '@mui/material';
import ProfileIcon from '../../../atoms/profileIcon/ProfileIcon';
import './SubUnitSelect.css';
import CircleIcon from '@mui/icons-material/Circle';
const SubUnitSelect = ()=>{
    return(
        <div className='SubUnitSelect'>
            <div className='profileAndInfoContainer'>
                <ProfileIcon type={'rounded'}/>
                           <div className='nameAndDateContainer'>
                <div>
                    Amenities name
                </div>
                <div className='priceAndDateContainer'>
                    $ 20.00
                    <CircleIcon className='circleIcon'/>
                    Valid Feb 22 - 12 Feb 23
                </div>
                
                           </div>
            </div>
           <Switch  
          
           />
        </div>
    )
}

export default SubUnitSelect;