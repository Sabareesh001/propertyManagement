import { Box, Dialog, Divider } from '@mui/material';
import './AddAmenities.css';
import CloseIcon from "@mui/icons-material/Close";
import HotTubIcon from '@mui/icons-material/HotTub';
import SubUnitSelect from '../subUnitSelect/SubUnitSelect';
import { useContext, useEffect, useState } from 'react';
import StyledButton from '../../../atoms/styledButton/StyledButton';
import { CreateQuotationContext } from '../../../contexts/createQuotationContext/CreateQuotationContext';
const AddAmenities = ({isOpen,onClose})=>{


    const {units,setUnits,amenities,setAmenities} = useContext(CreateQuotationContext);
    const [unitsCopy,setUnitsCopy] = useState([]);
    useEffect(()=>{
       setUnitsCopy(units)
    },[units])
    return(
        <Dialog open={isOpen} onClose={onClose}>
           <Box padding={'20px'} display={'flex'} flexDirection={'column'} rowGap={'10px'} width={460}>
           <div className="titleAndCloseButtonContainer">
          <div>Add Amenities</div>
          <CloseIcon
            onClick={() => {
              onClose();
            }}
          />
        </div>
        <Divider/>
         <div className='countAndTotalViewLabel'>
            <div>
              <HotTubIcon/>
              <div>
                <b>05</b> Total Amenities
              </div>
            </div>
            <div>
                $ 200.00
            </div>
         </div>
            <div className='AvailableLabel'>Available Amenities</div>
            <div className='amenitiesList'>
                {amenities.map((data)=>{
                   return(
                  <SubUnitSelect 
                  unitsCopy={unitsCopy}
                  type={'amenities'}
                   subbUnitDetails={data} />

                   )
                })
                }
            </div>
            <StyledButton onClickFunc={()=>{setUnits([...unitsCopy]); onClose()}} content={"Update & Save"}/>
           </Box>
        </Dialog>
    )
}

export default AddAmenities;