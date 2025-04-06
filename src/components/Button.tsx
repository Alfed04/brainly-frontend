import { ReactElement } from "react";
interface ButtonProps {
    variant: "primary"|"secondary",
    text: string,
    startIcon: ReactElement,
    onClick?:()=> void
    // size: "sm"|"md"|"lg",
    // endIcon?: ReactElement,
}
const variantStyles: any = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600",
}
// const sizeStyles: any = {
//     'sm':"py-1 px-2 text-sm rounded -sm",
//     'md':"py-2 px-4 text-md rounded-md",
//     'lg':"py-4 px-8 text-xl rounded-xl",
// }

const defaultStyles: string = "px-4 py-2 rounded-md font-light flex items-center"

function Button({ variant , text , startIcon, onClick}:ButtonProps){
    return <button onClick={onClick} className={variantStyles[variant]+" "+defaultStyles}>
        <div className="pr-2">
            {startIcon}
        </div>
        {text}
    </button>
}
export default Button;