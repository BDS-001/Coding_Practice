function knightMoves(start, finish) {
    const minCoordinate = 0
    const maxCoordinate = 7
    const knightMoves = [
        [2, 1],  // Move 2 squares up, 1 square right
        [2, -1], // Move 2 squares up, 1 square left
        [-2, 1], // Move 2 squares down, 1 square right
        [-2, -1],// Move 2 squares down, 1 square left
        [1, 2],  // Move 1 square up, 2 squares right
        [1, -2], // Move 1 square up, 2 squares left
        [-1, 2], // Move 1 square down, 2 squares right
        [-1, -2] // Move 1 square down, 2 squares left
    ];

    const isValid = function(path, newPosition) {
        //check if the new position goes outside of the board
        if (newPosition[0] > maxCoordinate) return false
        if (newPosition[0] < minCoordinate ) return false
        if (newPosition[1] > maxCoordinate) return false
        if (newPosition[1] < minCoordinate) return false

        //check if the postion ha already been visited in the path
        for (let i = 0; i < path.length; i++) {
            if(path[i][0] === newPosition[0] && path[i][1] === newPosition[1]) return false
        }
        return true
    }

    const outputPath = function(path) {
        console.log(`You made it in ${path.length - 1} move(s)!  Here's your path:`)
        for (let i = 0; i < path.length; i++) {
            console.log(path[i])
        }
    }

    //start the queue with the starting position
    const queue = [[start]]
    while (queue.length > 0) {
        //get the latest path in the queue, get the latest coordinate from the path 
        const currentPath = queue.shift()
        const currentPosition = currentPath[currentPath.length - 1]
        if (currentPosition[0] === finish[0] && currentPosition[1] === finish[1]){
            outputPath(currentPath)
            return currentPath
        };

        //add a new path for each possible position
        for (let i = 0; i < knightMoves.length; i++) {
            const newPosition = [currentPosition[0] + knightMoves[i][0], currentPosition[1] + knightMoves[i][1]]
            if (isValid(currentPath, newPosition)) {
                const newPath = Array.from(currentPath)
                newPath.push(newPosition)
                queue.push(newPath)
            }
        }
    }
}


knightMoves([0,0],[3,3])
knightMoves([0,0],[7,7])