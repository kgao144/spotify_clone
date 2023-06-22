import React, { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef <HTMLButtonElement, ButtonProps> (({
    className,
    children,
    disabled,
    type = 'button',
    ...props
}, ref) => {
    return (
        <button>
            x
        </button>
    )
});

Button.displayName = 'Button';


export default Button