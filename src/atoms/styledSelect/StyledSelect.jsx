import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import "./StyledSelect.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useState } from "react";

const StyledSelect = ({
  options,
  background,
  size,
  borderRadius = "5px",
  border = "#E4E8EE",
  fullWidth = true,
}) => {
  const [selectedValue, setSelectedValue] = useState({
    value: "",
    label: "Select",
  });

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    if (selectedOption) {
      setSelectedValue({ value: selectedValue, label: selectedOption.label });
    }
  };

  return (
    <FormControl fullWidth={fullWidth} size="small">
      <Select
        displayEmpty
        fullWidth={fullWidth}
        size={size}
        value={selectedValue.value}
        onChange={handleChange}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiSelect-select": {
            backgroundColor: background ? background : "transparent",
          },
          "& .MuiSelect-outlined": {
            borderRadius: borderRadius,
            border: `solid ${border} 2px`,
          },
        }}
        renderValue={(value) =>
          value ? (
            selectedValue.label
          ) : (
            <Typography color="gray">Select</Typography>
          )
        }
        IconComponent={KeyboardArrowDownOutlinedIcon}
      >
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default StyledSelect;
