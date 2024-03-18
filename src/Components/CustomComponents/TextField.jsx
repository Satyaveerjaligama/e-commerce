import React from "react";
import { TextField as MuiTextField } from "@mui/material";
import {PropTypes} from "prop-types";

const TextField = (props) => {
    const {className, label, onChange, fullWidth, variant, type} = props;
    return (
        <MuiTextField
            className={className}
            label={label}
            onChange={onChange}
            fullWidth={fullWidth}
            variant={variant}
            type={type}
        />
    )
}

TextField.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    fullWidth: PropTypes.bool,
    variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
    type: PropTypes.string,
}

export default TextField;