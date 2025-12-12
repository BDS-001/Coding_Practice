export default function Game() {
    return (
        <div className="gameGrid">
            {[...Array(5)].map((_, key) => {
                return <div className="gameCard" key={key}></div>
            })}
        </div>
    )
}