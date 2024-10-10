import { Button } from '@mui/material';
import './StyledButton.css';

const StyledButton = ({content,type='filled'})=>{
    return(
        <Button
        sx={{
            borderRadius:'8px',
            backgroundColor:type==='filled'?'#5078e1':'white',
            color:type==='filled'?'white':'black',
            boxShadow:'none',
            textTransform:'none',
            border:'solid rgba(128, 128, 128, 0.253) 2px'
        }}
        variant='contained'>
            {content}
        </Button>
    )
}

export default StyledButton;