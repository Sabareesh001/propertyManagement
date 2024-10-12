import { InputAdornment } from '@mui/material';
import './SearchBar.css';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = ({placeholder='Search',fullWidth=true})=>{
    return(
        <TextField
         sx={{
            "& .MuiInputBase-root": {
                backgroundColor:'#5d5d5d',
                color:'white'
    }         
         }}
         slotProps={{
            input:{
                startAdornment:(
                    <InputAdornment position='start'>
                        <SearchIcon style={{color:'white'}} />
                    </InputAdornment>
                )
            }
         }}
        fullWidth={fullWidth}
        
        placeholder={placeholder}
        size='small'
        />
    )
}

export default SearchBar;