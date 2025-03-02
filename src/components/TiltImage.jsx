import { useEffect, useRef } from 'react';
import '../App.css';

const TiltImage = ({ src, alt, description, projectLink, codeLink }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const el = elementRef.current;
        if (!el) return;

        const height = el.clientHeight;
        const width = el.clientWidth;

        const handleMove = (e) => {
            const xVal = e.layerX;
            const yVal = e.layerY;

            const yRotation = 20 * ((xVal - width / 2) / width);
            const xRotation = -20 * ((yVal - height / 2) / height);

            const transform = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
            el.style.transform = transform;
        };

        const handleMouseOut = () => {
            el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
        };

        const handleMouseDown = () => {
            el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
        };

        const handleMouseUp = () => {
            el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
        };

        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseout', handleMouseOut);
        el.addEventListener('mousedown', handleMouseDown);
        el.addEventListener('mouseup', handleMouseUp);

        return () => {
            el.removeEventListener('mousemove', handleMove);
            el.removeEventListener('mouseout', handleMouseOut);
            el.removeEventListener('mousedown', handleMouseDown);
            el.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div className="work" ref={elementRef}>
            <img src={src} alt={alt} />
            <p>{description}</p>
            <div className="links">
                <a href={projectLink} target="_blank" rel="noopener noreferrer">View project</a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer">View code</a>
            </div>
        </div>
    );
};

export default TiltImage;