import { FC, ReactNode } from "react";
import './slideController.scss'

interface ISlideControllerProps {
    content: ReactNode | string,
    onClick: () => void
    className?: string,
    disabled?: boolean
}

export const SlideController: FC<ISlideControllerProps> = ({ onClick, className, content, disabled }) => {
    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {content}
        </button>
    );
}