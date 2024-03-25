function knightMoves(start, finish) {
    if (start[0] === finish[0] && start[1] === finish[1]) return start

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
    
    const path = function(current, goal, path=[]) {


    }
    return []
}


