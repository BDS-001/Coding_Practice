import { useState } from 'react';

export default function Game() {
    const colors = ['#FFB6C1', '#FFD1DC', '#FFDAB9', '#E0BBE4', '#D4A5A5', '#AEC6CF', '#B39EB5', '#C1E1C1', '#FDFD96', '#FFE4B5', '#F0E68C', '#DDA0DD', '#F5DEB3', '#E6E6FA', '#FFC8DD', '#BDB2FF'];

    const [tilts] = useState(() => [...Array(20)].map(() => {
        const tilt = Math.floor(Math.random() * 20 - 10)
        const peak = tilt > 0 ? 40 : -40
        const bgColor = colors[Math.floor(Math.random() * colors.length)]
        return {tilt, peak, bgColor}
    }));

    return (
        <div className="gameGrid">
            {tilts.map((card, key) => (
                <div className="gameCard" key={key} style={{ '--tilt': `${card.tilt}deg`, '--peak': `${card.peak}deg`, backgroundColor: card.bgColor }}></div>
            ))}
        </div>
    )
}