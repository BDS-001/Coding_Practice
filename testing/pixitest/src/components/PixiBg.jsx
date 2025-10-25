import { useEffect, useRef } from "react"
import {Application} from 'pixi.js';

async function setupBg() {
    const bg = new Application()
    await bg.init({ background: '#1099bb', resizeTo: window})

    return bg
}

export default function PixiBg() {
    const bgRef = useRef(null)
    const bgContainer = useRef(null)

    useEffect(() => {
        async function setup() {
            const bg = await setupBg()
            bgRef.current = bg
            bgContainer.current.appendChild(bg.canvas)
        }
        setup()
        return () => {if (bgRef.current) bgRef.current.destroy(true, {children: true})}
    })
    
    return (
    <div
      id="bg"
      ref={bgContainer} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: -1
      }} 
    />
    )
}