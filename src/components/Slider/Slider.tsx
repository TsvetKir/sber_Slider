import { FC, useEffect, useState } from "react";
import { Slide } from "../Slide/Slide";
import { IPeople } from "../../data";
import { Controllers } from "../Controllers/Controllers";
import "./slider.scss"

interface ISliderProps {
    data: IPeople[]
}


export const Slider: FC<ISliderProps> = ({ data }) => {
    const [index, setIndex] = useState<number>(0);
    const [autoplay, setAutoplay] = useState<boolean>(false);

    useEffect(() => {
        const lastIndex: number = data.length - 1;
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, data])

    useEffect(() => {
        let slider: number
        if (autoplay) {
            slider = setInterval(() => {
                setIndex(index + 1)
            }, 3000)
        }

        return () => {
            clearInterval(slider)
        }

    }, [autoplay, index])


    return (
        <section className='section'>
            <div className='section-center'>
                {data.map(({ id, images, name}, personIndex) => {
                    let pos: string = 'Slide';
                    if (personIndex === index) {
                        pos = 'activeSlide';
                    }

                    if (personIndex === index - 1 || (index === 0 && personIndex === data.length - 1)) {
                        pos = 'prevSlide';
                    }

                    return (
                        <Slide
                            key={id}
                            images={images}
                            name={name}
                            className={pos}
                        />
                    )
                })}
            </div>
            <Controllers 
                index={index}
                setIndex={setIndex}
                setAutoplay={setAutoplay}
            />
        </section>
    )
}