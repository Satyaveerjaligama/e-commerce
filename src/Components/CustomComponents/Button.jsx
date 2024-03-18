import React from "react";
import { Button as MuiButton } from "@mui/material";
import { PropTypes } from "prop-types";

const Button = (props) => {
    const {title, variant, className, onClick, onBlur, startIcon, endIcon, fullWidth} = props
    return (
        <MuiButton
            variant={variant}
            className={className}
            onClick={onClick}
            onBlur={onBlur}
            startIcon={startIcon}
            endIcon={endIcon}
            fullWidth={fullWidth}
        >
            {title}
        </MuiButton>
    )
};

Button.propTypes = {
    title: PropTypes.string,
    variant: PropTypes.oneOf(["text", "contained", "outlined"]),
    className: PropTypes.string,
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    startIcon: PropTypes.element,
    endIcon: PropTypes.element,
    fullWidth: PropTypes.bool,
};

export default Button;