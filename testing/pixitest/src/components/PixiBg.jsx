import { useEffect, useRef } from "react"
import {Application, Graphics, Assets, Sprite} from 'pixi.js';

async function setupBg() {
    const bg = new Application()
    await bg.init({ background: '#1a2332', resizeTo: window})

    const texture = await Assets.load('/bg.webp')
    const bgImage = new Sprite(texture)
    bgImage.width = window.innerWidth
    bgImage.height = window.innerHeight
    bg.stage.addChild(bgImage)

    const raindrops = []
    for (let i = 0; i < 50; i++) {
        const drop = new Graphics()
        drop.fill({ color: '#6b8b9e', alpha: 0.6 })
        drop.rect(0, 0, 1, 30)
        drop.fill()
        drop.x = Math.random() * window.innerWidth
        drop.y = Math.random() * window.innerHeight
        drop.speed = Math.random() * 16 + 10
        drop.angle = -15
        raindrops.push(drop)
        bg.stage.addChild(drop)
    }

    bg.ticker.add(() => {
        raindrops.forEach(drop => {
            drop.y += drop.speed
            drop.x += drop.speed * 0.15
            if (drop.y > window.innerHeight) {
                drop.y = -30
                drop.x = Math.random() * window.innerWidth
            }
        })
    })

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