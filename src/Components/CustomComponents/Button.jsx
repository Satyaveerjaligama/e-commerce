import { Button as MuiButton } from "@mui/material";

const Button = (props) => {
    const {title, variant, className, onClick, onBlur, startIcon, endIcon} = props
    return (
        <MuiButton
            variant={variant}
            className={className}
            onClick={onClick}
            onBlur={onBlur}
            startIcon={startIcon}
            endIcon={endIcon}
        >
            {title}
        </MuiButton>
    )
};

export default Button;