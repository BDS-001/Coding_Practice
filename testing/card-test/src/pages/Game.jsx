import { useState } from 'react';

export default function Game() {
    const colors = ['#FFB6C1', '#FFD1DC', '#FFDAB9', '#E0BBE4', '#D4A5A5', '#AEC6CF', '#B39EB5', '#C1E1C1', '#FDFD96', '#FFE4B5', '#F0E68C', '#DDA0DD', '#F5DEB3', '#E6E6FA', '#FFC8DD', '#BDB2FF'];

    const animations = ['slideFromTop', 'slideFromBottom', 'slideFromLeft', 'slideFromRight'];

    const [cards] = useState(() => [...Array(20)].map((_, index) => {
        const tilt = Math.floor(Math.random() * 20 - 10)
        const bgColor = colors[Math.floor(Math.random() * colors.length)]
        const slideAnimation = animations[Math.floor(Math.random() * animations.length)]
        const animationDelay = index * 0.1
        return {tilt, bgColor, slideAnimation, animationDelay}
    }));

    return (
        <div className="gameGrid">
            {cards.map((card, key) => (
                <div className="gameCard" key={key} style={{ '--tilt': `${card.tilt}deg`, '--slide-animation': card.slideAnimation, '--animation-delay': `${card.animationDelay}s`, backgroundColor: card.bgColor }}></div>
            ))}
        </div>
    )
}