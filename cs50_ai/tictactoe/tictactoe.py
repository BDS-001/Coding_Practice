"""
Tic Tac Toe Player
"""

import math
import time
import copy

X = "X"
O = "O"
EMPTY = None


def initial_state():
    """
    Returns starting state of the board.
    """
    return [[EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY]]


def player(board):
    """
    Returns player who has the next turn on a board.
    """
    xCount = 0
    oCount = 0
    for row in board:
        for cell in row:
            if cell == X:
                xCount += 1
            if cell == O:
                oCount += 1
    if xCount == oCount:
        return X
    else:
        return O
    


def actions(board):
    """
    Returns set of all possible actions (i, j) available on the board.
    """
    moves = set()
    for i in range(3):
        for j in range(3):
            if board[i][j] == None:
                moves.add((i,j))
    return moves


def result(board, action):
    """
    Returns the board that results from making move (i, j) on the board.
    """
    if not action or action[0] > 2 or action[0] < 0 or action[1] > 2 or action[1] < 0:
        raise Exception("Invalid Action")
    
    play = copy.deepcopy(board)
    play[action[0]][action[1]] = player(play)
    return play


def winner(board):
    """
    Returns the winner of the game, if there is one.
    """
    #count rows
    for row in board:
        x = row.count("X")
        o = row.count("O")
        if x == 3:
            return X
        elif o == 3:
            return O
    
    #count columns
    for i in range(3):
        col = [board[0][i], board[1][i], board[2][i]]
        x = col.count("X")
        o = col.count("O")
        if x == 3:
            return X
        elif o == 3:
            return O

    #count diagnal
    diag1 = [board[0][0], board[1][1], board[2][2]]
    diag2 = [board[2][0], board[1][1], board[0][2]]
    x1 = diag1.count("X")
    o1 = diag1.count("O")
    x2 = diag2.count("X")
    o2 = diag2.count("O")
    if x1 == 3 or x2 == 3:
        return X
    elif o1 == 3 or o2 == 3:
        return O

    return None

def terminal(board):
    """
    Returns True if game is over, False otherwise.
    """
    if winner(board) or sum(x.count(None) for x in board) == 0:
        return True
    else:
        return False
        



def utility(board):
    """
    Returns 1 if X has won the game, -1 if O has won, 0 otherwise.
    """
    
    if winner(board) == X:
        return 1
    elif winner(board) == O:
        return -1
    else:
        return 0


def minimax(board):
    """
    Returns the optimal action for the current player on the board.
    """
    if terminal(board):
        return
    
    current = player(board)
    moves = [x for x in actions(board)]
    boards = [result(board, x) for x in moves]
    scores = [utility(b) for b in boards]

    if scores.count(0) == len(scores):
        for i in range(len(moves)):
            q = [boards[i]]
            while q:
                b = q.pop(0)
                score = utility(b)
                scores[i] += score
                tmp_moves = actions(b)
                for action in tmp_moves:
                    q.append(result(b, action))
    
    if current == X:
        res = max(scores)
    else:
        res = min(scores)
    return moves[scores.index(res)]
