import { useState } from 'react';

export default function Game() {
    const [tilts] = useState(() => [...Array(20)].map(() => {
        const tilt = Math.floor(Math.random() * 20 - 10)
        const peak = tilt > 0 ? 40 : -40
        return {tilt, peak}
    }));

    return (
        <div className="gameGrid">
            {tilts.map((card, key) => (
                <div className="gameCard" key={key} style={{ '--tilt': `${card.tilt}deg`, '--peak': `${card.peak}deg` }}></div>
            ))}
        </div>
    )
}