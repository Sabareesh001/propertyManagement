import { Box, Dialog, Divider } from '@mui/material';
import './AddUtilities.css';
import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SubUnitSelect from '../subUnitSelect/SubUnitSelect';
import { useContext, useEffect, useState } from 'react';
import StyledButton from '../../../atoms/styledButton/StyledButton';
import { CreateQuotationContext } from '../../../contexts/createQuotationContext/CreateQuotationContext';
const AddUtilities = ({isOpen,onClose})=>{

  const {units,setUnits,utilities,setUtilities} = useContext(CreateQuotationContext);
  const [unitsCopy,setUnitsCopy] = useState([]);
  const [total,setTotal] = useState(0);

  useEffect(()=>{
     setUnitsCopy(units)
  },[units])

  useEffect(()=>{
    let totalPrice  = 0.00;
    utilities.forEach((data)=>{
          totalPrice += data?.price || 0.00
    })
    setTotal(totalPrice);
  },[utilities])

    return(
        <Dialog open={isOpen} onClose={onClose}>
           <Box padding={'20px'} display={'flex'} flexDirection={'column'} rowGap={'10px'} width={460}>
           <div className="titleAndCloseButtonContainer">
          <div>Add Utilities</div>
          <CloseIcon
            onClick={() => {
              onClose();
            }}
          />
        </div>
        <Divider/>
         <div className='countAndTotalViewLabelUtility'>
            <div>
              <AutoAwesomeIcon/>
              <div>
                <b>{utilities.length}</b> Total Utilities
              </div>
            </div>
            <div>
                $ {total.toFixed(2)}
            </div>
         </div>
            <div className='AvailableLabel'>Available Utilities</div>
            <div className='amenitiesList'>
                {utilities.map((data)=>{
                   return(

                  <SubUnitSelect
                  unitsCopy={unitsCopy}
                  type={'utilities'}
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

export default AddUtilities;