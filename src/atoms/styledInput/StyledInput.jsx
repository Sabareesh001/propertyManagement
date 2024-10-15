import { Input, TextField } from '@mui/material';
import './StyledInput.css';
import { useState } from 'react';

const StyledInput = ({type='outlined',value='',inputType,startUnit,size="small",fullWidth=true,endUnit='',inputValue,setInputValue})=>{
    return(
        <TextField 
        value={inputValue}

        type={inputType}
        onChange={(e)=>{setInputValue(e)}}
        sx={{
            '& .MuiOutlinedInput-notchedOutline':{
                border:'solid #E4E8EE 2px'
            },
             "& input[type=number]": {
                MozAppearance: 'textfield',
                appearance: 'textfield',
              },
              "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": {
                WebkitAppearance: 'none',
                margin: 0,
              },
        }}

        slotProps={{

            input:{
                endAdornment:(<div style={{color:'#98A0AC',fontSize:'14px',width:'20%',textAlign:'end'}}>{endUnit}</div>),
                startAdornment:(<div>{startUnit}</div>)
            }
        }}
        variant={type} size={size} fullWidth={fullWidth}>
        </TextField>
    )
}

export default StyledInput;