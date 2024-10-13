import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import './ToggleButtonList.css';
import { useEffect, useState } from 'react';

const ToggleButtonList = ({buttonList,value=null})=>{
    const [selectedValue,setSelectedValue] = useState(value)


    return(
        <ToggleButtonGroup
        
        

        sx={{
            
            gap:'10px',
            '& .MuiToggleButtonGroup-firstButton':{
                borderRadius:'5px',
                border:'solid #E4E8EE 1px',
                fontWeight:'medium',

                textTransform:'none'
            },
            '& .MuiToggleButtonGroup-middleButton':{
                borderRadius:'5px',
                border:'solid  #E4E8EE 1px',
                fontWeight:'medium',
                textTransform:'none'
            },
            '& .MuiToggleButtonGroup-lastButton':{
                borderRadius:'5px',
                border:'solid #E4E8EE 1px',
                fontWeight:'medium',
                textTransform:'none'
            },
            '& .MuiToggleButtonGroup-grouped':{
                fontSize:'12px',
                padding:'10px 15px'
            },
           
            
            
        }}
        exclusive
        value={selectedValue}
        onChange={(e,val)=>{if(val){setSelectedValue(val)}}}
        >
           {
            buttonList?.map((data)=>(<ToggleButton   sx={{
                border: 'solid #E4E8EE 1px',
                fontWeight: 'medium',
                textTransform: 'none',
                '&.Mui-selected': {
                  backgroundColor: '#5078E1', 
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#5078E1',  
                  },
                },
              }} value={data?.value}>{data?.name}</ToggleButton>))
           }
        </ToggleButtonGroup>
    )
}

export default ToggleButtonList;