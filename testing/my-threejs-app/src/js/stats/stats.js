import Stats from 'stats.js'

export default class StatsManager {

    constructor() {
        this.stats = this.#initialize()
    }

    #initialize() {
        // initialize stats
        const stats = new Stats()
        stats.showPanel(0) // panel 0 is the fps counter
        document.body.appendChild(stats.dom)
        return stats
    };

    begin() {
        this.stats.begin()
    }

    end() {
        this.stats.end()
    }

}