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
    const [total,setTotal] = useState(0);
    useEffect(()=>{
       setUnitsCopy(units)
    },[units])

    useEffect(()=>{
      let totalPrice  = 0.00;
      amenities.forEach((data)=>{
            totalPrice += data?.price || 0.00
      })
      setTotal(totalPrice);
    },[amenities])

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
                <b>{amenities.length}</b> Total Amenities
              </div>
            </div>
            <div>
                $ {total.toFixed(2)}
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