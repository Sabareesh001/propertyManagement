import { FormControl, MenuItem, Select, Typography } from '@mui/material';
import './StyledSelect.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useState } from 'react';

const StyledSelect = ({options}) => {


    const [selectedValue, setSelectedValue] = useState({ value: '', label: 'Select' });

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        const selectedOption = options.find(option => option.value === selectedValue);
        if (selectedOption) {
            setSelectedValue({ value: selectedValue, label: selectedOption.label });
        }
    };

    return (
        <FormControl fullWidth size='small'>
            <Select
                displayEmpty
                value={selectedValue.value}
                onChange={handleChange}
                sx={{
                    '& .MuiSelect-select': {
                        backgroundColor: '#f5f7fa',
                     borderRadius:'10',
                       
                    },
                   borderRadius:'10px'
                }}
                renderValue={(value) => (value ? selectedValue.label : <Typography color='gray'>Select</Typography>)}
                IconComponent={KeyboardArrowDownOutlinedIcon}
            >
                {options?.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default StyledSelect;
