import { Box, Dialog, Divider } from '@mui/material';
import './AddAmenities.css';
import CloseIcon from "@mui/icons-material/Close";
import HotTubIcon from '@mui/icons-material/HotTub';
import SubUnitSelect from '../subUnitSelect/SubUnitSelect';
import { useState } from 'react';
import StyledButton from '../../../atoms/styledButton/StyledButton';
const AddAmenities = ({isOpen,onClose})=>{


    const [amenities,setAmenities] =  useState([
      {
        name:'Amenities Name',
        image:'https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg',
        price:'20.00',
        start_date:'22 Feb',
       end_date:'12 Feb  23'
      },
      {
        name:'Amenities Name',
        image:'https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg',
        price:'20.00',
        start_date:'22 Feb',
       end_date:'12 Feb  23'
      }, {
        name:'Amenities Name',
        image:'https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg',
        price:'20.00',
        start_date:'22 Feb',
       end_date:'12 Feb  23'
      }, {
        name:'Amenities Name',
        image:'https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg',
        price:'20.00',
        start_date:'22 Feb',
       end_date:'12 Feb  23'
      },
      {
        name:'Amenities Name',
        image:'https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg',
        price:'20.00',
        start_date:'22 Feb',
       end_date:'12 Feb  23'
      }, {
        name:'Amenities Name',
        image:'https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg',
        price:'20.00',
        start_date:'22 Feb',
       end_date:'12 Feb  23'
      }, {
        name:'Amenities Name',
        image:'https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg',
        price:'20.00',
        start_date:'22 Feb',
       end_date:'12 Feb  23'
      }, {
        name:'Amenities Name',
        image:'https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg',
        price:'20.00',
        start_date:'22 Feb',
       end_date:'12 Feb  23'
      }, {
        name:'Amenities Name',
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

export default AddAmenities;