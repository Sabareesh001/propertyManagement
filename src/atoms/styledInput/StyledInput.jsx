import { Input, TextField } from '@mui/material';
import './StyledInput.css';

const StyledInput = ({type='outlined',startUnit,size="small",fullWidth=true,endUnit=''})=>{
    return(
        <TextField 

        sx={{
            '& .MuiOutlinedInput-notchedOutline':{
                border:'solid #E4E8EE 2px'
            }
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