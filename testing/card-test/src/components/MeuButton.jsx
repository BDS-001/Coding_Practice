export default function MenuButton({playButtonFunc}) {

    return (
        <>
        <button onClick={() => playButtonFunc(true)}>Play</button>
        </>
    )
}