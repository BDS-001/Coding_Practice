import { useState } from 'react';

export default function Game() {
    const [tilts] = useState(() => [...Array(5)].map(() => Math.random() * 20 - 10));

    return (
        <div className="gameGrid">
            {tilts.map((tilt, key) => (
                <div className="gameCard" key={key} style={{ '--tilt': `${tilt}deg` }}></div>
            ))}
        </div>
    )
}