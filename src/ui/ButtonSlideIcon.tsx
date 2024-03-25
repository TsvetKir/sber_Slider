import { FC } from "react";


export const ButtonSlideIcon: FC = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
            <g fill="none" fillRule="evenodd" strokeLinecap="square"
                strokeWidth="2">
                <path d="M10.4 0.4L16.8 7.6" transform="translate(1 1)" />
                <path d="M10 8L16.4 15.2" transform="translate(1 1) matrix(-1 0 0 1 26.4 0)" />
                <path d="M0 7.6L16.247 7.6" transform="translate(1 1)" />
            </g>
        </svg>
    );
}