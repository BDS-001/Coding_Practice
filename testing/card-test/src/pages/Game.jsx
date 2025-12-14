import { useState } from 'react';

export default function Game() {
    const colors = ['#8B4513', '#A0522D', '#D2691E', '#CD853F', '#DEB887', '#6B4423', '#704214', '#964B00'];

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