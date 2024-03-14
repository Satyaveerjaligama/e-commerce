import { Button as MuiButton } from "@mui/material";

const Button = (props) => {
    const {title, variant, className, onChange, onBlur, startIcon, endIcon} = props
    return (
        <MuiButton
            variant={variant}
            className={className}
            onChange={onChange}
            onBlur={onBlur}
            startIcon={startIcon}
            endIcon={endIcon}
        >
            {title}
        </MuiButton>
    )
};

export default Button;