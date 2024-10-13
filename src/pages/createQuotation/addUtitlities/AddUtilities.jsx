import { Box, Dialog, Divider } from '@mui/material';
import './AddUtilities.css';
import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SubUnitSelect from '../subUnitSelect/SubUnitSelect';
import { useState } from 'react';
import StyledButton from '../../../atoms/styledButton/StyledButton';
const AddUtilities = ({isOpen,onClose})=>{


    const [utilities,setUtilities] =  useState([
      {
        name:'Utilities Name',
        image:'https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg',
        price:'20.00',
        start_date:'22 Feb',
       end_date:'12 Feb  23'
      },
      {
        name:'Utilities Name',
        image:'https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg',
        price:'20.00',
        start_date:'22 Feb',
       end_date:'12 Feb  23'
      }, {
        name:'Utilities Name',
        image:'https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg',
        price:'20.00',
        start_date:'22 Feb',
       end_date:'12 Feb  23'
      }, {
        name:'Utilities Name',
        image:'https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg',
        price:'20.00',
        start_date:'22 Feb',
       end_date:'12 Feb  23'
      },
      {
        name:'Utilities Name',
        image:'https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg',
        price:'20.00',
        start_date:'22 Feb',
       end_date:'12 Feb  23'
      }, {
        name:'Utilities Name',
        image:'https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg',
        price:'20.00',
        start_date:'22 Feb',
       end_date:'12 Feb  23'
      }, {
        name:'Utilities Name',
        image:'https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg',
        price:'20.00',
        start_date:'22 Feb',
       end_date:'12 Feb  23'
      }, {
        name:'Utilities Name',
        image:'https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg',
        price:'20.00',
        start_date:'22 Feb',
       end_date:'12 Feb  23'
      }, {
        name:'Utilities Name',
        image:'https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg',
        price:'20.00',
        start_date:'22 Feb',
       end_date:'12 Feb  23'
      },
    ])

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
                <b>05</b> Total Utilities
              </div>
            </div>
            <div>
                $ 200.00
            </div>
         </div>
            <div className='AvailableLabel'>Available Utilities</div>
            <div className='amenitiesList'>
                {utilities.map((data)=>{
                   return(
                  <SubUnitSelect subbUnitDetails={data} />

                   )
                })
                }
            </div>
            <StyledButton content={"Update & Save"}/>
           </Box>
        </Dialog>
    )
}

export default AddUtilities;