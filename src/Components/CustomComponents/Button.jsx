import { Button as MuiButton } from "@mui/material";

const Button = (props) => {
    const {title, variant, className, onChange, onBlur} = props
    return (
        <MuiButton
            variant={variant}
            className={className}
            onChange={onChange}
            onBlur={onBlur}
        >
            {title}
        </MuiButton>
    )
};

export default Button;