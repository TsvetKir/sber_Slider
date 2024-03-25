import { FC, useState } from "react";
import { SlideController } from "../SlideController/SlideController";
import { ButtonPlayIcon } from "../../ui/ButtonPlayIcon";
import { ButtonStopIcon } from "../../ui/ButtonStopIcon";
import { ButtonSlideIcon } from "../../ui/ButtonSlideIcon";
import './controllers.scss'


interface IControllersProps {
    index: number,
    setIndex: (value: React.SetStateAction<number>) => void,
    setAutoplay: (value: React.SetStateAction<boolean>) => void
}


export const Controllers: FC<IControllersProps> = ({index, setIndex, setAutoplay}) => {
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    return (
        <div className="controllers">
                <SlideController
                    className='controller prev'
                    onClick={() => setIndex(index - 1)}
                    content={(<ButtonSlideIcon />)}
                />
                <SlideController
                    className='controller play'
                    onClick={() => {
                        setAutoplay(true);
                        setIsDisabled(!isDisabled);
                    }}
                    content={(<ButtonPlayIcon />)}
                    disabled={isDisabled}
                />
                <SlideController
                    className='controller stop'
                    onClick={() => {
                        setAutoplay(false);
                        setIsDisabled(!isDisabled);
                    }}
                    content={(<ButtonStopIcon />)}
                    disabled={!isDisabled}
                />
                <SlideController
                    className='controller'
                    onClick={() => setIndex(index + 1)}
                    content={(<ButtonSlideIcon />)}
                />
            </div>
    );
}