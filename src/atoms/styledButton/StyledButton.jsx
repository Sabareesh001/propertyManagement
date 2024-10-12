import { Button } from '@mui/material';
import './StyledButton.css';

const StyledButton = ({content,type='filled',haveBorder=true,reference,onClickFunc})=>{
    return(
        <Button
        ref={reference}
        onClick={onClickFunc}
        sx={{
            borderRadius:'8px',
            backgroundColor:type==='filled'?'#5078e1':type==='primary'?'':'white',
            color:type==='filled'?'white':type==='primary'?'#5078E1':'black',
            boxShadow:'none',
            textTransform:'none',
            border:haveBorder?'solid rgba(128, 128, 128, 0.253) 2px':''
        }}
        variant={type==='primary'?'':'contained'}>
            {content}
        </Button>
    )
}

export default StyledButton;