import { FC, useCallback, useRef } from "react";
import './slide.scss'

interface ISlideProps {
    images: string,
    name: string,
    className: string,
}

export const Slide: FC<ISlideProps> = ({ images, name, className }) => {
    const slideRef = useRef<HTMLLIElement>(null);


    const handleMouseMove = useCallback((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const el = slideRef.current;
        if (!el) return;

        const r = el.getBoundingClientRect();

        el.style.setProperty('--x', `${event.clientX - (r.left + Math.floor(r.width / 2))}`);
        el.style.setProperty('--y', `${event.clientY - (r.top + Math.floor(r.height / 2))}`);
    }, []);

    const handleMouseLeave = useCallback(() => {
        const el = slideRef.current;
        if (!el) return;

        el.style.setProperty('--x', '0');
        el.style.setProperty('--y', '0');
    }, []);

    return (
        <article
            ref={slideRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >

            <div className='slide-container'>
                <div className="slide-content">
                    <img src={images} alt={name} className='person-img' />
                    <h4 className="title"></h4>
                    <p className='descr'></p>
                    <p className='text'></p>
                </div>

            </div>
        </article>
    );
}