import { Chip } from '@mui/material';
import './StyledChip.css';

const StyledChip = ({content})=>{
    return(
        <Chip
        sx={{
            backgroundColor:'#eaeffb',
            borderRadius:'5px',
            height:'',
            padding:'5px 0px'
        }}
        label={content}/>
    )
}

export default StyledChip;